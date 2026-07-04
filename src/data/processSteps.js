import { MessagesSquare, PenTool, Code2, SearchCheck, Rocket } from 'lucide-react'

/**
 * Langkah-langkah proses kerja. Ubah alur kerja cukup dari file ini.
 */
export const PROCESS_STEPS = [
  {
    number: '01',
    icon: MessagesSquare,
    title: 'Konsultasi',
    desc: 'Kami diskusikan tujuan, kebutuhan bisnis, dan requirement proyek Anda.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Perencanaan & Desain',
    desc: 'Kami siapkan struktur, UI/UX, dan konsep visual website Anda.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Pengembangan',
    desc: 'Kami bangun website yang cepat, responsif, dan teroptimasi.',
  },
  {
    number: '04',
    icon: SearchCheck,
    title: 'Review',
    desc: 'Anda review hasilnya dan ajukan revisi jika diperlukan.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Peluncuran',
    desc: 'Kami deploy website Anda dan pastikan semuanya berjalan sempurna.',
  },
]
