"use client";
import { useState } from "react";
import { contactEmail } from "@/lib/content";
export default function CopyEmail() {
 const [status,setStatus] = useState("");
 return <><button type="button" className="copy-email" onClick={async()=>{try{await navigator.clipboard.writeText(contactEmail);setStatus("Adresse copiée.")}catch{setStatus("La copie automatique est indisponible. Vous pouvez sélectionner l’adresse ci-dessus.")}}}>Copier l’adresse</button><p className="copy-status" role="status">{status}</p></>;
}
