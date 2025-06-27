import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              أهلاً وسهلاً بكم في جمعية الشباب المواطن
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نحن ملتزمون بتنمية الشباب وتعزيز القيم المواطنة في مجتمعنا بمنطقة
              راس العين، سطات.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              فيديو تعريفي
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              شاهد فيديو تعريفي عن جمعيتنا وأنشطتنا المختلفة
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-scale-up">
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-200 aspect-video">
              <video className="w-full h-full object-cover" controls>
                <source
                  src="/uploads/home/VID-20250626-WA0020.mp4"
                  type="video/mp4"
                />
                متصفحك لا يدعم تشغيل الفيديو
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Preview */}
            <div className="text-center animate-scale-up bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">من</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                من نحن
              </h3>
              <p className="text-gray-600 mb-6">
                اكتشف رسالتنا وقيمنا والتقِ بفريق الأعضاء المتفانين لدينا.
              </p>
              <Link
                to="/about"
                className="inline-block bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                اعرف المزيد
              </Link>
            </div>

            {/* Partners Preview */}
            <div
              className="text-center animate-scale-up bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">ش</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                شركاؤنا
              </h3>
              <p className="text-gray-600 mb-6">
                استكشف تعاوننا مع المؤسسات والمنظمات المحلية.
              </p>
              <Link
                to="/partners"
                className="inline-block bg-secondary hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                شاهد شركاءنا
              </Link>
            </div>

            {/* Contact Preview */}
            <div
              className="text-center animate-scale-up bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">ت</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                تواصل معنا
              </h3>
              <p className="text-gray-600 mb-6">
                تواصل معنا للانضمام إلى جمعيتنا أو لأي استفسار.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
