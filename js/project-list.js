// Dynamically generate project cards for the projects page
function loadProjects() {
    const projectList = document.getElementById("project-list");
  
    Object.keys(projects).forEach((key) => {
      const project = projects[key];
  
      // Create a card for each project
      const card = document.createElement("div");
      card.className = "project-card";
  
      card.innerHTML = `
        <a href="project-overview.html?project=${key}" class="project-link">
          <h3>${project.title}</h3>
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <p>${project.description}</p>
        </a>
      `;
  
      projectList.appendChild(card);
    });
  }
  
  // Call the function when the page loads
  window.onload = loadProjects;