import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [showInviteForm, setShowInviteForm] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900" />
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-8 lg:p-12">
          <div className="flex items-center space-x-3">
            <Icon name="Key" className="text-primary" size={28} />
            <span className="text-2xl font-light tracking-wider">EXCLUSIVE</span>
          </div>
          
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
            onClick={() => setShowInviteForm(!showInviteForm)}
          >
            <Icon name="Lock" size={16} className="mr-2" />
            Войти по приглашению
          </Button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-slow">
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-light tracking-wider">
                <span className="block">ЗАКРЫТЫЙ</span>
                <span className="block text-primary font-serif italic">Формат</span>
              </h1>
              
              <p className="text-xl lg:text-2xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Эксклюзивное агенство премиум-класса. 
                Доступ только по персональному приглашению.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Crown" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-light">Премиум качество</h3>
                <p className="text-gray-400 text-sm">Только проверенные компаньоны высшего класса</p>
              </div>
              
              <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-light">Полная конфиденциальность</h3>
                <p className="text-gray-400 text-sm">Абсолютная дискретность и безопасность</p>
              </div>
              
              <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-light">Эксклюзивность</h3>
                <p className="text-gray-400 text-sm">Ограниченный круг избранных клиентов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Invitation System */}
        <section className="py-20 px-8">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Icon name="Key" className="text-primary mx-auto" size={48} />
              <h2 className="text-4xl font-light">Система приглашений</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Каждый участник может пригласить только одного человека. 
                Это гарантирует эксклюзивность и высокое качество нашего сообщества.
              </p>
            </div>

            {!showInviteForm ? (
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Запрос приглашения</h3>
                  <p className="text-gray-400">
                    Оставьте контакты, если хотите получить приглашение от существующего участника
                  </p>
                  
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 border-primary/30 text-white placeholder-gray-500"
                    />
                    <Button 
                      className="w-full bg-primary text-black hover:bg-primary/90 font-medium"
                      size="lg"
                    >
                      Отправить запрос
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Мы свяжемся с вами, если найдется участник, готовый поделиться приглашением
                  </p>
                </div>
              </Card>
            ) : (
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8 animate-fade-in">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Вход по приглашению</h3>
                  <p className="text-gray-400">
                    Введите код приглашения, полученный от участника
                  </p>
                  
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Код приглашения"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      className="bg-background/50 border-primary/30 text-white placeholder-gray-500 text-center tracking-widest font-mono"
                    />
                    <Button 
                      className="w-full bg-primary text-black hover:bg-primary/90 font-medium"
                      size="lg"
                    >
                      <Icon name="Unlock" size={16} className="mr-2" />
                      Войти
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-gray-400 hover:text-white"
                    onClick={() => setShowInviteForm(false)}
                  >
                    Назад к запросу приглашения
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-primary/20 py-12 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Icon name="Key" className="text-primary" size={24} />
                  <span className="text-xl font-light">EXCLUSIVE</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Премиум эскорт агенство закрытого формата
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-light">Принципы</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Абсолютная конфиденциальность</li>
                  <li>Премиум качество</li>
                  <li>Эксклюзивность</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-light">Контакт</h4>
                <p className="text-gray-400 text-sm">
                  Связь только через<br />
                  систему приглашений
                </p>
              </div>
            </div>
            
            <div className="border-t border-primary/10 mt-12 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2024 Exclusive. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}