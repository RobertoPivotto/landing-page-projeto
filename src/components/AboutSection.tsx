import React from 'react';
import { CheckCircle, Zap, Target, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 px-4">
            Sobre a Licenc.IA
          </h2>
          
          {/* Two-column description */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-lg text-gray-600 text-left">
                Facilitamos o licenciamento ambiental com inteligência artificial, 
                transformando horas de trabalho manual em minutos de eficiência.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-2 flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-lg text-gray-600 text-left">
                Nossa IA foi treinada com milhares de processos reais,
                legislação atualizada e melhores práticas do setor,
                permitindo gerar a documentação em minutos.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Objetivo */}
          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-8 border border-green-100">
              <div className="flex items-start space-x-3">
                <Target className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nosso Objetivo</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Economizar milhares de horas de trabalho dos consultores ambientais, 
                    permitindo que foquem no que realmente importa: análise técnica e 
                    relacionamento com clientes.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mt-4">
                    Automatizamos processos burocráticos para que você dedique seu tempo 
                    ao que gera mais valor para seus projetos e clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - How it works */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">Como Funciona</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Análise Inteligente</h4>
                  <p className="text-gray-600">
                    Você envia as informações do projeto e nossa IA analisa 
                    automaticamente o enquadramento necessário
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Legislação Atualizada</h4>
                  <p className="text-gray-600">
                    Cruzamos com nossa base de dados sempre atualizada da 
                    legislação ambiental brasileira
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Documentação Completa</h4>
                  <p className="text-gray-600">
                    Geramos todos os documentos, check-lists e modelos 
                    necessários para o processo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Por que escolher a Licenc.IA?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Precisão</h4>
              <p className="text-gray-600 text-sm">
                IA treinada com casos reais
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Velocidade</h4>
              <p className="text-gray-600 text-sm">
                Resultados em minutos, não semanas
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Atualização</h4>
              <p className="text-gray-600 text-sm">
                Base de dados sempre atualizada
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Suporte</h4>
              <p className="text-gray-600 text-sm">
                Equipe especializada para dúvidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 