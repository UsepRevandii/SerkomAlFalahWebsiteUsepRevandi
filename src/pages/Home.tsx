import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Users, BookOpen, GraduationCap, ArrowRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroImage = "https://raw.githubusercontent.com/UsepRevandii/images/main/background01.jpg";
const studentsLab = "https://raw.githubusercontent.com/UsepRevandii/images/main/lab rpl (base).jpg";
const Guru = "https://raw.githubusercontent.com/UsepRevandii/images/main/guru3.png";
const berita01 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber1_Pendaftaran.png";
const berita02 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber5_Prestasi.png";
const berita03 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber6_Prestasi.png";
const berita04 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber5_Kegiatan.png";
const galeri01 = "https://raw.githubusercontent.com/UsepRevandii/images/main/rapat.png";
const galeri02 = "https://raw.githubusercontent.com/UsepRevandii/images/main/pelatihanmiliter.jpg";
const galeri03 = "https://raw.githubusercontent.com/UsepRevandii/images/main/guru.png";
const galeri04 = "https://raw.githubusercontent.com/UsepRevandii/images/main/funwalk.jpg";
const galeri05 = "https://raw.githubusercontent.com/UsepRevandii/images/main/pnts bahan.jpg";
const galeri06 = "https://raw.githubusercontent.com/UsepRevandii/images/main/Shalat Dzuhur Berjamaah.jpg";

