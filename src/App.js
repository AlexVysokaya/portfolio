import { Expirience } from './components/expirience/Expirience';
import { Info } from './components/information/Info';
import style from './App.module.css'
import { Projects } from './components/projects/Projects';

function App() {
  return (
    <div className={style.app}>
      <div className={style.wrapper}>
        <Info />
        <div className={style.expirience}>
          <div className={style.header}>Expirience</div>
          <Expirience />
          <div className={style.header}>My projects</div>
          <Projects/>
        </div>
      </div>
    </div>
  );
}

export default App;
