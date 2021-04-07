document.interestCohort = function() {
  document.dispatchEvent(new CustomEvent("flocRequested", {}));
  return Promise.reject();
}
