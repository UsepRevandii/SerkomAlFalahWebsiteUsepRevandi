// ====================
// NAVIGATION COMPONENT
// ====================
// This is the top navigation bar that appears on every page
// It includes: Logo, menu links, and registration button
// On mobile: Shows a hamburger menu that opens a dropdown

// Import React Router components for navigation
import { Link, useLocation } from "react-router-dom";

// Import icons for mobile menu toggle
import { Menu, X } from "lucide-react";

// Import React hook for managing state
import { useState } from "react";

// Import button component
import { Button } from "@/components/ui/button";

const Navigation = () => {
  // ==================
  // STATE MANAGEMENT
  // ==================
  // Track whether mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Get current page location (to highlight active link)
  const location = useLocation();

  // ==================
  // NAVIGATION DATA
  // ==================
  // Array of all navigation menu items
  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/info", label: "Info Sekolah" },
    { path: "/jurusan", label: "Jurusan" },
    { path: "/ekstrakurikuler", label: "Ekstrakurikuler" },
    { path: "/berita", label: "Berita" },
    { path: "/galeri", label: "Galeri" },
  ];

  // ==================
  // HELPER FUNCTIONS
  // ==================
  // Check if a link is the currently active page
  const isActive = (path: string) => location.pathname === path;

  return (
    // Navigation bar - fixed at top of screen
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* ==================
                LOGO SECTION
              ================== */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo menggunakan URL */}
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl transition-transform duration-300 group-hover:scale-105">
              <img
                src="https://raw.githubusercontent.com/UsepRevandii/images/main/logo.png"
                alt="Logo SMK Al-Falah"
                className="w-10 h-10 object-contain drop-shadow-sm"
              />
            </div>

            {/* Nama sekolah (hanya tampil di layar besar) */}
            <div className="hidden md:block">
              {/* TEXT "SMK AL-FALAH" - PUTIH DENGAN SHADOW */}
              <div 
                className="font-bold text-lg text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                SMK AL-FALAH
              </div>
              
              {/* TEXT "Tanjungjaya" - PUTIH DENGAN SHADOW */}
              <div 
                className="text-xs text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]"
              >
                Tanjungjaya
              </div>
            </div>
          </Link>

          {/* ==================
              DESKTOP NAVIGATION
              ================== */}
          {/* Navigation links in a pill-shaped container (visible on large screens only) */}
          <div className="hidden lg:flex items-center gap-2 bg-secondary/50 rounded-full px-2 py-2">
            {/* Loop through each navigation link */}
            {navLinks.map((link) => {
              // Determine styling based on whether this link is active
              const linkStyles = isActive(link.path)
                ? "bg-primary text-primary-foreground shadow-md" // Active page style
                : "text-foreground/80 hover:text-foreground hover:bg-background/50"; // Inactive page style

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${linkStyles}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ==================
              REGISTRATION BUTTON
              ================== */}
          {/* "Register Now" button (visible on large screens only) */}
          <div className="hidden lg:block">
            <Link to="/pendaftaran">
              <Button className="rounded-full px-6">Daftar Sekarang</Button>
            </Link>
          </div>

          {/* ==================
              MOBILE MENU TOGGLE
              ================== */}
          {/* Hamburger/X button for mobile menu (visible on small screens only) */}
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle menu open/closed
            className="lg:hidden p-2 rounded-full hover:bg-secondary transition-smooth"
          >
            {/* Show X icon when menu is open, hamburger icon when closed */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ==================
            MOBILE DROPDOWN MENU
            ================== */}
        {/* This menu slides down when hamburger button is clicked */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {/* Mobile navigation links */}
              {navLinks.map((link) => {
                // Determine styling for mobile links
                const linkStyles = isActive(link.path)
                  ? "bg-primary text-primary-foreground" // Active page style
                  : "text-foreground hover:bg-secondary"; // Inactive page style

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)} // Close menu when link is clicked
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-smooth ${linkStyles}`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile registration button */}
              <Link to="/pendaftaran" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2">Daftar Sekarang</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;