import { useEffect, useRef } from 'react'

/**
 * Hook that observes elements and adds 'is-visible' class when they enter viewport.
 * Replicates Framer's scroll-triggered animations.
 * 
 * @param {Object} options
 * @param {string} options.threshold - IntersectionObserver threshold (0-1)
 * @param {string} options.rootMargin - margin around root
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

/**
 * Hook that observes multiple children of a container and staggers their reveal.
 * Apply 'reveal-child' class to children you want to animate.
 */
export function useStaggerReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll('.reveal-child')
    if (!children.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            child.style.transitionDelay = `${(options.baseDelay ?? 0) + i * (options.stagger ?? 120)}ms`
            child.classList.add('is-visible')
          })
          observer.unobserve(container)
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [options.baseDelay, options.stagger, options.threshold, options.rootMargin])

  return ref
}
