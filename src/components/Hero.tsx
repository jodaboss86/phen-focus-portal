
import { Shield, AlertTriangle, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="medical-gradient py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="trust-badge mb-6 px-4 py-2 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Medically Reviewed Information
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair animate-fade-in">
            Phentermine
            <span className="block text-medical-600">Medical Guide</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive, evidence-based information about phentermine weight loss medication. 
            Understanding benefits, risks, and proper medical supervision for safe treatment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Medical Guide
            </Button>
            <Button size="lg" variant="outline" className="border-medical-600 text-medical-600 hover:bg-medical-50 px-8 py-3">
              <Heart className="w-5 h-5 mr-2" />
              Safety Information
            </Button>
          </div>

          {/* Warning notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <h3 className="font-semibold text-amber-800 mb-2">Important Medical Disclaimer</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  This website provides educational information only and should not replace professional medical advice. 
                  Phentermine is a prescription medication that requires medical supervision. Always consult with a 
                  qualified healthcare provider before starting any weight loss medication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
