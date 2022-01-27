import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageChanger.css';

const LanguageChanger = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className='language-changer-container' onClick={() => changeLanguage(i18n.resolvedLanguage === "en" ? "es" : "en")}>
      {i18n.resolvedLanguage === "en" && <button className='language-button' type='submit'><img src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/ES.svg" alt="Spain flag"  /></button>}
      {i18n.resolvedLanguage === "es" && <button className='language-button' type='submit'><img src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg" alt="United States flag" /></button>}
      <p className='language-text'>{t('navbar.changeLanguage')}</p>
    </div>
  );
};

export default LanguageChanger;
