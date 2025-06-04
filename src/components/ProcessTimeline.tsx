import { motion } from "motion/react";
import { Search, FileText, CheckCircle } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
  {
    icon: Search,
    title: "Consultoria Gratuita",
    description: "Análise completa do seu caso para identificar a melhor estratégia jurídica e orçamento transparente.",
    details: [
    "Reunião confidencial (presencial ou online)",
    "Análise da documentação existente",
    "Identificação de riscos e oportunidades",
    "Orçamento detalhado sem surpresas"]

  },
  {
    icon: FileText,
    title: "Estratégia Personalizada",
    description: "Desenvolvimento da melhor solução jurídica para seu caso específico, seja judicial ou extrajudicial.",
    details: [
    "Planejamento estratégico customizado",
    "Escolha da via mais eficiente",
    "Documentação especializada",
    "Cronograma realista de execução"]

  },
  {
    icon: CheckCircle,
    title: "Execução e Resultados",
    description: "Acompanhamento completo até a conclusão do processo, com atualizações regulares e suporte contínuo.",
    details: [
    "Execução eficiente do processo",
    "Atualizações regulares sobre andamento",
    "Resolução definitiva da questão",
    "Suporte pós-conclusão quando necessário"]

  }];



  return (
    <section className="py-16 md:py-24 bg-ice" data-id="r2sjox32k" data-path="src/components/ProcessTimeline.tsx">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" data-id="adog16y5s" data-path="src/components/ProcessTimeline.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="bilrt4cho" data-path="src/components/ProcessTimeline.tsx">

          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6" data-id="r38vbbmla" data-path="src/components/ProcessTimeline.tsx">
            Como Trabalhamos:{" "}
            <span className="text-gold" data-id="v5o2fngzh" data-path="src/components/ProcessTimeline.tsx">Processo Transparente</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto" data-id="q4n0acz01" data-path="src/components/ProcessTimeline.tsx">
            Metodologia clara e objetiva para resolver definitivamente suas questões jurídicas.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto" data-id="lngir706t" data-path="src/components/ProcessTimeline.tsx">
          {steps.map((step, index) =>
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative" data-id="ja8lbjd43" data-path="src/components/ProcessTimeline.tsx">

              {/* Vertical Line */}
              {index < steps.length - 1 &&
            <div className="absolute left-1/2 md:left-8 top-20 w-0.5 h-32 bg-gold opacity-30 transform -translate-x-1/2 md:transform-none" data-id="p4m2fb9ez" data-path="src/components/ProcessTimeline.tsx"></div>
            }
              
              <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''}`
            } data-id="j08uq8zey" data-path="src/components/ProcessTimeline.tsx">
                {/* Icon */}
                <div className="flex-shrink-0" data-id="ur9kwqa2e" data-path="src/components/ProcessTimeline.tsx">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center shadow-lg" data-id="fw1nt7u0i" data-path="src/components/ProcessTimeline.tsx">
                    <step.icon className="w-8 h-8 text-gold" data-id="u60lk48fh" data-path="src/components/ProcessTimeline.tsx" />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`} data-id="fcpmvgh3b" data-path="src/components/ProcessTimeline.tsx">
                  <div className="bg-white rounded-2xl p-4 md:p-8 shadow-2xl" data-id="1h30qe6xy" data-path="src/components/ProcessTimeline.tsx">
                    <div className="flex items-center gap-4 mb-4" data-id="mxk8i16t0" data-path="src/components/ProcessTimeline.tsx">
                      <span className="text-gold font-sans font-bold text-lg" data-id="ksk8u9lpt" data-path="src/components/ProcessTimeline.tsx">
                        0{index + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold text-navy" data-id="zg277qaum" data-path="src/components/ProcessTimeline.tsx">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="font-sans text-gray-600 mb-6 text-lg" data-id="k7826g82q" data-path="src/components/ProcessTimeline.tsx">
                      {step.description}
                    </p>
                    
                    <ul className={`space-y-2 ${index % 2 === 1 ? 'md:text-right' : ''}`} data-id="hjv1f85t0" data-path="src/components/ProcessTimeline.tsx">
                      {step.details.map((detail, detailIndex) =>
                    <li key={detailIndex} className={`flex items-center gap-3 ${
                    index % 2 === 1 ? 'md:flex-row-reverse md:justify-end' : ''}`
                    } data-id="gj091kzks" data-path="src/components/ProcessTimeline.tsx">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" data-id="473bvei3u" data-path="src/components/ProcessTimeline.tsx"></div>
                          <span className="font-sans text-gray-700" data-id="08rui9frr" data-path="src/components/ProcessTimeline.tsx">{detail}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ProcessTimeline;