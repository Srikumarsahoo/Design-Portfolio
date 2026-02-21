'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { config } from '../config/portfolio'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible')
            entry.target.classList.remove('anim-hidden')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = heroRef.current?.querySelectorAll('.animate-item')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={heroRef}
      className="hero-gradient min-h-screen pt-28 pb-0 relative overflow-hidden"
    >
      {/* Award badge */}
      <div className="animate-item anim-hidden max-w-6xl mx-auto px-6 flex items-center gap-2 mb-6" style={{ transitionDelay: '0.1s' }}>
        
      </div>

      {/* Main hero content */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
        <div className="relative z-10 pb-16">
          {/* Availability badge */}
          {config.availability && (
            <div
              className="animate-item anim-hidden inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white px-4 py-2 rounded-full text-[13px] font-medium mb-8 shadow-sm"
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="pulse-dot" />
              {config.availabilityText}
            </div>
          )}

          {/* Headline */}
          <div className="animate-item anim-hidden" style={{ transitionDelay: '0.3s' }}>
            <h1 className="text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-tight text-[#0d0d0d] mb-2">
              Hi I'm {config.name.split(' ')[0]}
            </h1>
            <h1 className="headline-serif text-[52px] lg:text-[68px] leading-[1.05] text-[#0d0d0d] mb-6">
              {config.role}
            </h1>
          </div>

          {/* Tagline */}
          <p
            className="animate-item anim-hidden text-[16px] text-[#555] max-w-[340px] leading-relaxed mb-10"
            style={{ transitionDelay: '0.4s' }}
          >
            {config.tagline}
          </p>

          {/* CTA Button */}
          <div className="animate-item anim-hidden flex items-center gap-4" style={{ transitionDelay: '0.5s' }}>
            <a href={`mailto:${config.email}`} className="btn-dark text-[15px]">
              → Get In Touch
            </a>
            <a href="#work" className="text-[14px] text-[#555] hover:text-[#0d0d0d] transition-colors font-medium">
              View Work ↓
            </a>
          </div>

          {/* Stats */}
          <div className="animate-item anim-hidden flex items-center gap-3 mt-10" style={{ transitionDelay: '0.6s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-lime-300 to-green-400 overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#b5f23d] to-[#22c55e] opacity-60" />
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#555] max-w-[140px] leading-snug">
              Trusted by over{' '}
              <span className="font-semibold text-[#0d0d0d]">{config.stats.clients}</span>{' '}
              {config.stats.clientsLabel} {config.stats.description}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="animate-item anim-hidden relative flex justify-center lg:justify-end" style={{ transitionDelay: '0.35s' }}>
          <div className="relative w-[320px] lg:w-[400px]">
            {/* Green glow blob behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#b5f23d]/40 rounded-full blur-3xl" />

            <div className="relative w-full aspect-[3/4] rounded-[28px] overflow-hidden bg-gradient-to-b from-[#c8f55a]/20 to-[#b5f23d]/10">
              {config.heroImage ? (
                <Image
                  src={config.heroImage}
                  alt={config.name}
                  fill
                  className="object-cover object-top"
                  priority
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-3">👤</div>
                    <p className="text-sm text-[#555]">Add your photo</p>
                    <p className="text-xs text-[#888]">/public/images/hero.png</p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating card */}
            <div className="absolute -left-10 top-1/3 bg-white rounded-2xl shadow-xl border border-[#f0f0ea] px-4 py-3 text-sm font-medium hidden lg:block">
              <div className="flex items-center gap-2">
                <span className="text-xl">✦</span>
                <div>
                  <p className="text-[11px] text-[#888] font-normal">Currently</p>
                  <p className="text-[13px] font-semibold">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side description — desktop */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 max-w-[200px] text-right">
        <p className="text-[13px] text-[#555] leading-relaxed">
          passionate about creating intuitive digital experiences that connect users with value.
        </p>
      </div>
    </section>
  )
}
