'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Zap, Users, Star, ThumbsUp } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Terpercaya Sejak 2018',
    description: 'Pengalaman 8+ tahun melayani perusahaan dari berbagai industri di Indonesia.',
  },
  {
    icon: Users,
    title: '53+ Klien Korporat',
    description: 'Dipercaya perusahaan besar: BCA, Toyota, Kalbe Farma, Park Hyatt, dan lainnya.',
  },
  {
    icon: Zap,
    title: 'All-in-One Solution',
    description: 'Akomodasi, transportasi, aktivitas, konsumsi, dan dokumentasi dalam satu paket.',
  },
  {
    icon: Heart,
    title: 'Custom Sesuai Kebutuhan',
    description: 'Setiap event dirancang khusus sesuai karakter, budget, dan tujuan tim klien.',
  },
  {
    icon: Star,
    title: '5.0 Google Rating',
    description: 'Rating sempurna dari semua klien yang telah mempercayakan event mereka.',
  },
  {
    icon: ThumbsUp,
    title: 'Fasilitator Bersertifikat',
    description: 'Tim profesional dengan sertifikasi dan pengalaman di bidang experiential learning.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag mb-4 inline-flex">Mengapa Sarau Luxury</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mt-4 leading-tight">
              Partner Terpercaya untuk{' '}
              <span className="gradient-text">Event Perusahaan</span>
            </h2>
            <p className="text-bark/60 text-lg mt-6 leading-relaxed">
              Kami tidak hanya mengadakan event — kami menciptakan pengalaman yang memperkuat
              hubungan tim dan meninggalkan kesan mendalam bagi setiap peserta.
            </p>
          </motion.div>

          {/* Right — grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-5 group hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-forest transition-colors duration-300">
                  <item.icon size={18} className="text-forest group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-display font-bold text-bark text-sm mb-1">{item.title}</h4>
                <p className="text-bark/50 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
