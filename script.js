function updateResume() {
  // Update personal details
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const linkedIn = document.getElementById("linkdien").value;
  const github = document.getElementById("github").value;

  document.getElementById("preview-name").innerText = name || "Your Name";
  document.getElementById("preview-name").style.textAlign = "center";

  document.getElementById("preview-email").innerHTML =
  "<strong>Email:</strong> <span style='font-size:12px;'>" + (email || "your@email.com") + "</span>";

document.getElementById("preview-mobile").innerHTML =
  "<strong>Contact:</strong> <span style='font-size:12px;'>" + (mobile || "1234567890") + "</span>";

document.getElementById("preview-linkdien").innerHTML =
  linkedIn
    ? '<a href="' + linkedIn + '" style="font-size:12px;">' + linkedIn + "</a>"
    : "";

document.getElementById("preview-github").innerHTML =
  github
    ? '<a href="' + github + '" style="font-size:12px;">' + github + "</a>"
    : "";


  // Update education entries
  const eduList = document.getElementById("preview-education");
  eduList.innerHTML = "";
  document.querySelectorAll(".edu-entry").forEach((entry) => {
    const degree = entry.querySelector(".edu-degree").value;
    const stream = entry.querySelector(".edu-stream").value;
    const score = entry.querySelector(".edu-score").value;
    const year = entry.querySelector(".edu-year").value;
    if (degree || score || year) {
      const li = document.createElement("li");
li.innerHTML = `
  <div class="edu-item">
    <div class="row-top">
      <span class="degree" style="font-weight:550;">${degree}</span>
      <span class="year" style="margin-right:8px">${year}</span>
    </div>
    <div class="row-bottom">
      <span class="stream" >${stream}</span>
      <strong class="score" style="margin-right:8px">${score}</strong>
    </div>
  </div>
`;

      eduList.appendChild(li);
    }
  });

  // Update skills categories
  const skillsList = document.getElementById("preview-skills");
const skillsHeading = skillsList.previousElementSibling; // gets the <h3>Skills</h3>
skillsList.innerHTML = "";

let hasSkills = false;

document.querySelectorAll(".skill-category").forEach((cat) => {
  const catName = cat.querySelector(".skill-category-name").value;
  const skillInputs = cat.querySelectorAll(".skill-input");
  const skills = [];

  skillInputs.forEach((input) => {
    if (input.value.trim()) skills.push(input.value.trim());
  });

  if (skills.length > 0) {
    hasSkills = true;
    const li = document.createElement("li");
   li.innerHTML = catName
  ? `<span style="font-weight:550;">${catName}:</span> <span style="font-size:12px;">${skills.join(", ")}</span>`
  : `<span style="font-size:12px;">${skills.join(", ")}</span>`;

    skillsList.appendChild(li);
  }
});

// Show or hide the heading and list based on whether any skills exist
if (hasSkills) {
  skillsHeading.style.display = "block";
  skillsList.style.display = "block";
} else {
  skillsHeading.style.display = "none";
  skillsList.style.display = "none";
}

//update experience list
const Explist = document.getElementById("preview-exp");
Explist.innerHTML="";
document.querySelectorAll(".exp-entry").forEach((entry)=>{
const title = entry.querySelector(".exp-title").value;
// const startDate = entry.querySelector(".start-date").value;
// const endDate = entry.querySelector(".end-date").value;
const desc = entry.querySelector(".exp-desc").value;
if(title){
  const li=document.createElement("li");
  li.innerHTML=(title?"<span style='font-weight:600';>"+title+":</span>":"")+
 (desc ? `<div style="font-size:12px; margin-top: 2px;">${desc}</div>` : "")
  Explist.appendChild(li);
  }
});
  // Update project list
const projectList = document.getElementById("preview-projects");
const projectHeading = projectList.previousElementSibling; // <h3>Projects</h3>
projectList.innerHTML = "";

let hasProjects = false;

document.querySelectorAll(".project-entry").forEach((entry) => {
  const title = entry.querySelector(".project-title").value;
  const desc = entry.querySelector(".project-desc").value;
  const link = entry.querySelector(".project-link").value;

  if (title || desc || link) {
    hasProjects = true;

    const li = document.createElement("li");
   li.innerHTML = `
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
   ${title ? `<span style="font-weight:600;">${title}:</span>` : ""}
    ${link ? `<a href="${link}" target="_blank" style="text-decoration: none; margin-right: 10px;">🔗Link</a>` : ""}
  </div>
 ${desc ? `<div style="font-size:12px; margin-top:2px;">${desc}</div>` : ""}

`;



    projectList.appendChild(li);
  }
});

// Show or hide the heading and list based on content
if (hasProjects) {
  projectHeading.style.display = "block";
  projectList.style.display = "block";
} else {
  projectHeading.style.display = "none";
  projectList.style.display = "none";
}



  // Update achievements list
 const achList = document.getElementById("preview-achievements");
const achHeading = achList.previousElementSibling; // <h3>Achievements</h3>
achList.innerHTML = "";

let hasAchievements = false;

document.querySelectorAll(".achievment-input").forEach((input) => {
  if (input.value.trim()) {
    hasAchievements = true;
    const li = document.createElement("li");
    li.textContent = input.value.trim();
    achList.appendChild(li);
  }
});

// Show or hide the heading and list based on content
if (hasAchievements) {
  achHeading.style.display = "block";
  achList.style.display = "block";
} else {
  achHeading.style.display = "none";
  achList.style.display = "none";
}
}
function addEducation() {
  const container = document.getElementById("education-container");
  const entry = document.createElement("div");
  entry.className = "edu-entry";
  entry.innerHTML =
    '<input type="text" class="edu-degree" placeholder="Degree (e.g. B.Tech in CSE)" oninput="updateResume()" />' +
    '<input type="text" class="edu-stream"  placeholder="Board"  oninput="updateResume()" />' +
    '<input type="text" class="edu-score" placeholder="Percentage / CGPA" oninput="updateResume()" />' +
    '<input type="number" class="edu-year" placeholder="Year" oninput="updateResume()" />';
  container.appendChild(entry);
  updateResume();
}
function addSkillCategory() {
  const container = document.getElementById("skills-container");
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "skill-category";
  categoryDiv.innerHTML =
    '<input type="text" class="skill-category-name" placeholder="Category Name (e.g. Programming Languages)" oninput="updateResume()" />' +
    '<div class="skill-inputs">' +
    '<input type="text" class="skill-input" placeholder="Skill (e.g. Java)" oninput="updateResume()" />' +
    "</div>" +
    '<button type="button" onclick="addSkill(this)">+ Add Skill</button>';
  container.appendChild(categoryDiv);
  updateResume();
}