const Home = () => {
  const [counts, setCounts] = useState({
    teachers: 0,
    students: 0,
    majors: 0
  });

  useEffect(() => {
    const targetCounts = {
      teachers: 66,
      students: 1117,
      majors: 7
    };
    
    const duration = 2000;
    const steps = 50;
    
    const increment = {
      teachers: targetCounts.teachers / steps,
      students: targetCounts.students / steps,
      majors: targetCounts.majors / steps
    };
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounts({
          teachers: Math.floor(increment.teachers * currentStep),
          students: Math.floor(increment.students * currentStep),
          majors: Math.floor(increment.majors * currentStep)
        });
        currentStep++;
      } else {
        setCounts(targetCounts);
        clearInterval(timer);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToInfo = () => {
    document.getElementById("info-section")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const news = [
    {
      id: 1,
      title: "Test PPDB Gelombang 1 2025/2026",
      date: "18 Febuari 2025",
      excerpt: "Test PPDB dibuka mulai 23 Februari 2025. Bagi kamu yang ingin mendaftar di SMK Al Falah Tanjungjaya bersiaplah!, tes PPDB Gelombang  1 akan segera dilaksanakan!!",
      image: berita01,
      link: "/berita" // Tambahkan link untuk berita 1
    },
    {
      id: 2,
      title: "Selamat atas Diraihnya Juara II PIDATO Dini Alfiani",
      date: "18 Oktober 2025",
      excerpt: "Dalam sebuah pentas PAI SMK se-Kabupaten Tasikmalaya, Dini Alfiani berhasil pulang dengan membawa kemenangan sebagai Juara II. berkat usaha dan dedikasi yang tinggi ia berhasil membawa nama baik sekolah dengan penuh rasa bangga.",
      image: berita02,
      link: "/berita" // Tambahkan link untuk berita 2
    },
    {
      id: 3,
      title: "Selamat dan sukses untuk Tim Paskibra SMK Al Falah Tanjungjaya telah meraih Juara Mula 3!",
      date: "22 september 2025",
      excerpt: "Selamat dan sukses selalu untuk Tim Paskibra SMK Al Falah Tanjungjaya karena telah meraih Juara Mula 3 dalam Lomba Ketangkasan Baris-berbaris (LKBB) Teknorat 2025 tingkat SMK/MA Sederajat se-Jawa Barat di Institut Teknologi Garut. terimakasih sebesar-besarnya telah mengharumkan nama sekolah dan semoga menjadi motivasi bagi semua siswa untuk terus berjuang pantang menyerah.",
      image: berita03,
      link: "/berita" // Tambahkan link untuk berita 3
    },
    {
      id: 4,
      title: "JUMAT SPIRITUAL GATHERING bersama SMK Al-Falah TanjungJaya",
      date: "22 Agustus 2025",
      excerpt: "Sobat AF, Al-Falah sering melakukan kegiatan JSG rutin setiap hari jumat sebelum mapel, pada JDS kali ini Pak Deri bersama Bu Ita membawakan tema dengan judul 'Mau Level Up?, Upgrade Adab mu!' yang berisi ajakan bagi kita untuk memperbaiki adab sebelum mengejar ilmu, karena hidup yang indah dimulai dari adab yang dibentuk secara indah.",
      image: berita04,
      link: "/berita" // Tambahkan link untuk berita 4
    }
  ];

  const galleryImages = [galeri02, galeri03, galeri05, galeri06, galeri04];

  // Fungsi untuk menangani klik tombol "Baca Selengkapnya"
  const handleReadMore = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)"
          }} 
        />
        <div className="absolute inset-0 gradient-hero opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-sm">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            SMK Al-Falah Tanjungjaya
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" 
            style={{ animationDelay: "0.2s" }}
          >
            Membentuk Generasi Unggul, Berkarakter, dan Berbudi Luhur.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" 
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" variant="secondary" onClick={scrollToInfo} className="text-lg">
              Pelajari Lebih Lanjut
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/pendaftaran">
              <Button size="lg" className="text-lg w-full sm:w-auto">
                Daftar di Sini
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Info Section */}
      <section id="info-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 animate-fade-in text-base bg-white text-center rounded-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kenapa Memilih SMK Al-Falah?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sekolah kejuruan dengan standar industri dan pembelajaran berkualitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in rounded-xl">
              <CardContent className="p-8">
                <img 
                  src={studentsLab} 
                  alt="Laboratorium Modern" 
                  className="w-full h-64 object-cover rounded-lg mb-6" 
                />
                <h3 className="font-serif text-2xl font-semibold mb-4">Fasilitas Modern</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dilengkapi dengan laboratorium komputer, bengkel praktek, perpustakaan digital, 
                  dan ruang kelas yang bersih dan rapih yang mendukung pembelajaran efektif.
                </p>
              </CardContent>
            </Card>

            <Card 
              className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in" 
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <img 
                  src={Guru} 
                  alt="Pembelajaran Berkualitas" 
                  className="w-full h-64 object-cover rounded-lg mb-6" 
                />
                <h3 className="font-serif text-2xl font-semibold mb-4">Tenaga Pengajar Profesional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guru-guru berpengalaman dan bersertifikat yang siap membimbing siswa meraih 
                  prestasi maksimal dengan metode pembelajaran inovatif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="font-serif text-5xl font-bold text-primary mb-2">{counts.teachers}</div>
              <div className="text-lg text-foreground">Tenaga Pengajar</div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="font-serif text-5xl font-bold text-primary mb-2">{counts.students}</div>
              <div className="text-lg text-foreground">Siswa Aktif</div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="font-serif text-5xl font-bold text-primary mb-2">{counts.majors}</div>
              <div className="text-lg text-foreground">Program Keahlian</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section with Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground">Berita Terbaru</h2>
            <Link to="/berita">
              <Button variant="outline">
                Berita Lainnya
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {news.map((item, index) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth cursor-pointer">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover" 
                    />
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                      <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto"
                        onClick={() => handleReadMore(item.link)}
                      >
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* Gallery Preview Section with Carousel */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Galeri Kegiatan</h2>
            <p className="text-muted-foreground">Dokumentasi aktivitas siswa dan sekolah</p>
          </div>

          <Carousel className="w-full mb-8">
            <CarouselContent>
              {galleryImages.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-smooth cursor-pointer">
                    <img 
                      src={img} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-smooth" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          <div className="text-center">
            <Link to="/galeri">
              <Button size="lg" variant="secondary">
                Lihat Semua Foto
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;