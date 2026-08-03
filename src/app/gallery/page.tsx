'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { GALLERY_IMAGES } from '@/lib/constants'

const categories = ['Semua', 'Team Building', 'Gathering', 'Outbound', 'Outing']

export default function GalleryPage() {
  const [active, setActive] = useState('Semua')
  const [lightbox, setLightbox] = useState<typeof GALLERY_IMAGES[0] | null>(null)

  const filtered = active === 'Semua' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === active)

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">Galeri</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">
            Momen <span className="gradient-text">Berkesan</span>
          </h1>
          <p className="text-bark/60 text-lg mt-4 max-w-xl mx-auto">
            Setiap foto menyimpan cerita kebersamaan yang tak terlupakan bersama klien Sarau Luxury.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                active === cat
                  ? 'bg-forest text-white shadow-forest'
                  : 'bg-white border border-bark/10 text-bark/70 hover:border-forest/40 hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setLightbox(img)}
                className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer relative h-52 md:h-64 bg-bark/5"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/40 transition-colors duration-300" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold text-forest-muted">{img.category}</span>
                  <span className="font-display font-semibold text-white text-sm">{img.title}</span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={14} className="text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bark/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bark/90 to-transparent p-6">
                <span className="text-xs font-semibold text-forest-muted">{lightbox.category}</span>
                <p className="font-display font-bold text-white text-lg">{lightbox.title}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
