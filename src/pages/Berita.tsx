import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const heroImage = "https://raw.githubusercontent.com/UsepRevandii/images/main/patroli.jpg";
const berita1pendaftaran01 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber1_Pendaftaran.png";
const berita1pendaftaran02 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber2_Pendaftaran.png";
const berita1pendaftaran03 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber3_Pendaftaran.png";
const berita1prestasi01 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber5_Prestasi.png";
const berita1prestasi02 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber6_Prestasi.png";
const berita1prestasi03 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber1_Prestasi.png";
const berita1prestasi04 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber2_Prestasi.png";
const berita1prestasi05 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber3_Prestasi.png";
const berita1kegiatan01 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber5_Kegiatan.png";
const berita1kegiatan02 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber3_Kegiatan.png";
const berita1kegiatan03 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber2_Kegiatan.png";
const berita1kegiatan04 = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Ber4_Kegiatan.png";

const Berita = () => {
  const pendaftaranNews = [
    {
      id: 1,
      title: "Test PPDB Gelombang 1 2025/2026",
      date: "18 Febuari 2025",
      category: "Pendaftaran",
      image: berita1pendaftaran01,
      excerpt: "Test PPDB dibuka mulai 23 Februari 2025. Masih ada waktu untuk mendaftar dan raih masa depan cerah!",
      content: `Test PPDB dibuka mulai 23 Februari 2025. Masih ada waktu untuk mendaftar dan raih masa depan cerah!. 

Persyaratan Pendaftaran:
- Ijazah SMP/MTs atau surat keterangan lulus
- Kartu Keluarga
- Akta Kelahiran
- Pas foto 3x4 (4 lembar)
- Fotocopy rapor semester 1-5

Jalur Pendaftaran:
1. Jalur Prestasi (kuota 20%)
2. Jalur Reguler (kuota 80%)

Fasilitas yang didapatkan:
- Seragam lengkap
- Buku paket pelajaran
- Fasilitas laboratorium modern
- Program magang di industri

Untuk informasi lebih lanjut, hubungi panitia PPDB di nomor (0265) 123-4567 atau kunjungi website kami.`,
    },
    {
      id: 2,
      title: "Sosialisasi PPDB 2025",
      date: "12 Januari 2025",
      category: "Pendaftaran",
      image: berita1pendaftaran02,
      excerpt: "Tes PPDB untuk calon siswa baru tahun ajaran 2025/2026.",
      content: "Hari ini, 23 Februari 2025, SMK Al Falah Tanjungjaya kembali membuka kesempatan bagi para calon siswa untuk bergabung dalam keluarga besar kami. Semangat belajar dan berprestasi dimulai dari sini! 💪📚",
    },
    {
      id: 3,
      title: "Upacara sekaligus Penutupan MPLS 2025/2026",
      date: "8 Januari 2025",
      category: "Pendaftaran",
      image: berita1pendaftaran03,
      excerpt: "Upacara hari senin dan sekaligus memperingati penutupan MPLS tahun ajaran baru",
      content: "Penutupan MPLS bukan akhir, tapi awal perjalanan kalian di SMK Al Falah Tanjungjaya. Upacara hari ini menjadi momen simbolis untuk melangkah lebih jauh — dengan karakter, prestasi, dan visi global yang siap diasah.Selamat datang dan selamat tumbuh bersama 🤗",
    },
  ];

  const prestasiNews = [
    {
      id: 4,
      title: "Selamat atas Diraihnya Juara II PIDATO Dini Alfiani",
      date: "18 Oktober 2025",
      category: "Prestasi",
      image: berita1prestasi01,
      excerpt: "Siswi SMK Al-Falah meraih juara II dalam lomba Pidato se-kabupaten Tasikmalaya",
      content: `Dalam sebuah pentas PAI SMK se-Kabupaten Tasikmalaya, Dini Alfiani berhasil pulang dengan membawa kemenangan sebagai Juara II. berkat usaha dan dedikasi yang tinggi ia berhasil membawa nama baik sekolah dengan penuh rasa bangga.`,
    },
    {
      id: 5,
      title: "Selamat dan sukses untuk Tim Paskibra SMK Al Falah Tanjungjaya telah meraih Juara Mula 3!",
      date: "22 september 2025",
      category: "Prestasi",
      image: berita1prestasi02,
      excerpt: "Tim Paskibra SMK Al-Falah TanjungJaya meraih Juara Mula 3",
      content: "Selamat dan sukses selalu untuk Tim Paskibra SMK Al Falah Tanjungjaya karena telah meraih Juara Mula 3 dalam Lomba Ketangkasan Baris-berbaris (LKBB) Teknorat 2025 tingkat SMK/MA Sederajat se-Jawa Barat di Institut Teknologi Garut. terimakasih sebesar-besarnya telah mengharumkan nama sekolah dan semoga menjadi motivasi bagi semua siswa untuk terus berjuang pantang menyerah.",
    },
    {
  id: 7,
  title: "Selamat & Sukses Juara Gelut Nasional ISKA Indonesia Open II",
  date: "26 Oktober 2025",
  category: "Prestasi",
  image: berita1prestasi03,
  excerpt: "Siswa SMK Al-Falah berhasil meraih Juara 1 dan Juara 3 dalam ajang Gelut tingkat nasional ISKA Indonesia Open II di Bandung.",
  content: `
Dalam kejuaraan BANDUNG GELUT DAY III – ISKA Indonesia Open II yang digelar pada 26 Oktober 2025, dua siswa SMK Al-Falah berhasil membuktikan kemampuan terbaiknya dalam cabang olahraga Gelut.

Prestasi ini menunjukkan dedikasi latihan yang tinggi serta semangat kompetitif yang kuat. Kemenangan tersebut memberikan kebanggaan tersendiri bagi sekolah dan menjadi motivasi bagi peserta didik lainnya untuk terus mengukir prestasi di bidang yang diminati.

Sekolah sangat mengapresiasi dan mengucapkan selamat atas capaian prestasi ini.
  `,
},

{
  id: 8,
  title: "Selamat atas Diraihnya Juara I Content Creator",
  date: "18 Oktober 2025",
  category: "Prestasi",
  image: berita1prestasi04,
  excerpt: "Siswa SMK Al-Falah berhasil meraih Juara I dalam ajang Content Creator pada Pentas PAI SMK se-Kabupaten Tasikmalaya.",
  content: `
Dalam ajang Pentas PAI tingkat SMK se-Kabupaten Tasikmalaya yang digelar pada Sabtu, 18 Oktober 2025, peserta dari SMK Al-Falah berhasil menorehkan prestasi membanggakan di kategori Content Creator dengan berhasil meraih Juara I.

Prestasi ini membuktikan kreativitas para siswa dalam memproduksi konten yang positif, inspiratif, serta memiliki nilai edukasi. Keberhasilan ini diharapkan menjadi motivasi bagi peserta didik lainnya untuk terus berkarya, mengembangkan bakat digital kreatif, dan membawa nama baik sekolah di tingkat yang lebih luas lagi.
  `,
},
{
  id: 9,
  title: "Selamat atas diraihnya Penghargaan Setter Terbaik oleh Aji Fadilah",
  date: "2025",
  category: "Prestasi",
  image: berita1prestasi05,
  excerpt: "Siswa SMK Al-Falah meraih penghargaan Setter Terbaik dalam pertandingan UPK Salopa CUP.",
  content: `
Dalam pertandingan bola voli UPK Salopa CUP tahun 2025, salah satu siswa SMK Al-Falah yaitu Aji Fadilah dari kelas XII PPLG berhasil meraih penghargaan Setter Terbaik. Pencapaian ini membuktikan kemampuan teknik, kontrol, serta konsistensi permainan yang sangat baik selama pertandingan berlangsung.

Prestasi ini menjadi kebanggaan tersendiri bagi sekolah dan diharapkan mampu menginspirasi siswa lainnya untuk terus mengembangkan bakat dan potensi di bidang olahraga maupun bidang lainnya.
  `,
},

  ];

  const kegiatanNews = [
    {
      id: 7,
      title: "JUMAT SPIRITUAL GATHERING bersama SMK Al-Falah TanjungJaya",
      date: "22 Agustus 2025",
      category: "Kegiatan",
      image: berita1kegiatan01,
      excerpt: "kegiatan JSG atau JUMAT SPIRITUAL GATHERING di SMK Al-Falah TanjungJaya",
      content: `Sobat AF, Al-Falah sering melakukan kegiatan JSG rutin setiap hari jumat sebelum mapel, pada JDS kali ini Pak Deri bersama Bu Ita membawakan tema dengan judul 'Mau Level Up?, Upgrade Adab mu!' yang berisi ajakan bagi kita untuk memperbaiki adab sebelum mengejar ilmu, karena hidup yang indah dimulai dari adab yang dibentuk secara indah.`,
    },
    {
      id: 8,
      title: "MEETING YAMAHA CUP RACE SMK Al-Falah TanjungJaya",
      date: "10 November 2025",
      category: "Kegiatan",
      image: berita1kegiatan02,
      excerpt: "Kegiatan koordinasi antara SMK Al-Falah TanjungJaya dan Yamaha dalam persiapan Yamaha Cup Race.",
      content: `Sobat AF, SMK Al-Falah TanjungJaya kembali menunjukkan semangat kolaborasinya! Kali ini melalui kegiatan *Meeting Yamaha Cup Race* yang dihadiri oleh perwakilan dari Yamaha dan tim SMK Al-Falah. 
      Kegiatan ini membahas persiapan serta strategi dalam pelaksanaan Yamaha Cup Race, sekaligus menjadi ajang berbagi pengalaman dan memperkuat sinergi antara dunia industri dan dunia pendidikan. 
      Dengan semangat #TerampilBerkarakter, SMK Al-Falah terus berupaya mencetak siswa yang kompeten dan siap bersaing di dunia otomotif.`,
    },
    {
      id: 9,
      title: "TES KEMAMPUAN AKADEMIK Kelas XII SMK Al-Falah TanjungJaya",
      date: "03-06 November 2025",
      category: "Kegiatan",
      image: berita1kegiatan03,
      excerpt: "Pelaksanaan Tes Kemampuan Akademik (TKA) bagi siswa kelas XII SMK Al-Falah TanjungJaya.",
      content: `Sobat AF, semangat untuk seluruh siswa kelas XII yang sedang melaksanakan Tes Kemampuan Akademik (TKA)!
      Kegiatan ini berlangsung dari tanggal 03 hingga 06 November 2025 dan menjadi salah satu tahap penting dalam mengukur kesiapan akademik menjelang kelulusan. 
      Melalui tes ini, siswa diharapkan mampu menunjukkan kemampuan terbaiknya di bidang akademik serta menerapkan ilmu yang telah dipelajari selama di sekolah. 
      Terus semangat dan percaya diri ya, Sobat AF! #TerampilBerkarakter`,
    },
    {
      id: 10,
      title: "UPACARA PERINGATAN KEMERDEKAAN RI Tingkat Kecamatan Tanjungjaya",
      date: "17 Agustus 2025",
      category: "Kegiatan",
      image: berita1kegiatan04,
      excerpt: "SMK Al-Falah TanjungJaya ikut berpartisipasi dalam Upacara Peringatan Kemerdekaan Republik Indonesia Tingkat Kecamatan Tanjungjaya.",
      content: `Sobat AF, semangat kemerdekaan terus berkobar! 🇮🇩
      Pada tanggal 17 Agustus 2025, SMK Al-Falah TanjungJaya turut serta dalam Upacara Peringatan Kemerdekaan Republik Indonesia tingkat Kecamatan Tanjungjaya.
      Momen penuh kebanggaan ini diwarnai dengan parade, pasukan pengibar bendera, serta penampilan yang menggugah semangat juang para generasi muda.
      Semoga semangat perjuangan para pahlawan terus hidup di hati kita semua!
      #TerampilBerkarakter #SMKAlFalahTanjungjaya #HUT80RI #smkhebat`,
    },

  ];

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
            Berita Sekolah
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Informasi terkini seputar kegiatan dan prestasi SMK Al-Falah
          </p>
        </div>
      </section>

      {/* News Tabs with Carousels */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pendaftaran" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="pendaftaran">Pendaftaran</TabsTrigger>
              <TabsTrigger value="prestasi">Prestasi</TabsTrigger>
              <TabsTrigger value="kegiatan">Kegiatan</TabsTrigger>
            </TabsList>

            <TabsContent value="pendaftaran">
              <Carousel className="w-full">
                <CarouselContent>
                  {pendaftaranNews.map((news) => (
                    <CarouselItem key={news.id} className="md:basis-1/2 lg:basis-1/3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth cursor-pointer group h-full">
                            <div className="relative overflow-hidden">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-smooth"
                              />
                              <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                                  {news.category}
                                </span>
                              </div>
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-center text-sm text-muted-foreground mb-3">
                                <Calendar className="w-4 h-4 mr-2" />
                                {news.date}
                              </div>
                              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                                {news.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 line-clamp-2">
                                {news.excerpt}
                              </p>
                              <div className="flex items-center text-primary font-medium">
                                Baca Selengkapnya
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <div className="mb-4">
                              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                                {news.category}
                              </span>
                            </div>
                            <DialogTitle className="font-serif text-3xl mb-4">
                              {news.title}
                            </DialogTitle>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Calendar className="w-4 h-4 mr-2" />
                              {news.date}
                            </div>
                          </DialogHeader>
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-80 object-cover rounded-lg mb-6"
                          />
                          <div className="prose prose-lg max-w-none">
                            <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                              {news.content}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </TabsContent>

            <TabsContent value="prestasi">
              <Carousel className="w-full">
                <CarouselContent>
                  {prestasiNews.map((news) => (
                    <CarouselItem key={news.id} className="md:basis-1/2 lg:basis-1/3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth cursor-pointer group h-full">
                            <div className="relative overflow-hidden">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-smooth"
                              />
                              <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                                  {news.category}
                                </span>
                              </div>
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-center text-sm text-muted-foreground mb-3">
                                <Calendar className="w-4 h-4 mr-2" />
                                {news.date}
                              </div>
                              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                                {news.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 line-clamp-2">
                                {news.excerpt}
                              </p>
                              <div className="flex items-center text-primary font-medium">
                                Baca Selengkapnya
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <div className="mb-4">
                              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                                {news.category}
                              </span>
                            </div>
                            <DialogTitle className="font-serif text-3xl mb-4">
                              {news.title}
                            </DialogTitle>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Calendar className="w-4 h-4 mr-2" />
                              {news.date}
                            </div>
                          </DialogHeader>
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-80 object-cover rounded-lg mb-6"
                          />
                          <div className="prose prose-lg max-w-none">
                            <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                              {news.content}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </TabsContent>

            <TabsContent value="kegiatan">
              <Carousel className="w-full">
                <CarouselContent>
                  {kegiatanNews.map((news) => (
                    <CarouselItem key={news.id} className="md:basis-1/2 lg:basis-1/3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth cursor-pointer group h-full">
                            <div className="relative overflow-hidden">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-smooth"
                              />
                              <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                                  {news.category}
                                </span>
                              </div>
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-center text-sm text-muted-foreground mb-3">
                                <Calendar className="w-4 h-4 mr-2" />
                                {news.date}
                              </div>
                              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                                {news.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 line-clamp-2">
                                {news.excerpt}
                              </p>
                              <div className="flex items-center text-primary font-medium">
                                Baca Selengkapnya
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <div className="mb-4">
                              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                                {news.category}
                              </span>
                            </div>
                            <DialogTitle className="font-serif text-3xl mb-4">
                              {news.title}
                            </DialogTitle>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Calendar className="w-4 h-4 mr-2" />
                              {news.date}
                            </div>
                          </DialogHeader>
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-80 object-cover rounded-lg mb-6"
                          />
                          <div className="prose prose-lg max-w-none">
                            <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                              {news.content}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Berita;