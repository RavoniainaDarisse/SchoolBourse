export default function DirectionsSection() {
    return (
      <section className="md:bg-[#FBF6EE] py-24">

      {/* MAIN CARD */}
      <div className="md:max-w-[80%] mx-auto border border-black rounded-xl bg-[#fffaf5] md:px-20 px-10 py-32">
    
        {/* ICON */}
        <div className="flex justify-center mb-8">
          <span className="text-4xl"></span>
    
          <h2 className="mx-auto mb-6 font-serif text-4xl leading-tight text-center md:text-7xl">
            Découvrez les bourses <br />
            adaptées à votre profil
          </h2>
        </div>
    
        {/* CONTENT */}
        <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
    
          {/* LEFT TEXT */}
          <div>
    
            <p className="font-serif md:text-2xl leading-[26px] text-justify">
              Chaque parcours étudiant est unique, et chaque profil peut correspondre à différents types de bourses.<br /><br />
              Naviguer parmi toutes les opportunités peut sembler complexe. Pas de panique, nous sommes là pour vous guider et vous proposer les bourses qui correspondent le mieux à vos besoins et à votre profil.<br /><br />
              Notre objectif est de vous aider à trouver les meilleures opportunités et à maximiser vos chances de financement. Avec notre plateforme, accédez facilement aux bourses pertinentes et recevez des recommandations personnalisées.
            </p>
    
            {/* SIGNATURE */}
            <p className="mt-10 font-serif text-lg italic">
              L’équipe HARVA
            </p>
          </div>
    
          {/* VIDEO */}
          <div className="relative overflow-hidden border border-black rounded-lg">
            <video
              className="object-cover w-full h-full"
              poster="/img/Firstsection1.png"
            />
          </div>
        </div>
      </div>
    </section>
    
    );
  }
  