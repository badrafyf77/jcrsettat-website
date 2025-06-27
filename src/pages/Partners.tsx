
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Enabel",
      logo: "/uploads/partners/enabel.jpg",
      description: "الوكالة البلجيكية للتنمية، تعمل على تنفيذ سياسة التنمية الدولية لبلجيكا من خلال مشاريع في مختلف أنحاء العالم"
    },
    {
      id: 2,
      name: "Union Europeenne",
      logo: "/uploads/partners/union-eu.jpg",
      description: "الاتحاد الأوروبي، اتحاد سياسي واقتصادي يضم 27 دولة أوروبية، ويدعم مشاريع التنمية حول العالم"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">شركاؤنا</h1>
            <div className="w-24 h-1 bg-gradient-to-l from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نعمل بالتعاون مع مختلف المؤسسات والمنظمات 
              لتعظيم أثرنا في المجتمع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-32 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
