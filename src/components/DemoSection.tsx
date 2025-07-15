import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, User, Clock, FileText, Smartphone, MessageSquare, Zap } from 'lucide-react';

const DemoSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Centralizado */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Veja como funciona na <span className="text-green-600">prática</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Envie as informações do seu empreendimento pelo WhatsApp e receba 
            em minutos tudo que precisa para iniciar o licenciamento.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Column - Demo Features */}
          <div className="flex flex-col h-full">

            {/* Demo Features */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                <div className="flex items-start space-x-4 h-full">
                  <div className="bg-green-100 rounded-lg p-3">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">1. Envie seus dados</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Descreva sua atividade, localização e porte do empreendimento 
                        em uma mensagem simples no WhatsApp.
                      </p>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium w-fit">
                      <Clock className="w-4 h-4 mr-1" />
                      Economiza: 2 minutos
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                <div className="flex items-start space-x-4 h-full">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">2. IA processa instantaneamente</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Nossa IA analisa sua atividade, consulta a legislação do estado 
                        e determina qual licença você precisa.
                      </p>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium w-fit">
                      <Clock className="w-4 h-4 mr-1" />
                      Economiza: 1 minuto
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                <div className="flex items-start space-x-4 h-full">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">3. Receba tudo pronto</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Enquadramento preliminar, check-list personalizado e modelos 
                        de documentos chegam no seu WhatsApp.
                      </p>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium w-fit">
                      <Clock className="w-4 h-4 mr-1" />
                      Economiza: 2 minutos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - WhatsApp Interface */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col">
            {/* WhatsApp Header */}
            <div className="bg-green-600 px-6 py-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/Capa LicencIA.png" 
                  alt="Licenc.IA Logo" 
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">Licenc.IA</h4>
                <p className="text-green-100 text-sm">Assistente de Licenciamento</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 flex-1 overflow-y-auto bg-gray-50 min-h-[350px]">
              <div className="flex justify-end">
                <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Olá! Preciso fazer licenciamento para uma metalúrgica de pequeno porte 
                    em São Paulo. Qual licença preciso?
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/lovable-uploads/Capa LicencIA.png" 
                    alt="Licenc.IA" 
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                  <p className="text-sm text-gray-800">
                    ✅ Analisando sua atividade...<br/>
                    📍 Estado: São Paulo<br/>
                    🏭 Atividade: Metalurgia<br/>
                    📏 Porte: Pequeno
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/lovable-uploads/Capa LicencIA.png" 
                    alt="Licenc.IA" 
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                  <p className="text-sm text-gray-800">
                    📋 <strong>Enquadramento:</strong> Licença Prévia (LP)<br/>
                    📄 Gerando check-list personalizado...<br/>
                    📝 Preparando modelos de documentos...
                  </p>
                  <div className="mt-2 p-2 bg-gray-50 rounded border">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Concluído! ✅</p>
                  </div>
                </div>
              </div>
              

            </div>

            {/* Chat Input */}
            <div className="border-t p-4 bg-white">
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg" asChild>
            <a href="#precos">
              Assinar agora
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-2 px-4">
            Comece hoje • Cancele quando quiser • Pagamento 100% seguro
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto px-4">
            O que antes levava horas de pesquisa e análise, agora você recebe automaticamente em minutos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
