"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, User, ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Link, useNavigate } from "react-router-dom"
import { saveProfile } from "@/services/profile.service"
import Navbar from "@/components/Navbar"

const normalizeEmptyFields = (data) => {
  const normalized = {}

  Object.keys(data).forEach((key) => {
    const value = data[key]

    if (value === "" || value === undefined) {
      normalized[key] = null
    } else {
      normalized[key] = value
    }
  })

  return normalized
}


export default function ProfilePage() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null)

  const [autresLangues] = useState([])
  const [recompenses] = useState([])

  const [formData, setFormData] = useState({
    telephone: "",
    sexe: "",
    nationalite: "",
    ville_residence: "",
    parcours_academique: "",
    niveau_etude_actuel: "",
    domaine_etude: "",
    etablissement_actuel: "",
    moyenne_generale: "",
    annee_diplome_prevue: "",
    langue: "",
    niveau_francais: "",
    niveau_anglais: "",
    date_naissance: "",
    experiences_academiques: "",
    activites_extrascolaires: "",
    engagement_associatif: "",
  })

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const cleanedData = normalizeEmptyFields(formData)
  
      await saveProfile({
        ...cleanedData,
        autres_langues: autresLangues.length ? autresLangues : null,
        recompenses_distinctions: recompenses.length ? recompenses : null,
      })
  
      setSaveStatus("success")
      setOpenDialog(true)
  
      toast({
        title: "Profil enregistré",
        description: "Ton profil a été sauvegardé avec succès",
      })
    } catch (error) {
      console.error(error.response?.data || error.message)
      setSaveStatus("error")
      setOpenDialog(true)
  
      toast({
        title: "Erreur",
        description: "Impossible d'enregistrer le profil",
        variant: "destructive",
     _toggle: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="min-h-screen bg-[#fffaf5]">
{isSubmitting && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4 p-8 shadow-lg bg-white/20 rounded-xl">
          {/* Spinner animé */}
          <div className="w-12 h-12 border-4 rounded-full border-t-black border-r-transparent animate-spin" />
          <p className="text-lg font-medium text-black">Enregistrement...</p>
        </div>
      </div>
    )}
      {/* DIALOG */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {saveStatus === "success" ? "Profil enregistré ✅" : "Erreur ❌"}
            </DialogTitle>
            <DialogDescription className="pt-2">
              {saveStatus === "success"
                ? "Ton profil a été enregistré avec succès."
                : "Une erreur est survenue lors de l'enregistrement du profil."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            {saveStatus === "success" && (
              <Button onClick={() => navigate("/match")}>
                Continuer
              </Button>
            )}
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* HEADER */}
      <Navbar />

      {/* CONTENT */}
      <main className="w-full px-6 py-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full space-y-16"
        >

          {/* SECTION 1 */}
          <section>
            <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold">
              <User className="w-5 h-5 text-primary" />
              Informations personnelles
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
              <Field label="Téléphone">
                <Input
                  value={formData.telephone}
                  onChange={(e) =>
                    setFormData({ ...formData, telephone: e.target.value })
                  }
                />
              </Field>

              <Field label="Sexe">
                <Select
                  value={formData.sexe}
                  onValueChange={(value) =>
                    setFormData({ ...formData, sexe: value })
                  }
                >
                  <SelectTrigger className="h-14">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#fffaf5]">
                    <SelectItem value="Homme">Homme</SelectItem>
                    <SelectItem value="Femme">Femme</SelectItem>
                  </SelectContent>
                </Select>

              </Field>

              <Field label="Nationalité">
                <Input
                  value={formData.nationalite}
                  onChange={(e) =>
                    setFormData({ ...formData, nationalite: e.target.value })
                  }
                />
              </Field>

              <Field label="Ville de résidence">
                <Input
                  value={formData.ville_residence}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ville_residence: e.target.value,
                    })
                  }
                />
              </Field>

              <Field label="Date de naissance">
                <Input
                  type="date"
                  value={formData.date_naissance}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date_naissance: e.target.value,
                    })
                  }
                />
              </Field>
            </div>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">
              Parcours académique
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
              <Field label="Parcours académique">
                <Input
                  value={formData.parcours_academique}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parcours_academique: e.target.value,
                    })
                  }
                />
              </Field>

              <Field label="Niveau d’étude">
                <Select
                  value={formData.niveau_etude_actuel}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      niveau_etude_actuel: value,
                    })
                  }
                >
                  <SelectTrigger className="h-14">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#fffaf5]">
                    <SelectItem value="Licence">Licence</SelectItem>
                    <SelectItem value="Master">Master</SelectItem>
                    <SelectItem value="Doctorat">Doctorat</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Domaine d’étude">
                <Input
                  value={formData.domaine_etude}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      domaine_etude: e.target.value,
                    })
                  }
                />
              </Field>

              <Field label="Établissement actuel">
                <Input
                  value={formData.etablissement_actuel}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      etablissement_actuel: e.target.value,
                    })
                  }
                />
              </Field>

              <Field label="Moyenne générale">
                <Input
                  value={formData.moyenne_generale}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      moyenne_generale: e.target.value,
                    })
                  }
                />
              </Field>

              <Field label="Année diplôme prévue">
                <Input
                  type="number"
                  value={formData.annee_diplome_prevue}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      annee_diplome_prevue: e.target.value,
                    })
                  }
                />
              </Field>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            <TextareaBlock
              label="Expériences académiques"
              value={formData.experiences_academiques}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experiences_academiques: e.target.value,
                })
              }
            />
            <TextareaBlock
              label="Activités extrascolaires"
              value={formData.activites_extrascolaires}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  activites_extrascolaires: e.target.value,
                })
              }
            />
            <TextareaBlock
              label="Engagement associatif"
              value={formData.engagement_associatif}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  engagement_associatif: e.target.value,
                })
              }
            />
          </section>

          {/* SUBMIT */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting} className="h-12 px-10">
              Sauvegarder
              <Save className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.form>
      </main>
    </div>
  )
}

/* UI helpers — DESIGN INCHANGÉ */
function Field({ label, children }) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      {children}
    </div>
  )
}

function TextareaBlock({ label, value, onChange }) {
  return (
    <div>
      <Label>{label}</Label>
      <Textarea rows={6} value={value} onChange={onChange} />
    </div>
  )
}
