export default function InsightsSection() {
    return (
      <section className="px-6 py-20">
  <div className="mx-auto max-w-7xl">

    {/* TOP BAR */}
    <div className="flex justify-between mb-6 text-xs tracking-widest uppercase">
      <span>Votre parcours</span>
      <span className="text-2xl">Vatsy</span>
      <span>Pour les bourses</span>
    </div>

    <hr className="mb-10 border-black" />

    {/* HEADER */}
    <div className="mb-12 text-center">
      <div className="flex items-center justify-between mb-4">
        <span className="md:text-8xl">DEC.</span>

        <h1 className="font-serif text-4xl tracking-wide md:text-9xl">
          CONSEILS
        </h1>

        <span className="md:text-8xl">2025</span>
      </div>

      <p className="max-w-xl mx-auto text-gray-700 md:text-3xl">
        Concentrez-vous sur ce que vous pouvez contrôler : vos candidatures, documents et critères de sélection, et cessez de perdre du temps sur ce qui n’est pas pertinent.
      </p>
    </div>

    {/* RATES BAR */}
    <div className="mb-16 overflow-x-auto">
      <table className="w-full text-xs border-t border-b border-black">
        <tbody>
          <tr className="text-center">
            <td className="py-3 text-2xl font-medium text-left">Opportunités du jour</td>
            {["Bourse A", "Bourse B", "Bourse C", "Bourse D", "Bourse E", "Bourse F", "Bourse G", "Bourse H", "Bourse I"].map((r, i) => (
              <td key={i} className="px-3 text-[15px]">{r}</td>
            ))}
            <td className="text-2xl underline cursor-pointer">Voir plus</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* CONTENT */}
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

      {/* MAIN ARTICLE */}
      <div className="lg:col-span-2">
        <div className="overflow-hidden border rounded-xl">
          <img
            src="/img/Foot1.png"
            alt="Insight principal"
            className="w-full h-[360px] object-cover"
          />

          <div className="p-6">
            <p className="mb-2 text-xs uppercase">Nov 25, 2024</p>

            <h2 className="mb-6 font-serif text-3xl leading-tight">
              Comment maximiser vos chances d’obtenir une bourse ? Vatsy vous guide étape par étape.
            </h2>

            <button className="px-6 py-2 text-sm transition border border-black rounded-full hover:bg-black hover:text-white">
              Voir plus de conseils
            </button>
          </div>
        </div>
      </div>

      {/* SIDE ARTICLES */}
      <div className="space-y-8">

        {/* Card 1 */}
        <div className="overflow-hidden border rounded-xl">
          <img
            src="/img/Foot3.png"
            alt="Conseils bourses"
            className="object-cover w-full h-40"
          />

          <div className="p-4">
            <span className="inline-block px-2 py-1 mb-2 text-xs border rounded-full">
              Actualités
            </span>

            <p className="mb-1 text-xs text-gray-500">Nov 25, 2024</p>

            <h3 className="font-serif text-lg leading-snug">
              Vatsy présenté dans plusieurs articles sur l’accompagnement des étudiants pour les bourses
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden border rounded-xl">
          <img
            src="/img/Foot3.png"
            alt="Dépenses inattendues"
            className="object-cover w-full h-40"
          />

          <div className="p-4">
            <span className="inline-block px-2 py-1 mb-2 text-xs border rounded-full">
              Conseils pratiques
            </span>

            <p className="mb-1 text-xs text-gray-500">Sep 26, 2024</p>

            <h3 className="font-serif text-lg leading-snug">
              5 erreurs fréquentes à éviter lors de la candidature aux bourses
            </h3>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

    );
  }
  