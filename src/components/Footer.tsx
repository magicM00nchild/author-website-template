import { siteConfig } from "../functions/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">
        © {new Date().getFullYear()} {siteConfig.author} 
      </p>

      <nav className="footer__links">
        <a href="/contacts">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  );
}