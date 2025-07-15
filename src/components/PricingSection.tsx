
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Zap, Star } from 'lucide-react';

const PricingSection = () => {
  const [hourlyRate, setHourlyRate] = useState(150);

  // Calcular economia baseada no valor/hora
  const minSavings = Math.round(20 * hourlyRate);
  const maxSavings = Math.round(30 * hourlyRate);
  const multiplier = Math.round(minSavings / 59.9); // Baseado no preço do plano Pro

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
        "Acesso pelo WhatsApp",
        "Suporte por email"
      ],
      timeSavings: "Economiza 8h no primeiro uso",
      cta: "Testar Grátis",
      ctaVariant: "outline" as const,
      popular: false,
      highlight: false
    },
    {
      name: "Consultor Pro",
      price: "R$ 59,90",
      period: "mês",
      description: "Para consultores que querem economizar tempo",
      originalPrice: "R$ 119,90",
      savings: "50% OFF",
      badge: "MAIS POPULAR",
      features: [
        "Enquadramentos ilimitados",
        "Check-lists personalizados completos",
        "Todos os modelos de documentos",
        "Suporte prioritário pelo WhatsApp",
        "Atualizações automáticas da legislação",
        "Histórico de projetos"
      ],
      timeSavings: "Economiza 20-30h por projeto*",
      cta: "Começar Agora",
      ctaVariant: "default" as const,
      popular: true,
      highlight: true
    }
  ];

  return (
    <section id="precos" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quanto vale 20-30 horas do seu tempo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Se você cobra R$ 150/hora, nossa ferramenta se paga no primeiro projeto. 
            Todo mês você economiza centenas de horas com 20-30h por projeto*.
          </p>
          
          {/* Limited Time Offer */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            🔥 Oferta de lançamento: 50% OFF por tempo limitado
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Calcule sua economia</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600">20-30h</div>
              <div className="text-sm text-gray-600">economizadas por projeto</div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl font-bold text-green-600">× R$</span>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
                  className="text-3xl font-bold text-green-600 bg-transparent border-b-2 border-green-600 w-20 text-center focus:outline-none focus:border-green-700"
                  min="0"
                  step="1"
                />
              </div>
              <div className="text-sm text-gray-600">seu valor/hora</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">= R$ {minSavings.toLocaleString()}-{maxSavings.toLocaleString()}</div>
              <div className="text-sm text-gray-600">economia por projeto</div>
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Com apenas 1 projeto por mês, você economiza {multiplier}x o valor da assinatura
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg border-2 ${
                plan.highlight ? 'border-green-500 relative scale-105' : 'border-gray-200'
              } p-8 hover:shadow-xl transition-all`}
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
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                      <Badge variant="destructive" className="text-xs">{plan.savings}</Badge>
                    </div>
                  )}
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-1">/{plan.period}</span>}
                  </div>
                </div>

                {/* Time Savings */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-1" />
                  {plan.timeSavings}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
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
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Consultores já economizaram mais de 2.000 horas usando nossa IA
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">150+</span>
              <span className="text-gray-600 ml-2">Consultores ativos</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">2k+</span>
              <span className="text-gray-600 ml-2">Horas economizadas</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">98%</span>
              <span className="text-gray-600 ml-2">Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
