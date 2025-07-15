
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 px-2 sm:px-4">
            Otimize o tempo no licenciamento ambiental
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed px-2 sm:px-4">
            Teste agora mesmo pelo WhatsApp. Em 5 minutos você vai ter tudo que precisa 
            para começar seu próximo projeto de licenciamento ambiental.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">Grátis</div>
            <div className="text-gray-600">Primeiro teste sem custo</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">5 min</div>
            <div className="text-gray-600">Para ter tudo pronto</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">20-30h+</div>
            <div className="text-gray-600">Economizadas por projeto</div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mb-8 px-2 sm:px-0">
          <Button 
            size="lg" 
            className="bg-green-600 text-white hover:bg-green-700 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-xl shadow-xl"
          >
            <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
            Testar Grátis no WhatsApp
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1 sm:ml-2" />
          </Button>
          <p className="text-gray-600 text-xs sm:text-sm mt-4 px-2 sm:px-0">
            Sem cadastro • Sem cartão de crédito • Resultado instantâneo
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">O que você vai receber:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Enquadramento Preliminar</div>
                <div className="text-gray-600 text-sm">Qual licença seu empreendimento precisa</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Check-list Personalizado</div>
                <div className="text-gray-600 text-sm">Documentos necessários para sua atividade</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Modelos de Documentos</div>
                <div className="text-gray-600 text-sm">Templates técnicos estruturados</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Segurança Jurídica</div>
                <div className="text-gray-600 text-sm">Baseado na legislação atualizada</div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-center border-t border-gray-100 pt-4">
            Enquanto você pesquisa legislação e estrutura documentos manualmente, 
            outros consultores já estão economizando 20-30+ horas por projeto*.
          </p>
                </div>

        {/* Trust Indicators */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Dados 100% seguros
            </div>
            <div className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Legislação sempre atualizada
            </div>
            <div className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Suporte especializado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

