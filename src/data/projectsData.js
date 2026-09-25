import { Atom, FileCode, Braces, Code2, Paintbrush, Zap, Milestone, Database, CloudSun, Film } from 'lucide-react';
export const projects = [
  {
    id: 1,
    image: {
      path: "IMAGES/NovaWeb App.jpg",
      alt: "A modern business built with Vite/React"
    },
    name: "NovaWeb Solutions",
    description:
      "A modern business website designed to showcase digital services, communicate value clearly, and provide a professional online presence for businesses and entrepreneurs.",
    technologies: [
      {
        skill: "React",
        icon: Atom
      },
      {
        skill: "Vite",
        icon: Zap
      },
      {
        skill: "Tailwind CSS",
        icon: Paintbrush
      },
      {
        skill: "React Router",
        icon: Milestone
      },
      {
        skill: "JavaScript",
        icon: Braces
      }
      
    ],
    features: [
      "Responsive multi-page design",
      "Modern business-focused UI",
      "React component architecture",
      "Reusable components",
      "Services page",
      "About page",
      "Contact form",
      "FAQ accordion",
      "Responsive navigation",
      "Scroll-to-top navigation",
      "AOS animations",
      "SEO metadata",
      "Responsive layouts across mobile, desktop and large screens",
    ],
    live: "https://nova-web-v2jy.vercel.app/",
    github: "https://github.com/moha-073/Nova-web.git",
  },
  {
    id: 2,
    image: {
      path: "IMAGES/Almuhamadi Hotel  Restaurant.jpg",
      alt: "A modern Restaurant & Hotel built with HTML, CSS & JavaScript"
    },
    name: "Almuhamadi Restaurant & Hotel",
    description:
      "A responsive restaurant and hotel website designed to showcase food, accommodation, services, and booking functionality in one digital experience.",
    technologies: [
      {
        skill: "HTML",
        icon: FileCode
      },
      {
        skill: "CSS",
        icon: Code2
      },
      {
        skill: "JavaScript",
        icon: Braces
      },
      {
        skill: "LocalStorage",
        icon: Database
      }
      
    ],
    features: [
      "Restaurant menu",
      "Food and drink presentation",
      "Shopping cart functionality",
      "LocalStorage cart persistence",
      "Hotel/room section",
      "Booking interface",
      "Responsive navigation",
      "Responsive layouts",
      "Interactive JavaScript components",
    ],
    live: "https://almuhamad.vercel.app/",
    github: "https://github.com/moha-073/Almuhamad.git"
  },
  {
    id: 3,
    image: {
      path: "IMAGES/Todo React App.jpg",
      alt: "A Todo App built with React"
    },
    name: "React Todo App",
        description: "A simple task management application built with React that allows users to create, complete, delete, and persist tasks.",
        technologies: [
      {
        skill: "React",
        icon: Atom
      },
      {
        skill: "CSS",
        icon: Code2
      },
      {
        skill: "JavaScript",
        icon: Braces
      },
      {
        skill: "LocalStorage",
        icon: Database
      }
    ],
    features: [
      "Create tasks",
"Complete tasks",
"Delete tasks",
"Task state management",
"Persistent data with LocalStorage",
"Reusable React components",
"Interactive UI",
"Responsive design"
    ],
    live: "https://todo-list-alpha-ten-25.vercel.app/",
    github: "https://github.com/moha-073/todo-react.git"
  },
  {
    id: 4,
    image: {
      path: "IMAGES/Weather App.jpg",
      alt: "A weather app built with HTML, CSS, JavaScript"
    },
    name: "Weather App",
    description: "A weather application that retrieves weather information from an external API and presents the results through a clean and responsive interface.",
    technologies: [
      {
        skill: "HTML",
        icon: FileCode
      },
      {
        skill: "CSS",
        icon: Code2
      },
      {
        skill: "JavaScript",
        icon: Braces
      },
      
      {
        skill: "Weather API",
        icon: CloudSun
      }
    ],
    features: [
      "Weather API integration",
"Search functionality",
"Dynamic weather information",
"API data handling",
"Loading/error handling",
"Responsive interface",
"Dynamic UI updates",
    ],
    live: "https://weather-app-pink-pi-92.vercel.app/",
    github: "https://github.com/moha-073/weather-app.git"
  },
  {
    id: 5,
    image: {
      path: "IMAGES/Movie Search App.jpg",
      alt: "A movie web built with HTML, CSS, JavaScript"
    },
    name: "Movie Search App",
    description: "A movie discovery application that uses the OMDb API to search for movies and display useful information through a responsive interface.",
    technologies: [
      {
        skill: "HTML",
        icon: FileCode
      },
      {
        skill: "CSS",
        icon: Code2
      },
      {
        skill: "JavaScript",
        icon: Braces
      },
      
      {
        skill: "OMDb API",
        icon: Film
      }
    ],
    features: [
      "Movie search",
"OMDb API integration",
"Dynamic search results",
"Movie information display",
"API response handling",
"Responsive movie cards",
"Interactive interface"
    ],
    live: "https://responsive-web-six-sage.vercel.app/",
    github: "https://github.com/moha-073/responsive-web.git"
  }
];
