import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return undefined

    const move = (event) => setPosition({ x: event.clientX, y: event.clientY })
    const enter = (event) => {
      if (event.target.closest('a, button, [data-cursor]')) setActive(true)
    }
    const leave = () => setActive(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
    }
  }, [])

  return <span className={`custom-cursor ${active ? 'custom-cursor--active' : ''}`} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} aria-hidden="true" />
}
