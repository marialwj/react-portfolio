import styles from './App.module.css';
import {About} from './components/about/about.jsx';
import { Navbar } from './components/navbar/navbar.jsx';
import { Intro } from './components/intro/intro.jsx';

function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
  </div>
  
}

export default App
