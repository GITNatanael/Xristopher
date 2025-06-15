"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion, type MotionProps, type Variants } from "framer-motion"
import type React from "react"
import { type ElementType, type ReactNode, Children, isValidElement } from "react"

type AnimationType = "text" | "word" | "character" | "line"
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"

interface TextAnimateProps extends MotionProps {
  /**
   * The content to animate (can include JSX elements)
   */
  children: ReactNode
  /**
   * The class name to be applied to the component
   */
  className?: string
  /**
   * The class name to be applied to each segment
   */
  segmentClassName?: string
  /**
   * The delay before the animation starts
   */
  delay?: number
  /**
   * The duration of the animation
   */
  duration?: number
  /**
   * Custom motion variants for the animation
   */
  variants?: Variants
  /**
   * The element type to render
   */
  as?: ElementType
  /**
   * How to split the text ("text", "word", "character")
   */
  by?: AnimationType
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean
  /**
   * Whether to animate only once
   */
  once?: boolean
  /**
   * The animation preset to use
   */
  animation?: AnimationVariant
  /**
   * Whether to process JSX elements or treat everything as a single unit
   */
  processJsx?: boolean
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
}

const animationVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        y: { duration: 0.3 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
      transition: {
        y: { duration: 0.3 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        y: { duration: 0.3 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      y: -20,
      transition: {
        y: { duration: 0.3 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  scaleUp: {
    hidden: { scale: 0.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 300,
        },
      },
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  scaleDown: {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 300,
        },
      },
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
}

// Función para procesar los children y separar texto de elementos JSX
function processChildren(children: ReactNode, by: AnimationType): ReactNode[] {
  const result: ReactNode[] = []

  // Función recursiva para procesar cada nodo
  const processNode = (node: ReactNode) => {
    // Si es un elemento JSX válido, lo añadimos directamente
    if (isValidElement(node)) {
      result.push(node)
      return
    }

    // Si es un string, lo dividimos según la configuración
    if (typeof node === "string") {
      let segments: string[] = []

      switch (by) {
        case "word":
          segments = node.split(/(\s+)/)
          break
        case "character":
          segments = node.split("")
          break
        case "line":
          segments = node.split("\n")
          break
        case "text":
        default:
          segments = [node]
          break
      }

      // Añadimos cada segmento al resultado
      segments.forEach((segment) => {
        if (segment) result.push(segment)
      })

      return
    }

    // Si es un array o un objeto iterable, procesamos cada elemento
    if (node && typeof node === "object" && Symbol.iterator in node) {
      Children.forEach(node as Iterable<ReactNode>, (child) => {
        processNode(child)
      })
      return
    }

    // Para cualquier otro tipo, lo añadimos directamente
    if (node !== undefined && node !== null) {
      result.push(String(node))
    }
  }

  processNode(children)
  return result
}

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "div",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  processJsx = true,
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion(Component as React.ComponentType<React.HTMLAttributes<HTMLElement>>)

  // Si processJsx es false, tratamos todo como un solo elemento
  if (!processJsx) {
    const finalVariants = variants || animationVariants[animation]

    return (
      <AnimatePresence mode="wait">
        <MotionComponent
          variants={finalVariants}
          initial="hidden"
          whileInView={startOnView ? "show" : undefined}
          animate={startOnView ? undefined : "show"}
          exit="exit"
          className={className}
          viewport={{ once }}
          {...props}
        >
          {children}
        </MotionComponent>
      </AnimatePresence>
    )
  }

  // Procesamos los children para separar texto y elementos JSX
  const processedChildren = processChildren(children, by)

  // Configuramos las variantes para el contenedor
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: duration / Math.max(processedChildren.length, 1),
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: duration / Math.max(processedChildren.length, 1),
        staggerDirection: -1,
      },
    },
  }

  // Usamos las variantes de animación para los elementos individuales
  const itemVariants = variants || animationVariants[animation]

  return (
    <AnimatePresence mode="wait">
      <MotionComponent
        variants={containerVariants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        {...props}
      >
        {processedChildren.map((item, i) => {
          // Si es un elemento JSX, lo envolvemos en motion.div
          if (isValidElement(item)) {
            return (
              <motion.div
                key={`jsx-${i}`}
                variants={itemVariants}
                custom={i * staggerTimings[by]}
                className={cn("inline-block", segmentClassName)}
              >
                {item}
              </motion.div>
            )
          }

          // Si es texto, lo envolvemos en motion.span
          return (
            <motion.span
              key={`${by}-${item}-${i}`}
              variants={itemVariants}
              custom={i * staggerTimings[by]}
              className={cn(
                by === "line" ? "block" : "inline-block whitespace-pre",
                by === "character" && "",
                segmentClassName,
              )}
            >
              {item}
            </motion.span>
          )
        })}
      </MotionComponent>
    </AnimatePresence>
  )
}

