'use client'

import { motion } from 'framer-motion'
import { Users, MapPin, Calendar, Award } from 'lucide-react'
import { STATS } from '@/lib/constants'

const stats = [
  { icon: Users, value: `${STATS.totalClients}+`, label: 'Klien Korporat' },
  { icon: MapPin, value: `${STATS.totalDestinations}+`, label: 'Destinasi' },
  { icon: Calendar, value: `${STATS.totalEvents}+`, label: 'Event Sukses' },
  { icon: Award, value: `${STATS.yearsExperience}+`, label: 'Tahun Pengalaman' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-cream">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-forest/10 rounded-2xl flex items-center justify-center">
                <stat.icon size={22} className="text-forest" />
              </div>
              <p className="font-display text-3xl font-bold text-bark">{stat.value}</p>
              <p className="text-bark/60 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
