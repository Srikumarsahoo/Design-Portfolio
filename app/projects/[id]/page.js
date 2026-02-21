'use client'
import { useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { config } from '../../../config/portfolio'
import {
  FiArrowLeft,
  FiClock,
  FiTool,
  FiUsers,
  FiArrowRight,
  FiExternalLink,
} from 'react-icons/fi'

export default function ProjectDetail() {
  const { id } = useParams()
  const router = useRouter()
  const project = config.projects.find((p) => p.id === parseInt(id))
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('anim-visible')
            e.target.classList.remove('anim-hidden')
          }
        }),
      { threshold: 0.08 }
    )
    sectionRef.current.querySelectorAll('.animate-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (!project || !project.overview) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold">Project not found</p>
        <Link href="/" className="btn-lime">← Back Home</Link>
      </div>
    )
  }

  const currentIndex = config.projects.findIndex((p) => p.id === parseInt(id))
  const nextProject = config.projects[(currentIndex + 1) % config.projects.length]

  return (
    <main className="min-h-screen bg-[#f5f5f0]" ref={sectionRef}>

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 nav-glass py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[14px] font-medium text-[#555] hover:text-[#0d0d0d] transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back
          </button>
          <Link href="/" className="text-[17px] font-semibold">{config.name}</Link>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-lime text-[13px] px-4 py-2">
            Live Project <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="pt-24 pb-0 hero-gradient">
        <div className="max-w-6xl mx-auto px-6">

          {/* Tags */}
          <div className="animate-item anim-hidden flex flex-wrap gap-2 mb-5 pt-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="animate-item anim-hidden text-[52px] lg:text-[72px] font-bold tracking-tight text-[#0d0d0d] leading-[1.05] mb-4" style={{ transitionDelay: '0.1s' }}>
            {project.title}
          </h1>
          <p className="animate-item anim-hidden text-[18px] text-[#555] max-w-2xl leading-relaxed mb-10" style={{ transitionDelay: '0.2s' }}>
            {project.description}
          </p>

          {/* Overview pills */}
          <div className="animate-item anim-hidden grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" style={{ transitionDelay: '0.3s' }}>
            {[
              { icon: FiUsers, label: 'Role', value: project.overview.role },
              { icon: FiClock, label: 'Timeline', value: project.overview.timeline },
              { icon: FiTool, label: 'Tools', value: project.overview.tools.join(', ') },
              { icon: FiUsers, label: 'Team', value: project.overview.team },
            ].map((item, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-white rounded-2xl p-4">
                <p className="text-[11px] text-[#888] uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-[13px] font-semibold text-[#0d0d0d] leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Cover image */}
          <div className="animate-item anim-hidden relative w-full aspect-[16/8] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#d4f76e]/40 to-[#b5f23d]/20" style={{ transitionDelay: '0.4s' }}>
            {project.coverImage && (
              <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority
                onError={(e) => { e.target.style.display = 'none' }} />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20">🖼️</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">

        {/* ── 1. PROBLEM ── */}
        <section>
          <SectionLabel number="01" title="The Problem" subtitle="Understanding the why" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div className="animate-item anim-hidden card p-8">
              <h3 className="text-[13px] uppercase tracking-widest text-[#888] mb-3">The Challenge</h3>
              <p className="text-[16px] text-[#333] leading-relaxed">{project.problem.challenge}</p>
            </div>
            <div className="space-y-5">
              <div className="animate-item anim-hidden card p-6">
                <h3 className="text-[13px] uppercase tracking-widest text-[#888] mb-3">Target Audience</h3>
                <p className="text-[15px] text-[#333]">{project.problem.audience}</p>
              </div>
              <div className="animate-item anim-hidden card p-6">
                <h3 className="text-[13px] uppercase tracking-widest text-[#888] mb-4">Project Goals</h3>
                <ul className="space-y-3">
                  {project.problem.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#333]">
                      <span className="w-5 h-5 bg-[#b5f23d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PROCESS ── */}
        <section>
          <SectionLabel number="02" title="The Process" subtitle="How we got there" />
          <div className="space-y-8 mt-10">
            {project.process.map((step, i) => (
              <div
                key={i}
                className={`animate-item anim-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Text */}
                <div className={`card p-8 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[32px] font-bold text-[#e5e5e0]">0{i + 1}</span>
                    <h3 className="text-[20px] font-bold text-[#0d0d0d]">{step.title}</h3>
                  </div>
                  <p className="text-[15px] text-[#555] leading-relaxed">{step.description}</p>
                </div>
                {/* Image */}
                <div className={`animate-item anim-hidden relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4f76e]/30 to-[#b5f23d]/10 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {step.image && (
                    <Image src={step.image} alt={step.title} fill className="object-cover"
                      onError={(e) => { e.target.style.display = 'none' }} />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 text-5xl">🎨</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. SOLUTION — Floating Image Gallery ── */}
        <section>
          <SectionLabel number="03" title="The Solution" subtitle="The final reveal" />
          <div className="mt-10">
            <div className="animate-item anim-hidden card p-8 mb-10">
              <p className="text-[17px] text-[#333] leading-relaxed max-w-3xl">{project.solution.description}</p>
              <ul className="flex flex-wrap gap-3 mt-6">
                {project.solution.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 bg-[#f0f8e0] border border-[#b5f23d]/30 rounded-full px-4 py-2 text-[13px] font-medium text-[#3a6b00]">
                    <span className="text-[#b5f23d]">✦</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating / Bento image gallery */}
            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[560px]">
              {/* Large left */}
              <div className="animate-item anim-hidden col-span-7 row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#c8f55a]/20 to-[#b5f23d]/10 shadow-xl group">
                {project.solution.images?.[0] && (
                  <Image src={project.solution.images[0]} alt="Solution 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none' }} />
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-7xl">🖼</div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-[12px] font-medium">
                  Final Design · Screen 01
                </div>
              </div>
              {/* Top right */}
              <div className="animate-item anim-hidden col-span-5 row-span-1 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#e0f0c0]/40 to-[#d4f76e]/20 shadow-lg group" style={{ transitionDelay: '0.1s' }}>
                {project.solution.images?.[1] && (
                  <Image src={project.solution.images[1]} alt="Solution 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none' }} />
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-5xl">🖼</div>
              </div>
              {/* Bottom right split */}
              <div className="animate-item anim-hidden col-span-3 row-span-1 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#f0f8e0]/60 to-[#c8f55a]/20 shadow-lg group" style={{ transitionDelay: '0.2s' }}>
                {project.solution.images?.[2] && (
                  <Image src={project.solution.images[2]} alt="Solution 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none' }} />
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-4xl">🖼</div>
              </div>
              <div className="animate-item anim-hidden col-span-2 row-span-1 relative rounded-3xl overflow-hidden bg-[#b5f23d]/30 shadow-lg flex items-center justify-center" style={{ transitionDelay: '0.3s' }}>
                {project.solution.images?.[3] && (
                  <Image src={project.solution.images[3]} alt="Solution 4" fill className="object-cover"
                    onError={(e) => { e.target.style.display = 'none' }} />
                )}
                <span className="text-[#3a6b00] font-bold text-[13px] text-center px-2">+More Screens</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. RESULTS ── */}
        <section>
          <SectionLabel number="04" title="Results & Impact" subtitle="Did it work?" />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            {project.results.metrics.map((m, i) => (
              <div
                key={i}
                className="animate-item anim-hidden card p-8 text-center hover:bg-[#b5f23d]/5 transition-colors"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="text-[52px] font-bold text-[#0d0d0d] leading-none mb-2">{m.value}</p>
                <p className="text-[14px] text-[#888]">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="animate-item anim-hidden card p-10 relative overflow-hidden">
            <div className="absolute top-4 right-6 text-[120px] leading-none text-[#b5f23d]/20 font-serif select-none">"</div>
            <p className="text-[20px] text-[#333] leading-relaxed italic max-w-3xl mb-6 relative z-10">{project.results.feedback}</p>
            <p className="text-[14px] font-semibold text-[#888]">{project.results.feedbackAuthor}</p>
          </div>

          {/* Deliverables */}
          <div className="animate-item anim-hidden mt-6 card p-8">
            <h3 className="text-[13px] uppercase tracking-widest text-[#888] mb-5">Deliverables</h3>
            <div className="flex flex-wrap gap-3">
              {project.results.deliverables.map((d, i) => (
                <span key={i} className="flex items-center gap-2 bg-[#f5f5f0] border border-[#e5e5e0] rounded-full px-4 py-2 text-[13px] font-medium text-[#444]">
                  <span className="text-[#b5f23d]">✦</span> {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. REFLECTION ── */}
        <section>
          <SectionLabel number="05" title="Reflection" subtitle="What I took away" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="animate-item anim-hidden card p-8 border-l-4 border-[#b5f23d]">
              <h3 className="text-[16px] font-bold text-[#0d0d0d] mb-4">💡 What I Learned</h3>
              <p className="text-[15px] text-[#555] leading-relaxed">{project.reflection.learned}</p>
            </div>
            <div className="animate-item anim-hidden card p-8 border-l-4 border-[#e5e5e0]">
              <h3 className="text-[16px] font-bold text-[#0d0d0d] mb-4">🔄 What I'd Do Differently</h3>
              <p className="text-[15px] text-[#555] leading-relaxed">{project.reflection.doingDifferently}</p>
            </div>
          </div>
        </section>

        {/* ── NEXT PROJECT ── */}
        <section className="border-t border-[#e5e5e0] pt-16">
          <p className="text-[13px] text-[#888] uppercase tracking-widest mb-4">Next Project</p>
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex items-center justify-between card p-8 hover:bg-[#b5f23d]/5 transition-all"
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {nextProject.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
              </div>
              <h3 className="text-[32px] font-bold text-[#0d0d0d]">{nextProject.title}</h3>
              <p className="text-[14px] text-[#888] mt-1">{nextProject.description}</p>
            </div>
            <div className="w-12 h-12 bg-[#b5f23d] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ml-6">
              <FiArrowRight className="w-5 h-5 text-[#0d0d0d]" />
            </div>
          </Link>
        </section>

      </div>
    </main>
  )
}

function SectionLabel({ number, title, subtitle }) {
  return (
    <div className="animate-item anim-hidden flex items-end gap-5 mb-2">
      <span className="text-[64px] font-bold text-[#e5e5e0] leading-none">{number}</span>
      <div>
        <p className="text-[12px] text-[#888] uppercase tracking-widest">{subtitle}</p>
        <h2 className="text-[36px] font-bold text-[#0d0d0d] leading-tight">{title}</h2>
      </div>
    </div>
  )
}