import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [showInviteForm, setShowInviteForm] = useState(false);

  const silhouettes = [
    "/img/346379d3-3d42-4e1b-97ee-1f601beb9401.jpg",
    "/img/841c519d-4853-4837-a734-e67b4e28cf1a.jpg", 
    "/img/c56c0a00-f198-4c7d-9c01-da8a89144668.jpg"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Sophisticated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(194,170,113,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Minimal Header */}
        <header className="flex justify-between items-center px-8 lg:px-16 py-8">
          <div className="text-sm font-medium tracking-[0.2em] text-neutral-400">
            EXCLUSIVE
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-xs tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 border border-neutral-800 hover:border-neutral-600"
            onClick={() => setShowInviteForm(!showInviteForm)}
          >
            ACCESS
          </Button>
        </header>

        {/* Hero Section - Ultra Modern */}
        <section className="px-8 lg:px-16 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left - Typography */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="text-xs tracking-[0.3em] text-primary font-medium">
                      BY INVITATION ONLY
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-thin tracking-[-0.02em] leading-[0.9]">
                      Exclusive
                      <br />
                      <span className="text-primary">Access</span>
                    </h1>
                  </div>
                  
                  <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-md">
                    A private community of distinguished individuals. 
                    Entry is granted solely through personal invitation.
                  </p>
                </div>

                {/* Modern CTA */}
                <div className="flex items-center space-x-6">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-black px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                    onClick={() => setShowInviteForm(true)}
                  >
                    Request Access
                  </Button>
                  <div className="text-xs text-neutral-500 tracking-wide">
                    Limited to one invitation per member
                  </div>
                </div>
              </div>

              {/* Right - Gallery */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {silhouettes.map((src, index) => (
                    <div 
                      key={index}
                      className={`relative overflow-hidden group ${
                        index === 0 ? 'col-span-2 aspect-[4/3]' : 'aspect-[3/4]'
                      }`}
                      style={{
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover filter blur-sm grayscale group-hover:blur-none group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
                    </div>
                  ))}
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Invitation System - Glass Morphism */}
        {showInviteForm && (
          <section className="px-8 lg:px-16 py-24">
            <div className="max-w-lg mx-auto">
              <Card className="backdrop-blur-xl bg-neutral-900/60 border-neutral-800/50 p-8 animate-fade-in">
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <Icon name="Key" className="text-primary mx-auto" size={32} />
                    <h3 className="text-2xl font-light">Access Portal</h3>
                    <p className="text-neutral-400 text-sm">
                      Enter your invitation code or request access
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <Input
                      type="text"
                      placeholder="Invitation Code"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      className="bg-black/50 border-neutral-700 text-white placeholder-neutral-500 text-center tracking-[0.2em] font-mono h-12"
                    />
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-primary text-black hover:bg-primary/90 font-medium h-12 tracking-wide"
                        size="lg"
                      >
                        Enter
                      </Button>
                      
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-neutral-800" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-black px-2 text-neutral-500">or</span>
                        </div>
                      </div>
                      
                      <Input
                        type="email"
                        placeholder="Your email for invitation request"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black/50 border-neutral-700 text-white placeholder-neutral-500 h-12"
                      />
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800 h-12 tracking-wide"
                      >
                        Request Invitation
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full text-neutral-500 hover:text-neutral-300 text-xs"
                    onClick={() => setShowInviteForm(false)}
                  >
                    Close
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Features - Modern Grid */}
        <section className="px-8 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {[
                { icon: "Shield", title: "Discretion", desc: "Absolute confidentiality guaranteed" },
                { icon: "Crown", title: "Excellence", desc: "Curated selection of distinguished companions" },
                { icon: "Users", title: "Exclusivity", desc: "Limited membership by invitation only" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group text-center space-y-6 p-8 rounded-2xl border border-neutral-900 hover:border-neutral-800 transition-all duration-500 hover:bg-neutral-950/50"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={feature.icon as any} className="text-primary" size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Minimal */}
        <footer className="border-t border-neutral-900 px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              <div className="text-xs tracking-[0.2em] text-neutral-500">
                EXCLUSIVE © 2024
              </div>
              <div className="flex items-center space-x-8 text-xs text-neutral-500">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}