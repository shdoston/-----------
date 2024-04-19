const projects = [
  // {
  //   title: "AkademNashr",
  //   githubLink: "https://github.com/Nazarovfarhod/akademnashir",
  //   vercelLink: "akademnashir-weld.vercel.app",
  // },
  {
    title: "Ansormed",
    githubLink: "https://github.com/shdoston/Ansormed",
    vercelLink: "https://ansormed-gamma.vercel.app/",
  },
  {
    title: "My Cart",
    githubLink: "https://github.com/shdoston/card",
    vercelLink: "https://i-am-abaout-info.vercel.app/",
  },
  {
    title: "uzbekiston",
    githubLink: "https://github.com/shdoston/uzb-viloyatlar-xaqida",
    vercelLink: "",
  },
  {
    title: "akademnashir",
    githubLink: "https://github.com/shdoston/Akademnashir.",
    vercelLink: "https://akademnashir-eight.vercel.app/",
  },
  {
    title:"Parfume",
    githubLink: "https://github.com/shdoston/2-topshiriq",
    vercelLink: "https://2-topshiriq.vercel.app/",
  },
  {
    title: "Remote",
    githubLink: "https://github.com/shdoston/3-topshiriq",
    vercelLink: "https://remoto-phi.vercel.app/",
  }, 
  {
    title: "okean",
    githubLink: "https://github.com/shdoston/okeanlar",
    vercelLink: "https://okeanlar.vercel.app/",
  },
  {
    title: "tip-clculator",
    githubLink: "https://github.com/shdoston/tip-calculator-app",
    vercelLink: "https://tip-calculator-app-gules-two.vercel.app/",
  },
  {
    title: "Castavay",
    githubLink: "https://github.com/shdoston/castavay",
    vercelLink: "https://castavay.vercel.app/",
  },
  {
    title: "Createx-Marathon",
    githubLink: "https://github.com/shdoston/Createx-Marathon",
    vercelLink: "https://createx-marathon-jsmn.vercel.app/servis/contact.html",
  },
  {
    title: "myteam",
    githubLink: "https://github.com/shdoston/myteam",
    vercelLink: "https://myteam-eight.vercel.app/",
  },
  {
    title: "3-imtihon",
    githubLink: "https://github.com/shdoston/myteam",
    vercelLink: "https://myteam-eight.vercel.app/",
  },
  {
    title: "amalyot js",
    githubLink: "https://github.com/shdoston/myteam",
    vercelLink: "https://js-drab-nine.vercel.app/",
  },
  {
    title: "crowfound",
    githubLink: "https://github.com/shdoston/Crowfound",
    vercelLink: "https://crowfound-phi.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
