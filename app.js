const D = portfolioData;

const byId = id => document.getElementById(id);
byId("hero-name").textContent = D.profile.name;
byId("hero-summary").textContent = D.profile.heroSummary;
byId("about-text").textContent = D.profile.about;
byId("year").textContent = new Date().getFullYear();

const profileImage = byId("profile-image");
const heroCard = document.querySelector(".hero-card");
if (!D.profile.showProfilePhoto || !D.profile.profilePhoto) {
  heroCard.classList.add("no-photo");
} else {
  profileImage.src = D.profile.profilePhoto;
}

function makeLink(label, url) {
  const a = document.createElement("a");
  a.textContent = label;
  a.href = url;
  a.target = url.startsWith("http") ? "_blank" : "_self";
  a.rel = url.startsWith("http") ? "noopener noreferrer" : "";
  return a;
}

const socials = [
  ["LinkedIn", D.profile.linkedin],
  ["GitHub", D.profile.github],
  ["Email", `mailto:${D.profile.email}`]
].filter(([,u]) => u && !u.endsWith("mailto:"));

const socialRow = byId("social-row");
const footerSocials = byId("footer-socials");
socials.forEach(([label,url]) => {
  socialRow.appendChild(makeLink(label,url));
  footerSocials.appendChild(makeLink(label,url));
});
byId("footer-email").href = `mailto:${D.profile.email}`;

D.info.forEach(([label,value]) => {
  byId("info-grid").insertAdjacentHTML("beforeend",
    `<div class="info-card"><small>${label}</small><strong>${value}</strong></div>`);
});

D.skills.forEach(s => {
  byId("skills-grid").insertAdjacentHTML("beforeend", `
    <article class="skill-card">
      <h3>${s.group}</h3>
      <ul>${s.items.map(x=>`<li>${x}</li>`).join("")}</ul>
    </article>`);
});
D.researchInterests.forEach(x =>
  byId("research-grid").insertAdjacentHTML("beforeend", `<span class="chip">${x}</span>`)
);

function renderTimeline(id, rows) {
  const el = byId(id);
  rows.forEach(x => el.insertAdjacentHTML("beforeend", `
    <article class="timeline-item">
      <div class="period">${x.period}</div>
      <h3>${x.title}</h3>
      <div class="place">${x.place}</div>
      <p>${x.details}</p>
    </article>`));
}
renderTimeline("education-list", D.education);
renderTimeline("experience-list", D.experience);

const categories = ["All", ...new Set(D.projects.map(p => p.category))];
categories.forEach((cat,i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "filter-btn" + (i===0 ? " active" : "");
  b.textContent = cat;
  b.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    renderProjects(cat);
  });
  byId("filters").appendChild(b);
});

function projectPrimaryUrl(p) {
  return p.linkedinPost || "";
}

const projectModal = byId("project-link-modal");
const modalTitle = byId("modal-title");
const modalText = byId("modal-text");
const modalActions = byId("modal-actions");

function closeProjectModal(){
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden","true");
}
function showProjectModal(p){
  modalTitle.textContent = `${p.title} — LinkedIn link needed`;
  modalText.innerHTML = `This project does not yet have its exact LinkedIn post URL connected. Add the specific post URL in <strong>data.js</strong> as <code>linkedinPost</code>. The project card will never fall back to your general LinkedIn profile.`;
  modalActions.innerHTML = "";
  if (p.live) {
    const live = document.createElement("a");
    live.className = "btn primary";
    live.href = p.live;
    live.target = "_blank";
    live.rel = "noopener noreferrer";
    live.textContent = "Open live project ↗";
    modalActions.appendChild(live);
  }
  if (p.github) {
    const gh = document.createElement("a");
    gh.className = "btn secondary";
    gh.href = p.github;
    gh.target = "_blank";
    gh.rel = "noopener noreferrer";
    gh.textContent = "Open GitHub ↗";
    modalActions.appendChild(gh);
  }
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden","false");
}
document.querySelectorAll("[data-close-modal]").forEach(el=>el.addEventListener("click", closeProjectModal));
document.addEventListener("keydown", e=>{
  if(e.key==="Escape" && projectModal.classList.contains("open")) closeProjectModal();
});

function renderProjects(category="All") {
  const grid = byId("project-grid");
  grid.innerHTML = "";
  D.projects
    .filter(p => category==="All" || p.category===category)
    .forEach(p => {
      const linkedIn = projectPrimaryUrl(p);
      const card = document.createElement("article");
      card.className = "project-card";
      card.tabIndex = 0;
      card.setAttribute("role","link");

      card.innerHTML = `
        <div class="project-click-hint">${linkedIn ? "LinkedIn post ↗" : "Project details"}</div>
        <div class="project-cover">${(p.linkedinImage || p.image) ? `<img src="${p.linkedinImage || p.image}" alt="${p.title}">` : p.category.toUpperCase()}</div>
        <div class="project-body">
          <div class="project-meta">${p.category} • ${p.year} • ${p.institution}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tool-row">${p.tools.map(t=>`<span class="tool">${t}</span>`).join("")}</div>
          <div class="project-actions">
            ${p.linkedinPost
              ? `<a href="${p.linkedinPost}" target="_blank" rel="noopener noreferrer">LinkedIn Post ↗</a>`
              : `<button type="button" class="linkedin-missing">Connect LinkedIn Post</button>`}
            ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ""}
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ""}
          </div>
        </div>`;

      const openMain = e => {
        if (e.target.closest("a")) return;
        if (e.target.closest(".linkedin-missing")) {
          showProjectModal(p);
          return;
        }
        if (p.linkedinPost) {
          window.open(p.linkedinPost, "_blank", "noopener,noreferrer");
        } else {
          showProjectModal(p);
        }
      };

      card.addEventListener("click", openMain);
      card.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (p.linkedinPost) {
            window.open(p.linkedinPost, "_blank", "noopener,noreferrer");
          } else {
            showProjectModal(p);
          }
        }
      });
      grid.appendChild(card);
    });
}
renderProjects();

