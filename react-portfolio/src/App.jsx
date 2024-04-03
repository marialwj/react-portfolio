import styles from './App.module.css';
import {About} from './components/about/about.jsx';
import { Navbar } from './components/navbar/navbar.jsx';
import { Intro } from './components/intro/intro.jsx';
import { Resume } from './components/resume/resume.jsx';

function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    <Resume/>
  </div>
  
}

export default App
