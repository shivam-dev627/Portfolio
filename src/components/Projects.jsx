function Projects() {
  return (
    <section id="projects" className="section">
      <h1>My Projects</h1>

      <div className="projects">

        <div className="project-card">

          <h2>Food Delivery Website</h2>

          <p>
            A responsive food delivery website created using HTML and CSS.
          </p>

          <a
            href="https://github.com/shivam-dev627/Bite-box-project.git"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Project</button>
          </a>

        </div>


        <div className="project-card">

          <h2>AJIO</h2>

          <p>
            A React application with products, cart functionality and
            context API.
          </p>

          <a
            href="https://github.com/shivam-dev627/Ajio.git"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Project</button>
          </a>

        </div>


        <div className="project-card">

          <h2>Travelling</h2>

          <p>
            A React application that allows users to search and view
            travel destinations.
          </p >

         <a
            href="https://github.com/shivam-dev627/Travel-website.git"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Project</button>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;