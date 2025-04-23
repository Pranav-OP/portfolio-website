import { React } from "react";
import Styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return(
        <footer className={Styles.container} id="contact">

            <div className={Styles.text}>
                <h2>Get in Touch</h2>
                {/* <p>I'd love to hear from you, whether you're curious about technologia or interested in something else 😉</p> */}
                <p>Feel free to reach out!</p>
            </div>

            <ul className={Styles.links}>
                <li className={Styles.link}>
                    <img src={getImageUrl("contact/phone.png")} alt="phone-logo" />
                    <a href="mailto:pranavjagtap7007@gmail.com">+91 9766537007</a>
                </li>
                <li className={Styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="linkedin-logo" />
                    <a href="https://www.linkedin.com/in/pranavj24/" target="_blank">pranavj24</a>
                </li>
                <li className={Styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="github-logo" />
                    <a href="https://github.com/Pranav-OP" target="_blank">Pranav-OP</a>
                </li>
                <li className={Styles.link}>
                    <img src={getImageUrl("contact/twitter.png")} alt="twitter-logo" />
                    <a href="https://x.com/PronubOP" target="_blank">PronubOP</a>
                </li>
                <li className={Styles.link}>
                    <img src={getImageUrl("contact/medium.png")} alt="medium-logo" />
                    <a href="https://medium.com/@pranavjagtap7007">@pranavjagtap7007</a>
                </li>
            </ul>

            {/* <p className={Styles.footer}>&copy; PranavOP | Made with &#x2764; by Pranav Jagtap</p> */}
        </footer>
    );
}