
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from './ui/button';
import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  features: ServiceFeature[];
  benefits?: ServiceBenefit[];
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = title,
  features,
  benefits = [],
  ctaText = "Fale com um especialista",
  ctaLink = "/contato",
  backgroundColor = "bg-solidPurple-50"
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className={`py-16 ${backgroundColor}`}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xl text-gray-700 font-medium">
                    {subtitle}
                  </p>
                )}
                <p className="text-gray-700 md:text-xl">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link to={ctaLink}>
                    <Button variant="purple">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      {ctaText}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="mx-auto rounded-lg shadow-xl object-cover aspect-video"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Funcionalidades
              </h2>
              <p className="mt-4 text-gray-700 md:text-lg">
                Descubra como nosso serviço pode transformar seu negócio
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  {feature.icon && <div className="mb-4">{feature.icon}</div>}
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section - Only show if benefits are provided */}
        {benefits.length > 0 && (
          <section className="py-16 bg-solidPurple-50">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Benefícios
                </h2>
                <p className="mt-4 text-gray-700 md:text-lg">
                  Vantagens que nosso serviço oferece para seu negócio
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                    <div className="bg-solidPurple-100 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-solidPurple-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-solidPurple-800 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="md:text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje e descubra como podemos ajudar sua empresa a crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ctaLink}>
                <Button variant="white-purple">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Falar com especialista
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
