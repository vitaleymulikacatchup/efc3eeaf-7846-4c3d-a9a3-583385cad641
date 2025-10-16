export default function App() {
  return (
    <div className="app">
      <header className="colored">
        <div className="header-content">
                        <div className="header-title">
                                    <img src="https://storage.googleapis.com/svoi-upload/442/204214/1645ca44-1cec-47b6-b52b-422f680f55ff.png" alt="Логотип" title="Логотип" style="max-height: 150px;" />
                                <h1 >Запорізька міська рада</h1>
                                    <p >Запорізька область, Запорізький район</p>
                            </div>
                    </div>
    </header>
<section>
        <div className="breadcrumb">
            <p><a href="/">Головна</a></p>
            <p>Контакти</p>
        </div>
        <h2>Контакти</h2>
        <div className="flex-container">
            <div className="colored-container">
                <div className="menu-content">
                                            <div className="content-entry">
                            <p className="small">ЄДРПОУ</p>
                            <p className="small">
                                04053915
                            </p>
                        </div>
                                        <div className="content-entry">
                        <p className="small">
                            Адреса
                        </p>
                        <p className="small">
                            проспект Соборний, 206, Запоріжжя, 69105
                        </p>
                    </div>
                    <div className="content-entry">
                        <p className="small">Електронна пошта</p>
                        <p className="small">info@zp.gov.ua,zvern@zp.gov.ua</p>
                    </div>
                    <div className="content-entry">
                        <p className="small">Контактні телефони</p>
                        <p className="small">не зазначено</p>
                    </div>
                    <hr>
                                            <br>
                        <div className="content-entry">
                            <p className="small"><strong>Секретар Запорізької міської ради</strong></p>
                            <p className="small">
                                <a href="/persons/11058">
                                    <strong>Харченко Регіна Владиславівна</strong>
                                </a>
                                                                    <br>
                                    +380612246900
                                                                                            </p>
                        </div>
                                                                <br>
                                                    <div className="content-entry">
                                <p className="small">
                                    Депутат
                                </p>
                                <p className="small">
                                    Харченко Регіна Владиславівна
                                                                            <br>
                                        +380985732131, +380630653803
                                                                                                        </p>
                            </div>
                                                    <div className="content-entry">
                                <p className="small">
                                    Перший заступник міського голови з питань діяльності виконавчих органів ради
                                </p>
                                <p className="small">
                                    Бугар Андрій Ігорович
                                                                                                        </p>
                            </div>
                                                    <div className="content-entry">
                                <p className="small">
                                    Заступник міського голови з питань діяльності виконавчих органів ради
                                </p>
                                <p className="small">
                                    Білов Сергій Олександрович
                                                                                                        </p>
                            </div>
                                                    <div className="content-entry">
                                <p className="small">
                                    Заступник міського голови з питань діяльності виконавчих органів ради-керуючий справами виконавчого комітету Запорізької міської ради
                                </p>
                                <p className="small">
                                    Голтвенко Олександр Валерійович
                                                                            <br>
                                        +380612246907
                                                                                                                <br>
                                        info@zp.gov.ua
                                                                    </p>
                            </div>
                                                    <div className="content-entry">
                                <p className="small">
                                    Заступник міського голови з питань діяльності виконавчих органів ради
                                </p>
                                <p className="small">
                                    Гординський Віктор Георгійович
                                                                            <br>
                                        +380612242370
                                                                                                                <br>
                                        info@zp.gov.ua
                                                                    </p>
                            </div>
                                                    <div className="content-entry">
                                <p className="small">
                                    Заступник міського голови з питань діяльності виконавчих органів ради
                                </p>
                                <p className="small">
                                    П’ятницький Андрій Васильович
                                                                            <br>
                                        +380612246905
                                                                                                                <br>
                                        info@zp.gov.ua
                                                                    </p>
                            </div>
                                                    <div className="content-entry">
                                <p className="small">
                                    Заступник міського голови з питань діяльності виконавчих органів ради
                                </p>
                                <p className="small">
                                    Слепян Елла Валеріївна
                                                                                                        </p>
                            </div>
                                                    <div className="content-entry">
                                <p className="small">
                                    Заступник міського голови з питань діяльності виконавчих органів ради
                                </p>
                                <p className="small">
                                    Таран Роман Олегович
                                                                            <br>
                                        +380612246902
                                                                                                                <br>
                                        info@zp.gov.ua
                                                                    </p>
                            </div>
                                                                                </div>
            </div>
        </div>
    </section>
<section>
        <div className="two-one-container mobile-two-top">
            <div className="two-column">
                <h4>Електронне звернення</h4>
                                                <form method="post" action="/contacts">
                    <input type="hidden" name="_token" value="AekNqvsWy1wFeHqx7foA9tP5NrRCe0n36siyn0ZE" autoComplete="off" />                    <div className="short-input">
                        <select name="application_type" required>
                            <option value="" selected>Оберіть тему</option>
                            <option value="1">Звернення</option>
                            <option value="2">Запит на публічну інформацію</option>
                            <option value="3">Повідомлення про корупцію</option>
                            <option value="4">Скарга</option>
                        </select>
                    </div>
                    <div className="stylyzed-input short-input">
                        <input name="name" type="text" autoComplete="off" required id="contact-form-pib" />
                        <label className="input-label" htmlFor="contact-form-pib">
                            <span className="input-span">ПІБ</span>
                        </label>
                    </div>
                    <div className="stylyzed-input short-input">
                        <input
                            name="phone"
                            type="text"
                            id="contact-form-phone"
                            className="always-up"
                            required
                            autoComplete="off"
                            placeholder="+38 (099) 999-99-99"
                         />
                        <label className="input-label" htmlFor="contact-form-phone">
                            <span className="input-span">Телефон</span>
                        </label>
                    </div>
                    <div className="stylyzed-input short-input">
                        <input name="email" type="email" autoComplete="off" required id="contact-form-email" />
                        <label className="input-label" htmlFor="contact-form-email">
                            <span className="input-span">Email</span>
                        </label>
                    </div>
                    <div className="stylyzed-input short-input">
                        <input name="index" type="text" autoComplete="off" required id="contact-form-index" />
                        <label className="input-label" htmlFor="contact-form-index">
                            <span className="input-span">Індекс</span>
                        </label>
                    </div>
                    <div className="stylyzed-input short-input">
                        <input name="address" type="text" autoComplete="off" required id="contact-form-address" />
                        <label className="input-label" htmlFor="contact-form-address">
                            <span className="input-span">Адреса</span>
                        </label>
                    </div>
                    <div className="short-input">
                        <select name="answer_type" required>
                            <option value="" selected>Як надати відповідь?</option>
                            <option value="1">Електронною поштою</option>
                            <option value="2">Поштовим зв`язком</option>                        
                        </select>
                    </div>
                    <div className="stylyzed-textarea short-input">
                        <textarea name="text_message" type="text" autoComplete="off" required id="contact-form-text-message"></textarea>
                        <label className="input-label" htmlFor="contact-form-text-message">
                            <span className="input-span"></span>
                        </label>
                        <span className="textarea-span">текст звернення</span>
                    </div>
                    <br>
                    <div className="captcha">
                        
                        <div className="g-recaptcha" data-sitekey="6LeIaB0oAAAAABerx58cfQv3KGejg5f1b7h6Uwjd" data-size="normal" data-theme="light" id="recaptcha-element"></div>
                    </div>
                    <br>
                    <div>
                        <br>
                        <input type="checkbox" value="1" id="allow" name="allow" checked required="" />
                        <label htmlFor="allow">
                            Даю згоду на обробку персональних даних
                        </label>
                    </div>
                    <br>
                    <button type="submit" className="black-button" id="send_btn">Відправити</button>
                </form>
            </div>
            <div className="one-column">
                <div className="edem-block-right">
                    <div>
                        <img style="width: 60px;" src="/images/subdomain/emoji-ruler.png" alt="" />
                        <img style="width: 60px;" src="/images/subdomain/emoji-wave.png" alt="" />
                    </div>
                    <br><br>
                    <br><br>
                    <h3>Структурні  підрозділи та заклади</h3>
                    <br><br>
                    <br><br>
                    <br><br>
                    <a style="width: 100%" href="/structure">
                        <button className="black-button alternative">Дізнатись більше</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
<section>
        <div className="hromada-info reset-margins">
            <div className="hromada-info-text">
                <h4>Загальна інформація</h4>
                <div className="content-entry">
                    <p>Кількість населених пунктів, що об'єдналися</p>
                    <p style="font-weight: 500">1</p>
                </div>
                <div className="content-entry">
                    <p>Площа громади</p>
                    <p style="font-weight: 500">311.7 кв.км</p>
                </div>
                <div className="content-entry">
                    <p>Чисельність населення</p>
                    <p style="font-weight: 500">710052</p>
                </div>
                <div className="content-entry">
                    <p>Сільське населення</p>
                    <p style="font-weight: 500">0</p>
                </div>
                <div className="content-entry">
                    <p>КОАТУУ</p>
                    <p style="font-weight: 500">2310100000</p>
                </div>
            </div>
                            <div id="hromada-info-map" className="hromada-info-map"></div>
                                </div>
    </section>
<section className="colored bottom-navigation">
    <div className="bottom-navigation-grid">
        <div className="item">
            <input type="checkbox" className="bottom-navigation-checkbox" id="bottom-navigation-checkbox1" />
            <label htmlFor="bottom-navigation-checkbox1">
                <p className="header">Громада</p>
                                    <a href="/contacts">
                        <p>Контакти та звернення</p>
                    </a>
                                                    <a href="/persons/11058">
                        <p>Секретар Запорізької міської ради</p>
                    </a>
                                                <a href="/persons">
                    <p>Депутатський корпус</p>
                </a>
                                                                                    <a href="/card">
                        <p>Паспорт громади</p>
                    </a>
                                                    <a href="https://zp.gov.ua/pages/136981-sesiyi-miskoyi-radi">
                        <p>Сесії міської ради</p>
                    </a>
                                    <a href="https://zp.gov.ua/pages/251164-konkursi-ta-vakansiyi">
                        <p>Конкурси та вакансії</p>
                    </a>
                                    <a href="https://zp.gov.ua/pages/136501-ocishhennia-vladi">
                        <p>Очищення влади</p>
                    </a>
                                    <a href="https://zp.gov.ua/pages/136474-zapobigannia-korupciyi">
                        <p>Запобігання корупції</p>
                    </a>
                                    <a href="https://zp.gov.ua/pages/245995-videotransliaciyi">
                        <p>Відеотрансляції</p>
                    </a>
                                    <a href="https://zp.gov.ua/pages/165428-vikonkom">
                        <p>Виконком</p>
                    </a>
                            </label>
        </div>
        <div className="item">
            <input type="checkbox" className="bottom-navigation-checkbox" id="bottom-navigation-checkbox2" />
            <label htmlFor="bottom-navigation-checkbox2">
                <p className="header">Документи та дані</p>
                                    <a href="/pub-info">
                        <p>Публічна інформація</p>
                    </a>
                                                    <a href="/finance">
                        <p>Фінанси</p>
                    </a>
                                                    <a href="/documents">
                        <p>Документи (НПА)</p>
                    </a>
                                                                                    <a href="https://zp.gov.ua/pages/123251-vidkriti-dani">
                        <p>Відкриті дані</p>
                    </a>
                            </label>
        </div>
        <div className="item">
            <input type="checkbox" className="bottom-navigation-checkbox" id="bottom-navigation-checkbox3" />
            <label htmlFor="bottom-navigation-checkbox3">
                <p className="header">Громадянам</p>
                                    <a href="/cabinet">
                        <p>Кабінет мешканця</p>
                    </a>
                                                                    <a href="/cnap">
                        <p>Послуги</p>
                    </a>
                                                    <a href="/bot">
                        <p>Чат-бот «СВОЇ»</p>
                    </a>
                                                    <a href="/institutions">
                        <p>Довідник закладів</p>
                    </a>
                                                    <a href="https://zp.gov.ua/pages/78331-adresi-ukrittiv">
                        <p>Адреси укриттів</p>
                    </a>
                                    <a href="https://zp.gov.ua/corruption">
                        <p>Повідомити про корупцію</p>
                    </a>
                            </label>
        </div>
        <div className="item">
            <input type="checkbox" className="bottom-navigation-checkbox" id="bottom-navigation-checkbox4" />
            <label htmlFor="bottom-navigation-checkbox4">
                <p className="header">Громадська участь</p>
                                    <a href="/e-dem/petition">
                        <p>Електронні петиції</p>
                    </a>
                                                                    <a href="/e-dem/consultation">
                        <p>Електронні консультації</p>
                    </a>
                                                                            </label>
        </div>
    </div>
</section>
<footer id="footer">
        <div className="partner-logos">
            <div className="partner-logo">
                <img loading="lazy" src="/images/subdomain/footer-logo.svg" alt="" />
                <div>
                    <p>Запорізька міська рада</p>
                    <p>Офіційний вебсайт</p>
                </div>
            </div>
            <div className="partner-logo">
                <img loading="lazy" src="/images/subdomain/footer-line.svg" alt="" />
                <p className="tiny">Створено в межах швейцарсько-української Програми «Електронне урядування задля підзвітності влади та участі громади» (EGAP), що реалізується Фондом Східна Європа у партнерстві з Міністерством цифрової трансформації України за підтримки Швейцарії.</p>
            </div>
            <div className="partner-logo">
                <img loading="lazy" src="/images/subdomain/svoi.png" alt="" />
                <p className="tiny">
                    <a style="text-decoration: underline;" href="https://toolkit.in.ua">Хочете такий сайт з чат-ботом для громади?</a>
                </p>
            </div>
            <div className="partner-logo">
                <img loading="lazy" src="/images/subdomain/i.cc.svg" alt="" />
                <p className="tiny">
                    Весь контент доступний за ліцензією Creative Commons Attribution 4.0 International license, якщо не зазначено інше.
                                            <br>
                        <br>
                        Поточна версія офіційного вебсайту Запорізької міської ради перебуває в розробці.
                        <br>
                        <br>
                        Стара версія офіційного вебсайту Запорізької міської ради містить інформацію станом на 31.12.2023 та не оновлюється з 01.01.2024.
                                    </p>
            </div>
        </div>
        <div>
                            <p>Слідкуй за нами тут:</p>
                <div className="social">
                    <div className="social-icons">
                                                                                    <a href="https://www.facebook.com/zaporizhzhiacitycouncil" target="_blank">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            className="stroke"
                                            stroke="white"
                                            strokeWidth="2"
                                            d="M3.57194 3.57355L3.57355 3.57194C4.79714 2.34556 6.37314 1.68775 8.68919 1.34759C11.0392 1.00245 14.0222 1 17.9967 1C21.9712 1 24.9545 1.00243 27.3055 1.34683C29.6222 1.68621 31.2004 2.34254 32.4273 3.56622C33.6543 4.79331 34.3122 6.37149 34.6524 8.68833C34.9976 11.0391 35 14.0222 35 17.9967C35 21.9712 34.9976 24.9543 34.6524 27.3051C34.3122 29.622 33.6543 31.2002 32.4273 32.4273C31.2003 33.6542 29.6207 34.3122 27.3027 34.6524C24.9511 34.9976 21.9679 35 17.9967 35C14.0255 35 11.0424 34.9976 8.69159 34.6524C6.37446 34.3122 4.79699 33.6543 3.57355 32.4281L3.57275 32.4273C2.34581 31.2003 1.68782 29.6207 1.3476 27.3027C1.00244 24.9511 1 21.9679 1 17.9967C1 14.0255 1.00244 11.0424 1.3476 8.69159C1.68781 6.37446 2.34571 4.79699 3.57194 3.57355Z"
                                            />
                                        <path
                                            className="fill"
                                            fill="white"
                                            d="M15.9053 28V19.502H13V16.125H15.9053V13.4643C15.9053 10.5734 17.7083 9 20.3409 9C21.6023 9 22.6856 9.09277 23 9.13359V12.1543H21.1742C19.7424 12.1543 19.4659 12.8223 19.4659 13.7982V16.125H22.697L22.2538 19.502H19.4659V28"
                                            />
                                    </svg>
                                </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <a href="https://www.instagram.com/zaporizhzhia_city_council/" target="_blank">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            className="stroke"
                                            stroke="white"
                                            strokeWidth="2"
                                            d="M3.57194 3.57355L3.57355 3.57194C4.79714 2.34556 6.37314 1.68775 8.68919 1.34759C11.0392 1.00245 14.0222 1 17.9967 1C21.9712 1 24.9545 1.00243 27.3055 1.34683C29.6222 1.68621 31.2004 2.34254 32.4273 3.56622C33.6543 4.79331 34.3122 6.37149 34.6524 8.68833C34.9976 11.0391 35 14.0222 35 17.9967C35 21.9712 34.9976 24.9543 34.6524 27.3051C34.3122 29.622 33.6543 31.2002 32.4273 32.4273C31.2003 33.6542 29.6207 34.3122 27.3027 34.6524C24.9511 34.9976 21.9679 35 17.9967 35C14.0255 35 11.0424 34.9976 8.69159 34.6524C6.37446 34.3122 4.79699 33.6543 3.57355 32.4281L3.57275 32.4273C2.34581 31.2003 1.68782 29.6207 1.3476 27.3027C1.00244 24.9511 1 21.9679 1 17.9967C1 14.0255 1.00244 11.0424 1.3476 8.69159C1.68781 6.37446 2.34571 4.79699 3.57194 3.57355Z"
                                            />
                                        <path
                                            className="fill"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            fill="white"
                                            d="M26.9933 6.23804C26.3362 6.23804 25.6914 6.50341 25.2278 6.96937C24.7605 7.43334 24.4932 8.07916 24.4932 8.73861C24.4932 9.3955 24.7616 10.0405 25.2278 10.5064C25.6905 10.9704 26.3362 11.238 26.9933 11.238C27.6524 11.238 28.2949 10.9704 28.7608 10.5064C29.227 10.0405 29.4932 9.39436 29.4932 8.73861C29.4932 8.07916 29.227 7.43334 28.7608 6.96937C28.2969 6.50341 27.6524 6.23804 26.9933 6.23804Z"
                                            />
                                        <circle className="stroke" cx="18" cy="18" r="7" stroke="white" strokeWidth="2" />
                                    </svg>
                                </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <a href="https://t.me/zaporizhzhiacitycouncil" target="_blank">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke" d="M3.57194 3.57355L3.57355 3.57194C4.79714 2.34556 6.37314 1.68775 8.68919 1.34759C11.0392 1.00245 14.0222 1 17.9967 1C21.9712 1 24.9545 1.00243 27.3055 1.34683C29.6222 1.68621 31.2004 2.34254 32.4273 3.56622C33.6543 4.79331 34.3122 6.37149 34.6524 8.68833C34.9976 11.0391 35 14.0222 35 17.9967C35 21.9712 34.9976 24.9543 34.6524 27.3051C34.3122 29.622 33.6543 31.2002 32.4273 32.4273C31.2003 33.6542 29.6207 34.3122 27.3027 34.6524C24.9511 34.9976 21.9679 35 17.9967 35C14.0255 35 11.0424 34.9976 8.69159 34.6524C6.37446 34.3122 4.79699 33.6543 3.57355 32.4281L3.57275 32.4273C2.34581 31.2003 1.68782 29.6207 1.3476 27.3027C1.00244 24.9511 1 21.9679 1 17.9967C1 14.0255 1.00244 11.0424 1.3476 8.69159C1.68781 6.37446 2.34571 4.79699 3.57194 3.57355Z" stroke="white" strokeWidth="2" />
                                        <path className="fill" d="M26.943 10.5476L23.9249 24.9738C23.6972 25.992 23.1034 26.2454 22.2596 25.7657L17.6609 22.3311L15.442 24.4941C15.1964 24.743 14.9911 24.9512 14.5178 24.9512L14.8482 20.2043L23.3713 12.3984C23.7418 12.0636 23.2909 11.878 22.7953 12.2129L12.2587 18.9373L7.72255 17.4983C6.73585 17.186 6.718 16.4982 7.92793 16.0185L25.6706 9.09053C26.4921 8.77829 27.2109 9.27606 26.943 10.5476Z" fill="white" />
                                    </svg>
                                </a>
                                                                            <a href="/rss.xml" target="_blank">
                            <svg width="36" height="36" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className="fill"
                                    fill="white"
                                    d="M 5 5 L 5 9 C 14.93 9 23 17.07 23 27 L 27 27 C 27 14.85 17.15 5 5 5 z M 5 12 L 5 16 C 11.07 16 16 20.93 16 27 L 20 27 C 20 18.72 13.28 12 5 12 z M 8 21 A 3 3 0 0 0 8 27 A 3 3 0 0 0 8 21 z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                        <div className="bot-links-section">
                <p>Наша громада у смартфоні:</p>
                <div className="bot-links">
                    <div>
                        <a href="https://api.toolkit.in.ua/redirect/viber/selectCommunity-442" target="_blank">
                            <img loading="lazy" src="https://storage.googleapis.com/svoi-upload/442/359299/viber.png" alt="QR-код з посиланням на Viber-бот громади" />
                            <p>Viber</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://api.toolkit.in.ua/redirect/telegram/selectCommunity-442" target="_blank">
                            <img loading="lazy" src="https://storage.googleapis.com/svoi-upload/442/359298/telegram.png" alt="QR-код з посиланням на Telegram-бот громади" />
                            <p>Telegram</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}