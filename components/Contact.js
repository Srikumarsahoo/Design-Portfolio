'use client'
import { useEffect, useRef, useState } from 'react'
import { config } from '../config/portfolio'
import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiMail,
} from 'react-icons/fi'
import { FaBehance, FaDribbble } from 'react-icons/fa'

const socialIconMap = {
  linkedin: { icon: FiLinkedin, label: 'LinkedIn' },
  github: { icon: FiGithub, label: 'GitHub' },
  twitter: { icon: FiTwitter, label: 'Twitter / X' },
  behance: { icon: FaBehance, label: 'Behance' },
  dribbble: { icon: FaDribbble, label: 'Dribbble' },
}

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.open(`mailto:${config.email}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-6" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left info */}
        <div className="animate-item anim-hidden">
          <span className="section-label">Let's Work Together</span>
          <h2 className="text-[42px] lg:text-[52px] font-bold text-[#0d0d0d] tracking-tight mb-6 leading-tight">
            Got a project in mind?
          </h2>
          <p className="text-[15px] text-[#666] leading-relaxed mb-8 max-w-[360px]">
            I'm currently available for freelance and full-time opportunities. Let's build something great together.
          </p>

          {/* Email row — fixed hover: only background changes, icon + text stay visible */}
          <a
            href={`mailto:${config.email}`}
            className="group inline-flex items-center gap-3 text-[14px] font-medium text-[#0d0d0d] transition-colors"
          >
            <span className="w-10 h-10 bg-[#f0f0ea] rounded-full flex items-center justify-center transition-colors group-hover:bg-[#b5f23d]">
              <FiMail className="w-4 h-4 text-[#0d0d0d]" />
            </span>
            <span className="group-hover:text-[#555] transition-colors">{config.email}</span>
          </a>

          {/* Social icons */}
          <div className="flex flex-wrap gap-3 mt-8">
            {Object.entries(config.social).map(([platform, url]) => {
              const entry = socialIconMap[platform]
              if (!entry) return null
              const Icon = entry.icon
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={entry.label}
                  className="w-11 h-11 bg-white border border-[#e5e5e0] rounded-full flex items-center justify-center text-[#555] hover:bg-[#b5f23d] hover:border-[#b5f23d] hover:text-[#0d0d0d] transition-all"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Right — form */}
        <div className="animate-item anim-hidden">
          <form onSubmit={handleSubmit} className="card p-8 space-y-5">
            <div>
              <label className="text-[13px] font-medium text-[#555] block mb-2">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-[#f5f5f0] border border-[#e5e5e0] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#b5f23d] focus:ring-2 focus:ring-[#b5f23d]/30 transition-all"
              />
            </div>
            <div>
              <label className="text-[13px] font-medium text-[#555] block mb-2">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-[#f5f5f0] border border-[#e5e5e0] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#b5f23d] focus:ring-2 focus:ring-[#b5f23d]/30 transition-all"
              />
            </div>
            <div>
              <label className="text-[13px] font-medium text-[#555] block mb-2">Your Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-[#f5f5f0] border border-[#e5e5e0] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#b5f23d] focus:ring-2 focus:ring-[#b5f23d]/30 transition-all resize-none"
              />
            </div>
            <button type="submit" className="btn-lime w-full justify-center">
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
