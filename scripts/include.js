function loadHTML(selector, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        return response.text();
      })
      .then(content => {
        document.querySelector(selector).innerHTML = content;
      })
      .catch(error => console.error(error));
  }
  
  // Load header and footer
  document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#header", "header.html");
    loadHTML("#footer", "footer.html");
  });