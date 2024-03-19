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
    title: "3.2-figma",
    githubLink: "https://github.com/shdoston/2-topshiriq",
    vercelLink: "https://2-topshiriq.vercel.app/",
  },
  {
    title: "3.3-figma",
    githubLink: "https://github.com/shdoston/3-topshiriq",
    vercelLink: "https://3-topshiriq.vercel.app/",
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
