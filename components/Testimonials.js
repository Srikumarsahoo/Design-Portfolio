'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { config } from '../config/portfolio'

export default function Testimonials() {
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
    <section id="testimonials" className="py-20 max-w-6xl mx-auto px-6" ref={sectionRef}>
      <div className="text-center mb-12">
        <span className="animate-item anim-hidden section-label block">What Clients Say</span>
        <h2 className="animate-item anim-hidden text-[42px] font-bold text-[#0d0d0d] tracking-tight">
          Kind words from clients
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.testimonials.map((t, i) => (
          <div
            key={i}
            className="animate-item anim-hidden card p-8"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Quote mark */}
            <div className="text-[64px] leading-none text-[#b5f23d] font-serif mb-4 -mt-2">"</div>

            <p className="text-[15px] text-[#444] leading-relaxed mb-8">{t.quote}</p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#b5f23d] to-[#22c55e] flex-shrink-0">
                {t.avatar && (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                )}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#0d0d0d]">{t.name}</p>
                <p className="text-[12px] text-[#888]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
