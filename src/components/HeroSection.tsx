
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Zap, FileCheck, CheckCircle, FileText } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
                <span className="text-blue-600">5 minutos</span> para enquadrar seu
                <span className="text-green-600"> licenciamento ambiental</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-2 sm:px-0">
                Receba pelo WhatsApp: enquadramento preliminar, check-list personalizado e 
                modelos de documentos técnicos. Tudo automatizado por IA em menos de 5 minutos.
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg" asChild>
                <a href="#precos">Ver planos</a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg" asChild>
                <a href="#como-funciona">Testar Grátis no WhatsApp →</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 px-2 sm:px-0">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Comece agora mesmo, sem burocracias
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Resultado instantâneo
              </div>
            </div>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enquadramento em 5 Minutos</h3>
                                      <p className="text-gray-600 text-base">
                      IA analisa seu empreendimento e determina qual licença ambiental é necessária
                    </p>
                  <div className="text-sm text-green-600 font-medium mt-2">Economiza: 2 horas*</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Check-list Automatizado</h3>
                                      <p className="text-gray-600 text-base">
                      Lista personalizada de documentos baseada na legislação do seu estado
                    </p>
                  <div className="text-sm text-blue-600 font-medium mt-2">Economiza: 8 horas*</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modelos de Documentos</h3>
                                      <p className="text-gray-600 text-base">
                      Templates técnicos estruturados para o tipo de licença específica
                    </p>
                  <div className="text-sm text-purple-600 font-medium mt-2">Economiza: 10-20 horas*</div>
                </div>
              </div>
            </div>
            
            {/* Badge moved from left column */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Economize 20-30+ horas por projeto*
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
