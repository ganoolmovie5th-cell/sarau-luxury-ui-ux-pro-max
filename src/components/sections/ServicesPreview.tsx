'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-cream-warm">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">Layanan Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mt-4">
            Solusi Event{' '}
            <span className="gradient-text">Lengkap</span>
          </h2>
          <p className="text-bark/60 text-lg mt-4 max-w-2xl mx-auto">
            Dari gathering hingga outbound training, kami siap mewujudkan event perusahaan
            yang berkesan dan bermakna.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-7 group hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-300">
                    <Icon size={24} className="text-forest group-hover:text-white transition-colors" />
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-bark mb-2">{service.title}</h3>
                <p className="text-bark/60 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-bark/5">
                  <span className="text-forest font-semibold text-sm">{service.price}</span>
                  <ArrowRight size={16} className="text-bark/30 group-hover:text-forest group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-outline">
            Lihat Semua Layanan
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
