(() => {
  const STORAGE_KEY = "portfolio_lang";
  const pathname = window.location.pathname;
  const currentLang =
    pathname.includes("/en/") || pathname.endsWith("/en") ? "en" : "pl";

  function rewriteEnProjectLinks() {
    const enBaseMatch = pathname.match(/^(.*)\/en(?:\/index\.html|\/?)$/);
    if (!enBaseMatch) return;

    const basePrefix = enBaseMatch[1] || "";
    document.querySelectorAll("a.project-card[href]").forEach((link) => {
      const rawHref = link.getAttribute("href") || "";
      if (!rawHref.startsWith("projects/")) return;
      link.setAttribute("href", `${basePrefix}/en/${rawHref}`);
    });
  }

  if (currentLang === "en") {
    rewriteEnProjectLinks();
  }

  const switchEl = document.querySelector(".lang-switch");
  if (!switchEl) return;

  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (_) {
    // Ignore storage errors (private mode, disabled storage)
  }

  switchEl.addEventListener("click", () => {
    const configuredTargetLang =
      switchEl.getAttribute("hreflang") ||
      switchEl.getAttribute("lang") ||
      (switchEl.textContent || "").trim().toLowerCase();
    const targetLang = configuredTargetLang === "en" ? "en" : "pl";

    try {
      localStorage.setItem(STORAGE_KEY, targetLang);
    } catch (_) {
      // Ignore storage errors
    }
  });
})();
