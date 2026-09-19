
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Solution {
  title: string;
  description: string;
  image: string;
  link: string;
}

const solutions: Solution[] = [
  {
    title: "TypeTalk CRM",
    description: "Plataforma de atendimento multicanal integrada ao WhatsApp",
    image: "/lovable-uploads/dbef2982-52a4-4ecd-8083-83bda1ddf758.png",
    link: "/type-talk"
  },
  {
    title: "SolidSkye Backup",
    description: "Backup em nuvem com proteção contra ransomware",
    image: "/lovable-uploads/bda71f33-aeab-4a71-a901-ae809e24d11a.png",
    link: "/solidskye"
  },
  {
    title: "Sites por Assinatura",
    description: "Sites profissionais com entrega em até 7 dias",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/sites-assinatura"
  },
  {
    title: "Certificado Digital",
    description: "Certificados A1 e A3 com validade jurídica",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/certificado-digital"
  }
];

const FeaturedSolutions = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Soluções em Destaque</h2>
          <p className="mt-4 text-gray-600 text-lg">Conheça nossas principais soluções para sua empresa</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {solutions.map((solution, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Link to={solution.link} className="block h-full">
                  <Card className="h-full border-2 hover:border-solidPurple-400 transition-all duration-300 hover:shadow-xl overflow-hidden group">
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-solidPurple-700 group-hover:text-solidPurple-600 transition-colors">{solution.title}</CardTitle>
                      <CardDescription className="text-base">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full bg-solidPurple-600 hover:bg-solidPurple-700 transition-all group-hover:shadow-md">
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static bg-solidPurple-100 hover:bg-solidPurple-200 text-solidPurple-600 border-solidPurple-300" />
            <CarouselNext className="relative static bg-solidPurple-100 hover:bg-solidPurple-200 text-solidPurple-600 border-solidPurple-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
