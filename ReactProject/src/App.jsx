import "./App.css";

function App() {

  const projects = [
    {
      title: "Todo List",
      description: "Task management app using React",
    },
    {
      title: "Timer App",
      description: "Digital timer and clock project",
    },
    {
      title: "Password Generator",
      description: "Generate strong random passwords",
    },
    {
      title: "Color Picker",
      description: "Interactive color selection app",
    },
    {
      title: "Counter App",
      description: "Simple React counter project",
    },
    {
      title: "Background Changer",
      description: "Change background colors dynamically",
    },
  ];

  return (
    <div className="portfolio">

      <h1 className="main-title">My React Projects</h1>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="buttons">

              <button>Live Demo</button>

              <button>GitHub</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;