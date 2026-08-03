import { Tent, Mountain, Users, Heart, Presentation, Camera, PartyPopper } from 'lucide-react'

export const SITE_URL = 'https://www.sarau-luxury.com'

export const BRAND = {
  name: 'Sarau Luxury',
  tagline: 'Where Teams Grow Together',
}

export const STATS = {
  totalClients: 53,
  totalIndustries: 19,
  totalEvents: 100,
  totalDestinations: 20,
  yearsExperience: 8,
  foundedYear: 2018,
  googleRating: 5.0,
}

export const CONTACT = {
  phone1: '+62 857-1178-6561',
  phone1Wa: '6285711786561',
  phone2: '+62 858-1062-9838',
  phone2Wa: '6285810629838',
  email: 'sarauluxury@gmail.com',
  address: 'Binong Permai Blok R-10/14, Curug, Banten',
  addressMaps: 'https://maps.google.com/?q=Binong+Permai+Blok+R-10/14+Curug+Banten',
  hours: 'Senin - Sabtu, 08.00 - 20.00 WIB',
}

export const SOCIAL = {
  instagram: 'https://instagram.com/sarauluxury',
  tiktok: 'https://www.tiktok.com/@sarauluxury',
  facebook: 'https://www.facebook.com/share/1H86Hap6Y7/',
  youtube: 'https://www.youtube.com/@Sarauluxury',
}

export const SERVICES = [
  {
    id: 'gathering',
    icon: PartyPopper,
    title: 'Company Gathering',
    badge: 'Terlaris',
    description: 'Program gathering perusahaan lengkap dengan penginapan, makan, aktivitas seru, dan hiburan.',
    price: 'Mulai Rp 525.000/pax',
  },
  {
    id: 'outing',
    icon: Tent,
    title: 'Outing Perusahaan',
    badge: null,
    description: 'Wisata keluar kantor yang memadukan kesenangan, relaksasi, dan penguatan hubungan tim.',
    price: 'Custom pricing',
  },
  {
    id: 'outbound',
    icon: Mountain,
    title: 'Outbound Training',
    badge: 'Unggulan',
    description: 'Pelatihan berbasis alam terbuka untuk meningkatkan kepemimpinan dan teamwork.',
    price: 'Mulai Rp 150.000/pax',
  },
  {
    id: 'teambuilding',
    icon: Users,
    title: 'Team Building',
    badge: null,
    description: 'Aktivitas indoor dan outdoor kreatif untuk sinergi, komunikasi, dan kebersamaan tim.',
    price: 'Mulai Rp 125.000/pax',
  },
  {
    id: 'family',
    icon: Heart,
    title: 'Family Gathering',
    badge: null,
    description: 'Rayakan momen kebersamaan seluruh keluarga besar perusahaan dalam suasana meriah.',
    price: 'Custom pricing',
  },
  {
    id: 'meeting',
    icon: Presentation,
    title: 'Meeting Package',
    badge: null,
    description: 'Paket meeting profesional dengan fasilitas lengkap dan konsumsi.',
    price: 'Mulai Rp 225.000/pax',
  },
  {
    id: 'documentation',
    icon: Camera,
    title: 'Dokumentasi Event',
    badge: null,
    description: 'Layanan dokumentasi profesional dengan fotografer, videografer, dan drone.',
    price: 'Custom pricing',
  },
]

export const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80', title: 'Team Building Outdoor', category: 'Team Building' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', title: 'Company Gathering', category: 'Gathering' },
  { id: 3, src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80', title: 'Outbound Adventure', category: 'Outbound' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80', title: 'Corporate Event', category: 'Gathering' },
  { id: 5, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', title: 'Fun Games Bersama', category: 'Team Building' },
  { id: 6, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80', title: 'Rafting Seru', category: 'Outbound' },
  { id: 7, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', title: 'Gala Dinner', category: 'Gathering' },
  { id: 8, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', title: 'Workshop Kolaborasi', category: 'Team Building' },
  { id: 9, src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80', title: 'Camping Bersama', category: 'Outing' },
  { id: 10, src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80', title: 'Celebration Night', category: 'Gathering' },
  { id: 11, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80', title: 'Outdoor Challenge', category: 'Outbound' },
  { id: 12, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80', title: 'Meeting & Planning', category: 'Team Building' },
]
