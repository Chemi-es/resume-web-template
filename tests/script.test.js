(function () {
  function report(result) {
    const list = document.getElementById("test-results");
    if (!list) return;

    const item = document.createElement("li");
    item.textContent = result.description + (result.pass ? " ✅" : " ❌");
    item.className = result.pass ? "result-pass" : "result-fail";
    list.appendChild(item);

    const method = result.pass ? "log" : "error";
    console[method](item.textContent);
  }

  function assertEqual(actual, expected, description) {
    report({
      description,
      pass: actual === expected,
    });
  }

  // Wait until the DOM is fully ready and the production script's
  // DOMContentLoaded handler has had a chance to run.
  window.addEventListener("load", () => {
    const span = document.getElementById("current-year");

    // Test case 1: The script correctly updates the "current-year" span
    // with the current year.
    const expectedYear = new Date().getFullYear().toString();
    const actualYear = span && span.textContent ? span.textContent.trim() : "";

    assertEqual(
      actualYear,
      expectedYear,
      "updates #current-year span text to the current year"
    );
  });
})();
