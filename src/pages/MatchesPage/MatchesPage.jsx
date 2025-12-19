import { motion } from "framer-motion"
import {
  ExternalLink,
  MapPin,
  DollarSign,
  GraduationCap,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import axios from "axios"

export default function MatchesPage() {
  const [scholarships, setScholarships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("token")
        if (!token) throw new Error("Utilisateur non authentifié")

        if (token.startsWith("=")) {
          token = token.substring(1)
        }

        const response = await axios.post(
          "https://iandrianinameeting.app.n8n.cloud/webhook/recommandation",
          { token }
        )

        setScholarships(response.data.bourses_correspondantes || [])
      } catch (error) {
        console.error("Erreur récupération N8N :", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen font-serif bg-[#fffaf5]">
      {/* HEADER */}
      <Navbar />

      {/* CONTENT */}
      <main className="container px-4 py-12 mx-auto">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border rounded-full">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-medium">Bourses correspondantes</span>
            </div>

            <h2 className="mb-3 font-serif text-3xl font-bold md:text-4xl">
              Tes meilleures opportunités
            </h2>

            <p className="text-lg text-muted-foreground">
              Basé sur ton profil académique
            </p>
          </motion.div>

          {/* LOADING */}
          {loading && (
            <p className="text-center text-muted-foreground">
              Chargement des bourses...
            </p>
          )}

          {/* LIST */}
          <div className="space-y-6">
            {scholarships.map((s, index) => {
              const match = Math.min(90, 75 + index * 5)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 transition-all md:p-8 hover:shadow-lg bg-[#fffaf5]">

                    {/* TOP */}
                    <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 font-serif text-xl font-bold">
                          {s.nom_bourse}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {s.description}
                        </p>
                      </div>

                      {/* MATCH */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                        className="flex items-center justify-center w-20 h-20 border-4 rounded-full border-primary/20 bg-primary/10"
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {match}%
                          </div>
                          <div className="text-[10px] text-muted-foreground">
                            Match
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <Progress value={match} className="h-2 mb-6" />

                    {/* DETAILS */}
                    <div className="grid gap-4 mb-6 sm:grid-cols-2 md:grid-cols-4">
                      <Info icon={DollarSign} label="Montant" value={s.montant_estime} />
                      <Info icon={MapPin} label="Pays" value={s.pays_destination} />
                      <Info icon={GraduationCap} label="Niveau" value={s.niveau_concerne} />
                      <Info icon={TrendingUp} label="Financement" value={s.type_de_financement} />
                    </div>

                    {/* CTA */}
                    <Button className="w-full mb-6" asChild>
                      <a
                        href={s.lien_candidature}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir l'offre officielle
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>

                    {/* CENTRES DE FORMATION */}
                    {s.centres_formation_recommandes?.length > 0 && (
                      <div className="mt-6">
                        <h4 className="mb-4 text-lg font-semibold">
                          Centres de formation recommandés
                        </h4>

                        <div className="grid gap-4 md:grid-cols-3">
                          {s.centres_formation_recommandes.map((c, idx) => (
                            <Card
                              key={idx}
                              className="p-4 border transition hover:shadow-md bg-transparent"
                            >
                              <h5 className="mb-1 font-semibold">{c.nom}</h5>

                              <p className="mb-2 text-sm text-muted-foreground">
                                {c.description}
                              </p>

                              <div className="space-y-1 text-sm">
                                <p> <span className="font-medium">{c.ville}</span></p>
                                <p> <span className="font-medium">{c.contact}</span></p>
                                <p className="font-semibold text-primary">
                                   Réduction : {c.reduction}
                                </p>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* EMPTY STATE */}
          {!loading && scholarships.length === 0 && (
            <p className="mt-10 text-center text-muted-foreground">
              Aucune bourse trouvée pour ton profil.
            </p>
          )}

          {/* BOTTOM CTA */}
          <motion.div
            className="p-8 mt-12 text-center border rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="mb-3 text-xl font-bold">
              Améliore ton profil pour plus de matches
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Ajoute tes certifications, expériences et langues pour découvrir
              plus d'opportunités
            </p>
            <Button asChild>
              <Link to="/profileAdd">Compléter mon profil</Link>
            </Button>
          </motion.div>

        </div>
      </main>
    </div>
  )
}

/* Helper component */
function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-muted-foreground" />
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value || "—"}</div>
      </div>
    </div>
  )
}
