import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, PlayCircle, Shield, Key, BadgeCheck } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import SiteOverviewVideoDialog from "./SiteOverviewVideoDialog";

interface SlideProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  videoThumbnail?: string;
  color: string;
}

const slides: SlideProps[] = [
  {
    title: "CRM via WhatsApp",
    subtitle: "TypeTalk",
    description: "Conecte suas equipes com clientes e leads através de uma plataforma integrada ao WhatsApp, Instagram Direct e Facebook Messenger",
    ctaText: "Conheça o TypeTalk",
    ctaLink: "/type-talk",
    mediaType: 'video',
    mediaSrc: "https://www.youtube.com/embed/EgYqC5r0jw4",
    videoThumbnail: "/lovable-uploads/dbef2982-52a4-4ecd-8083-83bda1ddf758.png",
    color: "bg-gradient-to-r from-purple-700 to-indigo-700"
  },
  {
    title: "Certificado Digital",
    subtitle: "AR PULSE CERTIFICAÇÃO",
    description: "Escolha entre Certificados A1 (software) ou A3 (token/cartão) para garantir segurança e validade jurídica em suas operações digitais",
    ctaText: "Monte seu Certificado",
    ctaLink: "/certificado-digital",
    mediaType: 'image',
    mediaSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-r from-blue-700 to-solidPurple-700"
  },
  {
    title: "Sites por Assinatura",
    subtitle: "Sites para Saúde",
    description: "Já imaginou ter um site profissional, moderno e totalmente adaptado à área da saúde, com entrega em até 7 dias e investimento a partir de apenas R$350,00 por mês?",
    ctaText: "Conhecer Planos",
    ctaLink: "/sites-assinatura",
    mediaType: 'video',
    mediaSrc: "https://www.youtube.com/embed/HtZJTAfvbEc",
    videoThumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-r from-blue-600 to-emerald-500"
  },
  {
    title: "SolidSkye Backup",
    subtitle: "Backup em nuvem",
    description: "Proteja os dados da sua empresa com nossa solução de backup em nuvem segura e confiável, com proteção contra ransomware",
    ctaText: "Conheça o SolidSkye",
    ctaLink: "/solidskye",
    mediaType: 'video',
    mediaSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-r from-blue-600 to-cyan-500"
  },
  {
    title: "Desenvolvimento Web",
    subtitle: "Sites profissionais",
    description: "Criamos sites responsivos e otimizados para SEO que convertem visitantes em clientes, com hospedagem e e-mail incluídos",
    ctaText: "Nossos projetos",
    ctaLink: "/servicos/desenvolvimento-web",
    mediaType: 'video',
    mediaSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "/lovable-uploads/b6eadbd7-e5ee-49a0-829f-b09aafba24c8.png",
    color: "bg-gradient-to-r from-emerald-500 to-teal-500"
  },
  {
    title: "Gestão ERP",
    subtitle: "Especialistas em TI",
    description: "Conte com profissionais especializados para gerenciar e otimizar seu sistema ERP, garantindo maior produtividade e eficiência",
    ctaText: "Conheça nossos serviços",
    ctaLink: "/servicos/gestao-smart",
    mediaType: 'video',
    mediaSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-r from-blue-700 to-indigo-800"
  },
  {
    title: "Solid DNS",
    subtitle: "Gestão de domínios",
    description: "Gerencie facilmente seus domínios com nossa solução de DNS rápida, segura e confiável, com proteção contra ataques DDoS",
    ctaText: "Conheça o Solid DNS",
    ctaLink: "/solid-dns",
    mediaType: 'video',
    mediaSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-r from-emerald-500 to-teal-500"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [overviewDialogOpen, setOverviewDialogOpen] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    if (videoPlaying) return;
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (videoPlaying) return;
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const startAutoSlideInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!videoPlaying) {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, 90000);
    }
  };

  useEffect(() => {
    if (videoPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      startAutoSlideInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [videoPlaying]);

  useEffect(() => {
    setVideoPlaying(false);
    startAutoSlideInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <section className="relative h-[calc(50vh)] w-full overflow-hidden">
      <SiteOverviewVideoDialog
        open={overviewDialogOpen}
        onOpenChange={setOverviewDialogOpen}
      />
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full flex items-center transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 translate-x-0 pointer-events-auto" 
              : index < currentSlide 
                ? "opacity-0 -translate-x-full pointer-events-none"
                : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className={`absolute inset-0 ${slide.color} opacity-90`}></div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white space-y-6 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-sm md:text-xl font-semibold uppercase tracking-wider">{slide.subtitle}</h2>
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight">{slide.title}</h1>
              <p className="text-base md:text-xl text-white/90 max-w-xl leading-relaxed">{slide.description}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to={slide.ctaLink}>
                  <Button variant="white-purple" className="text-base px-6 py-2 h-auto font-semibold rounded-lg">
                    {slide.ctaText}
                  </Button>
                </Link>
                <Link to="/agendamento">
                  <Button 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/20 text-base px-6 py-2 h-auto font-semibold rounded-lg"
                  >
                    Agendar Demonstração
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-lg">
                {slide.mediaType === 'video' ? (
                  <button
                    className="relative w-full aspect-video group"
                    type="button"
                    aria-label="Assistir vídeo amplo"
                    onClick={() => setOverviewDialogOpen(true)}
                  >
                    <img 
                      src={slide.videoThumbnail || slide.mediaSrc}
                      alt={slide.title}
                      className="w-full h-auto object-cover rounded-lg shadow-2xl aspect-video"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-20 h-20 text-white drop-shadow-xl group-hover:scale-110 group-hover:text-solidPurple-400 transition-transform duration-200" />
                    </span>
                  </button>
                ) : (
                  <img 
                    src={slide.videoThumbnail || slide.mediaSrc} 
                    alt={slide.title}
                    className="w-full max-w-lg h-auto object-cover rounded-lg shadow-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button 
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm text-white ${videoPlaying ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        onClick={prevSlide}
        disabled={videoPlaying}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <button 
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm text-white ${videoPlaying ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        onClick={nextSlide}
        disabled={videoPlaying}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            } h-3 rounded-full transition-all ${videoPlaying ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={() => !videoPlaying && setCurrentSlide(index)}
            disabled={videoPlaying}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
