import React from 'react';
import { Button } from '@/components/ui/button';
const Header = () => {
  return <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/66c2cfda-c756-4f79-9175-30bcdd51e7ea.png" alt="Licenc.IA" className="h-32 w-auto object-fill" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#recursos" className="text-gray-600 hover:text-green-600 transition-colors">
              Recursos
            </a>
            <a href="#precos" className="text-gray-600 hover:text-green-600 transition-colors">
              Preços
            </a>
            <a href="#sobre" className="text-gray-600 hover:text-green-600 transition-colors">
              Sobre
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-green-600">
              Entrar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
              Criar conta
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;