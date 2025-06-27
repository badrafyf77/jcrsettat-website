
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Members from "@/components/Members";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* About Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                عن جمعيتنا
              </h1>
              <div className="w-24 h-1 bg-gradient-to-l from-primary to-secondary mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slide-in">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed text-right">
                  جمعية الشباب المواطن راس العين سطات نوطس مكرسة لتنمية الشباب 
                  وتعزيز القيم المواطنة في مجتمعنا. نعمل على خلق بيئة مناسبة 
                  للتنمية الشخصية والجماعية.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed text-right">
                  مهمتنا هي تعزيز المشاركة المواطنة والتعليم والعمل المجتمعي 
                  بين شباب سطات ونواحيها.
                </p>
              </div>
              
              <div className="animate-scale-up">
                <img
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop"
                  alt="مجتمعنا"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="animate-fade-in text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">م</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">المواطنة</h3>
                <p className="text-gray-600">
                  تكوين مواطنين مسؤولين ومشاركين في مجتمعهم
                </p>
              </div>

              <div className="animate-fade-in text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ش</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">الشباب</h3>
                <p className="text-gray-600">
                  تمكين الشباب وتطوير إمكاناتهم القيادية
                </p>
              </div>

              <div className="animate-fade-in text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">م</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">المجتمع</h3>
                <p className="text-gray-600">
                  تقوية الروابط الاجتماعية وتعزيز التعاون
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Members />
      <Footer />
    </div>
  );
};

export default About;
