
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Zap, Star, Edit3, TrendingUp, Award, X } from 'lucide-react';

const PricingSection = () => {
  const [hourlyRate, setHourlyRate] = useState(150);

  // Calcular economia baseada no valor/hora
  const activeRate = hourlyRate || 150; // Use 150 como fallback para cálculos
  const minSavings = Math.round(20 * activeRate);
  const maxSavings = Math.round(30 * activeRate);
  const multiplier = Math.round(minSavings / 49.9); // Baseado no preço do plano Pro

  const plans = [
    {
      name: "Free",
      price: "GRÁTIS",
      period: "",
      description: "Teste o enquadramento básico",
      originalPrice: "",
      savings: "",
      badge: "COMECE AQUI",
      features: [
        "1 enquadramento por mês",
        "Check-list básico",
        "Acesso pelo WhatsApp"
      ],
      allFeatures: [
        { text: "1 enquadramento por mês", included: true },
        { text: "Check-list básico", included: true },
        { text: "Acesso pelo WhatsApp", included: true },
        { text: "Todos os modelos de documentos", included: false },
        { text: "Atualizações automáticas da legislação", included: false },
        { text: "Histórico de projetos", included: false }
      ],

      cta: "Testar Grátis",
      ctaVariant: "outline" as const,
      popular: false,
      highlight: false
    },
    {
      name: "Consultor Pro",
      price: "R$ 49,90",
      period: "mês",
      description: "Para consultores que querem economizar tempo",
      originalPrice: "R$ 119,90",
      savings: "58% OFF",
      badge: "MAIS POPULAR",
      features: [
        "Enquadramentos ilimitados",
        "Check-lists personalizados completos",
        "Todos os modelos de documentos",
        "Suporte prioritário pelo WhatsApp",
        "Atualizações automáticas da legislação",
        "Histórico de projetos"
      ],
      allFeatures: [
        { text: "Enquadramentos ilimitados", included: true },
        { text: "Check-lists personalizados completos", included: true },
        { text: "Suporte prioritário pelo WhatsApp", included: true },
        { text: "Todos os modelos de documentos", included: true },
        { text: "Atualizações automáticas da legislação", included: true },
        { text: "Histórico de projetos", included: true }
      ],

      cta: "Começar Agora",
      ctaVariant: "default" as const,
      popular: true,
      highlight: true
    }
  ];

  return (
    <section id="precos" className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-2 sm:px-4">
            Quanto vale 20-30 horas do seu tempo?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-2 sm:px-4">
            Se você cobra R$ 150/hora, nossa ferramenta se paga no primeiro projeto. 
            Todo mês você economiza centenas de horas com 20-30h por projeto*.
          </p>
          

        </div>

        {/* ROI Calculator */}
        <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-12 text-center mx-2 sm:mx-4 md:mx-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Calcule sua economia</h3>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">20-30h</div>
              <div className="text-xs sm:text-sm text-gray-600">economizadas por projeto</div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-bold text-green-600">× R$</span>
                <div className="bg-white rounded-lg border-2 border-green-200 px-2 sm:px-3 py-1 sm:py-2 shadow-sm hover:border-green-400 transition-colors flex items-center gap-1">
                  <Edit3 className="w-3 h-3 text-green-600" />
                  <input
                    type="number"
                    value={hourlyRate || ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || value === '0') {
                        setHourlyRate(0);
                      } else {
                        setHourlyRate(Number(value) || 1);
                      }
                    }}
                    onBlur={(e) => {
                      if (e.target.value === '' || Number(e.target.value) === 0) {
                        setHourlyRate(150);
                      }
                    }}
                    placeholder="150"
                    className="text-lg sm:text-xl font-bold text-green-600 bg-transparent w-12 sm:w-16 text-center focus:outline-none"
                    min="0"
                    step="1"
                  />
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Clique para editar seu valor/hora</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-600 break-words">= R$ {minSavings.toLocaleString()}-{maxSavings.toLocaleString()}</div>
              <div className="text-xs sm:text-sm text-gray-600">economia por projeto</div>
            </div>
          </div>
          <p className="text-green-600 mt-4 text-lg font-bold">
            Com apenas 1 projeto por mês, você economiza {multiplier}x o valor da assinatura
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-6 mb-12 sm:mb-16 max-w-sm md:max-w-6xl mx-auto px-2 sm:px-4">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg border-2 ${
                plan.highlight ? 'border-green-500 relative md:scale-105' : 'border-gray-200'
              } p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all flex flex-col`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="w-16 h-0.5 bg-green-400 mx-auto mb-4"></div>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                {/* Price */}
                <div className={`mb-4 ${!plan.highlight ? 'mt-12' : ''}`}>
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                      <Badge variant="destructive" className="text-xs">{plan.savings}</Badge>
                    </div>
                  )}
                  <div className="flex items-baseline justify-center">
                    <span className={`${plan.price === "GRÁTIS" ? "text-3xl" : "text-4xl"} font-bold ${plan.price === "GRÁTIS" ? "text-black" : "text-green-600"}`}>{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-1">/{plan.period}</span>}
                  </div>
                </div>

                {/* Limited Time Offer - Only for Consultor Pro */}
                {plan.highlight && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium mb-4 whitespace-nowrap">
                    <Clock className="w-3 h-3 mr-1" />
                    Oferta de lançamento: 58% OFF por tempo limitado
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className={`space-y-3 mb-8 flex-grow min-h-[180px] ${!plan.highlight ? 'mt-12' : ''}`}>
                {plan.allFeatures ? 
                  plan.allFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start min-h-[24px]">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`${feature.included ? 'text-gray-600' : 'text-gray-400'} leading-relaxed`}>
                        {feature.text}
                      </span>
                    </li>
                  )) :
                  plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start min-h-[24px]">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))
                }
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button 
                  variant={plan.ctaVariant}
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.highlight 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : plan.ctaVariant === 'outline' 
                        ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        : ''
                  }`}
                >
                  {plan.cta}
                </Button>
                
                {plan.highlight && (
                  <p className="text-xs text-green-600 text-center mt-2 font-medium">
                    ⚡ Mais escolhido pelos consultores
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Consultores já economizaram mais de 15.000 horas usando nossa IA
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Projetos processados</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">15.000+</div>
              <div className="text-gray-600 text-sm sm:text-base">Horas economizadas</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">96%</div>
              <div className="text-gray-600 text-sm sm:text-base">Satisfação dos clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
