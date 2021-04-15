import React from 'react';
import style from './Expirience.module.css'

export const Expirience = () => {
  return (
    <div className={style.expirience_info}>
      <div className={style.expirience_information}>
        <div className={style.expirience_header}>
          Ключевые навыки:
        </div>
        <div className={style.expirience_description}>
          HTML, HTML5, CSS, CSS3, Sass, Less, Java Script, ES5, ES6, React.js, Redux, Reselect, Git
        </div>
      </div>
      <div className={style.expirience_information}>
        <div className={style.expirience_header}>
          Образование:
        </div>
        <div className={style.expirience_description}>
          Студентка 4 курса Российского технологического университета МИРЭА по направлению подготовки: 09.03.02 "Информационные системы и технологии"
        </div>
      </div>
    </div>
  )
}

