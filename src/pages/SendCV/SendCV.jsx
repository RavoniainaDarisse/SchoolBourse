import { useState, useRef } from "react"
import {
  Upload,
  FileText,
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Info,
} from "lucide-react"
import Navbar from "@/components/Navbar"

export default function SendCV() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState("idle") // idle | success | error
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]

    if (
      selectedFile &&
      selectedFile.type === "application/pdf" &&
      selectedFile.size <= 5 * 1024 * 1024
    ) {
      setFile(selectedFile)
      setStatus("idle")
    } else {
      setStatus("error")
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]

    if (
      droppedFile &&
      droppedFile.type === "application/pdf" &&
      droppedFile.size <= 5 * 1024 * 1024
    ) {
      setFile(droppedFile)
      setStatus("idle")
    } else {
      setStatus("error")
    }
  }

  const handleSend = async () => {
    if (!file || uploading) return

    setUploading(true)
    setStatus("idle")

    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("Utilisateur non authentifié")
      const cleanToken = token.startsWith("=") ? token.substring(1) : token

      const formData = new FormData()
      formData.append("file", file)
      formData.append("token", cleanToken) // <-- envoie le token avec le PDF

      const response = await fetch(
        "https://iandrianinameeting.app.n8n.cloud/webhook/cv",
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) throw new Error(`HTTP Error ${response.status}`)

      setStatus("success")
      setFile(null)
      // if (fileInputRef.current) fileInputRef.current.value = ""
    } catch (error) {
      console.error("Erreur upload CV :", error)
      setStatus("error")
    } finally {
      setUploading(false)
    }
  }

  const formatFileSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i]
  }

  return (
    <div className="w-full min-h-screen">
      <Navbar />

      {uploading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 p-8 shadow-lg bg-white/20 rounded-xl">
            <div className="w-12 h-12 border-4 rounded-full border-t-black border-r-transparent animate-spin" />
            <p className="text-lg font-medium text-black">Envoi du CV pour la bourse...</p>
          </div>
        </div>
      )}

      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* HERO */}
          <section className="space-y-4">
            <h1 className="font-serif text-4xl font-bold">
              Dépôt de CV – Candidature à une bourse
            </h1>
            <p className="max-w-3xl text-lg text-gray-600">
              Déposez votre CV pour que votre candidature soit analysée pour l’octroi d’une bourse. 
              Votre dossier sera traité de manière sécurisée et confidentielle.
            </p>
          </section>

          {/* INFOS */}
          <section className="grid gap-6 md:grid-cols-3">
            <div className="flex gap-4">
              <Info />
              <div>
                <h3 className="font-semibold">Format accepté</h3>
                <p className="text-sm text-gray-500">Uniquement PDF.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FileText />
              <div>
                <h3 className="font-semibold">Taille maximale</h3>
                <p className="text-sm text-gray-500">5 MB maximum.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck />
              <div>
                <h3 className="font-semibold">Sécurité</h3>
                <p className="text-sm text-gray-500">Vos données sont protégées et confidentielles.</p>
              </div>
            </div>
          </section>

          {/* UPLOAD */}
          <section>
            <div
              onClick={() => fileInputRef.current.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className={`border-2 border-dashed rounded-xl p-12 cursor-pointer transition ${
                file ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400"
              }`}
            >
              {!file ? (
                <div className="space-y-3 text-center">
                  <Upload className="mx-auto h-14 w-14" />
                  <p className="text-lg font-medium">Glissez-déposez votre CV ici</p>
                  <p className="text-sm text-gray-500">ou cliquez pour sélectionner un fichier</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); setFile(null) }} className="text-red-500 hover:text-red-600">
                    <X />
                  </button>
                </div>
              )}
            </div>

            {/* STATUS */}
            {status !== "idle" && (
              <div className={`mt-6 flex items-center gap-3 rounded-lg px-4 py-3 ${
                status === "success" ? "bg-[#6ED3C2] text-dark" : "bg-red-50 text-red-600"
              }`}>
                {status === "success" ? <CheckCircle2 /> : <AlertCircle />}
                <span>
                  {status === "success"
                    ? "Votre CV a été envoyé avec succès."
                    : "Erreur lors de l’envoi du CV."}
                </span>
              </div>
            )}
          </section>

          {/* ACTION */}
          <button
            onClick={handleSend}
            disabled={!file || uploading}
            className={`w-full px-7 py-4 border-2 border-black font-serif rounded-xl text-lg flex justify-center items-center gap-3
              ${uploading ? "bg-gray-300" : "bg-[#6ED3C2] hover:bg-[#5bc5b4]"}`}
          >
            {uploading ? "Envoi en cours..." : (<><Send /> Soumettre mon CV pour la bourse</>)}
          </button>
        </div>
      </div>
    </div>
  )
}
