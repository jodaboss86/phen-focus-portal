
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Users, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export const SafetyGuidelines = () => {
  const safetyGuidelines = [
    {
      icon: Clock,
      title: "Duration Guidelines",
      description: "Short-term use recommended due to tolerance development and potential for dependence",
      details: [
        "Maximum 12 weeks continuous use",
        "Re-evaluation required after initial period",
        "Drug holidays may be recommended"
      ]
    },
    {
      icon: Users,
      title: "Patient Selection",
      description: "Appropriate candidate screening is essential for safe and effective treatment",
      details: [
        "BMI ≥30 or ≥27 with comorbidities",
        "Failed previous weight loss attempts",
        "No contraindicated conditions"
      ]
    },
    {
      icon: AlertCircle,
      title: "Monitoring Requirements", 
      description: "Regular medical follow-up ensures patient safety and treatment efficacy",
      details: [
        "Monthly weight and vital signs",
        "Cardiovascular assessment",
        "Side effect evaluation"
      ]
    }
  ];

  const contraindications = [
    "Cardiovascular disease",
    "Uncontrolled hypertension", 
    "Hyperthyroidism",
    "Glaucoma",
    "History of drug abuse",
    "MAO inhibitor use",
    "Pregnancy/breastfeeding"
  ];

  const commonSideEffects = [
    "Dry mouth",
    "Insomnia", 
    "Increased heart rate",
    "Elevated blood pressure",
    "Nervousness",
    "Constipation",
    "Dizziness"
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-medical-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 font-playfair">
              Safety Guidelines
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Essential safety information for healthcare providers and patients considering phentermine therapy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {safetyGuidelines.map((guideline, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="bg-trust-100 p-3 rounded-lg mr-4">
                    <guideline.icon className="w-6 h-6 text-trust-600" />
                  </div>
                  {guideline.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{guideline.description}</p>
                <ul className="space-y-2">
                  {guideline.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-trust-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <XCircle className="w-6 h-6 mr-3" />
                Contraindications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4 text-sm">
                Phentermine should not be used in patients with the following conditions:
              </p>
              <ul className="space-y-2">
                {contraindications.map((contraindication, idx) => (
                  <li key={idx} className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-red-700 text-sm">{contraindication}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-800">
                <AlertCircle className="w-6 h-6 mr-3" />
                Common Side Effects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 mb-4 text-sm">
                Patients should be monitored for the following side effects:
              </p>
              <ul className="space-y-2">
                {commonSideEffects.map((effect, idx) => (
                  <li key={idx} className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-amber-700 text-sm">{effect}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
