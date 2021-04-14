import React from 'react';
import style from './Projects.module.css'
import weather from '../../img/weather.jpg'
import traffic from '../../img/trafficLights.jpg'

export const Projects = () => {
  return (
    <div className={style.wrapper_projects}>
      <div className={style.project}>
        <a href='https://alexvysokaya.github.io/weather-widget/' target='_blank'>
          <img src={weather} className={style.project_img} />
          <span className={style.project_text}>weather-widget</span>
        </a>
      </div>
      <div className={style.project}>
        <a href='https://alexvysokaya.github.io/traffic-lights/' target='_blank'>
          <img src={traffic} className={style.project_img} />
          <span className={style.project_text}>traffic-lights</span>
        </a>
      </div>
    </div>
  )
}