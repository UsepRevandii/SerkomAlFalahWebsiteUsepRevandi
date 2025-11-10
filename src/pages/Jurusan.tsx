import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const heroImage = "https://raw.githubusercontent.com/UsepRevandii/images/main/upacra.jpg";
const tkj = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Jur_TKJ.png";
const rpl = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Jur_RPL.png";
const mplb = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Jur_MPLB.png";
const akl = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Jur_Akutansi.png";
const dkv = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Jur_DKV.png";
const tb = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Jur_TB.png";
const tbsm = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Jur_TBSM.png";

const Jurusan = () => {
  const majors = [
    {
      image: tkj,
      title: "Teknik Komputer dan Jaringan (TKJ)",
      description: "Teknik Komputer dan Jaringan merupakan program keahlian yang mempelajari tentang cara instalasi PC, instalasi LAN, memperbaiki PC, dan mempelajari program-program komputer. Jurusan ini masuk ke SMK Al-Falah sejak tahun 2008, SMK Al-Falah TanjungJaya menjadikan TKJ sebagai Jurusan pertama yang dimiliki Sekolah.",
      link: "https://www.quipper.com/id/blog/quipper-campus/n-jurusan-teknik-komputer-jaringan/"
    },
    {
      image: rpl,
      title: "Rekayasa Perangkat Lunak (RPL)",
      description: "Rekayasa Perangkat Lunak adalah jurusan yang mempelajari dan mendalami semua cara-cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak, dan manajemen kualitas. Jurusan ini dibuka sejak tahun 2009.",
      link: "https://sevima.com/apa-itu-jurusan-rpl-apa-saja-keunggulan-jurusan-rpl/"
    },
    {
      image: mplb,
      title: "Manajemen Perkantoran dan Layanan Bisnis (MPLB)",
      description: "Manajemen Perkantoran dan Layanan Bisnis (dahulu Administrasi Perkantoran) mempelajari tentang pengelolaan administrasi kantor, korespondensi, kearsipan, dan layanan bisnis. Siswa dibekali kemampuan untuk menjadi tenaga administrasi profesional. Program ini ada sejak 2012.",
      link: "https://smkn1bms.sch.id/otomatisasi-dan-tata-kelola-perkantoran-otkp/"
    },
    {
      image: akl,
      title: "Akuntansi dan Keuangan Lembaga (AKL)",
      description: "Akuntansi dan Keuangan Lembaga merupakan program keahlian yang fokus pada pengelolaan keuangan, pembukuan, perpajakan, dan administrasi keuangan lembaga. Lulusan akan siap menjadi akuntan junior atau staf keuangan. Jurusan ini dibuka pada tahun 2015.",
      link: "https://smkysbsuryalaya.sch.id/read/1012/akuntansi-dan-keuangan-lembaga"
    },
    {
      image: dkv,
      title: "Desain Komunikasi Visual (DKV)",
      description: "Desain Komunikasi Visual adalah jurusan yang mempelajari tentang desain grafis, multimedia, fotografi, videografi, dan animasi. Siswa akan dibekali keterampilan untuk menjadi desainer profesional di industri kreatif. Program ini mulai dibuka sejak 2011.",
      link: "https://www.gamelab.id/news/2412-mengenal-jurusan-desain-komunikasi-visual-dkv-smk-dan-prospek-kerjanya"
    },
    {
      image: tb,
      title: "Tata Busana (TB)",
      description: "Tata Busana adalah program keahlian yang mempelajari desain busana, teknik menjahit, konstruksi pola, textile knowledge, hingga manajemen produksi fashion. Siswa akan disiapkan untuk menjadi fashion designer, pattern maker, penjahit profesional, atau wirausaha di bidang fashion. Jurusan ini menjadi salah satu jurusan yang selalu relevan mengikuti perkembangan industri fashion modern dan kreatif.",
      link: "https://smkn1juwangi.sch.id/index.php/tata-busana-tb/"
    },
    {
      image: tbsm,
      title: "Teknik Bisnis Sepeda Motor (TBSM)",
      description: "Teknik Bisnis Sepeda Motor adalah pengembangan dari TSM yang tidak hanya mempelajari teknik perbaikan, tetapi juga manajemen bisnis otomotif, customer service, dan entrepreneurship di bidang otomotif. Jurusan ini hadir sejak 2022.",
      link: "https://smkn2merangin.sch.id/read/16/teknik-dan-bisnis-sepeda-motor"
    }
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
            Program Keahlian
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Pilih jurusan sesuai minat dan bakatmu untuk masa depan cerah
          </p>
        </div>
      </section>

      {/* Majors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majors.map((major, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={major.image}
                    alt={major.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 right-6 font-serif text-2xl font-bold text-white">
                    {major.title}
                  </h3>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {major.description}
                  </p>

                  <a href={major.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Pelajari Lebih Lanjut</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Daftarkan dirimu sekarang dan raih masa depan cerah bersama SMK Al-Falah Tanjungjaya
          </p>
          <Link to="/pendaftaran">
            <Button size="lg">
              Daftar Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jurusan;