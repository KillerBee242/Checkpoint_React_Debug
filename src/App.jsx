import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const projectsData = [
  { id: 1, name: 'Projet 1', description : 'Description du projet 1' },
  { id: 2, name: 'Projet 2', description : 'Description du projet 2' },
  { id: 3, name: 'Projet 3', description : 'Description du projet 3' },
];

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className='portfolio'>
      <h1>Mon Portfolio</h1>

      <section id='about'>
        <h2>À propos de moi</h2>
        <p>Je suis un développeur passionné</p>
      </section>

      <button onClick={toggleProjects}>
        {showProjects ? 'Cacher les projets' : 'Afficher les projets'}
      </button>

      {showProjects && (
        <section id='projects'>
          <h2>Mes Projets</h2>
          <ul>
            {projectsData.map((project) => (
              <li 
              // Exemple d'erreur : key manquante
              // key={project.id}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default Portfolio;









/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/