import { siteConfig } from "../functions/siteConfig";

export default function Contacts() {
  const socialLinks = Object.entries(siteConfig.socialLinks).filter(
    ([, url]) => url.trim() !== ""
  );

  return (
    <main className="contact-page">
      <h1>Contact</h1>

      <p>
        If you have any questions, feedback or just want to say hello,
        feel free to reach out to me!
      </p>

      {socialLinks.length > 0 && (
        <div className="contact-socials">
          <p>You can find me on:</p>

          <ul>
            {socialLinks.map(([platform, url]) => (
              <li key={platform}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}