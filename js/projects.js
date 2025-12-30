// Load project data dynamically for the project overview page
function loadProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectKey = urlParams.get("project");
    const project = projects[projectKey];
  
    if (project) {
      // Populate the page with project data
      document.querySelector(".project-title").textContent = project.title;
      document.querySelector(".project-meta").textContent = project.meta;
      document.querySelector(".project-description").textContent = project.description;
      document.querySelector(".project-description2").textContent = project.description2 || ""; // Optional description2

      document.querySelector(".btn-primary").href = project.github;
      document.querySelector(".project-logo").src = project.image;
      document.querySelector(".project-details").textContent = project.details;
    } else {
      // Handle invalid or missing project key
      document.querySelector("#project-overview").innerHTML = `
        <h1 class="project-title">Project Not Found</h1>
        <p class="project-description">The project you are looking for does not exist. Please check the URL and try again.</p>
      `;
    }
  }
  
  // Call the function when the page loads
  window.onload = loadProject;