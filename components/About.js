'use client'
import { useEffect, useRef } from 'react'
import { config } from '../config/portfolio'

const dotColors = {
  orange: '#f97316',
  blue: '#3b82f6',
  purple: '#a855f7',
  green: '#22c55e',
  pink: '#ec4899',
  teal: '#14b8a6',
}

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('anim-visible')
            e.target.classList.remove('anim-hidden')
          }
        }),
      { threshold: 0.1 }
    )
    sectionRef.current
      ?.querySelectorAll('.animate-item')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 max-w-6xl mx-auto px-6" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — skills grid */}
        <div className="animate-item anim-hidden grid grid-cols-2 gap-3">
          {config.about.skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-[#e5e5e0] rounded-2xl px-4 py-3 hover:shadow-md transition-shadow"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: dotColors[skill.color] || '#b5f23d' }}
              />
              <span className="text-[13px] font-medium text-[#0d0d0d]">{skill.label}</span>
            </div>
          ))}
        </div>

        {/* Right — text */}
        <div className="animate-item anim-hidden">
          <span className="section-label">Hallo!</span>
          <p className="text-[26px] lg:text-[32px] font-medium leading-snug text-[#0d0d0d] mb-2">
            {config.about.headline}{' '}
            <span className="font-bold underline decoration-[#b5f23d] decoration-4 underline-offset-4">
              {config.about.highlight}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
