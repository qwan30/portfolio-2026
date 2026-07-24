

const Expertise = () => {
  const disciplines = [
    {
      number: "01",
      title: "API Design",
      description: "Crafting robust, RESTful and GraphQL APIs with predictable contracts and scalable architectures. Focused on developer experience and performance."
    },
    {
      number: "02",
      title: "Concurrency",
      description: "Managing state and high-throughput operations safely. Building flash sale engines and real-time data pipelines without race conditions."
    },
    {
      number: "03",
      title: "Architecture",
      description: "Designing resilient distributed systems and microservices. Making pragmatic choices between monoliths and decoupled services."
    },
    {
      number: "04",
      title: "AI Integration",
      description: "Embedding large language models and vector databases into traditional software. Bridging the gap between AI research and production."
    }
  ];

  return (
    <section id="expertise" className="bg-canvas text-ink py-24 px-6 md:px-12 border-t border-hairline">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl uppercase tracking-tight mb-12 text-ink">
          I CAN HELP YOU WITH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((discipline, index) => {
            return (
              <div 
                key={index} 
                className="group rounded-2xl p-8 bg-canvas border border-black/5 hover:bg-ink hover:-translate-y-3 hover:shadow-2xl hover:border-transparent transition-all duration-500 flex flex-col justify-between h-full cursor-pointer"
              >
                <div>
                  <div className="font-display text-4xl mb-6 text-blue-600/30 group-hover:text-blue-500 transition-colors duration-500">
                    {discipline.number}
                  </div>
                  <h3 className="font-display uppercase text-2xl mb-4 text-ink group-hover:text-white transition-colors duration-500">
                    {discipline.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-ink/70 group-hover:text-gray-300 transition-colors duration-500">
                  {discipline.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
