import LegalArticle from "@memoli/components/legal/LegalArticle";

const EFFECTIVE_DATE = "March 25, 2026";

export default function PrivacyPage() {
  return (
    <LegalArticle title="Privacy Policy" effectiveDate={EFFECTIVE_DATE}>
      <p>
        This privacy policy applies to the Memoli app (hereby referred to as &quot;Application&quot;) for
        mobile devices, developed by NamaLabs (hereby referred to as &quot;Service Provider&quot;), as a free
        service. Memoli helps you manage household inventory with smart scanning, expiry tracking, and optional
        family synchronization. This service is intended for use &quot;AS IS&quot;.
      </p>

      <h2>Information Collection and Use</h2>
      <p>The Application collects information when you download and use it. This information may include:</p>
      <ul>
        <li>Your device&apos;s Internet Protocol address (e.g. IP address)</li>
        <li>
          The screens or areas of the Application you use, the time and date of your visit, and the time spent
          on those areas
        </li>
        <li>The time spent in the Application</li>
        <li>The operating system you use on your mobile device</li>
      </ul>
      <p>The Application does not gather precise information about the location of your mobile device.</p>
      <p>
        The Service Provider may use the information you provide to contact you from time to time with important
        information, required notices, and occasional product updates or promotions related to Memoli.
      </p>
      <p>
        For a better experience while using the Application, the Service Provider may ask you to provide certain
        personally identifiable information (for example, your email address). The information the Service
        Provider requests will be retained and used as described in this privacy policy.
      </p>

      <h2>Third Party Access</h2>
      <p>
        Only aggregated, anonymized data may be transmitted periodically to external services to help the Service
        Provider improve the Application and its service. The Service Provider may share your information with
        third parties in the ways described in this privacy statement.
      </p>
      <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
      <ul>
        <li>as required by law, such as to comply with a subpoena or similar legal process;</li>
        <li>
          when they believe in good faith that disclosure is necessary to protect their rights, protect your
          safety or the safety of others, investigate fraud, or respond to a government request;
        </li>
        <li>
          with trusted service providers who work on their behalf, do not have an independent use of the
          information we disclose to them, and have agreed to adhere to the rules set forth in this privacy
          statement.
        </li>
      </ul>

      <h2>Opt-Out Rights</h2>
      <p>
        You can stop all collection of information by the Application by uninstalling it. You may use the standard
        uninstall processes available on your mobile device or through the mobile application marketplace or
        network.
      </p>

      <h2>Data Retention Policy</h2>
      <p>
        The Service Provider will retain User Provided data for as long as you use the Application and for a
        reasonable time thereafter. If you would like them to delete User Provided Data that you have provided
        via the Application, please contact them at{" "}
        <a href="mailto:hello@memoli.app">hello@memoli.app</a> and they will respond in a reasonable time.
      </p>

      <h2>Children</h2>
      <p>
        The Service Provider does not use the Application to knowingly solicit data from or market to children
        under the age of 13.
      </p>
      <p>
        The Service Provider does not knowingly collect personally identifiable information from children. The
        Service Provider encourages parents and legal guardians to monitor their children&apos;s use of apps and
        the internet and to help enforce this Policy by instructing children never to provide personally
        identifiable information through the Application and/or Services without permission. If you believe a
        child has provided personally identifiable information to the Service Provider through the Application
        and/or Services, please contact the Service Provider at{" "}
        <a href="mailto:hello@memoli.app">hello@memoli.app</a> so that appropriate steps can be taken. You must
        also be at least 16 years of age to consent to the processing of your personally identifiable
        information in your country (in some countries your parent or guardian may consent on your behalf).
      </p>

      <h2>Security</h2>
      <p>
        The Service Provider is concerned about safeguarding the confidentiality of your information. The Service
        Provider uses physical, electronic, and procedural safeguards to protect information the Service Provider
        processes and maintains.
      </p>

      <h2>Changes</h2>
      <p>
        This Privacy Policy may be updated from time to time. The Service Provider will notify you of material
        changes by updating this page with the new Privacy Policy. You are advised to review this Privacy Policy
        periodically; continued use of the Application after changes are posted constitutes your acceptance of the
        updated policy.
      </p>
      <p className="text-sm text-memoli-dark/60">This privacy policy is effective as of {EFFECTIVE_DATE}.</p>

      <h2>Your Consent</h2>
      <p>
        By using the Application, you consent to the processing of your information as set forth in this Privacy
        Policy, including as it may be amended from time to time.
      </p>

      <div className="bg-memoli-section-bg border-l-4 border-memoli-accent p-4 rounded-lg mt-8">
        <strong className="text-memoli-dark">Contact us</strong>
        <p className="mt-2 mb-0 text-memoli-dark font-medium text-base">
          If you have questions about privacy while using the Application or about these practices, contact the
          Service Provider at{" "}
          <a href="mailto:hello@memoli.app" className="text-memoli-accent underline">
            hello@memoli.app
          </a>
          .
        </p>
      </div>
    </LegalArticle>
  );
}
