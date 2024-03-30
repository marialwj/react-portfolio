import styles from './App.module.css';
import { Navbar } from './components/navbar/navbar.jsx';
import { Intro } from './components/intro/intro.jsx';

function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Intro/>
  </div>
  
}

export default App
