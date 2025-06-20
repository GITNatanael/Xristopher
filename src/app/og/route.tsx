//Archivo para generar miniatura (Open Graph image) que refleje dinámicamente el contenido del sitio al momento de compartir el link.
// src/app/og/route.tsx
import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "christopher miranda";
  const subtitle = searchParams.get("subtitle") || "Creativity in every frame.";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 60,
          padding: "50px",
        }}
      >
        <div className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mix-blend-difference tracking-tighter '>{title}</div>
        <div style={{ fontSize: 30, marginTop: 20 }}>{subtitle}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Content-Type': 'image/png',
      },
    }
  );
}
