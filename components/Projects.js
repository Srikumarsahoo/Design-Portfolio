'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { config } from '../config/portfolio'
import Link from 'next/link'

export default function Projects() {
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
      { threshold: 0.05 }
    )
    sectionRef.current
      ?.querySelectorAll('.animate-item')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="py-20 bg-white/60" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="animate-item anim-hidden section-label block">Best Projects</span>
          <h2 className="animate-item anim-hidden text-[42px] lg:text-[52px] font-bold text-[#0d0d0d] tracking-tight">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {config.projects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="animate-item anim-hidden project-card card group cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#f0f8e0] to-[#e0f0c0]">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <div className="text-4xl">🖼️</div>
                    <p className="text-sm text-[#888]">Add project image</p>
                    <p className="text-xs text-[#aaa]">/public/images/projects/project-{i + 1}.png</p>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="overlay absolute inset-0 bg-[#0d0d0d]/60 flex items-center justify-center">
                  <span className="btn-lime text-sm">View Project →</span>
                </div>
              </div>

              {/* Project info */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                <h3 className="text-[18px] font-bold text-[#0d0d0d] mb-1">{project.title}</h3>
                <p className="text-[13px] text-[#666] leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <button className="btn-lime">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  )
}
