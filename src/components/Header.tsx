import React from 'react';
import { Button } from '@/components/ui/button';
const Header = () => {
  return <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/66c2cfda-c756-4f79-9175-30bcdd51e7ea.png" alt="Licenc.IA" className="h-16 sm:h-24 md:h-32 w-auto object-fill" />
          </div>

          {/* Navigation */}
          <nav className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
            <a href="#recursos" className="text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base hidden sm:inline">
              Recursos
            </a>
            <a href="#como-funciona" className="text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base">
              Como Funciona
            </a>
            <a href="#precos" className="text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base">
              Preços
            </a>
            <a href="#sobre" className="text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base hidden sm:inline">
              Sobre
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-green-600 text-xs sm:text-sm px-1 sm:px-2 md:px-4 hidden sm:inline-flex">
              Entrar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-2 sm:px-3 md:px-6 text-xs sm:text-sm">
              Criar conta
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;