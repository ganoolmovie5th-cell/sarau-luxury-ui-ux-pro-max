import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from 'lucide-react'
import { BRAND, CONTACT, SOCIAL, SERVICES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-bark text-white/80">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-white text-lg">{BRAND.name}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {BRAND.tagline}. Event organizer profesional untuk outing, outbound, team building, dan company gathering sejak 2018.
            </p>
            <div className="flex gap-3">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forest transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forest transition-colors cursor-pointer" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="text-white/60 hover:text-forest-muted text-sm transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/about', label: 'Tentang Kami' },
                { href: '/gallery', label: 'Galeri' },
                { href: '/contact', label: 'Hubungi Kami' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-forest-muted text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-forest-muted mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-forest-muted shrink-0" />
                <span className="text-white/60 text-sm">{CONTACT.phone1}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-forest-muted shrink-0" />
                <span className="text-white/60 text-sm">{CONTACT.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-forest-muted shrink-0" />
                <span className="text-white/60 text-sm">{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Trusted by 53+ companies across Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
