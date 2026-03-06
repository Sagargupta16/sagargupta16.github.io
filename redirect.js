// Shared redirect configuration — single source of truth for all URLs
var PORTFOLIO_URL = "https://sagargupta.online/portfolio-react/";
var HOME_URL = "https://sagargupta.online/";

function redirectToPortfolio() {
  window.location.href = PORTFOLIO_URL;
}

function scheduleRedirect(seconds) {
  setTimeout(function () {
    window.location.href = PORTFOLIO_URL;
  }, seconds * 1000);
}
