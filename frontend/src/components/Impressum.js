import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import '../css/Impressum.css'

const Impressum = () => {
    return (
        <div>
            <Navbar />
                <div className='container'>
                    <div className="impressumsection">
                        <div className="impressum-content">
                            <div className="impressum-titel">
                                <h1>Impressum</h1>
                            </div>
                            <div className="impressum-text">
                                <h3>Angaben gemäß § 5 TMG:</h3>
                                <p>
                                    JCM Beratung & Beteiligungen GmbH<br />
                                    Diekkamp 33a<br />
                                    22359 Hamburg
                                </p>
                                <h3>Kontakt:</h3>
                                <p>
                                    Vertreten durch:<br />
                                    Julius Maiwaldt<br />
                                    Telefon: +49 157 58162050<br />
                                    E-Mail: julius@maiwaldt.de<br />
                                </p>
                                <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
                                <p>
                                    Jan-Luca Maiwaldt<br />
                                    Diekkamp 33a<br />
                                    22359 Hamburg
                                </p>
                                <h3>Haftungsausschluss (Disclaimer):</h3>
                                <p>
                                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                                </p>
                                <h3>Urheberrecht</h3>
                                <p>
                                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Impressum;