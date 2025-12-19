import ScheduleButton from "../ScheduleButton/ScheduleButton";

export default function ServicesSection() {
    return (
      <section className="px-6 py-20">
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-5xl mx-auto mb-20 text-center">
      <p className="mb-4 text-2xl tracking-widest text-gray-600 uppercase">
        Nos Services
      </p>

      <h2 className="mb-6 font-serif text-4xl leading-tight md:text-7xl">
        Vatsy simplifie l'accès aux bourses
        correspondant à votre profil.
      </h2>

      <p className="mt-10 text-gray-700 md:text-2xl leading-relaxed">
        Nous travaillons avec vous pour vous proposer des opportunités adaptées à votre parcours académique et à vos besoins financiers.
        Découvrez, analysez et postulez aux bourses pertinentes en toute confiance.
      </p>
    </div>

    {/* Content */}
    <div className="space-y-64">

      {/* Block 1 */}
      <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
        <img
          src="/img/Thirdsection1.png"
          alt="Recherche de bourses"
          className="w-full"
        />

        <div>
          <h3 className="mb-4 font-serif text-4xl">
            Sélection personnalisée de bourses
          </h3>

          <p className="mt-10 mb-10 leading-relaxed text-gray-700 text-[15px]">
            Chaque étudiant a des objectifs spécifiques, mais accéder aux bourses peut être complexe.
            Vatsy vous aide à identifier les bourses qui correspondent exactement à votre profil, vos compétences et votre parcours académique.
            Nous vous accompagnons à chaque étape pour maximiser vos chances et simplifier vos démarches.
          </p>

          <ScheduleButton text='En savoir plus' />
        </div>
      </div>

      {/* Block 2 */}
      <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-serif text-4xl">
            Optimisation et conseils
          </h3>

          <p className="mt-10 mb-10 leading-relaxed text-gray-700 text-[15px]">
            Vatsy ne se limite pas à vous présenter des bourses. Nous vous fournissons aussi des conseils pour optimiser vos candidatures,
            organiser vos documents et maximiser vos chances de succès.
            Notre objectif est de vous permettre de profiter pleinement des opportunités disponibles sans stress.
          </p>

          <ScheduleButton text='En savoir plus' />
        </div>

        <img
          src="/img/Thirdsection2.png"
          alt="Conseils et accompagnement"
          className="w-full"
        />
      </div>

    </div>
  </div>
</section>

    );
  }
  