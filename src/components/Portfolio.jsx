import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '../data/projects'
import SectionHeading from './SectionHeading'

function Thumbnail({ thumbnail, title, hoverGradient }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = thumbnail && !imgFailed

  return (
    <div className="aspect-video overflow-hidden relative">
      {showImage ? (
        <img
          src={thumbnail}
          alt={`Tampilan proyek ${title}`}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent ${hoverGradient} transition-all duration-500`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold tracking-widest uppercase text-xs text-white/20 group-hover:text-white/40 transition-colors">
              Preview
            </span>
          </div>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 overflow-hidden transition-all flex flex-col"
    >
      <Thumbnail
        thumbnail={project.thumbnail}
        title={project.title}
        hoverGradient={project.hoverGradient}
      />

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#FF2D9B] text-xs font-bold tracking-widest uppercase mb-2">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#3D9CFF] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-6 flex-1">{project.desc}</p>

        <div className="flex items-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF2D9B] to-[#8B3FFF] text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(255,45,155,0.4)] transition-all"
          >
            Kunjungi Website <ExternalLink size={13} aria-hidden="true" />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositori GitHub ${project.title}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-gray-300 text-xs font-semibold hover:border-white/30 hover:text-white transition-all"
            >
              <Github size={13} aria-hidden="true" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 relative z-10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          align="left"
          title="Portfolio Kami"
          subtitle="Proyek nyata yang kami bangun dengan perhatian penuh pada detail dan performa."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
