import { siteConfig } from "../functions/siteConfig";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="privacy-page">
      <h1>Privacy Policy</h1>

      <p>
        <strong>Last updated:</strong> {lastUpdated}
      </p>

      <section>
        <h2>1. General Information</h2>

        <p>
          This is a personal, non-commercial fanfiction website.
          Protecting your privacy is important to me. This Privacy
          Policy explains what information may be processed when
          you visit this website.
        </p>

        <p>
            <strong>Website owner:</strong> {siteConfig.author}
        </p>

        <p>
            For contact information, please visit the{" "}
            <a href="/contact">Contact page</a>.
        </p>
      </section>

      <section>
        <h2>2. Hosting and Server Log Files</h2>

        <p>
          This website is hosted by{" "}
          {siteConfig.hostingProvider || "a hosting provider"}.
        </p>

        <p>
          When you visit this website, the hosting provider may
          automatically collect technical information in server
          log files. This may include:
        </p>

        <ul>
          <li>IP address</li>
          <li>Date and time of access</li>
          <li>Requested page or file</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referrer URL</li>
        </ul>

        <p>
          This information is processed to ensure the proper
          functioning, security and stability of the website.
        </p>

        <p>
          The legal basis for this processing is Article 6(1)(f)
          GDPR (legitimate interest).
        </p>

        <p>
          Data is retained according to the hosting provider's
          applicable retention policy.
        </p>

        {siteConfig.hostingPrivacyUrl && (
          <p>
            You can find more information in the{" "}
            <a
              href={siteConfig.hostingPrivacyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy of {siteConfig.hostingProvider || "the hosting provider"}
            </a>.
          </p>
        )}
      </section>

      <section>
        <h2>3. Cookies and Tracking</h2>

        <p>
          This website does not use analytics, advertising or
          tracking tools. No tracking cookies are intentionally
          set by this website.
        </p>
      </section>

      <section>
        <h2>4. Fonts and External Content</h2>

        <p>
          All fonts and website resources are hosted locally.
          This website does not embed external content such as
          YouTube videos, Instagram posts or other third-party media.
        </p>

        <p>
          Links to external websites and social media platforms
          are provided as ordinary links only. Data may be
          transmitted to those platforms once you click on an
          external link.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>

        <p>Under the GDPR, you may have the right to:</p>

        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your personal data</li>
          <li>Request restriction of processing</li>
          <li>Object to certain types of processing</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>

          <p>
            If you have any questions regarding privacy or the
            processing of your personal data, please visit my{" "}
            <a href="/contact">Contact page</a>.
          </p>
    
      </section>

      <section>
        <h2>6. Changes to This Privacy Policy</h2>

        <p>
          This Privacy Policy may be updated if the website or
          its features change. The latest version will always
          be available on this page.
        </p>
      </section>
    </main>
  );
}