import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { storage } from "../config"; // Asegúrate de que esta ruta es correcta
import { ref, listAll, getDownloadURL } from "firebase/storage";

const VISIBLE_SLIDE_INDEX = 2; // center index

type SlideData = {
  type: "image" | "video";
  src: string;
};


export default function TeaserIntro({ onFinish }: { onFinish?: () => void }) {
  const [slideWidth, setSlideWidth] = useState(300);
  const [slideHeight, setSlideHeight] = useState(200);
  const [gap, setGap] = useState(5);

  const [current, setCurrent] = useState(VISIBLE_SLIDE_INDEX);
  const [steps, setSteps] = useState(0);
  const [transition, setTransition] = useState(true);
  const [zoomed, setZoomed] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [zoomed2, setZoomed2] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalDuration = 4500;
  const [stepText, setStepText] = useState(0);
  const [slidesData, setSlidesData] = useState<SlideData[]>([]);

  // 🔁 Cargar imágenes y videos desde Firebase
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const folderRef = ref(storage, "projectFiles/");
        const response = await listAll(folderRef);

        const files: SlideData[] = await Promise.all(
          response.items.map(async (item) => {
            const url = await getDownloadURL(item);
            const ext = item.name.split(".").pop()?.toLowerCase();

            const type: "image" | "video" = ["mp4", "webm", "ogg"].includes(
              ext || ""
            )
              ? "video"
              : "image";

            return { type, src: url };
          })
        );

        // Evita duplicados por URL
        const unique = Array.from(
          new Map(files.map((f) => [f.src, f])).values()
        );

        // Mezcla aleatoria
        const shuffled = unique.sort(() => 0.5 - Math.random());

        // Selecciona 6 (3 antes, 3 después) sin contar el video fijo
        const selected = shuffled.slice(0, 6);

        // Inserta video fijo en la posición 3
        const withFixedVideo: SlideData[] = [
          ...selected.slice(0, 3),
          { type: "video", src: "/videos/Showreel2023.mp4" },
          ...selected.slice(3),
        ];

        setSlidesData(withFixedVideo);
      } catch (err) {
        console.error("Error fetching slides from Firebase", err);
      }
    };

    fetchSlides();
  }, []);

  const slides = useMemo(() => {
    if (slidesData.length === 0) return [];
    return [
      ...slidesData.slice(-2),
      ...slidesData,
      ...slidesData.slice(0, VISIBLE_SLIDE_INDEX),
    ];
  }, [slidesData]);

  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      if (w < 480) {
        setSlideWidth(180);
        setSlideHeight(120);
        setGap(3);
      } else if (w < 768) {
        setSlideWidth(240);
        setSlideHeight(160);
        setGap(4);
      } else {
        setSlideWidth(300);
        setSlideHeight(200);
        setGap(5);
      }
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransition(true);
      setCurrent(VISIBLE_SLIDE_INDEX);
    }, 100);

    const zoomTimeout = setTimeout(() => {
      setZoomed(true);
    }, 1100);

    const startAutoplayTimeout = setTimeout(() => {
      setAutoplay(true);
    }, 200);

    return () => {
      clearTimeout(timeout);
      clearTimeout(zoomTimeout);
      clearTimeout(startAutoplayTimeout);
    };
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    intervalRef.current = setInterval(() => {
      setTransition(true);
      setCurrent((prev) => prev + 1);
      setSteps((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [autoplay]);

  useEffect(() => {
    if (steps >= 3) {
      setAutoplay(false);

      const timer = setTimeout(() => {
        setZoomed2(true);
        if (onFinish) onFinish();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [steps, onFinish]);

  useEffect(() => {
    if (current === slides.length - VISIBLE_SLIDE_INDEX) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(VISIBLE_SLIDE_INDEX);
      }, 300);
    }
  }, [current, slides.length]);

  useEffect(() => {
    const stepDuration = totalDuration / 3;

    const timer1 = setTimeout(() => setStepText(1), 0);
    const timer2 = setTimeout(() => setStepText(2), stepDuration);
    const timer3 = setTimeout(() => setStepText(3), stepDuration * 2);
    const timerEnd = setTimeout(() => {
      setStepText(0);
      onFinish?.();
    }, totalDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerEnd);
    };
}, [onFinish]);

  const baseTextClasses =
    "text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center tracking-tighter";

  if (slides.length === 0) return null;

  return (
    <motion.div
      className="w-screen bg-black flex items-center justify-center overflow-hidden"
      style={{
        height: zoomed2 ? "70vh" : "100vh",
        transition: "height 0.8s ease-in-out",
      }}
    >
      <motion.div
        className="relative rounded origin-center"
        animate={{ scale: zoomed2 ? 6 : zoomed ? 3 : 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 11, delay: 0 }}
        style={{ width: slideWidth, height: slideHeight }}
      >
        <motion.div
          className="flex h-full"
          animate={{ x: -current * (slideWidth + gap) }}
          transition={
            transition
              ? { type: "spring", stiffness: 60, damping: 11 }
              : { duration: 0 }
          }
          style={{ width: slides.length * (slideWidth + gap) }}
        >
          {slides.map((slide, i) => (
            <div
              key={`slide-${i}-${slide.src}`}
              className="relative flex-shrink-0"
              style={{
                width: slideWidth,
                height: slideHeight,
                marginRight: i === slides.length - 1 ? 0 : gap,
              }}
            >
              {slide.type === "image" ? (
                <Image
                  src={slide.src}
                  alt={`Slide ${i}`}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={i < 5}
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover rounded-md"
                />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Texto animado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
        {stepText === 1 && (
          <motion.div
            key="text1"
            className={baseTextClasses}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            got a project?
          </motion.div>
        )}
        {stepText === 2 && (
          <motion.div
            key="text2"
            className={baseTextClasses}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            need art?
          </motion.div>
        )}
        {stepText === 3 && (
          <motion.div
            key="text3"
            className={baseTextClasses}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            let’s get started.
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
