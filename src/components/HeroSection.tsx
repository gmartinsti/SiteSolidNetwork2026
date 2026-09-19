
import { Play } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Falar com um especialista",
  ctaLink = "/contato",
  secondaryCtaText,
  secondaryCtaLink,
  image = "/lovable-uploads/deb3dff9-1285-42b1-946d-bec7f2d32805.png"
}: HeroSectionProps) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-slideInFromLeft">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800 w-fit">
              Agência Solid Network
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              {subtitle}
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <a
                href={ctaLink}
                className="inline-flex h-10 items-center justify-center rounded-md bg-solidPurple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-solidPurple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-solidPurple-400"
              >
                {ctaText}
              </a>
              {secondaryCtaText && (
                <a
                  href={secondaryCtaLink}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </div>
          <div className="relative flex items-center justify-center animate-fadeIn">
            <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-gray-50 to-white p-2 shadow-xl">
              <img
                src={image}
                alt="Social media apps"
                className="mx-auto w-full object-cover rounded-lg shadow-sm"
                width={550}
                height={310}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                  <Play className="h-5 w-5 fill-solidPurple-600 text-solidPurple-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
