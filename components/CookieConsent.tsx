"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Consent = {
  necessary: true;
  analytics: boolean;
  thirdParty: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "lmg-cookie-consent";

const defaultConsent: Consent = {
  necessary: true,
  analytics: false,
  thirdParty: false,
  updatedAt: "",
};

export default function CookieConsent() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaultConsent);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      setBannerOpen(true);
      setReady(true);
      return;
    }

    try {
      const parsed = JSON.parse(stored) as Consent;

      setConsent({
        necessary: true,
        analytics: Boolean(parsed.analytics),
        thirdParty: Boolean(parsed.thirdParty),
        updatedAt: parsed.updatedAt || "",
      });
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setBannerOpen(true);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    function openSettings() {
      setBannerOpen(false);
      setSettingsOpen(true);
    }

    window.addEventListener("lmg:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("lmg:open-cookie-settings", openSettings);
    };
  }, []);

  function save(next: Consent) {
    const value = {
      ...next,
      necessary: true as const,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent(value);
    setBannerOpen(false);
    setSettingsOpen(false);

    window.dispatchEvent(
      new CustomEvent("lmg:cookie-consent-updated", {
        detail: value,
      })
    );
  }

  function acceptAll() {
    save({
      necessary: true,
      analytics: true,
      thirdParty: true,
      updatedAt: "",
    });
  }

  function rejectOptional() {
    save({
      necessary: true,
      analytics: false,
      thirdParty: false,
      updatedAt: "",
    });
  }

  if (!ready) return null;

  return (
    <>
      {bannerOpen && (
        <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-[#17181c] text-white shadow-[0_-20px_60px_rgba(0,0,0,0.18)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-7 md:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                {isFr ? "Votre confidentialité" : "Your privacy"}
              </p>

              <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                {isFr
                  ? "LMG respecte vos choix."
                  : "LMG respects your choices."}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {isFr
                  ? "Nous utilisons les technologies nécessaires au fonctionnement du site. Avec votre accord, nous pouvons également utiliser des outils de mesure d’audience et certains services tiers."
                  : "We use technologies required for the website to function. With your permission, we may also use audience measurement tools and certain third-party services."}
              </p>

              <a
                href="/cookies"
                className="mt-4 inline-block text-sm underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
              >
                {isFr
                  ? "En savoir plus sur les cookies"
                  : "Learn more about cookies"}
              </a>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-wrap lg:justify-end">
              <button
                type="button"
                onClick={rejectOptional}
                className="min-h-12 border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10"
              >
                {isFr ? "Tout refuser" : "Reject all"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setBannerOpen(false);
                  setSettingsOpen(true);
                }}
                className="min-h-12 border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10"
              >
                {isFr ? "Personnaliser" : "Customize"}
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="min-h-12 bg-white px-6 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                {isFr ? "Tout accepter" : "Accept all"}
              </button>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-end justify-center bg-black/55 p-0 backdrop-blur-[2px] md:items-center md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="max-h-[92vh] w-full overflow-y-auto bg-white text-black md:max-w-2xl">
            <div className="border-b border-neutral-200 px-6 py-7 md:px-10">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Legacy Music Group
                  </p>

                  <h2
                    id="cookie-settings-title"
                    className="mt-3 text-3xl font-semibold tracking-[-0.035em]"
                  >
                    {isFr
                      ? "Gérer mes cookies"
                      : "Customize Cookies"}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSettingsOpen(false)}
                  aria-label={isFr ? "Fermer" : "Close"}
                  className="flex h-10 w-10 items-center justify-center border border-neutral-200 text-xl transition hover:bg-neutral-100"
                >
                  ×
                </button>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600">
                {isFr
                  ? "Choisissez les catégories facultatives que vous souhaitez autoriser. Les technologies strictement nécessaires restent toujours actives."
                  : "Choose which optional categories you wish to allow. Strictly necessary technologies always remain active."}
              </p>
            </div>

            <div className="divide-y divide-neutral-200 px-6 md:px-10">
              <PreferenceRow
                title={isFr ? "Strictement nécessaires" : "Strictly necessary"}
                description={
                  isFr
                    ? "Nécessaires au fonctionnement, à la sécurité et aux fonctionnalités essentielles du site."
                    : "Required for the operation, security and essential functionality of the website."
                }
                checked
                disabled
                label={isFr ? "Toujours actif" : "Always active"}
              />

              <PreferenceRow
                title={isFr ? "Mesure d’audience" : "Analytics"}
                description={
                  isFr
                    ? "Nous aide à comprendre l’utilisation du site et à améliorer ses performances."
                    : "Helps us understand how the website is used and improve its performance."
                }
                checked={consent.analytics}
                onChange={(checked) =>
                  setConsent((current) => ({
                    ...current,
                    analytics: checked,
                  }))
                }
              />

              <PreferenceRow
                title={isFr ? "Contenus tiers" : "Third-party content"}
                description={
                  isFr
                    ? "Permet l’activation de certains contenus ou services fournis par des plateformes tierces."
                    : "Allows certain content or services provided by third-party platforms to be enabled."
                }
                checked={consent.thirdParty}
                onChange={(checked) =>
                  setConsent((current) => ({
                    ...current,
                    thirdParty: checked,
                  }))
                }
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-neutral-200 px-6 py-6 sm:flex-row sm:justify-between md:px-10">
              <button
                type="button"
                onClick={rejectOptional}
                className="min-h-12 border border-neutral-300 px-6 text-sm font-medium transition hover:bg-neutral-100"
              >
                {isFr ? "Tout refuser" : "Reject all"}
              </button>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    save({
                      ...consent,
                      necessary: true,
                    })
                  }
                  className="min-h-12 border border-black px-6 text-sm font-medium transition hover:bg-neutral-100"
                >
                  {isFr ? "Enregistrer mes choix" : "Save choices"}
                </button>

                <button
                  type="button"
                  onClick={acceptAll}
                  className="min-h-12 bg-black px-6 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  {isFr ? "Tout accepter" : "Accept all"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  label,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex gap-6 py-7">
      <div className="flex-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {description}
        </p>
      </div>

      <div className="flex shrink-0 items-start">
        {disabled ? (
          <span className="pt-1 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">
            {label}
          </span>
        ) : (
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={() => onChange?.(!checked)}
            className={`relative h-7 w-12 rounded-full transition ${
              checked ? "bg-black" : "bg-neutral-300"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                checked ? "left-6" : "left-1"
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}