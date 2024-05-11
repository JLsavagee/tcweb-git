import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import '../css/Datenschutzerklärung.css'


function Datenschutzerklärung() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="datenschutz-content">
                    <div className="datenschutz-text">
                        <h3>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)</h3>
                        <p>
                            JCM Beratung 6 Beteilgungen GmbH
                        <br/>
                            Diekkamp 33a, 22359 Hamburg
                        <br/>
                            Telefon: +49 170 2221280
                        <br/>
                            E-Mail: janluca@maiwaldt.de
                        </p>
                        <h3>1. Erfassung und Verarbeitung von personenbezogenen Daten</h3>
                        <p>
                            a) Wenn Sie unsere Website besuchen, erheben wir keine personenbezogenen Daten von Ihnen, es sei denn, Sie stellen uns diese freiwillig zur Verfügung (z.B. durch Ausfüllen von Kontaktformularen oder Anfragen per E-Mail). 
                        <br/>
                            b) Wenn Sie Bilder über unsere Website hochladen, werden diese in unserem System gespeichert. Diese Bilder können personenbezogene Daten enthalten, wenn sie beispielsweise Personen abbilden. Die Verarbeitung dieser Bilder erfolgt ausschließlich zu dem von Ihnen angegebenen Zweck, beispielsweise zur Veröffentlichung auf unserer Website oder für interne Analysezwecke.
                        </p>
                        <h3>2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
                        <p>
                            Die Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten ergibt sich aus Art. 6 Abs. 1 lit. a DSGVO, sofern Sie uns eine Einwilligung zur Verarbeitung Ihrer Daten erteilt haben. 
                        </p>
                        <h3>3. Speicherdauer</h3>
                        <p>
                            Wir speichern hochgeladene Bilder nur für den Zeitraum, der zur Erreichung des Zwecks, für den sie erhoben wurden, erforderlich ist. Nach Erreichung dieses Zwecks oder auf Ihren ausdrücklichen Wunsch hin werden die Bilder gelöscht. Bitte beachten Sie, dass eine vollständige Löschung Ihrer hochgeladenen Bilder möglicherweise nicht sofort erfolgen kann, da sie möglicherweise noch in Sicherungskopien vorhanden sind oder aus rechtlichen Gründen aufbewahrt werden müssen.
                        </p>
                        <h3>4. Ihre Rechte als betroffene Person</h3>
                        <p>
                            Sie haben das Recht, gemäß Art. 15 DSGVO Auskunft über die Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                        </p>
                        <h3>5. Widerspruchsrecht</h3>
                        <p>
                            Sie haben das Recht, gemäß Art. 21 DSGVO der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
                        </p>
                        <h3>6. Beschwerderecht</h3>
                        <p>
                            Sie haben das Recht, gemäß Art. 77 DSGVO Beschwerde bei einer Aufsichtsbehörde einzulegen.
                        </p>
                        <h3>7. Änderungen dieser Datenschutzerklärung</h3>
                        <p>
                            Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden, um Änderungen unserer Praktiken oder rechtlichen Anforderungen widerzuspiegeln. Bitte überprüfen Sie diese Seite regelmäßig auf Aktualisierungen.
                        </p>
                        <p>Stand: 11. Mai 2024</p>
                    </div>
                </div>  
             </div>          
            <Footer />
        </div>
  );
}

export default Datenschutzerklärung;