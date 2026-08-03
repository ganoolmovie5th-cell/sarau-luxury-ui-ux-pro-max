'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Youtube } from 'lucide-react'
import { CONTACT, SOCIAL } from '@/lib/constants'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">Hubungi Kami</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">
            Mari <span className="gradient-text">Berdiskusi</span>
          </h1>
          <p className="text-bark/60 text-lg mt-4 max-w-2xl mx-auto">
            Konsultasi gratis untuk kebutuhan event perusahaan Anda. Tim kami siap membantu
            merencanakan event terbaik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo Sarau Luxury, saya ingin konsultasi event perusahaan`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-5 group hover:shadow-glass-lg transition-all duration-300 cursor-pointer block"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <MessageCircle size={24} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark text-lg">WhatsApp (Respon Cepat)</h3>
                <p className="text-bark/60 text-sm">{CONTACT.phone1}</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center">
                <Phone size={24} className="text-forest" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark">Telepon</h3>
                <p className="text-bark/60 text-sm">{CONTACT.phone1}</p>
                <p className="text-bark/60 text-sm">{CONTACT.phone2}</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center">
                <Mail size={24} className="text-forest" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark">Email</h3>
                <p className="text-bark/60 text-sm">{CONTACT.email}</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center">
                <MapPin size={24} className="text-forest" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark">Alamat Kantor</h3>
                <p className="text-bark/60 text-sm">{CONTACT.address}</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center">
                <Clock size={24} className="text-forest" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark">Jam Operasional</h3>
                <p className="text-bark/60 text-sm">{CONTACT.hours}</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Map + Social */}
          <div className="space-y-6">
            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card overflow-hidden h-72"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d106.5!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBinong+Permai+Curug+Banten!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Sarau Luxury"
              />
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-bold text-bark text-lg mb-4">Follow Kami</h3>
              <div className="flex gap-3">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center hover:bg-forest hover:text-white text-forest transition-all duration-300 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center hover:bg-forest hover:text-white text-forest transition-all duration-300 cursor-pointer"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center hover:bg-forest hover:text-white text-forest transition-all duration-300 cursor-pointer"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.3 0 .59.04.86.11V9.35a6.37 6.37 0 00-.86-.06A6.34 6.34 0 003.15 15.63 6.34 6.34 0 009.49 22a6.34 6.34 0 006.34-6.34V9.41a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.44z"/></svg>
                </a>
              </div>
            </motion.div>

            {/* Quick FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-bold text-bark text-lg mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-bark text-sm">Berapa lama waktu persiapan event?</h4>
                  <p className="text-bark/60 text-sm mt-1">Idealnya 2-4 minggu sebelum hari-H untuk koordinasi optimal.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-bark text-sm">Minimal berapa peserta?</h4>
                  <p className="text-bark/60 text-sm mt-1">Minimal 20 peserta untuk paket gathering. Outbound bisa mulai 10 orang.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-bark text-sm">Apakah bisa custom program?</h4>
                  <p className="text-bark/60 text-sm mt-1">Tentu! Semua program bisa disesuaikan dengan kebutuhan dan budget perusahaan.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
