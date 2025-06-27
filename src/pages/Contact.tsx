
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">تواصل معنا</h1>
            <div className="w-24 h-1 bg-gradient-to-l from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              لا تترد في التواصل معنا لأي استفسار أو للانضمام إلى جمعيتنا.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-right">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-right"
                    placeholder="اسمك"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-right"
                    placeholder="موضوع الرسالة"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-vertical text-right"
                    placeholder="رسالتك..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="animate-scale-up">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-right">معلومات التواصل</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold text-gray-800">العنوان</h3>
                    <p className="text-gray-600">راس العين، سطات، المغرب</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold text-gray-800">الهاتف</h3>
                    <p className="text-gray-600">+212 6XX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold text-gray-800">البريد الإلكتروني</h3>
                    <p className="text-gray-600">contact@shabab-mowatin.org</p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.103107047878!2d-7.612361!3d33.001135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63e51ec8cb9a3%3A0x6eae8f0580a3456f!2z2KfZhNix2YrYqSDYp9mE2LnYp9ivINin2YTZg9iq2Yog2KfZhNis2K_Yp9iqINmE2YTYp9mE2KfZhQ!5e0!3m2!1sar!2sma!4v1719413812601!5m2!1sar!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
