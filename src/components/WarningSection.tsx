
import { AlertTriangle, Phone, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const WarningSection = () => {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-red-200 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-red-800 mb-4 font-playfair">
                Important Safety Warning
              </h2>
              <p className="text-red-700 text-lg leading-relaxed">
                Phentermine is a controlled substance that requires careful medical supervision. 
                This information is for educational purposes only and does not constitute medical advice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-red-800 mb-2">Consult Healthcare Provider</h3>
                <p className="text-red-700 text-sm">Always speak with a qualified physician before considering phentermine</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-red-800 mb-2">Regular Monitoring</h3>
                <p className="text-red-700 text-sm">Ongoing medical supervision is required throughout treatment</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-red-800 mb-2">Report Side Effects</h3>
                <p className="text-red-700 text-sm">Immediately report any adverse reactions to your doctor</p>
              </div>
            </div>

            <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-red-800 mb-3">Emergency Contact Information</h3>
              <p className="text-red-700 text-sm mb-3">
                If you experience serious side effects such as chest pain, difficulty breathing, 
                or severe headaches, seek immediate medical attention or call emergency services.
              </p>
              <div className="text-red-700 text-sm">
                <strong>Poison Control:</strong> 1-800-222-1222<br/>
                <strong>Emergency:</strong> 911
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Find Healthcare Provider
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
