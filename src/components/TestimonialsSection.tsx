import { motion } from "motion/react";
import { useRef, useState } from "react";

const depoimentos = [
  {
    nome: "Cliente 1 - Raul",
    videoUrl: "/videos/cliente1-raul.mp4",
    descricao: "Depoimento sobre regularização de imóvel."
  },
  {
    nome: "Cliente 2 - Pedro",
    videoUrl: "/videos/cliente2-pedro.mp4",
    descricao: "Depoimento sobre inventário e holding."
  }
  // Adicione mais depoimentos conforme necessário
];

const TestimonialsSection = () => {
  const [playing, setPlaying] = useState(Array(depoimentos.length).fill(false));
  const videoRefs = useRef([]);

  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6">
            Depoimentos de Clientes
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nosso trabalho e resultados.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {depoimentos.map((dep, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-ice rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-[400px] mx-auto"
            >
              <div className="w-full aspect-[9/16] mb-6 rounded-xl overflow-hidden flex justify-center items-center bg-black relative">
                {!playing[idx] && (
                  <button
                    type="button"
                    className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    onClick={() => {
                      videoRefs.current[idx].play();
                    }}
                  >
                    <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/80 shadow-lg animate-pulse">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#fff" fillOpacity="0.7" />
                        <polygon points="16,12 30,20 16,28" fill="#1e293b" />
                      </svg>
                    </span>
                  </button>
                )}
                <video
                  ref={el => videoRefs.current[idx] = el}
                  width="100%"
                  controls
                  poster="/images/foto-pai.png"
                  style={{ maxHeight: '600px', maxWidth: '100%', objectFit: 'cover' }}
                  onPlay={() => {
                    setPlaying(p => p.map((v, i) => i === idx ? true : v));
                  }}
                  onPause={() => {
                    setPlaying(p => p.map((v, i) => i === idx ? false : v));
                  }}
                >
                  <source src={dep.videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">{dep.nome}</h3>
              <p className="text-gray-600">{dep.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 