"use client"

import { useEffect, useRef } from "react"

interface GrainOverlayProps {
  intensity?: number // 0-100
  animated?: boolean
  glowIntensity?: number // 0-100
}

export function GrainOverlay({ intensity = 30, animated = true, glowIntensity = 20 }: GrainOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Efecto para dibujar y animar el grano
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar el canvas al tamaño de la ventana
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    // Función para dibujar el grano
    const drawGrain = () => {
      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar el grano
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      // Intensidad normalizada (0-1)
      const normalizedIntensity = intensity / 100

      for (let i = 0; i < data.length; i += 4) {
        // Generar un valor aleatorio para cada pixel
        const noise = Math.random() * 255

        // Aplicar el ruido con la intensidad deseada
        const noiseValue = noise * normalizedIntensity

        // Establecer los valores RGBA
        data[i] = noiseValue // R
        data[i + 1] = noiseValue // G
        data[i + 2] = noiseValue // B
        data[i + 3] = noiseValue // A (transparencia)
      }

      ctx.putImageData(imageData, 0, 0)
    }

    // Dibujar el grano inicialmente
    drawGrain()

    // Animar el grano si está habilitado
    let animationId: number
    if (animated) {
      const animate = () => {
        drawGrain()
        animationId = requestAnimationFrame(animate)
      }

      animationId = requestAnimationFrame(animate)
    }

    // Limpieza
    return () => {
      window.removeEventListener("resize", resize)
      if (animated && animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [intensity, animated])

  return (
    <>
      {/* Capa de grano */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
        style={{
          mixBlendMode: "overlay",
        }}
      />

      {/* Estilos globales para el glow */}
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6, p, span, div, a, button {
          text-shadow: 0 0 ${glowIntensity}px rgba(255, 255, 255, 0.7);
        }
        
        img, video {
          filter: contrast(1.05) brightness(1.05);
        }
        
        /* Clase para aplicar a elementos que quieras que tengan más grano */
        .grain-intense::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.3;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 10;
        }
      `}</style>
    </>
  )
}

