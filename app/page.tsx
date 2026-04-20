'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import {
  Calendar, MapPin, Clock, Scissors, Award, Star, CheckCircle,
  Phone, Instagram, Facebook, Twitter, Check, ChevronRight, Menu, X, Shield, Sparkles, Smile, Droplets, ArrowRight, MessageCircle, MapIcon
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Team />
      <Pricing />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Barbers', href: '#team' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Scissors className="w-8 h-8 text-amber-500 group-hover:rotate-180 transition-transform duration-700" />
          <span className="font-serif text-2xl font-bold tracking-wider uppercase text-white">The Iron Edge</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest text-zinc-400 hover:text-amber-500 transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <a href="#book" className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold tracking-wider uppercase transition-colors rounded-none border border-amber-500/50">
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest text-zinc-300 hover:text-amber-500 font-medium">
                  {link.name}
                </a>
              ))}
              <a href="#book" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-6 py-4 bg-amber-600 text-white font-semibold tracking-wider uppercase">
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <Image
          src="https://picsum.photos/seed/barbershop2/1920/1080?blur=1"
          alt="Premium Barbershop Interior"
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-amber-500"></span>
            <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">Premium Grooming</span>
            <span className="w-12 h-[1px] bg-amber-500"></span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Look Sharp.<br className="hidden md:block" /> Feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Confident.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Premium haircuts and grooming services delivered by experienced barbers who care about your appearance and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="#book" className="group relative px-8 py-4 bg-amber-600 text-white font-bold uppercase tracking-widest text-sm overflow-hidden flex items-center gap-3 w-full sm:w-auto justify-center">
              <span className="relative z-10">Book Appointment</span>
              <Calendar className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 h-full w-full bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-transparent text-white font-bold uppercase tracking-widest text-sm border border-zinc-700 hover:border-white transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-zinc-400 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Est. 2012</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Award Winning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const SECTION_TITLE_CLASS = "font-serif text-4xl md:text-5xl font-bold text-white mb-6";
const SECTION_SUBTITLE_CLASS = "text-amber-500 uppercase tracking-[0.2em] text-sm font-bold mb-4 block";
const SECTION_DESC_CLASS = "text-zinc-400 max-w-2xl text-lg mb-16";

