import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
const heroImage = "https://raw.githubusercontent.com/UsepRevandii/images/main/backgroundlah.jpeg";
const dokumentasi01 = "https://raw.githubusercontent.com/UsepRevandii/images/main/pelatihanmiliter.jpg";
const dokumentasi02 = "https://raw.githubusercontent.com/UsepRevandii/images/main/pelatihan militer2.jpg";
const dokumentasi03 = "https://raw.githubusercontent.com/UsepRevandii/images/main/pelatihan militer3.jpg";
const dokumentasi04 = "https://raw.githubusercontent.com/UsepRevandii/images/main/perpus.jpg";
const dokumentasi05 = "https://raw.githubusercontent.com/UsepRevandii/images/main/pnts bahan.jpg";
const dokumentasi06 = "https://raw.githubusercontent.com/UsepRevandii/images/main/rapat.png";
const dokumentasi07 = "https://raw.githubusercontent.com/UsepRevandii/images/main/kantin2.jpg";
const dokumentasi08 = "https://raw.githubusercontent.com/UsepRevandii/images/main/Shalat Dzuhur Berjamaah.jpg";
const dokumentasi09 = "https://raw.githubusercontent.com/UsepRevandii/images/main/perpus2.jpg";
const dokumentasi10 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasipmr.jpg";
const dokumentasi11 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasi pramuka.jpg";
const dokumentasi12 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasipaskibra.jpg";
const dokumentasi13 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasiosis2.jpg";
const dokumentasi14 = "https://raw.githubusercontent.com/UsepRevandii/images/main/funwalk.jpg";

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("Semua");

  const categories = ["Semua", "Kegiatan", "Fasilitas", "Lomba", "Ekstrakurikuler"];

  const gallery = [
    { id: 1, image: dokumentasi01, title: "Pelatihan Militer", category: "Kegiatan" },
    { id: 2, image: dokumentasi02, title: "Pelatihan Militer day 2", category: "Kegiatan" },
    { id: 3, image: dokumentasi03, title: "Pelatihan Militer day 3", category: "Kegiatan" },
    { id: 4, image: dokumentasi04, title: "Perpus", category: "Fasilitas" },
    { id: 5, image: dokumentasi05, title: "Pentas", category: "Lomba" },
    { id: 6, image: dokumentasi06, title: "Rapat Guru", category: "Kegiatan" },
    { id: 7, image: dokumentasi07, title: "Kantin", category: "Fasilitas" },
    { id: 8, image: dokumentasi08, title: "Shalat Berjamaah", category: "Kegiatan" },
    { id: 9, image: dokumentasi09, title: "Perpus", category: "Fasilitas" },
    { id: 10, image: dokumentasi10, title: "PMR", category: "Ekstrakurikuler" },
    { id: 11, image: dokumentasi11, title: "Pramuka", category: "Ekstrakurikuler" },
    { id: 12, image: dokumentasi12, title: "Paskibra", category: "Ekstrakurikuler" },
    { id: 13, image: dokumentasi13, title: "Osis", category: "Ekstrakurikuler" },
    { id: 14, image: dokumentasi14, title: "Funwalk", category: "Lomba" },
  ];

  const filteredGallery = filter === "Semua" 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredGallery.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header - Background lebih terang dengan tombol #36475A */}
      <section className="relative pt-16 pb-32 md:pb-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.8)",
            transform: "scale(1.15)",
            transformOrigin: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        
        {/* Konten utama hero section */}
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Galeri Foto
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dokumentasi kegiatan dan momen berharga SMK Al-Falah
          </p>
        </div>

        {/* Filter Section - Tombol dengan warna #36475A */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-6 mx-auto max-w-4xl border border-white/10 shadow-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`transition-smooth ${
                    filter === category 
                      ? "text-white hover:bg-[#2a3849]" 
                      : "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                  style={filter === category ? { backgroundColor: '#36475A' } : {}}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(index)}
                className="aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-smooth cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-smooth opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-semibold text-sm drop-shadow-lg">
                      {item.title}
                    </h3>
                    <span className="text-white/80 text-xs bg-black/50 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Tidak ada foto dalam kategori ini
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handlePrevious}
            disabled={selectedImage === 0}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-smooth"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            disabled={selectedImage === filteredGallery.length - 1}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-smooth"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl max-h-[90vh] w-full">
            <img
              src={filteredGallery[selectedImage].image}
              alt={filteredGallery[selectedImage].title}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-serif text-2xl font-semibold">
                {filteredGallery[selectedImage].title}
              </h3>
              <p className="text-white/70 mt-2">
                {selectedImage + 1} / {filteredGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeri;