'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { SERVICES, CONTACT } from '@/lib/constants'

const serviceDetails: Record<string, string[]> = {
  gathering: ['Penginapan 2D1N', '3x Meal & 2x Coffee Break', 'Fun Game & Game Master', 'Dokumentasi profesional', 'Pilihan Rafting/Paintball (Gold & Platinum)'],
  outing: ['Pilihan destinasi lengkap (Jawa, Bali, Lombok)', 'Akomodasi & transportasi', 'Aktivitas: Rafting, ATV, Body Rafting', 'Pemandu profesional', 'Dokumentasi foto & video'],
  outbound: ['Fun Game (Rp 150.000/pax)', 'Team Building (Rp 175.000/pax)', 'Rafting 11km (Rp 250.000/pax)', 'Fasilitator bersertifikat', 'Durasi fleksibel'],
  teambuilding: ['Fun Game & Ice Breaking', 'Amazing Race & Games Kreatif', 'Game Master & Fasilitator', 'Perlengkapan game lengkap', 'Fleksibel indoor/outdoor'],
  family: ['Aktivitas ramah semua usia', 'BBQ & Kambing Guling', 'Lomba & Doorprize', 'Foto booth & dokumentasi', 'Catering halal tersertifikasi'],
  meeting: ['Halfday Meeting (4 jam) - Rp 225.000/pax', 'Fullday Meeting (8 jam) - Rp 300.000/pax', 'Meeting Room & AV Equipment', 'Lunch & Coffee Break', 'Dokumentasi profesional'],
  documentation: ['Fotografer profesional', 'Videografer sinematik', 'Drone aerial footage', 'Same-day editing highlight', 'Full album digital delivery'],
}

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">Layanan Kami</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">
            Layanan <span className="gradient-text">Profesional</span>
          </h1>
          <p className="text-bark/60 text-lg mt-4 max-w-2xl mx-auto">
            Solusi lengkap untuk setiap kebutuhan event perusahaan Anda, dari perencanaan hingga dokumentasi.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-12">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const features = serviceDetails[service.id] || []
            const isReversed = i % 2 !== 0

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-10 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}
              >
                {/* Visual */}
                <div className={`glass-card h-64 md:h-80 flex items-center justify-center relative overflow-hidden ${isReversed ? 'md:col-start-2' : ''}`}>
                  <div className="w-24 h-24 bg-forest/10 rounded-3xl flex items-center justify-center">
                    <Icon size={48} className="text-forest" />
                  </div>
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-bold">
                        {service.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={isReversed ? 'md:col-start-1' : ''}>
                  <h2 className="font-display text-3xl font-bold text-bark mb-3">{service.title}</h2>
                  <p className="text-bark/60 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-forest/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-forest" />
                        </div>
                        <span className="text-bark/70 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <span className="text-forest font-bold">{service.price}</span>
                    <a
                      href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo, saya tertarik dengan layanan ${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      Tanya Info
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
