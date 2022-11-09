import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

export default function Footer() {

    return(
        <footer className="footer">
            <a className="footer__faq" href="#">FAQ</a>
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Mind Bubble</p>
            <div className="footer__social-display">
                <a href="#" className="footer__social-button">
                    {/* <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "facebook-square"]} /></button> */}
                </a>
                <a href="#" className="footer__social-button">
                    {/* <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "instagram"]} /></button> */}
                </a>
                <a href="#" className="footer__social-button">
                    {/* <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "twitter"]} /></button> */}
                </a>
                <a href="#" className="footer__social-button">
                    {/* <FontAwesomeIcon icon={faFaceRelieved} /> */}
                    {/* <button className="footer__social-icon footer__social-icon_in"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></button> */}
                </a>
                
            </div>
        </footer>
    )
}