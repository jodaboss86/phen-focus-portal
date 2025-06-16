
import { Award, Users, BookOpen, Shield } from "lucide-react";

export const TrustSection = () => {
  const trustMetrics = [
    {
      icon: Award,
      label: "Medical Advisory Board",
      value: "Board Certified",
      description: "Reviewed by licensed physicians"
    },
    {
      icon: Users,
      label: "Patients Educated",
      value: "500K+",
      description: "Informed decision making"
    },
    {
      icon: BookOpen,
      label: "Research Citations",
      value: "200+",
      description: "Peer-reviewed studies"
    },
    {
      icon: Shield,
      label: "Safety First",
      value: "FDA Guidelines",
      description: "Compliant information"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
            Trusted Medical Authority
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Evidence-based information backed by medical professionals and scientific research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-medical-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-100 transition-colors">
                <metric.icon className="w-8 h-8 text-medical-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="font-medium text-gray-700 mb-2">{metric.label}</div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
