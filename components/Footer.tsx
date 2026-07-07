'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Button from './ui/Button'


const Footer = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Artists', href: '/artists' },
    { label: 'Styles', href: '/styles' },
    { label: 'Aftercare', href: '/aftercare' },
    { label: 'Contact', href: '/contact' },
  ]

  const socials = [
    { icon: Phone, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Phone, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <footer className='relative bg-black px-6 pt-20 pb-8 sm:px-12 lg:px-20 overflow-hidden'>
      {/* subtle background texture / glow */}
      <div className='pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red-900/20 blur-[120px]' />

      <div className='relative flex flex-col gap-16'>
        {/* Top: Headline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 border-b border-white/10 pb-14'
        >
          <h3 className='text-3xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.05] max-w-2xl'>
            Your Story Deserves <span className='italic text-white/50'>Great Art</span>
          </h3>
          <Button size='md' className='bg-white text-black whitespace-nowrap shrink-0'>
            Book Appointment
          </Button>
        </motion.div>

        {/* Middle: Info grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand */}
          <div className='flex flex-col gap-4'>
            <span className='text-2xl font-bold text-white tracking-tight'>
              TattoStar
            </span>
            <p className='text-white/50 text-sm leading-relaxed max-w-xs'>
              A custom tattoo studio built on craftsmanship, patience, and permanence.
              Every piece is designed to be worn, not just inked.
            </p>
            <div className='flex gap-4 mt-2'>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-black hover:bg-white hover:border-white transition-all duration-300'
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-semibold tracking-widest uppercase'>Explore</h4>
            <ul className='flex flex-col gap-3'>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-white/50 text-sm hover:text-white transition-colors duration-300'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-semibold tracking-widest uppercase'>Studio</h4>
            <div className='flex flex-col gap-3 text-white/50 text-sm'>
              <div className='flex items-start gap-3'>
                <MapPin size={16} className='mt-0.5 shrink-0 text-white/30' />
                <span>12 Needle Street, Mysuru, Karnataka 570001</span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone size={16} className='shrink-0 text-white/30' />
                <a href='tel:+919999999999' className='hover:text-white transition-colors duration-300'>
                  +91 99999 99999
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Mail size={16} className='shrink-0 text-white/30' />
                <a href='mailto:studio@inkandbone.com' className='hover:text-white transition-colors duration-300'>
                  studio@inkandbone.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-semibold tracking-widest uppercase'>Hours</h4>
            <div className='flex flex-col gap-3 text-white/50 text-sm'>
              <div className='flex items-start gap-3'>
                <Clock size={16} className='mt-0.5 shrink-0 text-white/30' />
                <div className='flex flex-col gap-1'>
                  <span className='flex justify-between gap-4 w-full min-w-40'>
                    <span>Tue – Sat</span>
                    <span className='text-white/70'>11am – 8pm</span>
                  </span>
                  <span className='flex justify-between gap-4 w-full min-w-40'>
                    <span>Sun</span>
                    <span className='text-white/70'>12pm – 6pm</span>
                  </span>
                  <span className='flex justify-between gap-4 w-full min-w-40'>
                    <span>Mon</span>
                    <span className='text-white/70'>Closed</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8'>
          <p className='text-white/30 text-xs'>
            © {new Date().getFullYear()} Ink & Bone Tattoo Studio. All rights reserved.
          </p>
          <div className='flex gap-6 text-white/30 text-xs'>
            <Link href='/privacy' className='hover:text-white/60 transition-colors duration-300'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-white/60 transition-colors duration-300'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer