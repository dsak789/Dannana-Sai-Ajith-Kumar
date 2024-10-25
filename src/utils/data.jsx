export const SKILLS = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend.png",
    skills: [
      { skill: "ReactJs", percentage: "80%" },
      { skill: "React Native", percentage: "80%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "Streamlit", percentage: "70%" },
      { skill: "HTML and CSS", percentage: "80%" },
      { skill: "Material UI", percentage: "70%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend.png",
    skills: [
      { skill: "Java", percentage: "85%" },
      { skill: "NodeJs", percentage: "80%" },
      { skill: "ExpressJs", percentage: "80%" },
      { skill: "PHP", percentage: "90%" },
      { skill: "Python", percentage: "85%" },
      { skill: "Fast API", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools.png",
    skills: [
      { skill: "Visual Studio Code", percentage: "85%" },
      { skill: "Eclipse", percentage: "65%" },
      { skill: "Git and GitHub", percentage: "85%" },
      { skill: "Postman", percentage: "75%" },
      { skill: "Expo", percentage: "65%" },
      { skill: "Figma", percentage: "70%" },
      { skill: "Excel", percentage: "65%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Full Stack Development Intern",
    date: "Septmeber 2023 - April 2024",
    responsibilities: [
      "Developed administrative consoles using ReactJS and Node.js.",
      "Created APIs for the JNTU-GV main website.",
      "Integrated developed APIs into the JNTU-GV main website.",
    ],
  },
  {
    title: "Java Full Stack Developer",
    date: "Febrauy 2024 - April 2024",
    responsibilities: [
      "Designed and implemented client-server architecture within Java applications.",
      "Implemented the MVC design pattern to enhance separation of concerns in Java projects.",
      "Developed modules for student registration and updates within Java applications",
    ],
  },
  {
    title: "Data Analyst Intern",
    date: "May 2023 - July 2023",
    responsibilities: [
      "Used CSV Plotter to visualize CSV data through various plotting graphs.",
      "Created a user-friendly graphical user interface (GUI) to enable easy utilization of different features for plotting custom CSV files.",
      "Conducted analysis on raw materials and production based on previous data.",
    ],
  },
];

export const Projects = {
  Android: [
    {
      title: "Task Tracker App",
      description:
        "An Interactive TODO list Application using React Native and Expo",
      platform: "Android",
      github: "https://github.com/dsak789/Task-Tracker-App" || false,
      livelink:
        "https://drive.google.com/file/d/1yGKpZne9NjRP4sbx40bKeDGAkv5xpal0/view?usp=sharing" ||
        false,
      public:
        "https://drive.google.com/file/d/1yGKpZne9NjRP4sbx40bKeDGAkv5xpal0/view?usp=sharing" ||
        false,
      "tools&technologies": ["React Native", "Expo", "NodeJs"] || false,
      images: [
        "/assets/projectImages/tasktrackerapp/0.png",
        "/assets/projectImages/tasktrackerapp/tt0.png",
        "/assets/projectImages/tasktrackerapp/tt1.png",
        "/assets/projectImages/tasktrackerapp/tt2.png",
        "/assets/projectImages/tasktrackerapp/tt3.png",
        "/assets/projectImages/tasktrackerapp/tt4.png",
        "/assets/projectImages/tasktrackerapp/tt5.png",
        "/assets/projectImages/tasktrackerapp/tt6.png",
        "/assets/projectImages/tasktrackerapp/tt7.png",
        "/assets/projectImages/tasktrackerapp/tt8.png",
        "/assets/projectImages/tasktrackerapp/tt9.png",
        "/assets/projectImages/tasktrackerapp/tt10.png",
        "/assets/projectImages/tasktrackerapp/tt11.png",
      ],
    },
    {
      title: "Bujji AI App",
      description:
        "A Single Response Gemini Generative Model Bujji AI Application using React Native and Expo",
      platform: "Android",
      github: "https://github.com/dsak789/Bujji-AI-App" || false,
      livelink:
        "https://drive.google.com/file/d/1Q9ZD7kKnhqC2SD-Gfbzn74din_WIX3eu/view?usp=sharing" ||
        false,
      public:
        "https://drive.google.com/file/d/1Q9ZD7kKnhqC2SD-Gfbzn74din_WIX3eu/view?usp=sharing" ||
        false,
      "tools&technologies": ["React Native", "Expo", "NodeJs"] || false,
      images: [
        "/assets/projectImages/bujjiaiapp/0.png",
        "/assets/projectImages/bujjiaiapp/bai0.png",
        "/assets/projectImages/bujjiaiapp/bai1.png",
        "/assets/projectImages/bujjiaiapp/bai2.png",
        "/assets/projectImages/bujjiaiapp/bai3.png",
        "/assets/projectImages/bujjiaiapp/bai4.png",
      ],
    },
    {
      title: "Todo List App",
      description:
        "A basic TODO list Mobile Application using React Native and Expo",
      platform: "Android",
      github: "https://github.com/dsak789/TodoListApp" || false,
      livelink:
        "https://github.com/dsak789/TodoListApp/raw/refs/heads/main/releases/.apk/TodoList.apk" ||
        false,
      public:
        "https://github.com/dsak789/TodoListApp/raw/refs/heads/main/releases/.apk/TodoList.apk" ||
        false,
      "tools&technologies": ["React Native", "Expo", "NodeJs"] || false,
      images: [
        "/assets/projectImages/todolistapp/0.png",
        "/assets/projectImages/todolistapp/tl0.png",
        "/assets/projectImages/todolistapp/tl1.png",
        "/assets/projectImages/todolistapp/tl2.png",
        "/assets/projectImages/todolistapp/tl3.png",
      ],
    },
  ],
  Web: [
    {
      title: "JNTUGV Admin Console",
      description:
        "A confidential Administrative Web Consoles with Complete Frontend and Backend Api using ReactJs, NodeJs ",
      platform: "Web",
      github: "" || false,
      livelink: "" || false,
      public: "" || false,
      "tools&technologies":
        [
          "ReactJS",
          "Material UI",
          "NodeJs",
          "Hostinger",
          "VPS",
          "College Server",
          "Namecheap",
        ] || false,
      images: [
        "/assets/projectImages/jntugv/0.png",
        "/assets/projectImages/jntugv/j1.png",
        "/assets/projectImages/jntugv/j2.png",
        "/assets/projectImages/jntugv/j3.png",
        "/assets/projectImages/jntugv/j4.png",
        "/assets/projectImages/jntugv/j5.png",
        "/assets/projectImages/jntugv/j6.png",
      ],
    },
    {
      title: "Task Tracker Streamlit App",
      description:
        "A Single Response Gemini Generative Model Bujji AI Web App using Python Streamlit ",
      platform: "Web",
      github: "https://github.com/dsak789/taskTracker" || false,
      livelink: "https://tasktracker.streamlit.app/" || false,
      public: "https://tasktracker.streamlit.app/" || false,
      "tools&technologies": ["Streamlit", "Fast API", "NodeJs"] || false,
      images: [
        "/assets/projectImages/tasktracker/0.png",
        "/assets/projectImages/tasktracker/tt1.png",
        "/assets/projectImages/tasktracker/tt2.png",
        "/assets/projectImages/tasktracker/tt3.png",
        "/assets/projectImages/tasktracker/tt4.png",
        "/assets/projectImages/tasktracker/tt5.png",
        "/assets/projectImages/tasktracker/tt6.png",
        "/assets/projectImages/tasktracker/tt7.png",
        "/assets/projectImages/tasktracker/tt8.png",
      ],
    },
    {
      title: "Faker 789 API",
      description:
        "Faker 789 is a Fake Details generator API using Streamlit and Fast Api",
      platform: "Web",
      github: "https://github.com/dsak789/Fake-Details-Generator-API" || false,
      livelink: "https://faker789.streamlit.app/" || false,
      public: "https://faker789.streamlit.app/" || false,
      "tools&technologies": ["Streamlit", "Fast API", "Python"] || false,
      images: [
        "/assets/projectImages/faker789/0.png",
        "/assets/projectImages/faker789/f1.png",
        "/assets/projectImages/faker789/f2.png",
        "/assets/projectImages/faker789/f3.png",
        "/assets/projectImages/faker789/f4.png",
        "/assets/projectImages/faker789/f5.png",
        "/assets/projectImages/faker789/f6.png",
        "/assets/projectImages/faker789/f7.png",
      ],
    },
    {
      title: "Git Hub Clone",
      description: "A Basic GitHub clone to display their public repositories ",
      platform: "Web",
      github: "https://github.com/dsak789/taskTracker" || false,
      livelink: "https://dsak789github.vercel.app/" || false,
      public: "https://dsak789github.vercel.app/" || false,
      "tools&technologies": ["ReactJS", "GitHub API", "Css"] || false,
      images: [
        "/assets/projectImages/githubclone/0.png",
        "/assets/projectImages/githubclone/gc1.png",
        "/assets/projectImages/githubclone/gc2.png",
        "/assets/projectImages/githubclone/gc3.png",
        "/assets/projectImages/githubclone/gc4.png",
        "/assets/projectImages/githubclone/gc5.png",
        "/assets/projectImages/githubclone/gc6.png",
        "/assets/projectImages/githubclone/gc7.png",
        "/assets/projectImages/githubclone/gc8.png",
      ],
    },
    {
      title: "Bujji AI Streamlit App",
      description:
        "A Single Response Bujji Chatbot Web App using Python Streamlit ",
      platform: "Web",
      github: "https://github.com/dsak789/AI-Gen-Bot" || false,
      livelink: "https://bujjiai.streamlit.app/" || false,
      public: "https://bujjiai.streamlit.app/" || false,
      "tools&technologies": ["Streamlit", "Gemini API", "Python"] || false,
      images: [
        "/assets/projectImages/bujjiaistreamlit/0.png",
        "/assets/projectImages/bujjiaistreamlit/bas1.png",
        "/assets/projectImages/bujjiaistreamlit/bas2.png",
        "/assets/projectImages/bujjiaistreamlit/bas3.png",
        "/assets/projectImages/bujjiaistreamlit/bas4.png",
        "/assets/projectImages/bujjiaistreamlit/bas5.png",
      ],
    },
    {
      title: "News 360",
      description:
        "News 360 is Broadcasting Website from Open Source News API ",
      platform: "Web",
      github: "https://github.com/dsak789/news360" || false,
      livelink: "https://360news.vercel.app/" || false,
      public: "https://360news.vercel.app/" || false,
      "tools&technologies": ["ReactJS", "Open News API", "Css"] || false,
      images: [
        "/assets/projectImages/news360/0.png",
        "https://photos.prnewswire.com/prnfull/20160503/363222LOGO?max=200",
        "/assets/projectImages/news360/n1.png",
      ],
    },
    {
      title: "Dynamic CSV Plotter",
      description: "A CSV Plotting app with Python Streamlit and Matplotlib ",
      platform: "Web",
      github: "https://github.com/dsak789/csv-data-plotting" || false,
      livelink: "https://csvplotter.streamlit.app/" || false,
      public: "https://csvplotter.streamlit.app/" || false,
      "tools&technologies":
        ["Python", "Pandas and Matplotlib", "Streamlit"] || false,
      images: [
        "/assets/projectImages/csvplotter/0.png",
        "/assets/projectImages/csvplotter/cp1.png",
        "/assets/projectImages/csvplotter/cp2.png",
        "/assets/projectImages/csvplotter/cp3.png",
        "/assets/projectImages/csvplotter/cp4.png",
        "/assets/projectImages/csvplotter/cp5.png",
      ],
    },
  ],
  API: [
    {
      title: "Faker 789 API",
      description:
        "Faker 789 is a Fake Details generator API using Streamlit and Fast Api",
      platform: "API",
      github: "https://github.com/dsak789/Fake-Details-Generator-API" || false,
      livelink: "https://faker789.vercel.app/" || false,
      public: "https://faker789.vercel.app/" || false,
      "tools&technologies": ["Python", "Fast API", "Streamlit"] || false,
      images: [
        "/assets/projectImages/faker789/0.png",
        "/assets/projectImages/faker789/f1.png",
        "/assets/projectImages/faker789/f2.png",
        "/assets/projectImages/faker789/f3.png",
        "/assets/projectImages/faker789/f4.png",
        "/assets/projectImages/faker789/f5.png",
        "/assets/projectImages/faker789/f6.png",
        "/assets/projectImages/faker789/f7.png",
      ],
    },
  ],
  Arduino: [
    {
      title: "Ascon-128",
      description:
        "Algorithm for Encrypting and Decrypting of Data Transmitting through IOT Devices",
      platform: "Arduino",
      github: "https://github.com/dsak789/Ascon128" || false,
      livelink: "" || false,
      public: "" || false,
      "tools&technologies": ["Arduino IDE", "Arduiono Board", "C"] || false,
      images: [
        "/assets/projectImages/ascon128/0.png",
        "/assets/projectImages/ascon128/a1.png",
        "/assets/projectImages/ascon128/a2.png",
        "/assets/projectImages/ascon128/a3.png",
        "/assets/projectImages/ascon128/a4.png",
        "/assets/projectImages/ascon128/a5.png",
        "/assets/projectImages/ascon128/a6.png",
        "/assets/projectImages/ascon128/a7.png",
      ],
    },
  ],
};

export const Platforms = [
  {
    title: "All",
    icon: "./assets/images/all.svg",
    Projects: [
      ...Projects.Android,
      ...Projects.Web,
      ...Projects.API,
      ...Projects.Arduino,
    ],
  },
  {
    title: "Android",
    icon: "./assets/images/android.svg",
    Projects: Projects.Android,
  },
  {
    title: "Web",
    icon: "./assets/images/web.svg",
    Projects: Projects.Web,
  },
  {
    title: "APIS",
    icon: "./assets/images/api.svg",
    Projects: Projects.API,
  },
  {
    title: "Arduino",
    icon: "./assets/images/arduino.svg",
    Projects: Projects.Arduino,
  },
];
