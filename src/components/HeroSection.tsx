import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center overflow-hidden" data-id="1aa0m3t5q" data-path="src/components/HeroSection.tsx">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10" data-id="vxo2tz4f6" data-path="src/components/HeroSection.tsx">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full blur-3xl animate-float" data-id="m7yelwzbn" data-path="src/components/HeroSection.tsx"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} data-id="pq67rsryf" data-path="src/components/HeroSection.tsx"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} data-id="ybyjt5pfs" data-path="src/components/HeroSection.tsx"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10" data-id="pycsrpawk" data-path="src/components/HeroSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto" data-id="crw79asiy" data-path="src/components/HeroSection.tsx">

          <motion.h1
            className="font-serif text-5xl md:text-7xl font-semibold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} data-id="3pmsxgt93" data-path="src/components/HeroSection.tsx">

            Planejamento Patrimonial{" "}
            <span className="text-gold" data-id="m6lbp4dq4" data-path="src/components/HeroSection.tsx">sem Conflitos</span>
          </motion.h1>
          
          <motion.p
            className="font-sans text-xl md:text-2xl text-ice mb-4 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} data-id="wfpg59tmk" data-path="src/components/HeroSection.tsx">

            Estratégias Jurídicas para Famílias de Alto Patrimônio
          </motion.p>
          
          <motion.p
            className="font-sans text-lg md:text-xl text-gold mb-12 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }} data-id="76se4v0p8" data-path="src/components/HeroSection.tsx">

            Dr. Eugênio Lúcio • Especialista em Holding Familiar e Inventários com Eficiência Fiscal
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }} data-id="tobxtdg7c" data-path="src/components/HeroSection.tsx">

            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-sans font-semibold px-6 py-4 md:px-12 md:py-6 text-base md:text-lg rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 w-full sm:w-auto max-w-sm mx-auto"
              onClick={() => {
                const formSection = document.getElementById('intelligent-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              data-id="ui9o0j4ev" data-path="src/components/HeroSection.tsx">
              Agendar Consultoria Confidencial
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }} data-id="xdubchi0g" data-path="src/components/HeroSection.tsx">

        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center" data-id="ccl0qk1pr" data-path="src/components/HeroSection.tsx">
          <div className="w-1 h-3 bg-gold rounded-full animate-bounce mt-2" data-id="be8imzpu9" data-path="src/components/HeroSection.tsx"></div>
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;