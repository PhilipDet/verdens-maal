import { FooterStyled } from "./footer.styled";
import { useEffect, useState } from "react";

import footerbg from "../../assets/footerbg.png";
import DanidaLogo from "../../assets/Danida-Logo.png";
import GlobaleGymnasierLogo from "../../assets/Globale-Gymnasier-Logo.png";
import MSLogo from "../../assets/MS-Logo.png";
import UNDPLogo from "../../assets/UNDP-Logo.png";

export const Footer = () => {
    const [secondsLeft, setSecondsLeft] = useState(0);

    const getSecondsLeft = () => {
        const now = new Date();
        const target = new Date("2030-01-01T00:00:00Z");
        const diff = target - now;
        return (diff / 1000).toFixed(0);
    };

    useEffect(() => {
        setSecondsLeft(getSecondsLeft());
    }, []);

    setInterval(() => {
        setSecondsLeft(getSecondsLeft());
    }, 1000);

    return (
        <FooterStyled bg={footerbg}>
            <div id="footer-container">
                <div>
                    <p>
                        <strong>Om Hjemmesiden</strong>
                        <br /> <br />
                        Dette digitale læringssite er udviklet af UNDP's
                        nordiske kontor i Danmark, Globale Gymnasier og
                        Mellemfolkeligt Samvirke/VerdensKlasse med støtte fra
                        Danidas Oplysningsbevilling.
                        <br /> <br />
                        Vores mål med dette site er at give lærere og elever på
                        landets ungdomsuddannelser mulighed for at opnå viden,
                        holdninger og handlingskompetence i forhold til FN's
                        verdensmål for bæredygtig udvikling. Sitet opdateres
                        løbende med nyeste statistik, viden og nye
                        undervisningsforløb.
                        <br /> <br />
                        <strong>
                            ANTAL SEKUNDER TIL 2030: {secondsLeft} sekunder
                        </strong>
                    </p>
                </div>
                <div>
                    <strong>ORGANISATIONERNE BAG</strong>
                    <br /> <br />
                    <div>
                        <img src={UNDPLogo} alt="" />
                        <img src={MSLogo} alt="" />
                        <img src={GlobaleGymnasierLogo} alt="" />
                    </div>
                    <br />
                    <strong>
                        UDVIKLET MED STØTTE FRA DANIDAS OPLYSNINGSBEVILLING
                    </strong>
                    <br /> <br />
                    <img src={DanidaLogo} alt="" />
                </div>
            </div>
        </FooterStyled>
    );
};
