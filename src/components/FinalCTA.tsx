import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden" data-id="ppbziod9a" data-path="src/components/FinalCTA.tsx">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-id="kpr6x4ekw" data-path="src/components/FinalCTA.tsx">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gold rounded-full blur-3xl" data-id="ymd67p4k9" data-path="src/components/FinalCTA.tsx"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold rounded-full blur-3xl" data-id="xml2nl1jt" data-path="src/components/FinalCTA.tsx"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold rounded-full blur-3xl" data-id="2up6bubxs" data-path="src/components/FinalCTA.tsx"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10" data-id="s4xpa00y2" data-path="src/components/FinalCTA.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto" data-id="bcpwjoz94" data-path="src/components/FinalCTA.tsx">

          <motion.h2
            className="font-serif text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }} data-id="dnuzrfkfx" data-path="src/components/FinalCTA.tsx">

            Sua situação jurídica{" "}
            <span className="text-gold" data-id="3zvmjp7z7" data-path="src/components/FinalCTA.tsx">merece solução</span>{" "}
            definitiva e especializada.
          </motion.h2>
          
          <motion.p
            className="font-sans text-xl md:text-2xl text-ice mb-12 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }} data-id="a8uu0ctr7" data-path="src/components/FinalCTA.tsx">

            Não deixe que documentos irregulares, processos de inventário ou questões de posse comprometam seu patrimônio. 
            Agende uma consultoria gratuita e descubra a melhor estratégia para seu caso.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-id="240wllasx" data-path="src/components/FinalCTA.tsx">

            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-sans font-semibold px-8 py-4 md:px-12 md:py-6 text-base md:text-lg rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 w-full sm:w-auto max-w-xs"
              onClick={() => {
                const formSection = document.getElementById('intelligent-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              data-id="kt6yvspx9" data-path="src/components/FinalCTA.tsx">
              Consultoria Gratuita
            </Button>
            
            <div className="text-ice font-sans" data-id="n7v01p60l" data-path="src/components/FinalCTA.tsx">
              <p className="text-sm opacity-80" data-id="gt9ksa7nv" data-path="src/components/FinalCTA.tsx">Orçamento transparente</p>
              <p className="text-sm opacity-80" data-id="r6wwx79oi" data-path="src/components/FinalCTA.tsx">Atendimento personalizado</p>
            </div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gold/20" data-id="9uw8cjwpe" data-path="src/components/FinalCTA.tsx">

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-ice/80 font-sans text-xs md:text-sm" data-id="109gwnjrf" data-path="src/components/FinalCTA.tsx">
              <span className="text-center" data-id="2xdhwa0db" data-path="src/components/FinalCTA.tsx">✓ 15+ anos de experiência</span>
              <span className="text-center" data-id="txmud4i7n" data-path="src/components/FinalCTA.tsx">✓ 500+ casos resolvidos</span>
              <span className="text-center" data-id="gua4ynkzj" data-path="src/components/FinalCTA.tsx">✓ 98% taxa de sucesso</span>
              <span className="text-center" data-id="ia8bs4imv" data-path="src/components/FinalCTA.tsx">✓ Consultoria gratuita</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default FinalCTA;