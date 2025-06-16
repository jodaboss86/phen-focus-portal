
import { Shield, Stethoscope, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-medical-600" />
            <span className="text-xl font-bold text-gray-900 font-playfair">Phentermine.com</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#medical-info" className="text-gray-700 hover:text-medical-600 transition-colors font-medium">
              Medical Information
            </a>
            <a href="#safety" className="text-gray-700 hover:text-medical-600 transition-colors font-medium">
              Safety Guidelines
            </a>
            <a href="#facts" className="text-gray-700 hover:text-medical-600 transition-colors font-medium">
              Scientific Facts
            </a>
            <Button className="bg-medical-600 hover:bg-medical-700 text-white">
              <Shield className="w-4 h-4 mr-2" />
              Consult Doctor
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#medical-info" className="text-gray-700 hover:text-medical-600 transition-colors font-medium">
                Medical Information
              </a>
              <a href="#safety" className="text-gray-700 hover:text-medical-600 transition-colors font-medium">
                Safety Guidelines
              </a>
              <a href="#facts" className="text-gray-700 hover:text-medical-600 transition-colors font-medium">
                Scientific Facts
              </a>
              <Button className="bg-medical-600 hover:bg-medical-700 text-white w-full">
                <Shield className="w-4 h-4 mr-2" />
                Consult Doctor
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
