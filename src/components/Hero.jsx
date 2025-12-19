import { ArrowRight } from "lucide-react";
import ScheduleButton from "./ScheduleButton/ScheduleButton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { sendTokenToN8n } from "@/services/profile.service"

import ScheduleSubmit from "./ScheduleButton/ScheduleSubmit";
import { sendTokenToN8n } from "@/services/profile.service";

export default function Hero() {

  const navigate = useNavigate()
  // const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const data = await getMe()
  //       console.log(data)
  //       setUser(data)
  //     } catch (error) {
  //       console.error("Erreur récupération utilisateur", error)
  //     }
  //   }

  //   fetchUser()
  // }, [])

  const handleSendToN8n = async () => {
    setLoading(true)

    try {
      await sendTokenToN8n()
      navigate("/match")
    } catch (error) {
      console.error("Erreur envoi N8N", error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div>
      <section className="relative min-h-screen overflow-hidden bg-center bg-cover "
        style={{
          backgroundImage: "url('/img/bg.png')",
        }}
      >

        {/* HEADER */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md p-6 bg-white rounded-xl">
              <h2 className="mb-4 text-xl font-bold text-center">
                Accès restreint
              </h2>

              <p className="mb-6 text-center text-gray-600">
                Veuillez remplir votre profil ou envoyer votre CV pour avoir accès à la
                bourse.
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => navigate("/profileAdd")}
                  className="px-4 py-2 text-white bg-black rounded-lg"
                >
                  Compléter mon profil
                </button>

                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}


        {/* HERO CONTENT */}
        <div>
          <div className="z-10 px-6 pt-12 mx-auto text-center max-w-10xl center md:px-16 md:pt-24">
            <h1 className="font-serif text-5xl leading-tight text-center md:text-8xl text-dark">
              Trouvez les bourses <br className="hidden md:block" />
              adaptées à votre profil.
            </h1>

            <p className="max-w-xl mx-auto my-10 mt-6 text-lg font-semibold text-dark/80">
              Découvrez les opportunités qui correspondent à votre parcours et à vos besoins.<br />
              Recevez des recommandations personnalisées.
            </p>

            <ScheduleSubmit
              text={loading ? "Recherche en cours..." : "Voir mes bourses"}
              onClick={handleSendToN8n}
            />
          </div>
        </div>





      </section>

      <div className="my-10 text-center">
        <p className="mb-6 font-serif text-2xl italic">
          Partenaire
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 text-xl font-medium opacity-80">
  <span>Education Africa Network</span>
  <span>Global Academic Review</span>
  <span>International Student Journal</span>
  <span>Higher Education Today</span>
  <span>Scholarship Watch</span>
  <span>Campus News</span>
  <span>EdTech Insights</span>
  <span>Global Learning Media</span>
</div>

      </div>

    </div>
  );
}
