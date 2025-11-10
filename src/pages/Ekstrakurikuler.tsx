import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroImage = "https://raw.githubusercontent.com/UsepRevandii/images/main/backgroundsekiana.jpg";
const eksvolly = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_Voli.png";
const eksfutsal = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_Futsal.png";
const eksPMR = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_PMR.png";
const ekssanggar = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_SanggarSeni.png";
const ekspramuka = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_Pramuka.png";
const ekssilat = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_Silat.png";
const ekspaskib = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_Paskib.png";
const eksipnu = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_IPNU.png";
const eksPKS = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_PKS.png";
const eksOSIS = "https://raw.githubusercontent.com/UsepRevandii/images/main/bahan/Eks_OSIS.png";
const dokumentasi01 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasipmr.jpg";
const dokumentasi02 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasiosis.jpg";
const dokumentasi03 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasiosis2.jpg";
const dokumentasi04 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasipaskibra.jpg";
const dokumentasi05 = "https://raw.githubusercontent.com/UsepRevandii/images/main/dokumentasi pramuka.jpg";

const Ekstrakurikuler = () => {
  const extracurriculars = [
    {
      image: eksvolly,
      name: "Bola Voli",
      description: "Powerful team dynamics through strategic coordination",
      fullDescription: "Ekstrakurikuler bola voli mengajarkan teknik dasar hingga lanjutan seperti smash, block, dan servis. Melatih kerjasama tim, komunikasi, dan strategi permainan. Cocok untuk siswa yang menyukai olahraga tim yang dinamis dan penuh energi."
    },
    {
      image: eksfutsal,
      name: "Futsal",
      description: "Precision and speed in fast-paced gameplay",
      fullDescription: "Fokus pada pengembangan skill individu dan taktik tim dalam permainan futsal. Meliputi teknik dribbling, passing, shooting, dan formasi permainan. Membangun kepercayaan diri dan sportivitas dalam kompetisi yang seru."
    },
    {
      image: eksPMR,
      name: "PMR",
      description: "Empathy in action through first aid excellence",
      fullDescription: "Palang Merah Remaja membekali siswa dengan keterampilan pertolongan pertama, kesehatan, dan kepedulian sosial. Anggota PMR aktif dalam kegiatan kemanusiaan dan menjadi relawan dalam berbagai event sekolah."
    },
    {
      image: ekssanggar,
      name: "Sanggar Seni",
      description: "Creative expression across multiple art forms",
      fullDescription: "Wadah ekspresi seni yang mencakup tari tradisional dan modern, teater, musik, dan seni rupa. Mengasah kreativitas, apresiasi seni, dan keberanian tampil di depan publik melalui berbagai pertunjukan."
    },
    {
      image: ekspramuka,
      name: "Pramuka",
      description: "Leadership development through outdoor adventures",
      fullDescription: "Membentuk karakter disiplin, mandiri, dan bertanggung jawab melalui kegiatan kepramukaan. Meliputi pioneering, survival skill, kemah, dan berbagai kegiatan outdoor yang menantang dan mendidik."
    },
    {
      image: ekssilat,
      name: "Pencak Silat",
      description: "Cultural heritage meets martial arts mastery",
      fullDescription: "Melestarikan seni bela diri tradisional Indonesia sambil membangun fisik yang kuat dan mental yang disiplin. Mengajarkan teknik dasar hingga lanjutan pencak silat dengan penekanan pada nilai-nilai keselamatan dan sportivitas."
    },
    {
      image: ekspaskib,
      name: "Paskibra",
      description: "Discipline and patriotism in perfect harmony",
      fullDescription: "Pasukan Pengibar Bendera melatih kedisiplinan tinggi, teknik baris-berbaris, dan kecintaan terhadap tanah air. Anggota Paskibra terlibat dalam upacara penting sekolah dan menjadi contoh dalam hal kedisiplinan."
    },
    {
      image: eksipnu,
      name: "IPNU",
      description: "Spiritual growth through meaningful connections",
      fullDescription: "Ikatan Pelajar Nahdlatul Ulama fokus pada pengembangan spiritualitas, akhlak mulia, dan kepemimpinan Islami. Kegiatan meliputi kajian keislaman, bakti sosial, dan pengembangan karakter religius yang moderat."
    },
    {
      image: eksPKS,
      name: "PKS",
      description: "Responsible safety awareness through proactive school security duty",
      fullDescription: "PKS melatih kesadaran disiplin, tanggung jawab sosial, pengawasan lingkungan sekolah, serta kemampuan mengambil keputusan cepat dalam situasi tertentu. Anggota PKS ikut menjaga ketertiban, membantu keamanan lalu lintas sekolah, dan menjadi teladan dalam mentaati tata tertib demi menciptakan lingkungan sekolah yang aman dan tertib."
    },
    {
      image: eksOSIS,
      name: "OSIS",
      description: "Leadership development through collaborative organization strategy",
      fullDescription: "OSIS melatih siswa untuk menjadi pemimpin yang bertanggung jawab, mampu mengatur kegiatan sekolah, berkomunikasi efektif, dan bekerja dalam tim. Anggota OSIS terlibat dalam perencanaan program sekolah, representasi siswa, serta pengembangan karakter, sehingga mampu menjadi role model positif di lingkungan sekolah."
    },
  ];

  const documentationImages = [
    dokumentasi01,
    dokumentasi02,
    dokumentasi03,
    dokumentasi04,
    dokumentasi05,
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
          <h1 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Ekstrakurikuler
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in font-poppins" style={{ animationDelay: "0.2s" }}>
            Kembangkan bakat dan minatmu di luar jam pelajaran
          </p>
        </div>
      </section>

      {/* Extracurricular Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {extracurriculars.map((extra, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card
                    className="cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in group overflow-hidden bg-transparent"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-64 overflow-hidden rounded-xl">
                      <img
                        src={extra.image}
                        alt={extra.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="bg-[#27364A]/40 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                          <h3 className="font-poppins text-lg font-semibold text-white mb-1">
                            {extra.name}
                          </h3>
                          <p className="text-xs text-white/90 leading-tight font-poppins">
                            {extra.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl border-0 bg-white/95 backdrop-blur-md p-0 overflow-hidden">
                  <DialogHeader className="hidden">
                    <DialogTitle className="font-poppins text-2xl text-slate-800">
                      {extra.name}
                    </DialogTitle>
                  </DialogHeader>
                  
                  {/* Custom Close Button */}
                  <DialogClose asChild>
                    <button
                      className="absolute right-4 top-4 z-50 rounded-full bg-white/60 hover:bg-white/80 p-2 transition-all duration-220 ease-in-out hover:scale-112 active:scale-88 opacity-80 hover:opacity-100 border border-white/30"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </DialogClose>

                  <div className="space-y-0">
                    {/* Image with Overlay Title */}
                    <div className="relative h-80 w-full rounded-t-xl overflow-hidden">
                      <img
                        src={extra.image}
                        alt={extra.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <h3 className="font-poppins text-4xl font-bold text-white text-center px-4">
                          {extra.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4 p-6">
                      <div className="bg-sky-50/50 rounded-xl p-6 border border-sky-100">
                        <p className="text-slate-700 leading-relaxed text-base font-poppins">
                          {extra.fullDescription}
                        </p>
                      </div>
                      <div className="bg-[#27364A] rounded-xl p-4">
                        <p className="text-white text-lg font-semibold font-poppins text-center">
                          {extra.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery with Carousel */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl font-bold text-foreground mb-4">
              Dokumentasi Kegiatan
            </h2>
            <p className="text-muted-foreground text-lg font-poppins">
              Momen seru dari berbagai kegiatan ekstrakurikuler
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {documentationImages.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <img
                        src={img}
                        alt={`Aktivitas ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 backdrop-blur-sm border-0 hover:bg-white" />
            <CarouselNext className="right-2 bg-white/80 backdrop-blur-sm border-0 hover:bg-white" />
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ekstrakurikuler;