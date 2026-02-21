import { config } from '../config/portfolio'

export default function Brands() {
  const brands = [...config.brands, ...config.brands] // duplicate for seamless loop

  return (
    <section className="py-10 border-y border-[#e5e5e0] bg-white/50">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-10 text-[15px] font-medium text-[#888] whitespace-nowrap hover:text-[#0d0d0d] transition-colors cursor-default"
            >
              <span className="text-[#b5f23d] font-bold text-lg">✦</span>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
