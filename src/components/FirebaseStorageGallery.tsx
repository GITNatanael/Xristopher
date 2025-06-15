"use client";

import { useState, useEffect, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import { storage } from "../config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Image from "next/image";


interface FileItem {
  id: string;
  url: string;
  type: "image" | "video";
}

export function FirebaseStorageGallery() {
  const [fileList, setFileList] = useState<FileItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<FileItem | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY * 25;
        e.preventDefault();
      }
    };

    const delayToAttach = setTimeout(() => {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }, 500);

    return () => {
      clearTimeout(delayToAttach);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [fileList.length]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const fileListRef = ref(storage, "projectFiles/");
        const response = await listAll(fileListRef);
        const files = await Promise.all(
          response.items.map(async (item): Promise<FileItem> => {
            const url = await getDownloadURL(item);
            const fileExtension = item.name.split(".").pop()?.toLowerCase();
            const isVideo = ["mp4", "webm", "ogg"].includes(fileExtension || "");

            return {
              id: item.name,
              url,
              type: isVideo ? "video" : "image",
            };
          })
        );

        const unique = Array.from(new Map(files.map((f) => [f.id, f])).values());
        setFileList(unique);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching files:", err);
        setError("Error al cargar los archivos.");
        setIsLoading(false);
      }
    };

    fetchFiles();
  }, []);

  useEffect(() => {
    const container = gridRef.current;
    if (!container || selected) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY * 25;
        e.preventDefault();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [selected]);

  const transitions = useTransition(fileList.slice().reverse(), {
    keys: (item) => item.id,
    from: { opacity: 0, transform: "translateY(20px) scale(0.9)" },
    enter: { opacity: 1, transform: "translateY(0px) scale(1)" },
    leave: { opacity: 0, transform: "translateY(-20px) scale(0.9)" },
    trail: 50,
  });

  if (isLoading)
    return <div className="flex justify-center items-center h-52 text-lg text-gray-500">Cargando...</div>;
  if (error)
    return <div className="flex justify-center items-center h-52 text-lg text-red-600">{error}</div>;

  return (
    <>
      <div
        ref={gridRef}
          className="flex overflow-x-scroll overflow-y-hidden w-full h-auto whitespace-nowrap p-2.5 scroll-smooth scrollbar-thin scrollbar-thumb-neutral-500/30 scrollbar-track-transparent"
>
   
        <div
          className="grid grid-flow-col [grid-template-rows:repeat(6,_100px)] [grid-auto-columns:100px] gap-2.5"
        >
          {transitions((style, file) => (
            <a.div
              key={file.id}
              style={style}
              className={`bg-gray-100 rounded-[10px] overflow-hidden aspect-square relative cursor-pointer transition-transform duration-300 ease-in-out hover:[&_img]:scale-[1.5] hover:[&_video]:scale-[1.5]` +
                (file.type === "video" ? " col-span-2 row-span-2" : "")}
              onClick={() => setSelected(file)}
            >
              {file.type === "image" ? (
                <Image
                  src={file.url}
                  alt="Preview"
                  width={300}
                  height={300}
                  unoptimized
                  className="w-full h-full object-cover transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] origin-center"
                />
              ) : (
                <video
                  src={file.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] origin-center"
                />
              )}
            </a.div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/85 flex justify-center items-center z-[9999] cursor-zoom-out p-[env(safe-area-inset)]"
        >
          <div className="absolute top-4 right-5 text-white text-4xl font-bold z-[10000] opacity-60 pointer-events-none select-none">
            &times;
          </div>
          {selected.type === "image" ? (
            <Image
              src={selected.url}
              alt="Fullscreen"
              fill
              unoptimized
              className="max-w-full max-h-full object-contain rounded-md p-5 "
            />
          ) : (
            <video
              src={selected.url}
              autoPlay
              controls
              className="max-w-full max-h-full object-contain rounded-md p-5"
            />
          )}
        </div>
      )}
    </>
  );
}
