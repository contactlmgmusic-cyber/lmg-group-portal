"use client";

import { useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { contactEmail } from "@/lib/content";

export default function CopyEmail() {
  const { locale } = useLanguage();
  const [status, setStatus] = useState("");

  const content =
    locale === "en"
      ? {
          copy: "Copy email address",
          copied: "Email address copied.",
          unavailable:
            "Automatic copy is unavailable. You can select the email address above.",
        }
      : {
          copy: "Copier l’adresse",
          copied: "Adresse copiée.",
          unavailable:
            "La copie automatique est indisponible. Vous pouvez sélectionner l’adresse ci-dessus.",
        };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        contactEmail
      );

      setStatus(content.copied);
    } catch {
      setStatus(content.unavailable);
    }
  };

  return (
    <>
      <button
        type="button"
        className="copy-email"
        onClick={copyEmail}
      >
        {content.copy}
      </button>

      <p
        className="copy-status"
        role="status"
      >
        {status}
      </p>
    </>
  );
}