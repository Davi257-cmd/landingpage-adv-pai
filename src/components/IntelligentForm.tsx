import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const IntelligentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    email: "",
    phone: "",
    details: "",
    urgency: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
  {
    id: "holding",
    title: "Holding Familiar & Inventário",
    description: "Proteção patrimonial e sucessão planejada",
    benefit: "Economia de até 90% em impostos"
  },
  {
    id: "regularizacao",
    title: "Regularização de Imóveis",
    description: "Documentação irregular - solução judicial/extrajudicial",
    benefit: "Processo mais rápido e econômico"
  },
  {
    id: "usucapiao",
    title: "Usucapião",
    description: "Transformar posse em propriedade",
    benefit: "Segurança jurídica total"
  },
  {
    id: "adjudicacao",
    title: "Adjudicação Compulsória",
    description: "Forçar escritura definitiva",
    benefit: "Registro definitivo garantido"
  }];


  const urgencyOptions = [
  { id: "urgente", label: "Urgente (até 7 dias)", priority: "high" },
  { id: "medio", label: "Médio prazo (até 30 dias)", priority: "medium" },
  { id: "longo", label: "Longo prazo (+30 dias)", priority: "low" }];


  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, serviceType: serviceId });
    setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedService = serviceOptions.find((s) => s.id === formData.serviceType);
      const selectedUrgency = urgencyOptions.find((u) => u.id === formData.urgency);

      const emailContent = `
        <h2>🎯 Nova Consultoria Solicitada</h2>
        <p><strong>Serviço:</strong> ${selectedService?.title}</p>
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefone:</strong> ${formData.phone}</p>
        <p><strong>Urgência:</strong> ${selectedUrgency?.label}</p>
        <p><strong>Detalhes:</strong></p>
        <p>${formData.details}</p>
        <br>
        <p><em>Lead gerado via formulário inteligente do site</em></p>
      `;

      const { error } = await window.ezsite.apis.sendEmail({
        from: 'support@ezsite.ai',
        to: ['eugeniolucio27@gmail.com'],
        subject: `🎯 Nova Consultoria: ${selectedService?.title} - ${formData.name}`,
        html: emailContent
      });

      if (error) throw error;

      toast({
        title: "✅ Solicitação enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas para agendar sua consultoria."
      });

      setCurrentStep(3);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "❌ Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="intelligent-form" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white" data-id="2122j59oa" data-path="src/components/IntelligentForm.tsx">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" data-id="bdq32d9om" data-path="src/components/IntelligentForm.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="w7m5sf9a4" data-path="src/components/IntelligentForm.tsx">

          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6" data-id="v5klpria4" data-path="src/components/IntelligentForm.tsx">
            Consultoria Jurídica{" "}
            <span className="text-gold" data-id="glmhtr9e6" data-path="src/components/IntelligentForm.tsx">Personalizada</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto" data-id="wopqw2vno" data-path="src/components/IntelligentForm.tsx">
            Responda algumas perguntas e receba uma estratégia jurídica específica para seu caso.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-id="nerycqxsc" data-path="src/components/IntelligentForm.tsx">
          <Card className="shadow-2xl border-0" data-id="rhbetmv69" data-path="src/components/IntelligentForm.tsx">
            <CardHeader className="text-center pb-8" data-id="rurl3kolr" data-path="src/components/IntelligentForm.tsx">
              <div className="flex justify-center mb-6" data-id="zm1izpd05" data-path="src/components/IntelligentForm.tsx">
                {[1, 2, 3].map((step) =>
                <div key={step} className="flex items-center" data-id="lb92ukk8j" data-path="src/components/IntelligentForm.tsx">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-gold text-navy' : 'bg-gray-200 text-gray-500'}`
                  } data-id="wh8u88shy" data-path="src/components/IntelligentForm.tsx">
                      {currentStep > step ? <CheckCircle className="w-5 h-5" data-id="f1wdbvrvd" data-path="src/components/IntelligentForm.tsx" /> : step}
                    </div>
                    {step < 3 &&
                  <div className={`w-16 h-1 ${
                  currentStep > step ? 'bg-gold' : 'bg-gray-200'}`
                  } data-id="5xcd6j2vb" data-path="src/components/IntelligentForm.tsx" />
                  }
                  </div>
                )}
              </div>
              <CardTitle className="font-serif text-2xl text-navy" data-id="1in1xfkrf" data-path="src/components/IntelligentForm.tsx">
                {currentStep === 1 && "Qual sua necessidade jurídica?"}
                {currentStep === 2 && "Seus dados para consultoria"}
                {currentStep === 3 && "Solicitação enviada com sucesso!"}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8" data-id="ev6mju5q4" data-path="src/components/IntelligentForm.tsx">
              {currentStep === 1 &&
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }} data-id="mb4ejmd7x" data-path="src/components/IntelligentForm.tsx">

                  <div className="grid gap-4" data-id="lpjga9naf" data-path="src/components/IntelligentForm.tsx">
                    {serviceOptions.map((service) =>
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold transition-all duration-300"
                    onClick={() => handleServiceSelect(service.id)} data-id="k4r2wepu3" data-path="src/components/IntelligentForm.tsx">

                        <div className="flex justify-between items-start" data-id="ylyofr1pv" data-path="src/components/IntelligentForm.tsx">
                          <div className="flex-1" data-id="2xrx3mrrl" data-path="src/components/IntelligentForm.tsx">
                            <h3 className="font-serif text-xl text-navy mb-2" data-id="uq75079ck" data-path="src/components/IntelligentForm.tsx">{service.title}</h3>
                            <p className="text-gray-600 mb-3" data-id="l1noymyhh" data-path="src/components/IntelligentForm.tsx">{service.description}</p>
                            <Badge variant="secondary" className="bg-gold/10 text-gold" data-id="f5vdqtm43" data-path="src/components/IntelligentForm.tsx">
                              {service.benefit}
                            </Badge>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gold ml-4" data-id="cqpf162he" data-path="src/components/IntelligentForm.tsx" />
                        </div>
                      </motion.div>
                  )}
                  </div>
                </motion.div>
              }

              {currentStep === 2 &&
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }} data-id="qlm6hfp7p" data-path="src/components/IntelligentForm.tsx">

                  <form onSubmit={handleSubmit} className="space-y-6" data-id="vildvh4aj" data-path="src/components/IntelligentForm.tsx">
                    <div className="grid md:grid-cols-2 gap-6" data-id="8lq97qy2c" data-path="src/components/IntelligentForm.tsx">
                      <div data-id="bw45w9nmj" data-path="src/components/IntelligentForm.tsx">
                        <Label htmlFor="name" className="text-navy font-medium" data-id="abeoituw6" data-path="src/components/IntelligentForm.tsx">Nome completo *</Label>
                        <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                        required data-id="0brqfh1pr" data-path="src/components/IntelligentForm.tsx" />

                      </div>
                      <div data-id="qn84x4wkz" data-path="src/components/IntelligentForm.tsx">
                        <Label htmlFor="email" className="text-navy font-medium" data-id="yfhhnfq51" data-path="src/components/IntelligentForm.tsx">E-mail *</Label>
                        <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                        required data-id="ufa6ipxt1" data-path="src/components/IntelligentForm.tsx" />

                      </div>
                    </div>

                    <div data-id="3nq56uzd1" data-path="src/components/IntelligentForm.tsx">
                      <Label htmlFor="phone" className="text-navy font-medium" data-id="dk4q1idz6" data-path="src/components/IntelligentForm.tsx">Telefone/WhatsApp *</Label>
                      <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                      placeholder="(11) 99999-9999"
                      required data-id="nxg4rklro" data-path="src/components/IntelligentForm.tsx" />

                    </div>

                    <div data-id="f2jy6y18m" data-path="src/components/IntelligentForm.tsx">
                      <Label className="text-navy font-medium mb-4 block" data-id="hha2s8d9u" data-path="src/components/IntelligentForm.tsx">Qual a urgência do seu caso?</Label>
                      <RadioGroup
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                      className="space-y-3" data-id="d831d2zzf" data-path="src/components/IntelligentForm.tsx">

                        {urgencyOptions.map((option) =>
                      <div key={option.id} className="flex items-center space-x-2" data-id="mvnu2k1ai" data-path="src/components/IntelligentForm.tsx">
                            <RadioGroupItem value={option.id} id={option.id} data-id="9c8i8gubc" data-path="src/components/IntelligentForm.tsx" />
                            <Label htmlFor={option.id} className="cursor-pointer" data-id="eqgehkwcf" data-path="src/components/IntelligentForm.tsx">
                              {option.label}
                            </Label>
                          </div>
                      )}
                      </RadioGroup>
                    </div>

                    <div data-id="u4uwysj29" data-path="src/components/IntelligentForm.tsx">
                      <Label htmlFor="details" className="text-navy font-medium" data-id="rffhgllt1" data-path="src/components/IntelligentForm.tsx">Conte mais sobre seu caso</Label>
                      <Textarea
                      id="details"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="mt-2"
                      rows={4}
                      placeholder="Descreva sua situação para que possamos preparar uma consultoria mais direcionada..." data-id="bciv43rtv" data-path="src/components/IntelligentForm.tsx" />

                    </div>

                    <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-4 text-lg" data-id="2nbt8tfdj" data-path="src/components/IntelligentForm.tsx">

                      {isSubmitting ? "Enviando..." : "Solicitar Consultoria Gratuita"}
                    </Button>
                  </form>
                </motion.div>
              }

              {currentStep === 3 &&
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8" data-id="c2oxtkeca" data-path="src/components/IntelligentForm.tsx">

                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" data-id="g24chw951" data-path="src/components/IntelligentForm.tsx" />
                  <h3 className="font-serif text-2xl text-navy mb-4" data-id="6cj8nw7r1" data-path="src/components/IntelligentForm.tsx">Solicitação Recebida!</h3>
                  <p className="text-gray-600 mb-8 text-lg" data-id="su9ps6bi3" data-path="src/components/IntelligentForm.tsx">
                    Sua solicitação foi enviada com sucesso. Nossa equipe entrará em contato 
                    em até 24 horas para agendar sua consultoria personalizada.
                  </p>
                  
                  <div className="bg-gold/10 p-6 rounded-lg mb-8" data-id="nqr6od5yd" data-path="src/components/IntelligentForm.tsx">
                    <h4 className="font-semibold text-navy mb-4" data-id="a337yqt7l" data-path="src/components/IntelligentForm.tsx">Próximos passos:</h4>
                    <ul className="text-left space-y-2 text-gray-700" data-id="oqohds1rj" data-path="src/components/IntelligentForm.tsx">
                      <li data-id="guwfuksec" data-path="src/components/IntelligentForm.tsx">✓ Análise inicial do seu caso</li>
                      <li data-id="xqhj3dhqq" data-path="src/components/IntelligentForm.tsx">✓ Agendamento da consultoria</li>
                      <li data-id="rt15b5otl" data-path="src/components/IntelligentForm.tsx">✓ Estratégia jurídica personalizada</li>
                      <li data-id="k9uuzycnq" data-path="src/components/IntelligentForm.tsx">✓ Proposta de honorários transparente</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="vlnb9u8kx" data-path="src/components/IntelligentForm.tsx">
                    <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => setCurrentStep(1)} data-id="voltar-inicio" data-path="src/components/IntelligentForm.tsx">
                      Voltar ao início
                    </Button>
                    <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => window.open('tel:+5511999999999')} data-id="ww0g0vl4s" data-path="src/components/IntelligentForm.tsx">
                      <Phone className="w-4 h-4" data-id="h55oszvbu" data-path="src/components/IntelligentForm.tsx" />
                      Ligar Agora
                    </Button>
                    <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => window.open('https://wa.me/5511999999999')} data-id="t26zix4nb" data-path="src/components/IntelligentForm.tsx">
                      <Mail className="w-4 h-4" data-id="linukyoo6" data-path="src/components/IntelligentForm.tsx" />
                      WhatsApp
                    </Button>
                  </div>
                </motion.div>
              }
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

};

export default IntelligentForm;