import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, FileText, Users, Scale, Home, ClipboardCheck } from "lucide-react";

const ServicesSection = () => {
  // Organizados por "Pilares Jurídicos"
  const services = [
  {
    icon: Building,
    title: "Holding Familiar & Inventário",
    description: "Proteção patrimonial e sucessão planejada com eficiência fiscal máxima.",
    features: [
    "Constituição de holding familiar",
    "Inventário judicial ou extrajudicial",
    "Planejamento sucessório estratégico",
    "Redução de impostos até 90%"],

    pillar: "Proteção Patrimonial"
  },
  {
    icon: Home,
    title: "Regularização de Imóveis",
    description: "Solução completa para documentação irregular - judicial ou extrajudicial.",
    features: [
    "Regularização extrajudicial (mais rápida)",
    "Ação de regularização judicial",
    "Análise de documentação gratuita",
    "Consultoria em registro de imóveis"],

    pillar: "Regularização Imobiliária"
  },
  {
    icon: Scale,
    title: "Usucapião",
    description: "Transforme posse em propriedade com segurança jurídica total.",
    features: [
    "Usucapião extrajudicial (sem processo)",
    "Usucapião judicial especializada",
    "Análise de viabilidade gratuita",
    "Estratégia personalizada por caso"],

    pillar: "Aquisição de Propriedade"
  },
  {
    icon: ClipboardCheck,
    title: "Adjudicação Compulsória",
    description: "Force a escritura definitiva quando o vendedor se recusa a assinar.",
    features: [
    "Ação de adjudicação compulsória",
    "Execução de contratos preliminares",
    "Cobrança de multas contratuais",
    "Registro definitivo do imóvel"],

    pillar: "Execução Contratual"
  }];



  return (
    <section className="py-16 md:py-24 bg-white" data-id="w651vd5ad" data-path="src/components/ServicesSection.tsx">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" data-id="7goy31k8h" data-path="src/components/ServicesSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="rhwcdklq8" data-path="src/components/ServicesSection.tsx">

          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6" data-id="8q0050x5q" data-path="src/components/ServicesSection.tsx">
            Especialidades do{" "}
            <span className="text-gold" data-id="4idy50ruq" data-path="src/components/ServicesSection.tsx">Dr. Eugênio Lúcio</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto" data-id="b3welwspv" data-path="src/components/ServicesSection.tsx">
            Quatro pilares jurídicos para resolver definitivamente suas questões patrimoniais e imobiliárias.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto" data-id="su89xrxbp" data-path="src/components/ServicesSection.tsx">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }} data-id="eito072i4" data-path="src/components/ServicesSection.tsx">

              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg" data-id="3thy4gycu" data-path="src/components/ServicesSection.tsx">
                <CardHeader className="text-center pb-6" data-id="rh8k59g3r" data-path="src/components/ServicesSection.tsx">
                  <div className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-4" data-id="zotpalsxc" data-path="src/components/ServicesSection.tsx">
                    {service.pillar}
                  </div>
                  <div className="mx-auto mb-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center" data-id="vcwawzsc5" data-path="src/components/ServicesSection.tsx">
                    <service.icon className="w-8 h-8 text-navy" data-id="bcte9p4c7" data-path="src/components/ServicesSection.tsx" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-navy mb-3" data-id="e02csizm9" data-path="src/components/ServicesSection.tsx">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-sans text-lg text-gray-600" data-id="273oo98ka" data-path="src/components/ServicesSection.tsx">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent data-id="njvtqgl0k" data-path="src/components/ServicesSection.tsx">
                  <ul className="space-y-3" data-id="0cyj9xsii" data-path="src/components/ServicesSection.tsx">
                    {service.features.map((feature, featureIndex) =>
                  <li key={featureIndex} className="flex items-start gap-3" data-id="zgdpe48y4" data-path="src/components/ServicesSection.tsx">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" data-id="bi6fsxy9w" data-path="src/components/ServicesSection.tsx"></div>
                        <span className="font-sans text-gray-700" data-id="m33jmzvyq" data-path="src/components/ServicesSection.tsx">{feature}</span>
                      </li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ServicesSection;