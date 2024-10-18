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
      { skill: "Flask", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools.png",
    skills: [
      { skill: "GitHub", percentage: "85%" },
      { skill: "Git", percentage: "75%" },
      { skill: "Visual Studio Code", percentage: "85%" },
      { skill: "Postman", percentage: "75%" },
      { skill: "Expo", percentage: "65%" },
      { skill: "Figma", percentage: "70%" },
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
      livelink: "" || false,
      public: "" || false,
      images: [
        "./assets/projectImages/tasktrackerapp/0.png",
        "./assets/projectImages/tasktrackerapp/tt0.png",
        "./assets/projectImages/tasktrackerapp/tt1.png",
        "./assets/projectImages/tasktrackerapp/tt2.png",
        "./assets/projectImages/tasktrackerapp/tt3.png",
        "./assets/projectImages/tasktrackerapp/tt4.png",
        "./assets/projectImages/tasktrackerapp/tt5.png",
        "./assets/projectImages/tasktrackerapp/tt6.png",
        "./assets/projectImages/tasktrackerapp/tt7.png",
        "./assets/projectImages/tasktrackerapp/tt8.png",
        "./assets/projectImages/tasktrackerapp/tt9.png",
        "./assets/projectImages/tasktrackerapp/tt10.png",
        "./assets/projectImages/tasktrackerapp/tt11.png",
      ],
    },
    {
      title: "Bujji AI App",
      description:
        "A Single Response Gemini Generative Model Bujji AI Application using React Native and Expo",
      platform: "Android",
      github: "https://github.com/dsak789/Bujji-AI-App" || false,
      livelink: "" || false,
      public: "" || false,
      images: [
        "./assets/projectImages/bujjiaiapp/0.png",
        "./assets/projectImages/bujjiaiapp/bai0.png",
        "./assets/projectImages/bujjiaiapp/bai1.png",
        "./assets/projectImages/bujjiaiapp/bai2.png",
        "./assets/projectImages/bujjiaiapp/bai3.png",
        "./assets/projectImages/bujjiaiapp/bai4.png",
      ],
    },
    {
      title: "Todo List App",
      description:
        "A basic TODO list Mobile Application using React Native and Expo",
      platform: "Android",
      github: "https://github.com/dsak789/TodoListApp" || false,
      livelink: "" || false,
      public: "" || false,
      images: [
        "./assets/projectImages/todolistapp/0.png",
        "./assets/projectImages/todolistapp/tl0.png",
        "./assets/projectImages/todolistapp/tl1.png",
        "./assets/projectImages/todolistapp/tl2.png",
        "./assets/projectImages/todolistapp/tl3.png",
      ],
    },
  ],
  Web: [
    {
      title: "JNTUGV Admin Console",
      description:
        "A confidential Administrative Web Consoles with Complete Frontend and Backend Api using ReactJs, NodeJs and Virtual Servers ",
      platform: "Web",
      github: "" || false,
      livelink: "" || false,
      public: "" || false,
      images: [
        "https://admin.jntugv.edu.in/static/media/jntugv.b33bb43b07b2037ab043.png",
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
      images: [
        "https://media.licdn.com/dms/image/v2/D562DAQGKgYZyCSPk3g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729089545542?e=1729868400&v=beta&t=YUlW6gEI2_d7hiasuuip7_5QzeozkG1zfRajV7qrsQA",
      ],
    },
    {
      title: "Git Hub Clone",
      description: "A Basic GitHub clone to display their public repositories ",
      platform: "Web",
      github: "https://github.com/dsak789/taskTracker" || false,
      livelink: "https://tasktracker.streamlit.app/" || false,
      public: "https://tasktracker.streamlit.app/" || false,
      images: [
        "https://media.licdn.com/dms/image/v2/D562DAQHM6mC2jb_V8g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729093814871?e=1729868400&v=beta&t=b5ONRGuMZ3ugEJOHmUxrKOl2a4bosCIZVmdE6u7sITQ",
      ],
    },
    {
      title: "Bujji AI Streamlit App",
      description:
      "A Single Response Bujji Chatbot Web App using Python Streamlit ",
      platform: "Web",
      github: "https://github.com/dsak789/AI-Gen-Bot" || false,
      livelink: "https://360news.vercel.app/" || false,
      public: "https://360news.vercel.app/" || false,
      images: [
        "https://photos.prnewswire.com/prnfull/20160503/363222LOGO?max=200",
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
      images: [
        "https://media.licdn.com/dms/image/v2/D562DAQGaZiqF6xmegg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729090352649?e=1729868400&v=beta&t=BwtqMiXCno-k4CHIOFhyR4qFBxKaA5HnR9crFXAMf4A",
      ],
    },
    {
      title: "News 360",
      description:
        "News 360 is Broadcasting Website from Open Source News API ",
      platform: "Web",
      github: "https://github.com/dsak789/news360" || false,
      livelink: "https://tasktracker.streamlit.app/" || false,
      public: "https://tasktracker.streamlit.app/" || false,
      images: [
        "https://media.licdn.com/dms/image/v2/D562DAQEcqU713tw-QA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729092606015?e=1729864800&v=beta&t=9AJIWM6b-e9GWcO91IJzkSRpvpvJ1MvCH6hzrkh_PO4",
      ],
    },
    {
      title: "Dynamic CSV Plotter",
      description: "A CSV Plotting app with Python Streamlit and Matplotlib ",
      platform: "Web",
      github: "https://github.com/dsak789/csv-data-plotting" || false,
      livelink: "https://dynamicdataplotter.streamlit.app/" || false,
      public: "https://dynamicdataplotter.streamlit.app/" || false,
      images: [
        "https://media.licdn.com/dms/image/v2/D562DAQFQ0yDtyEZO-g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729093285988?e=1729864800&v=beta&t=E-GLgzFzsWJjFAoMe2Q5XFu8jh8Z1TpJfcRk_yQiHcw",
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
      livelink: "https://faker789.streamlit.app/" || false,
      public: "https://faker789.streamlit.app/" || false,
      images: [
        "https://media.licdn.com/dms/image/v2/D562DAQGaZiqF6xmegg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729090352649?e=1729868400&v=beta&t=BwtqMiXCno-k4CHIOFhyR4qFBxKaA5HnR9crFXAMf4A",
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
      images: ["./assets/projectImages/todolistapp/0.png"],
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
