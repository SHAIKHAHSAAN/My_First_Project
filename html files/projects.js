document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  // Fetch JSON file
  fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
      projects.forEach((project) => {
        // Create a project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("project");

        // Add project content with an icon
        projectCard.innerHTML = `
          <i class="${project.icon} text-blue-500 text-2xl mb-2"></i>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="pro1-btn">View Project</a>
        `;

        // Append to container
        container.appendChild(projectCard);
      });
    })
    .catch((error) => console.error("Error loading projects:", error));
});
  