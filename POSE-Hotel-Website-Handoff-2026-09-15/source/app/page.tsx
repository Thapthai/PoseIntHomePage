'use client';

import { ArrowRight, CalendarClock, ChartNoAxesCombined, Check, ChevronRight, ClipboardList, FileSearch, Layers, Mail, MapPin, Menu, MonitorSmartphone, PackageCheck, Phone, Rss, SlidersHorizontal, Tag, Users, X } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
import { hotelCopy, type Language } from './hotel-copy';

const benefitIcons = [PackageCheck, Layers, CalendarClock];
// Handoff scope: retain the company's existing hospital website.
const navTargets = ['#hotel', '#process', 'https://poseintelligence.com/', '#contact'];

export default function Home() {
  const [language, setLanguage] = useState<Language>('th');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = hotelCopy[language];
  const signalWord = language === 'th' ? 'ชิ้น' : 'Smarter';
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="hotel-page">
      <a className="hotel-skip" href="#hotel">{t.skip}</a>
      <header className="hotel-header">
        <div className="hotel-container hotel-nav-row">
          <a className="hotel-logo" href="#hotel" aria-label="POSE INTELLIGENCE"><img src="/pose-logo.jpg" alt="POSE INTELLIGENCE" width="1320" height="827" /></a>
          <nav className="hotel-desktop-nav" aria-label={language === 'th' ? 'เมนูหลัก' : 'Main navigation'}>
            {t.nav.map((label, i) => <a key={i} href={navTargets[i]}>{label}</a>)}
          </nav>
          <div className="hotel-nav-actions">
            <div className="hotel-language" aria-label={language === 'th' ? 'เลือกภาษา' : 'Select language'}>
              {(['th', 'en'] as Language[]).map((lang, i) => <span key={lang}>
                {i > 0 && <span className="hotel-language-divider" aria-hidden="true">|</span>}
                <button type="button" lang={lang} aria-label={lang === 'th' ? 'ภาษาไทย' : 'English'} aria-pressed={language === lang} onClick={() => setLanguage(lang)}>{lang.toUpperCase()}</button>
              </span>)}
            </div>
            <button className="hotel-menu-toggle" type="button" aria-label={menuOpen ? t.menuClose : t.menuOpen} aria-expanded={menuOpen} aria-controls="hotel-mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
        <nav id="hotel-mobile-menu" className="hotel-mobile-nav" hidden={!menuOpen} aria-label={language === 'th' ? 'เมนูมือถือ' : 'Mobile navigation'}>
          {t.nav.map((label, i) => <a key={i} href={navTargets[i]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      </header>
      <main>
        <section id="hotel" className="hotel-hero" aria-labelledby="hotel-title">
          <img className="hotel-hero-photo" src="/hotel-hero.png" alt="" width="1672" height="941" fetchPriority="high" />
          <div className="hotel-hero-shade" />
          <div className="hotel-container hotel-hero-layout">
            <div className="hotel-hero-copy">
              <p className="hotel-eyebrow">RFID HOTEL LINEN MANAGEMENT SYSTEM</p>
              <h1 id="hotel-title">{t.title.map((line) => {
                const signalIndex = line.indexOf(signalWord);
                return <span key={line}>
                  {signalIndex >= 0
                    ? <>{line.slice(0, signalIndex)}<span className="hotel-title-signal-word">{signalWord}<Rss className="hotel-title-signal" strokeWidth={1.7} aria-hidden="true" focusable="false"><path d="M4 7.5a12.5 12.5 0 0 1 12.5 12.5" /></Rss></span>{line.slice(signalIndex + signalWord.length)}</>
                    : line}
                </span>;
              })}</h1>
              <p className="hotel-hero-highlight">{t.highlight}</p>
              <p className="hotel-hero-body">{t.heroBody}</p>
              <a className="hotel-primary-link" href="#contact">{t.cta}<ArrowRight size={20} aria-hidden="true" /></a>
            </div>
            <figure className="hotel-tag-inset">
              <img src="/rfid-textile-tag.png" alt={t.tagAlt} width="1536" height="1024" />
              <figcaption>{t.tagCaption}</figcaption>
            </figure>
          </div>
        </section>
        <section className="hotel-benefits hotel-container" aria-label={language === 'th' ? 'ประโยชน์ต่อโรงแรม' : 'Benefits for hotels'}>
          {t.benefits.map(([title, body], i) => {
            const Icon = benefitIcons[i];
            return <article key={i}><Icon className="hotel-benefit-icon" size={44} strokeWidth={1.35} aria-hidden="true" /><h2>{title}</h2><p>{body}</p></article>;
          })}
        </section>
<section id="process" className="hotel-process hotel-section" aria-labelledby="hotel-process-title">
          <div className="hotel-container">
            <div className="hotel-section-heading"><h2 id="hotel-process-title">{t.processTitle}</h2><p>{t.processBody}</p></div>
            <ol className="hotel-steps">
              {t.steps.map(([title, body], i) => {
                const Icon = [Tag, ClipboardList, FileSearch, PackageCheck][i];
                return <li key={i}>
                  <div className="hotel-step-visual"><span>0{i + 1}</span><Icon size={52} strokeWidth={1.3} aria-hidden="true" />{i < 3 && <ChevronRight className="hotel-step-arrow" size={27} strokeWidth={1.3} aria-hidden="true" />}</div>
                  <h3>{title}</h3><p>{body}</p>
                </li>;
              })}
            </ol>
            <p className="hotel-process-note"><Check size={20} aria-hidden="true" />{t.processNote}</p>
          </div>
        </section>

        <section id="system" className="hotel-data hotel-section" aria-labelledby="hotel-data-title">
          <div className="hotel-container">
            <div className="hotel-section-heading"><h2 id="hotel-data-title">{t.dataTitle}</h2><p>{t.dataBody}</p></div>
            <div className="hotel-data-panels">
              <article className="hotel-panel">
                <div className="hotel-panel-heading"><h3>{t.stockTitle}</h3><span className="hotel-window-dots" aria-hidden="true"><i /><i /><i /></span></div>
                <div className="hotel-stock-body">
                  <dl className="hotel-stock-grid">{t.stockLabels.map((label, i) => <div key={i}><dt><span className={'hotel-status-dot status-' + i} aria-hidden="true" />{label}</dt><dd>{[600,350,220,30][i]}</dd></div>)}</dl>
                  <p className="hotel-stock-total">{t.stockTotal}</p>
                </div>
              </article>
              <article className="hotel-panel">
                <div className="hotel-panel-heading"><h3>{t.itemTitle}</h3><span className="hotel-window-dots" aria-hidden="true"><i /><i /><i /></span></div>
                <div className="hotel-item-body">
                  <div className="hotel-item-summary">
                    <img src="/rfid-textile-tag.png" alt={t.tagAlt} width="1536" height="1024" loading="lazy" />
                    <div className="hotel-item-details"><h4>TW-000128</h4><dl>{t.itemFields.map(([label,value],i) => <div key={i}><dt>{label}:</dt><dd>{i === 1 && <span className="hotel-status-dot status-0" aria-hidden="true" />}{value}</dd></div>)}</dl></div>
                  </div>
                  <dl className="hotel-item-events"><div><dt>{t.dispatch}</dt><dd>-</dd></div><div><dt>{t.returned}</dt><dd>-</dd></div></dl>
                </div>
              </article>
            </div>
            <p className="hotel-image-caption">{t.dataCaption}</p>
            <p className="hotel-data-note">{t.dataNote}</p>
          </div>
        </section>

        <section id="customize" className="hotel-customize" aria-labelledby="hotel-custom-title">
          <div className="hotel-custom-layout hotel-container">
            <figure className="hotel-custom-photo">
              <img src="/linen-handheld.png" alt={t.deviceAlt} width="1448" height="1086" loading="lazy" />
              <figcaption>{t.deviceCaption}</figcaption>
            </figure>
            <div className="hotel-custom-copy">
              <h2 id="hotel-custom-title">{t.customTitle}</h2>
              <p className="hotel-custom-intro">{t.customBody}</p>
              <ul className="hotel-custom-list">{t.customItems.map((item,i) => { const Icon = [SlidersHorizontal, Users, ChartNoAxesCombined][i]; return <li key={i}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><span>{item}</span></li>; })}</ul>
              <p className="hotel-device-line"><MonitorSmartphone size={28} strokeWidth={1.5} aria-hidden="true" /><span>{t.devices}</span></p>
              <a className="hotel-text-link" href="#contact">{t.customCta}<ArrowRight size={20} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="hotel-options hotel-section" aria-labelledby="hotel-options-title">
          <div className="hotel-container">
            <div className="hotel-section-heading"><h2 id="hotel-options-title">{t.optionsTitle}</h2></div>
            <div className="hotel-options-grid">
              {t.options.map(([title,body],i) => <Fragment key={i}>
                {i === 1 && <span className="hotel-option-or">{t.or}</span>}
                <article className="hotel-option">
                  <div className="hotel-option-image"><img src={i === 0 ? '/rfid-textile-tag.png' : '/linen-handheld.png'} alt="" width={i === 0 ? 1536 : 1448} height={i === 0 ? 1024 : 1086} loading="lazy" className={i === 1 ? 'hotel-linen-detail' : ''} /></div>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              </Fragment>)}
            </div>
            <p className="hotel-options-note">{t.optionsNote}</p>
          </div>
        </section>

        <section className="hotel-faq hotel-section" aria-labelledby="hotel-faq-title">
          <div className="hotel-container">
            <div className="hotel-section-heading"><h2 id="hotel-faq-title">{t.faqTitle}</h2></div>
            <dl className="hotel-faq-list">{t.faqs.map(([question,answer],i) => <div key={i}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl>
          </div>
        </section>
        <section id="contact" className="hotel-contact" aria-labelledby="hotel-contact-title">
          <div className="hotel-container hotel-contact-layout">
            <div>
              <h2 id="hotel-contact-title">{t.contactTitle}</h2>
              <p className="hotel-contact-intro">{t.contactBody}</p>
              <div className="hotel-contact-methods">
                <a href="tel:+66631909768" className="hotel-phone"><span className="hotel-contact-icon"><Phone size={23} aria-hidden="true" /></span><span><span className="hotel-contact-label">{t.phoneLabel}</span><strong>+66 63 190 9768</strong></span></a>
                <div className="hotel-email"><Mail size={25} aria-hidden="true" /><div><span className="hotel-contact-label">{t.emailLabel}</span><a href="mailto:posehealthcare@gmail.com">posehealthcare@gmail.com</a><a href="mailto:posehealthcare.olm@gmail.com">posehealthcare.olm@gmail.com</a></div></div>
              </div>
              <p className="hotel-nationwide"><MapPin size={20} aria-hidden="true" />{t.nationwide}</p>
            </div>
            <div className="hotel-line-placeholder"><span>{t.line}</span><span>{t.qr}</span></div>
            <p className="hotel-service-note">{t.disclaimer}</p>
          </div>
        </section>
      </main>
      <footer className="hotel-footer hotel-container"><span>POSE INTELLIGENCE</span><a href="https://www.poseintelligence.com/">www.poseintelligence.com</a></footer>
    </div>
  );
}