D.certifications.forEach(c => {
  const link = c.linkedinPost || c.certificatePdf || c.pdf || "";

  const preview = c.pdf
    ? `
      <div class="cert-cover cert-pdf-cover">
        <iframe
          class="cert-pdf-preview"
          src="${c.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0"
          title="${c.title}"
          loading="lazy">
        </iframe>
      </div>
    `
    : c.image
      ? `
        <div class="cert-cover">
          <img src="${c.image}" alt="${c.title}">
        </div>
      `
      : "";

  byId("cert-grid").insertAdjacentHTML("beforeend", `
    <article
      class="cert-card"
      ${link ? `data-link="${link}" role="link" tabindex="0"` : ""}
    >
      ${preview}

      <div class="cert-card-body">
        <div class="type">${c.type} • ${c.year}</div>

        <h3>${c.title}</h3>

        <p>${c.description}</p>

        ${
          c.certificatePdf
            ? `<div class="cert-action">View Certificate PDF ↗</div>`
            : c.linkedinPost
              ? `<div class="cert-action">Open LinkedIn Post ↗</div>`
              : ""
        }
      </div>
    </article>
  `);
});

[
  ["Location",D.profile.location],
  ["Email",D.profile.email],
  ["Phone",D.profile.phone],
  ["LinkedIn",D.profile.linkedin]
].forEach(([label,value]) => byId("contact-cards").insertAdjacentHTML("beforeend",
  `<div class="contact-card"><small>${label}</small><strong>${value}</strong></div>`));

let roleIndex=0,charIndex=0,deleting=false,typingTimer;
function typeLoop(){
  const role=D.profile.roles[roleIndex];
  byId("typed-role").textContent=deleting?role.slice(0,--charIndex):role.slice(0,++charIndex);
  if(!deleting && charIndex===role.length){deleting=true;typingTimer=setTimeout(typeLoop,1200);return}
  if(deleting && charIndex===0){deleting=false;roleIndex=(roleIndex+1)%D.profile.roles.length}
  typingTimer=setTimeout(typeLoop,deleting?35:60);
}
typeLoop();

function showPage(page, pushHash=true){
  const panel=document.querySelector(`[data-page-panel="${page}"]`) || document.querySelector('[data-page-panel="home"]');
  const actual=panel.dataset.pagePanel;
  document.querySelectorAll("[data-page-panel]").forEach(x=>x.classList.toggle("active",x===panel));
  document.querySelectorAll(".site-header .nav-link").forEach(x=>x.classList.toggle("active",x.dataset.page===actual));
  document.querySelector(".nav").classList.remove("open");
  window.scrollTo({top:0,behavior:"auto"});
  if(pushHash && location.hash !== `#${actual}`) history.pushState({page:actual},"",`#${actual}`);
}

document.querySelectorAll(".nav-link").forEach(btn=>{
  btn.addEventListener("click",()=>showPage(btn.dataset.page));
});
document.querySelector(".menu-toggle").addEventListener("click",()=>{
  document.querySelector(".nav").classList.toggle("open");
});
window.addEventListener("popstate",()=>showPage(location.hash.replace("#","")||"home",false));
showPage(location.hash.replace("#","")||"home",false);

const contactForm = byId("contact-form");
const contactStatus = byId("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');
    const payload = {
      name: byId("name").value.trim(),
      email: byId("email").value.trim(),
      subject: byId("subject").value.trim(),
      message: byId("message").value.trim()
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      contactStatus.textContent = "Please complete all fields.";
      contactStatus.className = "form-status error";
      return;
    }

    button.disabled = true;
    button.textContent = "Sending...";
    contactStatus.textContent = "";
    contactStatus.className = "form-status";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      contactStatus.textContent = "Message sent successfully. Thank you!";
      contactStatus.className = "form-status success";
      contactForm.reset();
    } catch (error) {
      const localFile = window.location.protocol === "file:";
      contactStatus.textContent = localFile
        ? "Direct email sending works after deployment on Vercel. It cannot run from a file opened directly on your computer."
        : (error.message || "Message could not be sent. Please try again.");
      contactStatus.className = "form-status error";
    } finally {
      button.disabled = false;
      button.textContent = "Send Message →";
    }
  });
}

// Open certification/activity cards that have a LinkedIn post.
document.addEventListener("click", (event) => {
  const card = event.target.closest(".cert-card[data-link]");
  if (card) window.open(card.dataset.link, "_blank", "noopener,noreferrer");
});
document.addEventListener("keydown", (event) => {
  const card = event.target.closest?.(".cert-card[data-link]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    window.open(card.dataset.link, "_blank", "noopener,noreferrer");
  }
});
