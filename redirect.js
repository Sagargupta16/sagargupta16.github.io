// Shared redirect configuration
var PORTFOLIO_URL = "https://sagargupta16.github.io/portfolio-react/";
var HOME_URL = "https://sagargupta16.github.io/";

function redirectToPortfolio() {
  window.location.href = PORTFOLIO_URL;
}

function scheduleRedirect(seconds) {
  setTimeout(function () {
    window.location.href = PORTFOLIO_URL;
  }, seconds * 1000);
}
