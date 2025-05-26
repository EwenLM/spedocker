'use client'
import { useEffect } from "react"

export default function AvisGoogle() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className=" my-10">
      <div className="elfsight-app-6e463edf-bad2-4d5b-9217-574ef10e60c7" data-elfsight-app-lazy></div>
    </div>
  )
}