function Services() {
  const services = [
    { title: "Classic Haircut", desc: "Precision cut tailored to your head shape and personal style.", time: "45 Min", price: "$45" },
    { title: "Skin Fade", desc: "Flawless fade blending seamlessly into your desired length.", time: "60 Min", price: "$50" },
    { title: "Hot Towel Shave", desc: "Traditional straight razor shave with essential oils and hot towels.", time: "45 Min", price: "$40" },
    { title: "Beard Sculpting", desc: "Detailed trim, shape, and line-up to keep your beard looking sharp.", time: "30 Min", price: "$30" },
    { title: "The Executive", desc: "Complete package: Haircut, beard sculpt, and hot towel relaxation.", time: "90 Min", price: "$85" },
    { title: "Hair Styling", desc: "Wash, blow-dry, and professional styling with premium products.", time: "30 Min", price: "$25" },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className={SECTION_SUBTITLE_CLASS}>Our Expertise</span>
          <h2 className={SECTION_TITLE_CLASS}>Premium Services</h2>
          <p className={SECTION_DESC_CLASS}>Experience the height of grooming standards. Our master barbers combine classic techniques with modern styling to deliver unmatched results.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-[50px] group-hover:bg-amber-500/10 transition-all"></div>
              
              <div className="flex justify-between items-start mb-6 align-top">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-500 transition-colors w-2/3">{service.title}</h3>
                <div className="text-right">
                  <span className="block text-xl font-bold text-white">{service.price}</span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500">{service.time}</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              
              <a href="#book" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-500 hover:text-white transition-colors">
                Book Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { icon: <Award className="w-8 h-8" />, title: "Master Barbers", desc: "Our team consists of highly trained professionals with years of industry experience." },
    { icon: <Shield className="w-8 h-8" />, title: "Hygiene First", desc: "We maintain the highest standards of cleanliness. Fresh tools and towels for every single client." },
    { icon: <Sparkles className="w-8 h-8" />, title: "Premium Products", desc: "We use only top-tier grooming products to ensure your hair and skin receive the best care." },
    { icon: <Smile className="w-8 h-8" />, title: "Atmosphere", desc: "A relaxing, comfortable environment where you can unwind, have a drink, and enjoy the experience." },
  ];

  return (
    <section className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
               <Image 
                  src="https://picsum.photos/seed/barberchair3/800/1000" 
                  alt="Barbershop Details" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-600 p-8 flex flex-col justify-center border-4 border-black">
                  <span className="font-serif text-5xl font-bold text-white mb-2">12+</span>
                  <span className="text-xs uppercase tracking-widest text-black font-bold">Years of<br/> Excellence</span>
               </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className={SECTION_SUBTITLE_CLASS}>The Standard</span>
            <h2 className={SECTION_TITLE_CLASS}>Why Choose Us?</h2>
            <p className={SECTION_DESC_CLASS}>We don&apos;t just cut hair; we craft your image. Every detail in our shop is designed to provide you with a superior grooming experience.</p>
            
            <div className="space-y-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-none flex items-center justify-center text-amber-500">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{feat.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "https://picsum.photos/seed/fade1/800/800", alt: "Skin Fade" },
    { src: "https://picsum.photos/seed/beard2/800/1000", alt: "Beard Trim", isHero: true },
    { src: "https://picsum.photos/seed/style3/800/800", alt: "Hair Styling" },
    { src: "https://picsum.photos/seed/towel4/800/800", alt: "Hot Towel Shave" },
    { src: "https://picsum.photos/seed/cut5/800/800", alt: "Classic Cut" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center flex flex-col items-center mb-16">
          <span className={SECTION_SUBTITLE_CLASS}>The Craft</span>
          <h2 className={SECTION_TITLE_CLASS}>Our Work</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Real results. Sharp lines, perfect fades, and impeccable styling.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px] grid-flow-dense">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group overflow-hidden bg-zinc-900 ${img.isHero ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold tracking-wider uppercase text-sm border-l-2 border-amber-500 pl-3">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "James Carter", text: "Best haircut I've ever had. True professionals who take their time. You can tell they actually care about the result.", rating: 5 },
    { name: "Robert Fox", text: "The hot towel shave is an absolute game-changer. Relaxing atmosphere and top-tier service every single time.", rating: 5 },
    { name: "Michael Chen", text: "Found my regular spot. The precision on the fade is unmatched in the city. Highly recommended.", rating: 5 },
  ];

  return (
    <section className="py-24 md:py-32 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className={SECTION_SUBTITLE_CLASS}>Client Feedback</span>
          <h2 className={SECTION_TITLE_CLASS}>Don&apos;t Just Take Our Word</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-zinc-950 border border-zinc-800 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-zinc-300 italic mb-8 relative z-10 font-serif text-lg leading-relaxed">
                &quot;{rev.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-amber-500 font-bold font-serif text-xl uppercase">
                  {rev.name.charAt(0)}
                </div>
                <h5 className="text-white font-bold tracking-wider uppercase text-sm">{rev.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const barbers = [
    { name: "Marcus", role: "Master Barber", exp: "15 Years", spec: "Classic Cuts & Shaves", img: "https://picsum.photos/seed/barberx1/600/800" },
    { name: "Julian", role: "Senior Barber", exp: "8 Years", spec: "Skin Fades & Styling", img: "https://picsum.photos/seed/barberx2/600/800" },
    { name: "David", role: "Beard Specialist", exp: "10 Years", spec: "Beard Sculpting", img: "https://picsum.photos/seed/barberx3/600/800" },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className={SECTION_SUBTITLE_CLASS}>The Masters</span>
            <h2 className={SECTION_TITLE_CLASS}>Meet The Team</h2>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            href="#book" className="hidden md:flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors"
          >
            Book Your Barber <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {barbers.map((barber, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-zinc-900 border border-zinc-800">
                <Image 
                  src={barber.img}
                  alt={barber.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{barber.name}</h3>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{barber.role}</p>
                  <p className="text-zinc-400 text-sm">{barber.spec}</p>
                </div>
                <div className="text-right border-l border-zinc-800 pl-4">
                  <span className="block text-2xl font-serif text-white">{barber.exp.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase text-zinc-500 tracking-wider">Years</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const prices = [
    { title: "Standard Haircut", price: "$45", popular: false },
    { title: "Skin Fade", price: "$50", popular: true },
    { title: "Haircut & Beard Trim", price: "$65", popular: true },
    { title: "Hot Towel Shave", price: "$40", popular: false },
    { title: "Kids Cut (Under 12)", price: "$30", popular: false },
    { title: "The Executive Package", price: "$85", popular: false },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture1/1920/1080?grayscale')] opacity-5 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className={SECTION_SUBTITLE_CLASS}>Clear & Simple</span>
          <h2 className={SECTION_TITLE_CLASS}>Pricing Menu</h2>
        </motion.div>

        <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-amber-500"></div>
          
          <div className="flex flex-col space-y-6">
            {prices.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center group cursor-default relative"
              >
                {item.popular && (
                  <span className="absolute -left-6 md:-left-10 text-amber-500 group-hover:scale-125 transition-transform">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-amber-500" />
                  </span>
                )}
                <h4 className="text-lg md:text-xl font-serif text-white group-hover:text-amber-500 transition-colors whitespace-nowrap bg-zinc-950 pr-4 z-10">{item.title}</h4>
                <div className="flex-grow border-b border-dotted border-zinc-700 relative -top-1 mx-2 transition-colors group-hover:border-amber-500/30"></div>
                <span className="text-xl md:text-2xl font-bold text-white whitespace-nowrap bg-zinc-950 pl-4 z-10">{item.price}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm mb-6 italic">* Additional services and premium products available upon request.</p>
            <a href="#book" className="inline-block px-10 py-3 bg-amber-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-amber-500 transition-colors">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className={SECTION_SUBTITLE_CLASS}>Visit Us</span>
          <h2 className={SECTION_TITLE_CLASS}>Conveniently Located.</h2>
          <p className={SECTION_DESC_CLASS}>Located in the heart of the city with easy parking access. Drop by for a walk-in or book ahead to secure your spot.</p>

          <div className="space-y-8 mb-10">
            <div className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Address</h4>
                <p className="text-zinc-400">123 Premium Ave, Grooming District<br/>New York, NY 10001</p>
                <p className="text-xs text-amber-500 uppercase tracking-widest mt-2 font-bold">Free Parking Available</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Clock className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Hours</h4>
                <ul className="text-zinc-400 space-y-1">
                  <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>9 AM - 8 PM</span></li>
                  <li className="flex justify-between w-48"><span>Saturday:</span> <span>9 AM - 6 PM</span></li>
                  <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors">
            Get Directions <MapIcon className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square md:aspect-[4/3] w-full bg-zinc-900 border border-zinc-800 p-2">
           {/* Map Placeholder */}
           <div className="w-full h-full relative overflow-hidden bg-zinc-800">
             <Image 
                src="https://picsum.photos/seed/mapimg/800/600?grayscale" 
                alt="Location Map" 
                fill 
                className="object-cover opacity-60 mix-blend-multiply" 
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(217,119,6,0.5)] border-4 border-black">
                   <MapPin className="w-8 h-8 text-white" />
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="relative py-32 overflow-hidden bg-black border-y border-zinc-900">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/endbg/1920/800?blur=4" 
          alt="Barber Background" 
          fill 
          className="object-cover opacity-20" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">Ready to Look Sharp?</h2>
          <p className="text-zinc-400 text-xl font-light mb-12 max-w-2xl mx-auto">Appointments fill up fast. Secure your spot today and experience the gold standard of men&apos;s grooming.</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-amber-600 text-white font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors shadow-[0_0_30px_rgba(217,119,6,0.3)]">
              Book Your Appointment
            </button>
            <a href="tel:+1234567890" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-zinc-700 text-white font-bold uppercase tracking-widest hover:border-white transition-colors flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500 uppercase tracking-widest font-bold">Or Walk In During Operating Hours</p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Scissors className="w-6 h-6 text-amber-500" />
              <span className="font-serif text-2xl font-bold tracking-wider uppercase text-white">The Iron Edge</span>
            </a>
            <p className="text-zinc-400 max-w-sm mb-8">Premium grooming for the modern gentleman. Classic techniques, perfect precision, and an atmosphere built for relaxation.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-amber-600 transition-colors text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-amber-600 transition-colors text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-amber-600 transition-colors text-white"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-zinc-400 hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-zinc-400 hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#team" className="text-zinc-400 hover:text-amber-500 transition-colors">Our Barbers</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-amber-500 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-500" /> (555) 123-4567</li>
              <li className="flex items-center gap-3"><MessageCircle className="w-4 h-4 text-amber-500" /> WhatsApp Available</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-amber-500" /> 123 Premium Ave, NY</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} The Iron Edge Barbershop. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
