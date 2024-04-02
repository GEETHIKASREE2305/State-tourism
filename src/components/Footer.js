import "./Footer.css";
const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>KERALA TOURISM</h1>
                    <p>A trip to the heaven on earth</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>

            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">change log</a>
                    <a href="/">status</a>
                    <a href="/">license</a>
                    <a href="/">all versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">contact us</a>
                    <a href="/">all versions</a>
                </div>
                <div>
                    <h4>others</h4>
                    <a href="/">terms of service</a>
                    <a href="/">privacy policy</a>
                    <a href="/">license</a>
                    <a href="/">all versions</a>
                </div>
            </div>
        </div>
    );
    
}
export default Footer;