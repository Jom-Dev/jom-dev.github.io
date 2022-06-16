let info = {
  name: "Jomarie Espino",
  logo_name: "Jom",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a dedicated, hard-working individual with 2 years of experience in web development with a record of success in providing innovative solutions to local government offices in the City Government of Davao.",
  links: {
    linkedin: "https://www.linkedin.com/in/jomarie-espino-aa847a233",
    github: "https://github.com/Jom-Dev",
    resume: "https://drive.google.com/file/d/1fW_oBYEExaXEODViOZRy0aytCZyu72-4/view?usp=sharing",
  },
  education: [
    {
      name: "Philippine Women's College",
      place: "Davao City",
      date: "March 2018",
      degree: "Bachelor of Science in Information Technology"
    },
  ],
  experience: [
    {
      name: "City Government of Davao",
      place: "Davao City, Philippines",
      work: [
        {
          date: "July 2020 - June 2022",
          position: "Junior Web Developer",
          description: "Develop web applications based on office requests, maintain a compelling and functioning websites.",
          skills: ["HTML5", "CSS3", "Bootstrap5", "Javascript", "VueJS", "C#", "PHP", "ASP.NET", "MySQL"]
        },
        {
          date: "July 2019 - June 2020",
          position: "Data Controller",
          description: "Responsible for the timely, accurate and efficient preparation and management of documents.",
          skills: ["MS Office", "Data Entry", "Data Management"]
        },
        {
          date: "July 2018 - June 2019",
          position: "Technical Support Specialist",
          description: "Provide diagnosing and repairing faults, resolving network issues, and installing and configuring hardware and software.",
          skills: ["Hardware, Software, Network troubleshooting", "Client Support"]
        }
      ]
    },
  ],
  skills: [
    {
      title: "Front-end",
      info: [
        "HTML","CSS","Javascript","Bootstrap","Tailwind","VueJS"],
      icon: "fa fa-cubes"
    },
    {
      title: "Back-end",
      info: [
        "PHP","C#","ASP.NET"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Database",
      info: [
        "MySQL"],
      icon: "fa fa-database"
    },
    {
      title: "Virtualization",
      info: ["VMWare, VirtualBox, Docker"],
      icon: "fas fa-server"
    },
  ],
  portfolio: [
    {
      name: "Vegetable Cart",
      pictures: [
        {
          img: require("./src/assets/portfolio/vegetable-cart/1.png")
        },
        {
          img: require("./src/assets/portfolio/vegetable-cart/2.png")
        },
        {
          img: require("./src/assets/portfolio/vegetable-cart/3.png")
        }
      ],
      technologies: ["vue", "sass"],
      category: "Web App",
      date: "April 18, 2022 - April 29, 2022",
      github:
        "https://github.com/Jom-Dev/vue-vegetable-cart.git",
      visit: "https://jom-dev.github.io/vue-vegetable-cart/",
      description:
        "vegetable cart uses vue state to update cart quantity and content."
    },
    {
      name: "Covid19 Tracker",
      pictures: [
        {
          img: require("./src/assets/portfolio/covid-tracker/1.png")
        },
        {
          img: require("./src/assets/portfolio/covid-tracker/2.png")
        },
      ],
      technologies: ["vue", "tailwind", "web api"],
      category: "Web App",
      date: "January, 2022 - 7 days",
      github:
        "https://github.com/Jom-Dev/vue-covid-tracker.git",
      visit: "https://jom-dev.github.io/vue-covid-tracker/",
      description:
        "covid19 tracker vue app displays covid cases, covid deaths by selecting country name."
    },
    {
      name: "Weather App",
      pictures: [
        {
          img: require("./src/assets/portfolio/weather-app/1.png")
        },
        {
          img: require("./src/assets/portfolio/weather-app/2.png")
        },
        {
          img: require("./src/assets/portfolio/weather-app/3.png")
        },
        {
          img: require("./src/assets/portfolio/weather-app/4.png")
        }
      ],
      technologies: ["vue", "tailwind", "web api"],
      category: "Web App",
      date: "January, 2022 - 4 days",
      github: "https://github.com/Jom-Dev/vue-weather-app.git",
      visit: "https://jom-dev.github.io/vue-weather-app/",
      description:
        "weather vue app allows you to search country or city name and get weather temperature. the background will also dynamically change based on weather description."
    },
  ],
};

export default info;
