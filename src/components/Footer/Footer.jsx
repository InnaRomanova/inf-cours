import React from "react";
import "./Footer.css";
import logo from "../../images/Logo.png";
import whatsapp from "../../images/icon_whatsapp.svg";
import telegram from "../../images/icon_telegram.svg";
import viber from "../../images/icon_viber.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <img src={logo} className="footer__logo" alt="Логотип" />
          <article className="footer__address">
            <p className="footer__name">ООО “Бесконечные курсы”</p>
            <p className="footer__name">
              220140, Беларусь, г. Минск, ул. Мира 2, д. 22, офис 222
            </p>
          </article>
          <ul className="footer__contact">
            <li className="footer__icon">
              <a href="#" className="footer__icon-link">
                <img className="footer__image" src={whatsapp} />
              </a>
            </li>
            <li className="footer__icon">
              <a href="#" className="footer__icon-link">
                <img className="footer__image" src={telegram} />
              </a>
            </li>
            <li className="footer__icon">
              <a href="#" className="footer__icon-link">
                <img className="footer__image" src={viber} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__cours">
          <h3 className="footer__cours-name">Курсы</h3>
          <ul className="footer__list-cours">
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                Управленческий коучинг
              </a>
            </li>
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                Android-разработка
              </a>
            </li>
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                Digital-маркетинг
              </a>
            </li>
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                Soft Skills for Hard Times
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__cours">
          <div className="footer__block" />
          <ul className="footer__list-cours">
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                Разработчик игр на Unity
              </a>
            </li>
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                Веб-дизайнер
              </a>
            </li>
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                Fullstack разработчик на&#160;Python
              </a>
            </li>
            <li className="footer__name">
              <a href="#" className="footer__link-item">
                DevOps-инженер
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__cours">
          <h3 className="footer__cours-name">Контакты</h3>
          <ul className="footer__list-cours">
            <li className="footer__name">+375(33) 637-30-79</li>
            <li className="footer__name">sales@insaitika.com</li>
          </ul>
        </div>
      </div>
      <div className="footer__rights-block">
        <div className="footer__rights">
          <p className="footer__text">©Все права защищены.</p>
        </div>
        <div className="footer__offer">
          <p className="footer__text">Политика конфиденциальности</p>
          <p className="footer__text">Публичная оферта</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
