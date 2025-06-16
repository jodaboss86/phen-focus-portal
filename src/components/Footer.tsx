
import { Stethoscope, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Stethoscope className="h-8 w-8 text-medical-500" />
              <span className="text-2xl font-bold font-playfair">Phentermine.com</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Authoritative medical information about phentermine weight loss medication. 
              Providing evidence-based resources for healthcare providers and patients.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Medical Information Resource Center</span>
            </div>
          </div>

          {/* Medical Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Medical Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Clinical Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Drug Interactions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Prescribing Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Patient Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Professional</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Healthcare Providers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Medical Advisory Board
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Medical Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-400 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Medical Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Phentermine.com. All rights reserved. Medical information for educational purposes only.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-medical-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-medical-400 transition-colors">Medical Disclaimer</a>
              <a href="#" className="text-gray-400 hover:text-medical-400 transition-colors">Terms of Use</a>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for educational and informational purposes only. 
              It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your 
              physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard 
              professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
