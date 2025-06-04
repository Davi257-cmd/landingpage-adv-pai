import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Scale } from "lucide-react";

const CredibilitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-ice" data-id="iakwdb0y9" data-path="src/components/CredibilitySection.tsx">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" data-id="pcmri1qdy" data-path="src/components/CredibilitySection.tsx">
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto" data-id="8olgxupfh" data-path="src/components/CredibilitySection.tsx">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-id="s15bk7o1z" data-path="src/components/CredibilitySection.tsx">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 text-center lg:text-left" data-id="3sl20wi5i" data-path="src/components/CredibilitySection.tsx">

              {/* Authority Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start mb-8" data-id="20fw970r3" data-path="src/components/CredibilitySection.tsx">

                <Badge className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 bg-navy text-gold px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-sans font-medium rounded-full" data-id="p1i4vth1x" data-path="src/components/CredibilitySection.tsx">
                  15+ Anos de Experiência Jurídica
                </Badge>
              </motion.div>
              
              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-dark italic font-medium mb-8 md:mb-12 leading-relaxed" data-id="30l9280g0" data-path="src/components/CredibilitySection.tsx">

                "Cada família precisa de uma estratégia jurídica única para proteger seu patrimônio e garantir uma sucessão tranquila."
              </motion.blockquote>
              
              {/* Professional Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-8" data-id="oqeqccmt5" data-path="src/components/CredibilitySection.tsx">
                <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2" data-id="nz10bq7w8" data-path="src/components/CredibilitySection.tsx">Dr. Eugênio Lúcio</h3>
                <p className="font-sans text-base md:text-lg text-gray-600" data-id="0aqfhv8so" data-path="src/components/CredibilitySection.tsx">Especialista em Holding Familiar, Inventários e Regularização Imobiliária</p>
              </motion.div>
              
              {/* Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4" data-id="kc7i4txxh" data-path="src/components/CredibilitySection.tsx">

                <div className="flex items-center justify-center lg:justify-start gap-3 text-navy" data-id="76zk3gcqb" data-path="src/components/CredibilitySection.tsx">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-gold flex-shrink-0" data-id="tqpjdhg3r" data-path="src/components/CredibilitySection.tsx" />
                  <span className="font-sans font-semibold text-base md:text-lg" data-id="rt2dikznw" data-path="src/components/CredibilitySection.tsx">OAB/SP Ativo</span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-3 text-navy" data-id="pr3u3rdtg" data-path="src/components/CredibilitySection.tsx">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-gold flex-shrink-0" data-id="sxpe8mwr4" data-path="src/components/CredibilitySection.tsx" />
                  <span className="font-sans font-semibold text-base md:text-lg" data-id="7q2gx4k6d" data-path="src/components/CredibilitySection.tsx">500+ Casos Resolvidos</span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-3 text-navy" data-id="s9qq3oac" data-path="src/components/CredibilitySection.tsx">
                  <Scale className="w-6 h-6 md:w-8 md:h-8 text-gold flex-shrink-0" data-id="lly2mjs67" data-path="src/components/CredibilitySection.tsx" />
                  <span className="font-sans font-semibold text-base md:text-lg" data-id="tl4kmmnkf" data-path="src/components/CredibilitySection.tsx">98% Taxa de Sucesso</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right - Professional Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center" data-id="tn34b6az2" data-path="src/components/CredibilitySection.tsx">
              
              <div className="relative" data-id="otspmkepr" data-path="src/components/CredibilitySection.tsx">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light rounded-2xl transform rotate-3 opacity-20" data-id="5od7dx4b9" data-path="src/components/CredibilitySection.tsx"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark rounded-2xl transform -rotate-3 opacity-10" data-id="ql2l7il5e" data-path="src/components/CredibilitySection.tsx"></div>
                
                {/* Photo container */}
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl" data-id="hl60wem2o" data-path="src/components/CredibilitySection.tsx">
                  <img
                    src="/images/foto-pai.png"
                    alt="Dr. Eugênio Lúcio - Advogado Especialista"
                    className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-xl" data-id="gj47ual6n" data-path="src/components/CredibilitySection.tsx" />

                  
                  {/* Professional badge */}
                  


                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

};

export default CredibilitySection;