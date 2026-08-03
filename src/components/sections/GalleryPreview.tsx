'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GALLERY_IMAGES } from '@/lib/constants'

export default function GalleryPreview() {
  const images = GALLERY_IMAGES.slice(0, 6)

  return (
    <section className="py-24 bg-cream-warm">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">Galeri</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mt-4">
            Momen <span className="gradient-text">Berkesan</span>
          </h2>
          <p className="text-bark/60 text-lg mt-4 max-w-xl mx-auto">
            Dokumentasi nyata dari event-event yang telah kami gelar bersama klien.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 || i === 5 ? 'row-span-2 h-80 md:h-full' : 'h-40 md:h-52'
              }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-xs text-forest-muted font-semibold">{img.category}</span>
                <p className="text-white font-display font-semibold text-sm">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/gallery" className="btn-outline">
            Lihat Semua Galeri
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
