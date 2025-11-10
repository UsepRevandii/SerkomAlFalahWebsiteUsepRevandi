// ====================
// FOOTER COMPONENT
// ====================
// This is the footer that appears at the bottom of every page
// It contains: School info, quick links, contact details, and social media links

// Import icons from lucide-react
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

// Import Link component for internal navigation
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // Footer container with primary color background
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        
        {/* Main footer content - 4 columns on desktop, stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ==================
              COLUMN 1: ABOUT 
              ================== */}
          {/* School name and description */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">SMK Al-Falah Tanjungjaya</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Sekolah Menengah Kejuruan yang berkomitmen mencetak lulusan berkualitas, 
              berakhlak mulia, dan siap kerja.
            </p>
          </div>

          {/* ==================
              COLUMN 2: QUICK LINKS
              ================== */}
          {/* Links to main pages of the website */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/info" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Info Sekolah
                </Link>
              </li>
              <li>
                <Link 
                  to="/jurusan" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Jurusan
                </Link>
              </li>
              <li>
                <Link 
                  to="/berita" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link 
                  to="/pendaftaran" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Pendaftaran
                </Link>
              </li>
            </ul>
          </div>

          {/* ==================
              COLUMN 3: CONTACT INFO
              ================== */}
          {/* Address, phone, and email */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              {/* Address with map pin icon */}
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Jl. Raya Tanjungjaya No. 123, Kabupaten Tasikmalaya, Jawa Barat
                </span>
              </li>
              
              {/* Phone number with phone icon */}
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">(0265) 123-4567</span>
              </li>
              
              {/* Email with mail icon */}
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@smkalfalah.sch.id</span>
              </li>
            </ul>
          </div>

          {/* ==================
              COLUMN 4: SOCIAL MEDIA
              ================== */}
          {/* Links to social media profiles */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Media Sosial</h3>
            <div className="flex gap-3">
              {/* Instagram button */}
              <a
                href="https://instagram.com"
                target="_blank"  // Opens in new tab
                rel="noopener noreferrer"  // Security best practice
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              {/* Facebook button */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
              {/* YouTube button */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ==================
            COPYRIGHT SECTION
            ================== */}
        {/* Copyright text at bottom */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} SMK Al-Falah Tanjungjaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
