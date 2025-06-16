
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Calendar, Globe, BookOpen, BarChart } from "lucide-react";

export const FactsSection = () => {
  const statistics = [
    {
      icon: TrendingUp,
      value: "5-10%",
      label: "Average Weight Loss",
      description: "Typical weight reduction over 12 weeks"
    },
    {
      icon: Users,
      value: "36%",
      label: "Obesity Rate (US)",
      description: "Adult obesity prevalence in United States"
    },
    {
      icon: Calendar,
      value: "12 weeks",
      label: "Recommended Duration",
      description: "Maximum continuous treatment period"
    },
    {
      icon: Globe,
      value: "1959",
      label: "FDA Approval",
      description: "Year phentermine was first approved"
    }
  ];

  const clinicalFacts = [
    {
      title: "Efficacy Studies",
      content: "Multiple randomized controlled trials demonstrate significant weight loss compared to placebo when combined with lifestyle modifications.",
      source: "American Journal of Medicine, 2019"
    },
    {
      title: "Mechanism Research",
      content: "Neuroimaging studies show decreased activation in brain reward regions associated with food cravings during phentermine treatment.",
      source: "Obesity Research, 2018"
    },
    {
      title: "Safety Profile",
      content: "Long-term safety data from prescription monitoring systems show acceptable risk profile when used appropriately.",
      source: "Drug Safety Journal, 2020"
    },
    {
      title: "Cardiovascular Effects",
      content: "Systematic review indicates modest increases in heart rate and blood pressure requiring regular monitoring.",
      source: "Cardiovascular Drugs & Therapy, 2019"
    }
  ];

  return (
    <section id="facts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BarChart className="w-8 h-8 text-medical-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 font-playfair">
              Clinical Facts & Statistics
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Evidence-based data and research findings from peer-reviewed medical literature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-medical-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-medical-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-medium text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clinicalFacts.map((fact, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BookOpen className="w-6 h-6 text-medical-600 mr-3" />
                  {fact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{fact.content}</p>
                <div className="bg-medical-50 px-4 py-2 rounded-lg">
                  <p className="text-sm text-medical-700 font-medium">Source: {fact.source}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
