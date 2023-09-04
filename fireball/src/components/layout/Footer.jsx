import logo from "../../assets/fireballLogo.jpg";
import "./Footer.css";

const Footer = function () {
    return (
        <div id="footerCurvedWrap">
            <footer>
                <div className="footerLogoContainer">
                    <div className="footerLogo">
                        <img className="logo" src={logo} alt="header logo" />
                    </div>
                </div>
                <div id="madeByContainer">
                    <h2>App Created By:</h2>
                    <div id="madeBy">
                        <ul>
                            <a href="https://github.com/vukas86">
                                <li>Alex</li>
                            </a>
                            <a href="https://github.com/crwainstock">
                                <li>Crystal</li>
                            </a>
                            <a href="https://github.com/crisxh">
                                <li>Chris</li>
                            </a>
                            <a href="https://github.com/uKiJo">
                                <li>Younes</li>
                            </a>
                            <a href="https://github.com/Sarita1517">
                                <li>Sarita</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
