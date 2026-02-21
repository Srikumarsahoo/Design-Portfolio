import { config } from '../config/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#e5e5e0] py-8 bg-white/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[14px] font-semibold text-[#0d0d0d]">{config.name}</p>
        <p className="text-[12px] text-[#888]">
          © {year} {config.name}. Crafted with ♥ and lots of green tea.
        </p>
        <div className="flex gap-4">
          {Object.entries(config.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#888] hover:text-[#0d0d0d] transition-colors capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
