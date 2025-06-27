
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-l from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="/uploads/logo.png" alt="Logo" className="w-full h-full object-cover"/>
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold">الشباب المواطن</h3>
                <p className="text-sm opacity-90">راس العين سطات</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-md text-right">
              جمعية مكرسة لتنمية المواطنة لدى الشباب وتعزيز المشاركة المجتمعية 
              في منطقة سطات.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 space-x-reverse justify-end">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse justify-end">
                <span className="text-sm">راس العين، سطات، المغرب</span>
                <MapPin size={18} className="text-white/80" />
              </div>
              <div className="flex items-center space-x-3 space-x-reverse justify-end">
                <span className="text-sm">+212 6XX XXX XXX</span>
                <Phone size={18} className="text-white/80" />
              </div>
              <div className="flex items-center space-x-3 space-x-reverse justify-end">
                <span className="text-sm">contact@shabab-mowatin.org</span>
                <Mail size={18} className="text-white/80" />
              </div>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 جمعية الشباب المواطن راس العين سطات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
