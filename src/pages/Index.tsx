import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const Index = () => {
  const proxyPlans = [
    {
      name: "Residential",
      description: "Высокоскоростные резидентные прокси",
      price: "от $5",
      features: ["99.9% аптайм", "Безлимитный трафик", "Ротация IP", "24/7 поддержка"],
      badge: "Популярный",
      locations: "190+ стран"
    },
    {
      name: "Datacenter",
      description: "Быстрые датацентровые прокси",
      price: "от $2",
      features: ["Высокая скорость", "Статические IP", "HTTP/HTTPS", "SOCKS5"],
      locations: "50+ локаций"
    },
    {
      name: "Mobile",
      description: "Мобильные прокси для соцсетей",
      price: "от $15",
      features: ["Реальные мобильные IP", "4G/5G соединения", "Ротация операторов", "Анти-бан защита"],
      badge: "Premium",
      locations: "25+ стран"
    }
  ];

  const faqs = [
    {
      question: "Что такое прокси-серверы?",
      answer: "Прокси-серверы — это промежуточные серверы, которые пересылают запросы между вашим устройством и интернетом, обеспечивая анонимность и безопасность."
    },
    {
      question: "Какой тип прокси выбрать?",
      answer: "Для парсинга и автоматизации лучше выбрать резидентные прокси. Для простых задач подойдут датацентровые. Для работы с соцсетями — мобильные."
    },
    {
      question: "Есть ли пробный период?",
      answer: "Да, мы предоставляем 24-часовой пробный период для всех тарифов. Вы можете протестировать качество наших прокси перед покупкой."
    },
    {
      question: "Как быстро активируются прокси?",
      answer: "Прокси активируются автоматически сразу после оплаты. Вы получите данные для подключения на email в течение 1-2 минут."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={24} className="text-primary" />
              <span className="text-xl font-bold">ProxyLite</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <Button variant="outline" size="sm">Войти</Button>
              <Button size="sm">Регистрация</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6 animate-fade-in">
            Премиум прокси-серверы
            <br />
            для любых задач
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Быстрые, надёжные и анонимные прокси-серверы с высоким аптаймом. 
            Поддержка HTTP/HTTPS и SOCKS5 протоколов.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button size="lg" className="px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm text-muted-foreground">Аптайм</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">190+</div>
              <div className="text-sm text-muted-foreground">Стран</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Выберите подходящий тариф</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Гибкие тарифы для любых задач — от парсинга данных до работы с соцсетями
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {proxyPlans.map((plan, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                {plan.badge && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="text-3xl font-bold mt-4">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">за месяц</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      Локации
                    </span>
                    <span className="font-medium">{plan.locations}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6" variant={plan.badge ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Высокая скорость</h3>
              <p className="text-sm text-muted-foreground">Скорость подключения до 1 Гб/с</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Безопасность</h3>
              <p className="text-sm text-muted-foreground">SSL шифрование и анонимность</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">География</h3>
              <p className="text-sm text-muted-foreground">Серверы в 190+ странах мира</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Поддержка</h3>
              <p className="text-sm text-muted-foreground">Техподдержка 24/7 на русском</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите доступ к премиум прокси уже сегодня
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="px-8">
                Попробовать бесплатно
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" size={20} />
                <span className="font-bold">ProxyLite</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Надёжные прокси-серверы для бизнеса и персонального использования
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Резидентные прокси</div>
                <div>Датацентровые прокси</div>
                <div>Мобильные прокси</div>
                <div>API доступ</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Документация</div>
                <div>Статус системы</div>
                <div>Техподдержка</div>
                <div>Обучающие материалы</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  support@proxylite.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram: @proxylite
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ProxyLite. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;