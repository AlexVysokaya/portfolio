import React from 'react';
import style from './Info.module.css'
import avatar from '../../img/DSC_6790.jpg';
import phone from '../../img/logoPhone.png';
import telegramm from '../../img/logoTelegramm.png';
import mail from '../../img/logoMail.png';


export const Info = () => {
  return (
    <div className={style.about_me}>
      <div className={style.wrapper_avatar}>
        <img src={avatar} className={style.avatar} />
      </div>
      <div className={style.info}>
        <div className={style.info_name}>Alexandra Vysokaya</div>
        <div className={style.info_position}>Junior Frontend developer</div>
        <div className={style.info_contacts}>
          <div className={style.info_communication}>
            <img src={phone} className={style.logo} />
            <span>+7(925)246-03-00</span>
          </div>
          <div className={style.info_communication}>
            <img src={mail} className={style.logo} />
            <span>alieksasha@bk.ru</span>
          </div>
          <div className={style.info_communication}>
            <img src={telegramm} className={style.logo} />
            <span>@alieksasha</span>
          </div>
        </div>
      </div>
    </div>
  )
}