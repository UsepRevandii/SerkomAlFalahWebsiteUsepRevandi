import { Target, Eye, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
const heroImage = "https://raw.githubusercontent.com/UsepRevandii/images/main/background03.jpg";
const sejarah = "https://raw.githubusercontent.com/UsepRevandii/images/main/sejarah.jpg";
const labkomputer = "https://raw.githubusercontent.com/UsepRevandii/images/main/lab sekolah.jpg";
const perpus = "https://raw.githubusercontent.com/UsepRevandii/images/main/perpus.jpg";
const ruangkelas = "https://raw.githubusercontent.com/UsepRevandii/images/main/ruangkelas.jpg";
const parkiran = "https://raw.githubusercontent.com/UsepRevandii/images/main/parkir.jpg";
const lapang = "https://raw.githubusercontent.com/UsepRevandii/images/main/lapangan.jpg";
const masjid = "https://raw.githubusercontent.com/UsepRevandii/images/main/masjid.jpg";

const Info = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header - Fixed */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10 pt-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Tentang SMK Al-Falah
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Mengenal lebih dekat sekolah kami
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Sejarah Sekolah</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SMK Al Falah Tanjungjaya, didirikan atas pemikiran KH. Engkon Furqon, memiliki tujuan menyelenggarakan pendidikan yang tidak hanya menjadikan santri ahli dalam bidang agama, tetapi juga memiliki keterampilan-keterampilan untuk mendukung kehidupan sehari-hari dalam berdakwah. Pada tahun 2008, sekolah ini merintis program SMK Berbasis Pesantren sebagai upaya untuk berkontribusi dalam mensejahterakan masyarakat.
                </p>
                <p>
                  Dengan cita-cita KH. Engkon Furqon sebagai landasan, SMK Al Falah Tanjungjaya memilih teknik komputer jaringan sebagai bidang kejuruan pertamanya. Dalam Akta Pendirian dengan Nomor Izin Operasional 421.5/0177/Disdik 2008, sekolah ini resmi berdiri. Pada tahun pertama, satu kelas jurusan teknik komputer jaringan dengan 30 siswa dimulai, dan dari sinilah perjalanan SMK Al Falah dimulai. Dengan pertumbuhan yang signifikan setiap tahunnya, sekolah ini berhasil meraih akreditasi A, menunjukkan komitmen mereka terhadap kualitas pendidikan. SMK Al Falah terus berkembang dengan menambah kompetensi keahlian setiap tahunnya.
                </p>
                <p>
                  Mulai dari Rekayasa Perangkat Lunak (RPL) pada tahun 2009, Teknik dan Bisnis Sepeda Motor (TBSM) pada tahun 2010, Multimedia (MM) pada tahun 2011, Otomatisasi Tata Kelola Perkantoran (OTKP) pada tahun 2012, Akuntansi Keuangan Lembaga (AKL) pada tahun 2015, hingga Kompetensi Keahlian Tata Busana (TB) pada tahun 2023. SMK Al Falah Tanjungjaya terus berupaya menjadi lembaga pendidikan yang memberikan kontribusi positif bagi masyarakat dengan menyediakan berbagai pilihan kompetensi keahlian.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={sejarah}
                alt="Gedung SMK Al-Falah"
                className="w-full h-full object-cover rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Visi</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Menjadi Sekolah Kejuruan Yang Unggul, Berkarakter, Kompeten Dan Berwawasan Global
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Misi</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menyelenggarakan pendidikan yang berkarakter islam.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span>Berkompetensi dan memiliki literasi yang baik.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menerapakan sikap karakter islam yang tercermin dalam perilaku berilmu dan bertakwa.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menanamkan karakter kinerja yang kerja keras, ulet, teguh, disiplin, tidak mudah menyerah dan tuntas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menanamkan karakter islam dalam kehidupan sehari-hari.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menciptakan lingkungan yang islami dan kondusif.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span>Membiasakan perilaku teladan yang shalih dalam kehidupan sehari-hari.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Fasilitas Sekolah</h2>
            <p className="text-lg text-muted-foreground">
              Fasilitas lengkap untuk mendukung pembelajaran dan kenyamanan para siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in">
              <CardContent className="p-0">
                <img
                  src={labkomputer}
                  alt="Laboratorium Komputer"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Laboratorium Untuk Semua Jurusan</h3>
                  <p className="text-muted-foreground">
                    Demi mendukung para muridnya sekolah memfasilitasi Lab untuk semua jurusan yang ada di SMK Al-Falah TanjungJaya. dengan peralatan yang memadai untuk setiap jurusan.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.15s" }}>
              <CardContent className="p-0">
                <img
                  src={perpus}
                  alt="Perpustakaan"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Perpustakaan terbuka</h3>
                  <p className="text-muted-foreground">
                    Perpustakaan terbuka dengan koleksi buku lengkap dan free akses untuk semua murid untuk mendukung literasi siswa. Buku-buku dapat di baca ataupun dipinjam ke rumah dengan batas waktu.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-0">
                <img
                  src={ruangkelas}
                  alt="Ruang Kelas"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Ruang Kelas Memadai</h3>
                  <p className="text-muted-foreground">
                    Ruang kelas nyaman dan rapih, meja dan kursi bersih, dengan 3 gedung utama dan masing-masing memiliki 3 lantai. 
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.45s" }}>
              <CardContent className="p-0">
                <img
                  src={parkiran}
                  alt="Parkiran"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Parkiran khusus Motor</h3>
                  <p className="text-muted-foreground">
                    Parkiran Motor khusus bagi para pelajar dan guru di SMK Al-Falah tanjungJaya.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <CardContent className="p-0">
                <img
                  src={lapang}
                  alt="Lapangan Olahraga"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Lapangan Olahraga</h3>
                  <p className="text-muted-foreground">
                    Lapangan basket, voli, dan futsal untuk mendukung aktivitas olahraga dan ekstrakurikuler siswa.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.75s" }}>
              <CardContent className="p-0">
                <img
                  src={masjid}
                  alt="Masjid & Aula"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Masjid Khusus</h3>
                  <p className="text-muted-foreground">
                    Masjid untuk kegiatan ibadah seperti sholat, mengaji, dll.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Info;