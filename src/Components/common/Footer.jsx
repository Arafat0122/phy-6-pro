import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Github,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pt-12 pb-8 bg-neutral-900 text-neutral-100 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
   
          <div className="space-y-4">
            <a href="/" className="inline-block text-2xl font-semibold text-white">
              PHY-6 Pro
            </a>
            <p className="text-sm leading-relaxed text-neutral-300">
              Build something delightful. Clean UI, thoughtful UX, and interactions for students.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="hover:text-white text-neutral-400"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white text-neutral-400"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white text-neutral-400"><Github size={18} /></a>
              <a href="#" className="hover:text-white text-neutral-400"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:col-span-2 sm:grid-cols-3">
            <div>
              <h4 className="mb-3 text-sm font-medium text-neutral-200">Courses</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="/ssc" className="hover:text-white">SSC Physics</a></li>
                <li><a href="/hsc" className="hover:text-white">HSC Physics</a></li>
                <li><a href="/admission" className="hover:text-white">Admission Physics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-medium text-neutral-200">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-medium text-neutral-200">Resources</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/docs" className="hover:text-white">Docs</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-neutral-200">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:support@phy6pro.com" className="hover:text-white">support@phy6pro.com</a></li>
              <li className="flex items-center gap-2"><Phone size={16} /> <a href="tel:+8801XXXXXXXXX" className="hover:text-white">+8801XXXXXXXXX</a></li>
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-1" /> <span>Chittagong, Bangladesh</span></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-neutral-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row text-neutral-400">
          <div>© {year} PHY-6 Pro. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
