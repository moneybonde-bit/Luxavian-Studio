import { useState } from 'react'
import { SITE } from '../config/site'

/**
 * Logo perusahaan: menampilkan gambar dari public/logos/luxavian-logo.png.
 * Jika file logo belum diunggah, otomatis fallback ke wordmark teks
 * sehingga tidak pernah muncul ikon gambar rusak.
 */
export default function Logo({ withText = true }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <a href="#" className="flex items-center gap-3" aria-label={`${SITE.fullName} — Beranda`}>
      {!imgFailed && (
        <img
          src={SITE.logo}
          alt={`Logo ${SITE.fullName}`}
          width="40"
          height="40"
          loading="eager"
          onError={() => setImgFailed(true)}
          className="h-9 w-9 md:h-10 md:w-10 object-contain flex-shrink-0"
        />
      )}
      {(withText || imgFailed) && (
        <span className="leading-tight">
          <span className="block text-lg md:text-xl font-black tracking-tighter text-white">
            {SITE.name.toUpperCase()}
            <span className="text-[#FF2D9B]">.</span>
          </span>
          <span className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400">
            {SITE.tagline}
          </span>
        </span>
      )}
    </a>
  )
}
