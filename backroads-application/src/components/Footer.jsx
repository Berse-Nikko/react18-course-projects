import { socialLinks } from "../data"
import PageLinks from "./PageLinks"
import SocialLink from "./SocialLink"

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((socialLinks) => {
          return (
            <SocialLink
              key={socialLinks.id}
              itemClass="footer-icon"
              {...socialLinks}
            />
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
