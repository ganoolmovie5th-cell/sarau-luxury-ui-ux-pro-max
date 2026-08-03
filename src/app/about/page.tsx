'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, Calendar } from 'lucide-react'
import { STATS } from '@/lib/constants'

const milestones = [
  { year: '2018', event: 'Sarau Luxury didirikan di Banten' },
  { year: '2019', event: 'Melayani 10+ klien korporat pertama' },
  { year: '2020', event: 'Adaptasi program virtual & hybrid events' },
  { year: '2021', event: 'Ekspansi destinasi ke Bali dan Bromo' },
  { year: '2022', event: '30+ klien aktif, rating Google 5.0' },
  { year: '2023', event: 'Melayani perusahaan multinasional' },
  { year: '2024', event: '53+ klien, 100+ event sukses' },
  { year: '2025', event: 'Inovasi program & destinasi baru' },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">Tentang Kami</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">
            Cerita <span className="gradient-text">Sarau Luxury</span>
          </h1>
          <p className="text-bark/60 text-lg mt-4 max-w-2xl mx-auto">
            Berawal dari passion menciptakan pengalaman bermakna, kini kami menjadi mitra
            terpercaya untuk event perusahaan di Indonesia.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center mb-5">
              <Eye size={24} className="text-forest" />
            </div>
            <h3 className="font-display text-2xl font-bold text-bark mb-3">Visi</h3>
            <p className="text-bark/60 leading-relaxed">
              Menjadi event organizer #1 di Indonesia yang menciptakan pengalaman luar biasa
              untuk setiap perusahaan, membangun tim yang lebih kuat melalui kebersamaan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-5">
              <Target size={24} className="text-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-bark mb-3">Misi</h3>
            <ul className="text-bark/60 leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <Heart size={14} className="text-forest mt-1 shrink-0" />
                Memberikan layanan event berkualitas premium dengan harga terjangkau
              </li>
              <li className="flex items-start gap-2">
                <Heart size={14} className="text-forest mt-1 shrink-0" />
                Membangun tim klien melalui program experiential learning
              </li>
              <li className="flex items-start gap-2">
                <Heart size={14} className="text-forest mt-1 shrink-0" />
                Terus berinovasi menghadirkan destinasi dan program terbaik
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-bark text-center mb-12">Perjalanan Kami</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-forest/20" />
            <div className="space-y-8">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-forest rounded-full -translate-x-1/2 border-4 border-cream z-10" />
                  <div className="ml-10 md:ml-0 md:w-1/2 glass-card p-5">
                    <span className="text-forest font-bold text-sm">{item.year}</span>
                    <p className="text-bark/70 text-sm mt-1">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: `${STATS.totalClients}+`, label: 'Klien Korporat' },
            { icon: Calendar, value: `${STATS.totalEvents}+`, label: 'Event Sukses' },
            { icon: Award, value: `${STATS.yearsExperience}+`, label: 'Tahun Pengalaman' },
            { icon: Target, value: `${STATS.totalIndustries}+`, label: 'Industri Berbeda' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon size={24} className="text-forest mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-bark">{stat.value}</p>
              <p className="text-bark/60 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
