'use client'
import { useEffect, useRef } from 'react'
import { config } from '../config/portfolio'

export default function Process() {
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
    <section id="process" className="py-20 bg-white/60" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="animate-item anim-hidden section-label block">Our Process Explained</span>
          <h2 className="animate-item anim-hidden text-[42px] lg:text-[52px] font-bold text-[#0d0d0d] tracking-tight">
            Here's how it works
          </h2>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-[#b5f23d] via-[#b5f23d] to-[#b5f23d]">
            <div className="absolute top-1/2 left-[33%] w-3 h-3 bg-[#b5f23d] rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-[33%] w-3 h-3 bg-[#b5f23d] rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.process.map((step, i) => (
              <div
                key={i}
                className="animate-item anim-hidden card p-8 relative"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-16">
                  <span className="text-[40px] font-bold text-[#e5e5e0] leading-none">
                    {step.number}
                  </span>
                  {i === 1 && (
                    <div className="w-8 h-8 bg-[#b5f23d] rounded-full flex items-center justify-center text-[14px]">
                      ✦
                    </div>
                  )}
                </div>

                <h3 className="text-[24px] font-bold text-[#0d0d0d] mb-3">{step.title}</h3>
                <p className="text-[14px] text-[#666] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
