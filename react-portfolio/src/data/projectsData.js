import weatherdash from "../assets/weather-dash.png";
import techblog from "../assets/tech-blog.png";
import cinesearch from "../assets/CineSearch.png"; 
import codequest from "../assets/code-quest.png";
import defaultpic from "../assets/coding-default.png";


export const projects = [
    {
      "title": "CinéSearch",
      "imageSrc": cinesearch,
      "description": "CineSearch is a web application that allows users to search for movies and tv-shows based on the genre you are in the mood for and what streaming service you would like to use",
      "skills": ["JavaScript", "WatchMode API", "Kino Check API"],
      "source": "https://github.com/gblow/cine-search"
    },
    {
      "title": "Aerial Conferencing",
      "imageSrc": defaultpic,
      "description": "Aerial is a social network app that allows users to connect, collaborate, and share moments seamlessly. Whether you want to join virtual rooms for discussions or manage your profile, Aerial provides a platform for enhanced social interaction.",
      "skills": ["JavaScript", "Handlebars", "CSS", "VideoSDK"],
      "demo": "https://aerial-d42bb9d24b68.herokuapp.com",
      "source": "https://github.com/AnthonyCBlanco/aerial-conferencing"
    },
    {
      "title": "Tech Blog",
      "imageSrc": techblog,
      "description": "Tech Blog, where developers like you can share their thoughts, insights, and expertise on various tech topics. Whether you're a seasoned coder or just starting out, this platform is designed to facilitate meaningful discussions and knowledge sharing within the tech community.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://maria-tech-blog-e65eef8dcb10.herokuapp.com",
      "source": "https://github.com/marialwj/tech-blog"
    },
    {
      "title": "My First Portfolio",
      "imageSrc": defaultpic,
      "description": "In this project, I am building a comprehensive portfolio page that reflects my skills, experiences, and accomplishments. By incorporating a range of interactive elements and a responsive design, I aim to provide a user-friendly experience for potential employers and collaborators.",
      "skills": ["HTML", "CSS"],
      "source": "https://github.com/marialwj/portfolio-chronicle"
    },
    {
      "title": "Maria's Coding Challenge",
      "imageSrc": codequest,
      "description": "A web-based coding quiz to test and enhance your coding knowledge. My interactive and creative quiz web application to showcase my JavaScript, HTML, and CSS skills.",
      "skills": ["HTML", "CSS", "JavaScript"],
      "source": "https://github.com/marialwj/code-quest"
    },
    {
      "title": "Weather Dashboard",
      "imageSrc": weatherdash,
      "description": "This weather dashboard project aims to provide users with a browser-based tool for checking the weather outlook for multiple cities. The application utilizes the OpenWeatherMap API to retrieve weather data and dynamically updates the HTML and CSS to present users with current and future weather conditions.",
      "skills": ["HTML", "CSS", "JavaScript"],
      "demo": "https://marialwj.github.io/weather-dash/",
      "source": "https://github.com/marialwj/weather-dash"
    }
  ]