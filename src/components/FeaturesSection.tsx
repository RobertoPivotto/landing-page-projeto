
import React from 'react';
import { Clock, CheckCircle, Smartphone, MessageSquare, FileText, Zap } from 'lucide-react';

const FeaturesSection = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pare de perder tempo com tarefas manuais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa IA faz em 5 minutos o que você levaria horas para pesquisar, 
            analisar e estruturar manualmente
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
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

              {/* Benefits List */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Economize 20-30+ horas em cada projeto
            </h3>
            <p className="text-sm text-gray-500 mb-4">*Tempo total estimado</p>
            <p className="text-gray-600 mb-6">
              Teste agora mesmo pelo WhatsApp. Sem cadastro, sem compromisso.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Testar Grátis no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
