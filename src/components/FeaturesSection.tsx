
import React, { useState } from 'react';
import { Clock, CheckCircle, Smartphone, MessageSquare, FileText, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const FeaturesSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Enquadramento Preliminar",
      description: "IA determina qual licença ambiental seu empreendimento precisa",
      timesSaved: "2 horas por projeto*",
      benefits: [
        "Análise automática da atividade econômica",
        "Identificação do tipo de licença necessária", 
        "Consulta à legislação estadual atualizada"
      ]
    },
    {
      icon: CheckCircle,
      title: "Check-list Personalizado",
      description: "Lista completa de documentos necessários para sua licença",
      timesSaved: "8 horas por projeto*",
      benefits: [
        "Baseado na legislação do seu estado",
        "Personalizado para sua atividade específica",
        "Atualizado automaticamente"
      ]
    },
    {
      icon: FileText,
      title: "Modelos de Documentos",
      description: "Templates técnicos estruturados para acelerar sua documentação",
      timesSaved: "10-20 horas por projeto*",
      benefits: [
        "Estrutura adequada para cada tipo de licença",
        "Baseado em casos de sucesso",
        "Formato aceito pelos órgãos ambientais"
      ]
    },
    {
      icon: Smartphone,
      title: "Tudo pelo WhatsApp",
      description: "Envie suas informações e receba os resultados no WhatsApp",
      timesSaved: "2 horas de setup",
      benefits: [
        "Sem necessidade de cadastro ou login",
        "Interface familiar que você já usa",
        "Resultados instantâneos no seu celular"
      ]
    },
    {
      icon: Clock,
      title: "Resultado em 5 Minutos",
      description: "Da pergunta inicial até os documentos prontos em minutos",
      timesSaved: "Resposta imediata",
      benefits: [
        "Processamento automático por IA",
        "Sem filas ou espera por consultoria",
        "Disponível 24 horas por dia"
      ]
    },
    {
      icon: Zap,
      title: "Segurança Jurídica",
      description: "Baseado na legislação oficial e jurisprudência atualizada",
      timesSaved: "Reduz riscos",
      benefits: [
        "Legislação sempre atualizada",
        "Reduz chance de indeferimento",
        "Acelera aprovação nos órgãos"
      ]
    }
  ];

  return (
    <section id="recursos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">
            Pare de perder tempo com tarefas manuais
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
            Nossa IA faz em 5 minutos o que você levaria horas para pesquisar, 
            analisar e estruturar manualmente
          </p>
          
          {/* Time Savings Metrics */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">20-30h</div>
              <div className="text-xs sm:text-sm text-gray-600">Economizadas por projeto</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">5min</div>
              <div className="text-xs sm:text-sm text-gray-600">Para enquadramento completo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-800">95%</div>
              <div className="text-xs sm:text-sm text-gray-600">Menos tempo em análises</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isExpanded = expandedCards.includes(index);
            
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  {/* Time Saved Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    Economiza: {feature.timesSaved}
                  </div>
                </div>

                {/* Ver mais button */}
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full flex items-center justify-center px-4 py-2 mb-4 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  {isExpanded ? (
                    <>
                      Ver menos <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Ver mais detalhes <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                {/* Benefits List - com animação de expansão */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-2 pt-2 border-t border-gray-200">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-10">
            <h3 className="text-4xl font-bold text-blue-600 mb-4">
              Economize 20-30+ horas em cada projeto
            </h3>
            <p className="text-base text-gray-600 font-medium mb-6">*Tempo total estimado</p>
            <p className="text-lg text-gray-700 mb-8">
              Teste agora mesmo pelo WhatsApp. Sem cadastro, sem compromisso.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-8 py-3 rounded-lg font-semibold text-lg sm:text-xl transition-colors">
              Testar Grátis no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
