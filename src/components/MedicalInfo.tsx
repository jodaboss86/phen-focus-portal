
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Pill, Heart, Brain, Target, AlertTriangle } from "lucide-react";

export const MedicalInfo = () => {
  const medicalTopics = [
    {
      icon: Pill,
      title: "Mechanism of Action",
      content: "Phentermine works as a sympathomimetic amine that suppresses appetite by affecting neurotransmitters in the brain, specifically norepinephrine, serotonin, and dopamine pathways.",
      keyPoints: ["Appetite suppression", "Increased energy expenditure", "Central nervous system stimulation"]
    },
    {
      icon: Target,
      title: "Clinical Efficacy", 
      content: "Clinical studies demonstrate significant weight loss when combined with lifestyle modifications. Average weight loss ranges from 5-10% of initial body weight over 12 weeks.",
      keyPoints: ["5-10% average weight loss", "Most effective first 12 weeks", "Requires lifestyle changes"]
    },
    {
      icon: Heart,
      title: "Cardiovascular Monitoring",
      content: "Regular cardiovascular assessment is essential due to potential effects on heart rate and blood pressure. Contraindicated in certain cardiac conditions.",
      keyPoints: ["Blood pressure monitoring", "Heart rate assessment", "ECG when indicated"]
    },
    {
      icon: Brain,
      title: "Contraindications",
      content: "Not suitable for patients with history of cardiovascular disease, hyperthyroidism, glaucoma, or history of drug abuse. Pregnancy and breastfeeding are absolute contraindications.",
      keyPoints: ["Cardiovascular disease", "Pregnancy/breastfeeding", "History of substance abuse"]
    }
  ];

  return (
    <section id="medical-info" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Stethoscope className="w-8 h-8 text-medical-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 font-playfair">
              Medical Information
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive medical overview of phentermine based on current clinical evidence and FDA guidelines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {medicalTopics.map((topic, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="bg-medical-100 p-3 rounded-lg mr-4">
                    <topic.icon className="w-6 h-6 text-medical-600" />
                  </div>
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{topic.content}</p>
                <ul className="space-y-2">
                  {topic.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Prescription Medication Notice</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                Phentermine is a controlled substance (Schedule IV) that requires a prescription from a licensed healthcare provider. 
                It should only be used under medical supervision with regular monitoring for safety and efficacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
