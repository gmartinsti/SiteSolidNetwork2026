
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      title: "Como o CRM via WhatsApp pode transformar seu atendimento ao cliente",
      category: "CRM",
      date: "10/05/2024",
      excerpt: "Descubra como integrar o WhatsApp ao seu CRM pode melhorar a experiência do cliente e aumentar suas conversões.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "5 estratégias de tráfego pago que realmente funcionam em 2024",
      category: "Tráfego Pago",
      date: "02/05/2024",
      excerpt: "Conheça as melhores práticas e estratégias para maximizar seu ROI em campanhas de tráfego pago.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Gestão Smart: como otimizar processos e aumentar a produtividade",
      category: "Gestão Smart",
      date: "25/04/2024",
      excerpt: "Aprenda a implementar técnicas de gestão inteligente para melhorar a eficiência da sua empresa.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Como escolher a melhor solução de automação comercial para seu negócio",
      category: "Automação Comercial",
      date: "18/04/2024",
      excerpt: "Um guia completo para ajudar você a selecionar a ferramenta de automação comercial ideal para suas necessidades.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Tendências de desenvolvimento web para ficar de olho em 2024",
      category: "Desenvolvimento Web",
      date: "10/04/2024",
      excerpt: "Conheça as principais tendências em desenvolvimento web que estão moldando o futuro digital.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "7 dicas para uma gestão eficiente de mídias sociais",
      category: "Gestão de Mídias",
      date: "03/04/2024",
      excerpt: "Estratégias práticas para melhorar sua presença nas redes sociais e engajar seu público-alvo.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    }
  ];
  
  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Blog SolidNetwork
              </h1>
              <p className="text-gray-700 md:text-xl mb-8">
                Dicas, tendências e novidades sobre marketing digital, desenvolvimento web e tecnologia
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Pesquisar artigos..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-solidPurple-600 bg-solidPurple-50 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 text-solidPurple-600">
                      Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold mb-2">Nenhum resultado encontrado</h3>
                <p className="text-gray-600">Tente buscar por outros termos ou categorias</p>
              </div>
            )}
            
            {!searchQuery && (
              <div className="text-center mt-10">
                <Button className="bg-solidPurple-600 hover:bg-solidPurple-700">
                  Ver mais artigos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Inscreva-se em nossa newsletter</h2>
              <p className="text-gray-600 mb-6">
                Receba nossas novidades, artigos e dicas diretamente no seu email
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <Input type="email" placeholder="Seu melhor email" className="flex-1" />
                <Button className="bg-solidPurple-600 hover:bg-solidPurple-700">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-solidPurple-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Precisa de ajuda com seu projeto?
            </h2>
            <p className="md:text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos impulsionar seu negócio digital.
            </p>
            <Link to="/contato">
              <Button className="bg-white text-solidPurple-600 hover:bg-gray-100">
                <MessageSquare className="mr-2 h-4 w-4" />
                Falar com um especialista
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
