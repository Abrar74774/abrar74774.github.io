const portfolioContainer = document.querySelector("#portfolio .project-container")
const projectTemplate = document.querySelector("#portfolio .project").cloneNode(true);

if (!portfolioContainer || !projectTemplate) {
    console.error("Incorrect project template")
} else if (!data) {
    console.error("No project data found")
} else {
    portfolioContainer.innerHTML = ""
    data.forEach(projectData => {
        const { title, lang, site, source, img, description } = projectData
        const project = projectTemplate.cloneNode(true)
        project.querySelector(".image-container img").src = img;
        project.querySelector(".desc-title").innerText = title;
        project.querySelector(".desc-text").innerHTML = description;
        project.querySelector(".techs").innerHTML = lang.map(tech => `<li>${tech}</li>`).join(' ');
        
        project.querySelector(".desc-links").innerHTML = `
            <a href="${site}">Website</a>
            ${source ? `<a href="${source}">Github</a>` : ''}
              `;
        portfolioContainer.append(project)
    })

}

