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

    window.addEventListener(
      "lmg:open-cookie-settings",
      openSettings
    );

    return () => {
      window.removeEventListener(
        "lmg:open-cookie-settings",
        openSettings
      );
    };
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSettingsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [settingsOpen]);

  function save(next: Consent) {
    const value: Consent = {
      ...next,
      necessary: true,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(value)
    );

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
        <aside
          className="cookie-banner"
          aria-label={
            isFr
              ? "Préférences de confidentialité"
              : "Privacy preferences"
          }
        >
          <div className="cookie-banner-inner">
            <div className="cookie-banner-copy">
              <p className="cookie-eyebrow">
                {isFr
                  ? "Votre confidentialité"
                  : "Your privacy"}
              </p>

              <h2>
                {isFr
                  ? "LMG respecte vos choix."
                  : "LMG respects your choices."}
              </h2>

              <p className="cookie-description">
                {isFr
                  ? "Nous utilisons les technologies nécessaires au fonctionnement du site. Avec votre accord, nous pouvons également utiliser des outils de mesure d’audience et certains services tiers."
                  : "We use technologies required for the website to function. With your permission, we may also use audience measurement tools and certain third-party services."}
              </p>

              <a
                href="/cookies"
                className="cookie-policy-link"
              >
                {isFr
                  ? "En savoir plus sur les cookies"
                  : "Learn more about cookies"}{" "}
                ↗
              </a>
            </div>

            <div className="cookie-actions">
              <button
                type="button"
                className="cookie-button cookie-button-secondary"
                onClick={rejectOptional}
              >
                {isFr ? "Tout refuser" : "Reject all"}
              </button>

              <button
                type="button"
                className="cookie-button cookie-button-secondary"
                onClick={() => {
                  setBannerOpen(false);
                  setSettingsOpen(true);
                }}
              >
                {isFr ? "Personnaliser" : "Customize"}
              </button>

              <button
                type="button"
                className="cookie-button cookie-button-primary"
                onClick={acceptAll}
              >
                {isFr ? "Tout accepter" : "Accept all"}
              </button>
            </div>
          </div>
        </aside>
      )}

      {settingsOpen && (
        <div
          className="cookie-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSettingsOpen(false);
            }
          }}
        >
          <div
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            <div className="cookie-modal-header">
              <div>
                <p className="cookie-modal-brand">
                  Legacy Music Group
                </p>

                <h2 id="cookie-settings-title">
                  {isFr
                    ? "Gérer mes cookies"
                    : "Customize Cookies"}
                </h2>
              </div>

              <button
                type="button"
                className="cookie-modal-close"
                onClick={() => setSettingsOpen(false)}
                aria-label={isFr ? "Fermer" : "Close"}
              >
                ×
              </button>

              <p className="cookie-modal-intro">
                {isFr
                  ? "Choisissez les catégories facultatives que vous souhaitez autoriser. Les technologies strictement nécessaires restent toujours actives."
                  : "Choose which optional categories you wish to allow. Strictly necessary technologies always remain active."}
              </p>
            </div>

            <div className="cookie-preferences">
              <PreferenceRow
                title={
                  isFr
                    ? "Strictement nécessaires"
                    : "Strictly necessary"
                }
                description={
                  isFr
                    ? "Nécessaires au fonctionnement, à la sécurité et aux fonctionnalités essentielles du site."
                    : "Required for the operation, security and essential functionality of the website."
                }
                checked
                disabled
                label={
                  isFr
                    ? "Toujours actif"
                    : "Always active"
                }
              />

              <PreferenceRow
                title={
                  isFr
                    ? "Mesure d’audience"
                    : "Analytics"
                }
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
                title={
                  isFr
                    ? "Contenus tiers"
                    : "Third-party content"
                }
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

            <div className="cookie-modal-actions">
              <button
                type="button"
                className="cookie-button cookie-button-light"
                onClick={rejectOptional}
              >
                {isFr ? "Tout refuser" : "Reject all"}
              </button>

              <div className="cookie-modal-actions-right">
                <button
                  type="button"
                  className="cookie-button cookie-button-outline-dark"
                  onClick={() =>
                    save({
                      ...consent,
                      necessary: true,
                    })
                  }
                >
                  {isFr
                    ? "Enregistrer mes choix"
                    : "Save choices"}
                </button>

                <button
                  type="button"
                  className="cookie-button cookie-button-dark"
                  onClick={acceptAll}
                >
                  {isFr
                    ? "Tout accepter"
                    : "Accept all"}
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
    <div className="cookie-preference">
      <div className="cookie-preference-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="cookie-preference-control">
        {disabled ? (
          <span className="cookie-always-active">
            {label}
          </span>
        ) : (
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-label={title}
            className={`cookie-switch ${
              checked ? "is-active" : ""
            }`}
            onClick={() => onChange?.(!checked)}
          >
            <span />
          </button>
        )}
      </div>
    </div>
  );
}