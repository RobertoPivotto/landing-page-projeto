
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Pare de perder tempo com licenciamento
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Teste agora mesmo pelo WhatsApp. Em 5 minutos você vai ter tudo que precisa 
            para começar seu próximo projeto de licenciamento ambiental.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">Grátis</div>
            <div className="text-green-100">Primeiro teste sem custo</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">5 min</div>
            <div className="text-green-100">Para ter tudo pronto</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">15h+</div>
            <div className="text-green-100">Economizadas por projeto</div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mb-8">
          <Button 
            size="lg" 
            className="bg-white text-green-700 hover:bg-gray-100 px-10 py-4 text-xl font-semibold rounded-xl shadow-xl"
          >
            <Smartphone className="w-6 h-6 mr-2" />
            Testar Grátis no WhatsApp
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
          <p className="text-green-100 text-sm mt-4">
            Sem cadastro • Sem cartão de crédito • Resultado instantâneo
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">O que você vai receber:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold">Enquadramento Preliminar</div>
                <div className="text-green-100 text-sm">Qual licença seu empreendimento precisa</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold">Check-list Personalizado</div>
                <div className="text-green-100 text-sm">Documentos necessários para sua atividade</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold">Modelos de Documentos</div>
                <div className="text-green-100 text-sm">Templates técnicos estruturados</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold">Segurança Jurídica</div>
                <div className="text-green-100 text-sm">Baseado na legislação atualizada</div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="border border-white/20 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Quantas horas você perdeu esta semana?</span>
          </div>
          <p className="text-green-100 text-sm">
            Enquanto você pesquisa legislação e estrutura documentos manualmente, 
            outros consultores já estão economizando 15+ horas por projeto.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center text-green-100">
              <CheckCircle className="w-5 h-5 mr-2" />
              Dados 100% seguros
            </div>
            <div className="flex items-center text-green-100">
              <CheckCircle className="w-5 h-5 mr-2" />
              Legislação sempre atualizada
            </div>
            <div className="flex items-center text-green-100">
              <CheckCircle className="w-5 h-5 mr-2" />
              Suporte especializado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
