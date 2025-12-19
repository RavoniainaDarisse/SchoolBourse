import ScheduleButton from "../ScheduleButton/ScheduleButton";

export default function SectionHomePrima() {
    return (
      <main className="">

  {/* HERO */}
  <section className="bg-[#FBF0CF] rounded-2xl max-w-7xl mx-auto mt-16 px-8 py-16">
    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">

      {/* Image */}
      <img
        src="/img/SectionHome1.png"
        alt="Découverte de bourses"
        className="max-w-sm mx-auto md:mx-0"
      />

      {/* Text */}
      <div>
        <h1 className="mb-6 font-serif text-4xl leading-tight md:text-6xl">
          Vatsy est là pour <br />
          simplifier votre <br />
          recherche de bourses.
        </h1>

        <p className="max-w-md my-10 text-gray-700 md:text-2xl">
          Nous vous aidons à créer une stratégie personnalisée pour identifier les bourses les plus adaptées à votre profil, vos compétences et vos besoins académiques.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 text-sm transition border border-black rounded-full hover:bg-black hover:text-white">
            Planifier une session →
          </button>

          <ScheduleButton text='En savoir plus' />
        </div>
      </div>
    </div>
  </section>

  {/* POWERED BY */}
  <section className="py-16 text-center">
    <p className="mb-8 text-2xl italic">Propulsé par</p>

    <div className="flex flex-wrap items-center justify-center gap-10 text-sm font-semibold tracking-wide text-gray-700 opacity-80">
  {[
    "Institut Français de Madagascar",
    "Université d’Antananarivo",
    "African Education Network",
    "Global Scholarship Alliance",
    "Digital Skills Africa",
    "International Student Support Program",
  ].map((partner, index) => (
    <span key={index} className="uppercase">
      {partner}
    </span>
  ))}
</div>

  </section>

  {/* SERVICES / PRODUITS */}
  <div className="bg-[#F4F7EF] py-40">
    <section className="px-6 pb-24 mx-auto max-w-[90%]">
      <p className="mb-6 text-xs tracking-widest uppercase">
        Nos Services
      </p>

      <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-3">

        {/* Left text */}
        <div className="md:col-span-1">
          <h2 className="mb-6 font-serif text-4xl leading-tight md:text-6xl">
            Besoin d’aide pour trouver la bonne bourse ?
          </h2>

          <p className="leading-relaxed text-gray-700 md:text-2xl">
            Ne confondez pas une simple liste de bourses avec un accompagnement personnalisé. Vatsy vous guide à chaque étape et vous propose des recommandations adaptées à votre profil et à vos objectifs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:col-span-2 sm:grid-cols-2">

          {/* Card 1 */}
          <div className="p-6 bg-[#fffaf5] shadow-sm rounded-2xl">
            <div className="mb-4 text-lg"></div>
            <h3 className="mb-3 font-serif text-3xl">
              Recherche de bourses
            </h3>
            <p className="mt-20 mb-10 leading-relaxed text-gray-600 md:text-2xl">
              Vatsy vous aide à trouver des bourses adaptées à votre profil académique et vos besoins financiers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-[#fffaf5] shadow-sm rounded-2xl">
            <div className="mb-4 text-lg"></div>
            <h3 className="mb-3 font-serif text-3xl">
              Conseils personnalisés
            </h3>
            <p className="mt-20 mb-10 leading-relaxed text-gray-600 md:text-2xl">
              Recevez des recommandations et des conseils pour optimiser vos candidatures et maximiser vos chances de succès.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-[#fffaf5] shadow-sm rounded-2xl">
            <div className="mb-4 text-lg"></div>
            <h3 className="mb-3 font-serif text-3xl">
              Suivi et analyse
            </h3>
            <p className="mt-20 mb-10 leading-relaxed text-gray-600 md:text-2xl">
              Suivez vos candidatures et analysez vos résultats pour mieux préparer vos futures démarches.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-[#fffaf5] shadow-sm rounded-2xl">
            <div className="mb-4 text-lg"></div>
            <h3 className="mb-3 font-serif text-3xl">
              Recommandations personnalisées
            </h3>
            <p className="mt-20 mb-10 leading-relaxed text-gray-600 md:text-2xl">
              Recevez des suggestions de bourses pertinentes directement adaptées à votre profil.
            </p>
          </div>

        </div>

      </div>
    </section>
  </div>

</main>

    );
  }
  