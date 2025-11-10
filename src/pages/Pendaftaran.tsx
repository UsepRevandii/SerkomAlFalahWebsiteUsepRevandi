import { MessageCircle, Instagram, Mail, Globe, FileText, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const heroImage = "https://raw.githubusercontent.com/UsepRevandii/images/main/wideopenair.jpg";

const Pendaftaran = () => {
  const registrationMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Hubungi kami melalui WhatsApp untuk informasi cepat dan pendaftaran online",
      color: "bg-green-500/10 text-green-600",
      action: "Chat Sekarang",
      link: "https://wa.me/085603256166?text=halo%2C%20apakah%20pendaftaran%20SMK%20AL%20FALAH%20masih%20dibuka%3F",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow Instagram kami dan kirim DM untuk informasi pendaftaran terbaru",
      color: "bg-pink-500/10 text-pink-600",
      action: "Kunjungi Instagram",
      link: "https://www.instagram.com/smkaf_tanjungjaya/",
    },
    {
      icon: Globe,
      title: "Formulir Online",
      description: "Isi formulir pendaftaran online di website kami dengan mudah dan cepat",
      color: "bg-blue-500/10 text-blue-600",
      action: "Isi Formulir",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfS8aMf-Fs90oRFsEXno8Od_i9nPGw0a_JO8TkzZlXnueL-Lg/viewform?pli=1",
    },
  ];

  const requirements = [
    "Ijazah SMP/MTs atau Surat Keterangan Lulus",
    "Kartu Keluarga (fotocopy)",
    "Akta Kelahiran (fotocopy)",
    "Pas foto 3x4 berwarna (4 lembar)",
    "Fotocopy rapor semester 1-5",
    "Surat Keterangan Sehat dari dokter",
    "Surat Pernyataan tidak terlibat narkoba",
  ];

  const timeline = [
    { date: "1 Feb - 31 Mei 2025", event: "Pendaftaran Online & Offline" },
    { date: "1-5 Juni 2025", event: "Tes Masuk & Wawancara" },
    { date: "10 Juni 2025", event: "Pengumuman Hasil Seleksi" },
    { date: "12-20 Juni 2025", event: "Daftar Ulang" },
    { date: "15 Juli 2025", event: "Masa Orientasi Siswa" },
  ];

  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header - Diperbaiki */}
      <section className="relative overflow-hidden">
        {/* Background dengan tinggi penuh */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)",
            minHeight: "100vh",
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-20" />
        
        {/* Konten dengan padding atas untuk mengakomodasi navbar */}
        <div className="container mx-auto px-4 text-center relative z-10 pt-32 pb-32 min-h-screen flex flex-col justify-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Pendaftaran Siswa Baru
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tahun Ajaran 2025/2026
          </p>
          {/* Diperbaiki: Background badge lebih proporsional */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Pendaftaran Dibuka!</span>
          </div>
        </div>
      </section>

      {/* Registration Methods - DIKOREKSI UNTUK SAMA SISI */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Cara Mendaftar
            </h2>
            <p className="text-lg text-muted-foreground">
              Pilih cara pendaftaran yang paling mudah untuk Anda
            </p>
          </div>

          {/* Diperbaiki: Grid layout untuk 3 item dengan tinggi sama */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {registrationMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in text-center flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${method.color} mb-4 mx-auto`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm flex-grow">
                      {method.description}
                    </p>
                    <Button
                      className="w-full mt-auto"
                      onClick={() => method.link.startsWith('#') ? scrollToForm() : window.open(method.link, '_blank')}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Persyaratan Pendaftaran
              </h2>
              <p className="text-lg text-muted-foreground">
                Dokumen yang perlu disiapkan untuk mendaftar
              </p>
            </div>

            <Card className="shadow-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-fade-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Jadwal Pendaftaran
              </h2>
              <p className="text-lg text-muted-foreground">
                Timeline proses penerimaan siswa baru
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground text-lg mb-1">
                          {item.event}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Formulir Pendaftaran
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Formulir pendaftaran online akan segera tersedia. Untuk saat ini, silakan hubungi kami melalui WhatsApp, Instagram, atau email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:02651234567')}
              >
                Hubungi: (0857) 0316-6579
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pendaftaran;