function addSkill(button) {
  // button is inside the skill-category div
  const categoryDiv = button.parentElement;
  const skillInputsDiv = categoryDiv.querySelector(".skill-inputs");
  const input = document.createElement("input");
  input.type = "text";
  input.className = "skill-input";
  input.placeholder = "Skill";
  input.oninput = updateResume;
  skillInputsDiv.appendChild(input);
}
function addExperience(){
  const container = document.getElementById("Experience-container");
  const entry = document.createElement("div");
  entry.className="exp-entry";
  entry.innerHTML='<input type="text" class="exp-title" placeholder="company name"oninput="updateResume()"/>'+
  '<textarea class="exp-desc" placeholder="Description" oninput="updateResume()"></textarea>';
  container.appendChild(entry);
              
}
function addProjects() {
  const container = document.getElementById("project-container");
  const entry = document.createElement("div");
  entry.className = "project-entry";
  entry.innerHTML =
    '<input type="text" class="project-title" placeholder="Project Title" oninput="updateResume()" />' +
    '<textarea class="project-desc" placeholder="Description" oninput="updateResume()"></textarea>' +
    '<input type="url" class="project-link" placeholder="Project Link (optional)" oninput="updateResume()"  />' 
    container.appendChild(entry);
  updateResume();
}


function addAchievment() {
  const container = document.getElementById("achievment-container");
  const input = document.createElement("input");
  input.type = "text";
  input.className = "achievment-input";
  input.placeholder = "Achievement";
  input.oninput = updateResume;
  container.appendChild(input);
  updateResume();
}
function handleDownload() {
  const resumeElem = document.querySelector(".resume-card");
  const opt = {
    margin: 0.5,
    filename: "resume.pdf",
    html2canvas: {
      scale: 2, // increase resolution if needed
      scrollX: 0, // capture from leftmost
      scrollY: 0, // capture from top
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(resumeElem).save();
}
