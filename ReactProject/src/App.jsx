import "./App.css";

function App() {
  const projects = [
    {
      title: "Todo List",
      description: "Task management app to add, edit, and delete daily tasks.",
      live: "https://my-react-projects-mzcr.vercel.app/",
      github: "https://github.com/Nandani027/MY-REACT-PROJECTS/tree/main/todoList",
    },
    {
      title: "Digital Clock",
      description: "Real-time digital clock displaying the current time.",
      live: "https://my-react-projects-28gp.vercel.app/",
      github: "https://github.com/Nandani027/MY-REACT-PROJECTS/tree/main/timerApp",
    },
    {
      title: "Password Generator",
      description: "Generate strong random passwords with letters, numbers & symbols.",
      live: "https://my-react-projects-32as.vercel.app/",
      github: "https://github.com/Nandani027/MY-REACT-PROJECTS/tree/main/passwordGenerator",
    },
    {
      title: "Color Picker",
      description: "Browse and select any color from the full color spectrum.",
      live: "https://my-react-projects-d4uc6vuaf-kumarinandani2703-5444s-projects.vercel.app/",
      github: "https://github.com/Nandani027/MY-REACT-PROJECTS/tree/main/ColorPicker",
    },
    {
      title: "Simple Counter",
      description: "Count up or down with a clean increment/decrement interface.",
      live: "https://my-react-projects-1xe9-5zngzmuiw.vercel.app/",
      github: "https://github.com/Nandani027/MY-REACT-PROJECTS/tree/main/count",
    },
    {
      title: "Background Changer",
      description: "Change the page background color with a single button click.",
      live: "https://my-react-projects-7php.vercel.app/",
      github: "https://github.com/Nandani027/MY-REACT-PROJECTS/tree/main/backgroundChanger",
    },
  ];

  const tilts = ["-1.5deg", "1deg", "-0.8deg", "1.5deg", "-1.2deg", "0.8deg"];

  const scraps = [
  { left:'2%',   top:'8%',  width:90, height:60, rot:-12, bg:'#fdf6e3', lines:[30,44,58], hasPin:false, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 98% 88%, 91% 92%, 83% 87%, 75% 91%, 66% 86%, 58% 90%, 50% 85%, 41% 89%, 33% 84%, 25% 88%, 16% 83%, 8% 87%, 2% 84%, 0% 100%)' },
  { left:'88%',  top:'5%',  width:80, height:50, rot:8,   bg:'#fff8e8', lines:[28,42],    hasPin:true,  clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 97% 87%, 89% 91%, 81% 86%, 73% 90%, 64% 85%, 56% 89%, 47% 84%, 39% 88%, 30% 83%, 22% 87%, 13% 82%, 5% 86%, 0% 100%)' },
  { left:'1%',   top:'52%', width:70, height:45, rot:15,  bg:'#f0ece0', lines:[28,42],    hasPin:false, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 96% 89%, 88% 84%, 80% 90%, 71% 85%, 63% 89%, 54% 84%, 46% 88%, 37% 83%, 29% 87%, 20% 82%, 12% 86%, 4% 81%, 0% 100%)' },
  { left:'90%',  top:'48%', width:85, height:55, rot:-9,  bg:'#fdf0e0', lines:[28,42,56], hasPin:true,  clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 98% 87%, 90% 92%, 82% 86%, 74% 91%, 65% 85%, 57% 90%, 48% 84%, 40% 89%, 31% 83%, 23% 88%, 14% 82%, 6% 87%, 0% 100%)' },
  { left:'3%',   top:'85%', width:75, height:48, rot:-6,  bg:'#f5f0e8', lines:[28,42],    hasPin:false, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 97% 88%, 89% 83%, 81% 89%, 72% 84%, 64% 88%, 55% 83%, 47% 87%, 38% 82%, 30% 86%, 21% 81%, 13% 85%, 5% 80%, 0% 100%)' },
  { left:'87%',  top:'82%', width:78, height:52, rot:11,  bg:'#fef8ec', lines:[28,42,56], hasPin:false, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 96% 86%, 88% 91%, 80% 85%, 71% 90%, 63% 84%, 54% 89%, 46% 83%, 37% 88%, 29% 82%, 20% 87%, 12% 81%, 4% 86%, 0% 100%)' },
  { left:'40%',  top:'1%',  width:65, height:40, rot:4,   bg:'#f8f4e8', lines:[26,40],    hasPin:true,  clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 97% 87%, 89% 91%, 81% 86%, 72% 90%, 64% 85%, 55% 89%, 47% 84%, 38% 88%, 30% 83%, 21% 87%, 13% 82%, 5% 86%, 0% 100%)' },
  { left:'55%',  top:'93%', width:70, height:44, rot:-8,  bg:'#f0ece0', lines:[26,40],    hasPin:false, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 98% 88%, 90% 83%, 82% 89%, 73% 84%, 65% 88%, 56% 83%, 48% 87%, 39% 82%, 31% 86%, 22% 81%, 14% 85%, 6% 80%, 0% 100%)' },
  { left:'20%',  top:'96%', width:55, height:36, rot:14,  bg:'#fdf6e3', lines:[24],       hasPin:false, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 96% 87%, 88% 91%, 80% 86%, 71% 90%, 63% 85%, 54% 88%, 46% 83%, 37% 87%, 29% 82%, 20% 86%, 12% 81%, 4% 85%, 0% 100%)' },
  { left:'72%',  top:'0%',  width:60, height:38, rot:-5,  bg:'#fff8e8', lines:[24,38],    hasPin:true,  clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 97% 89%, 89% 84%, 81% 90%, 72% 85%, 64% 89%, 55% 84%, 47% 88%, 38% 83%, 30% 87%, 21% 82%, 13% 86%, 5% 81%, 0% 100%)' },
];

  return (
    <div className="portfolio">
      <div className="scraps-container">
  {scraps.map((scrap, i) => (
    <div
      key={i}
      className="scrap"
      style={{
        left: scrap.left,
        top: scrap.top,
        width: scrap.width,
        height: scrap.height,
        background: scrap.bg,
        transform: `rotate(${scrap.rot}deg)`,
        clipPath: scrap.clipPath,
      }}
    >
      {scrap.lines.map((y, j) => (
        <div key={j} className="scrap-line" style={{ top: y }} />
      ))}
      {scrap.hasPin && <div className="scrap-pin" />}
    </div>
  ))}
</div>
      <div className="ev-case-tag">Total Projects · 06</div>
      <h1 className="main-title">My React Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ "--tilt": tilts[index] }}
          >
            <div className="ev-pin"></div>
            <div className="card-source">
              <span>Project {String(index + 1).padStart(2, "0")}</span>
              <span className="card-num">#{2700 + index + 1}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.live} target="_blank" rel="noreferrer">
                <button className="btn-live">▶ Live Demo</button>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <button className="btn-github">⌥ GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;