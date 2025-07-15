import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, User, Clock, FileText, Smartphone, MessageSquare, Zap } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Demo Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Veja como funciona na <span className="text-green-600">prática</span>
              </h2>
              <p className="text-xl text-gray-600">
                Envie as informações do seu empreendimento pelo WhatsApp e receba 
                em minutos tudo que precisa para iniciar o licenciamento.
              </p>
            </div>

            {/* Demo Features */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Envie seus dados</h3>
                    <p className="text-gray-600 text-sm">
                      Descreva sua atividade, localização e porte do empreendimento 
                      em uma mensagem simples no WhatsApp.
                    </p>
                    <div className="text-xs text-green-600 font-medium mt-2">⏱️ 2 minutos</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. IA processa instantaneamente</h3>
                    <p className="text-gray-600 text-sm">
                      Nossa IA analisa sua atividade, consulta a legislação do estado 
                      e determina qual licença você precisa.
                    </p>
                    <div className="text-xs text-blue-600 font-medium mt-2">⏱️ 1 minuto</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Receba tudo pronto</h3>
                    <p className="text-gray-600 text-sm">
                      Enquadramento preliminar, check-list personalizado e modelos 
                      de documentos chegam no seu WhatsApp.
                    </p>
                    <div className="text-xs text-purple-600 font-medium mt-2">⏱️ 2 minutos</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Tempo total: 5 minutos</span>
              </div>
              <p className="text-green-700 text-sm">
                O que antes levava horas de pesquisa e análise, agora você recebe 
                automaticamente em minutos.
              </p>
            </div>
          </div>

          {/* Right Column - WhatsApp Interface */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* WhatsApp Header */}
            <div className="bg-green-600 px-6 py-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-white font-semibold">Licenc.IA</h4>
                <p className="text-green-100 text-sm">Assistente de Licenciamento</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 h-96 overflow-y-auto bg-gray-50">
              <div className="flex justify-end">
                <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Olá! Preciso fazer licenciamento para uma metalúrgica de pequeno porte 
                    em São Paulo. Qual licença preciso?
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 bg-green-600 rounded-full"></div>
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
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 bg-green-600 rounded-full"></div>
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
        <div className="text-center mt-16">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
            <Smartphone className="w-5 h-5 mr-2" />
            Testar Agora no WhatsApp
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Grátis • Sem cadastro • Resultado em 5 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
