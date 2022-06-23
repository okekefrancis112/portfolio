let myId = 2 * (Math.random() * 6).toFixed(4);

export const projectsDb = [
  {
    id: ++myId,
    title: "LeadleapConsult",
    description: "An educational website for the training and development of data analytic engineers",
    tech: "Django + JavaScript + Heroku",
    live: "live",
    gitlink: "https://github.com/okekefrancis112/leadleapconsult",
    weblink: "https://www.leadleapconsult.com/",
  },
  {
    id: ++myId,
    title: "Missions",
    description: "A mission site that accepts donation for the propagation of the Gospel and the development of the community.",
    live: "live",
    tech: "Django + JavaScript + Heroku",
    gitlink: "https://github.com/okekefrancis112/sol_church",
    weblink: "https://sol-mission.herokuapp.com/",
  },
  {
    id: ++myId,
    title: "GoldenLand",
    tech: "Html + Css + Javascript",
    description: "A real estate website",
    live: "live",
    gitlink:
      "https://github.com/slowpacerapper/slowpacerapper.github.io/tree/GoldenLand-project",
    weblink: "http://goldenland.herokuapp.com/",
  },
  // {
  //   id: ++myId,
  //   tech: "React + Styled Components",
  //   title: "Spink-Learn",
  //   description: "A Learning Management System",
  //   live: "still in progress",
  //   gitlink: "https://github.com/slowpacerapper/Spink-Learning",
  //   weblink: "https://spink-learn.netlify.app",
  // },
  // {
  //   id: ++myId,
  //   tech: "React + MUI",
  //   title: "Portfolio",
  //   description:
  //     "My portfolio website which contains my projects and other information about me",
  //   gitlink: "https://github.com/slowpacerapper/Porfolio",
  //   weblink: "https://spink-portfolio.netlify.app",
  // },
  // {
  //   id: ++myId,
  //   tech: "React + MUI + Styled Components",
  //   title: "Portfolio V2",
  //   description:
  //     "My portfolio website which contains my projects and other information about me",
  //   gitlink: "https://github.com/slowpacerapper/Spinkfolio-version-2",
  //   weblink: "https://spinkfolio.netlify.app",
  // },
];
