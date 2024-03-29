import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import '../css/Impressum.css'

const Impressum = () => {
    return (
    <>
        <div>
            <Navbar />
        </div>
        <div className="impressumsection">
            <div className="impressum-content">
                <div className="impressum-titel">
                    <h1>Impressum</h1>
                </div>
                <div className="impressum-text">
                    <h2>Angaben gemäß § 5 TMG:</h2>
                    <p>
                        Max Mustermann<br />
                        Musterstraße 123<br />
                        12345 Musterstadt
                    </p>
                    <h2>Kontakt:</h2>
                    <p>
                        Telefon: 01234 567890<br />
                        E-Mail: info@beispielwebsite.com<br />
                        Vertreten durch: Max Mustermann
                    </p>
                    <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                    <p>
                        Max Mustermann<br />
                        Musterstraße 123<br />
                        12345 Musterstadt
                    </p>
                    <h2>Haftungsausschluss (Disclaimer):</h2>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                    <h2>Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </>
    );
};

export default Impressum;