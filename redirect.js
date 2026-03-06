// Shared redirect configuration — single source of truth for all URLs
const PORTFOLIO_URL = "https://sagargupta.online/portfolio-react/";
const HOME_URL = "https://sagargupta.online/";

function redirectToPortfolio() {
  window.location.replace(PORTFOLIO_URL);
}

// Read data-redirect from <html> element to determine behavior:
//   "instant" → redirect immediately (index.html)
//   "5"       → redirect after 5 seconds (404.html)
(function () {
  const mode = document.documentElement.dataset.redirect;
  if (!mode) return;

  if (mode === "instant") {
    redirectToPortfolio();
  } else {
    const seconds = Number.parseInt(mode, 10);
    if (seconds > 0) {
      setTimeout(redirectToPortfolio, seconds * 1000);
    }
  }
})();
