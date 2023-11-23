import notes from "../assets/notes.jpeg";
import AI from "../assets/AI.jpg";
import game from "../assets/game.jpeg";
import portfolio from "../assets/portfolio.jpeg";
const projects = [
  {
    id: 1,
    image: AI,
    name: "Pets Care",
    description:
      "Developed a comprehensive full-stack web application focused on pet care management using react and GCP services.",
    link: "https://github.com/vaishnavieluru/Pets-Care"
  },
  {
    id: 2,
    image: game,
    name: "Online Library Management",
    description:
      "This project manages and stores book info in Relational Database using PHP and MySQL with CRUD functionality",
    link: "https://github.com/vaishnavieluru/Online-Library-Management"
  },
  {
    id: 3,
    image: notes,
    name: "Movie Recommendation",
    description:
      "It is a movie recommendation application implementing content-based filtering through which we can get movie recommendations.",
    link: "https://github.com/vaishnavieluru/movie-recommendation"
  },
  {
    id: 4,
    image: portfolio,
    name: "Portfolio site",
    description:
      "Portfolio App using reactjs with HTML CSS Javascript Bootstrap ",
    link: "https://github.com/vaishnavieluru/portfolio-react"
  }
];

export default projects;
