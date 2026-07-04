import { Store, HeartHandshake, BadgeCheck, PartyPopper, GraduationCap } from 'lucide-react'

/**
 * Segmen target klien. Tambah/ubah segmen atau itemnya cukup dari file ini.
 */
export const TARGET_CLIENTS = [
  {
    segment: 'Bisnis Kecil',
    icon: Store,
    gradient: 'from-[#FF2D9B] to-[#8B3FFF]',
    items: [
      'UMKM',
      'Bisnis Lokal',
      'Kafe & Restoran',
      'Salon Kecantikan',
      'Klinik',
      'Agen Properti',
    ],
  },
  {
    segment: 'Organisasi',
    icon: HeartHandshake,
    gradient: 'from-[#8B3FFF] to-[#3D9CFF]',
    items: ['Gereja', 'Yayasan', 'NGO', 'Organisasi Sosial', 'Lembaga Non-Profit'],
  },
  {
    segment: 'Profesional',
    icon: BadgeCheck,
    gradient: 'from-[#3D9CFF] to-[#8B3FFF]',
    items: ['Konsultan', 'Pengacara', 'Arsitek', 'Coach', 'Freelancer'],
  },
  {
    segment: 'Acara',
    icon: PartyPopper,
    gradient: 'from-[#FF2D9B] to-[#3D9CFF]',
    items: ['Undangan Pernikahan', 'Acara Keluarga', 'Acara Perusahaan'],
  },
  {
    segment: 'Pendidikan',
    icon: GraduationCap,
    gradient: 'from-[#8B3FFF] to-[#FF2D9B]',
    items: ['Sekolah', 'Kursus', 'Pusat Pelatihan'],
  },
]
