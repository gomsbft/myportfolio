import Header from "./components/Header"
import Main from "./components/Main"
import AboutMe from "./components/AboutMe"
import Skills from './components/Skills';
import Project from "./components/Project";

function App() {

  return (
    <>
      <div className="bg-[#171C28]">
        <Header />
        <Main />
        <AboutMe />
        <Skills />
        <Project />
      </div>
    </>
  )
}

export default App
