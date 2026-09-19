
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Node4HealthBanner from "@/components/home/Node4HealthBanner";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const Index = () => {
  return (
    <div className="sn-page min-h-screen flex flex-col bg-[#F7F6FB]">
      <Navbar />
      
      <main className="flex-1">
        {/* Node4Health Banner - principal */}
        <Node4HealthBanner />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
