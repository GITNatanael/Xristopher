//Archivo para generar miniatura (Open Graph image) que refleje dinámicamente el contenido del sitio al momento de compartir el link.
import { ImageResponse } from "next/og";

// Configura el tamaño recomendado por Open Graph
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Xristopher";
  const subtitle = searchParams.get("subtitle") || "Creativity in every frame.";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ fontSize: 30, marginTop: 20 }}>{subtitle}</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
