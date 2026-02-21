import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demosOpen, setDemosOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#features' },
    { name: 'Quienes somos', href: '#parallax' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#newsletter' },
  ];

  const demoItems = [
    { name: 'Consultorio Dental', href: '#' },
    { name: 'Nutriologo', href: '#' },
    { name: 'Gimnasio', href: '#' },
    { name: 'Fisioterapeuta', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        <Link
          href='/'
          className='text-2xl font-bold font-display tracking-widest flex items-center gap-2'
        >
          <span className='text-primary text-3xl'>CREACI&OACUTE;N</span>
          <span className='opacity-70 text-slate-900'>LABS</span>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-8 items-center'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-sm uppercase tracking-widest font-semibold text-slate-600 hover:text-primary transition-colors hover:text-glow'
            >
              {link.name}
            </a>
          ))}

          {/* Demos Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setDemosOpen(!demosOpen)}
              onMouseEnter={() => setDemosOpen(true)}
              className='flex items-center gap-1 text-sm uppercase tracking-widest font-semibold text-slate-600 hover:text-primary transition-colors'
            >
              Sitios Demo{' '}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${demosOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {demosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setDemosOpen(false)}
                  className='absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden'
                >
                  {demoItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors'
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href='#newsletter'
            className='px-6 py-2 border border-primary text-primary font-display font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300'
          >
            Agenda una llamada
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-slate-900'
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-200 p-6 flex flex-col gap-4 overflow-hidden shadow-xl'
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className='text-lg font-display uppercase text-slate-600 hover:text-primary'
              >
                {link.name}
              </a>
            ))}
            <div className='border-t border-slate-100 pt-4'>
              <p className='text-xs uppercase tracking-widest text-slate-400 mb-2'>
                Demos
              </p>
              <div className='grid grid-cols-2 gap-2'>
                {demoItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className='text-sm uppercase text-slate-600 hover:text-primary'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
