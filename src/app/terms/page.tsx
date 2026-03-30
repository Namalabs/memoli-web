import LegalArticle from "@memoli/components/legal/LegalArticle";

const EFFECTIVE_DATE = "March 25, 2026";

export default function TermsPage() {
  return (
    <LegalArticle title="Terms & Conditions" effectiveDate={EFFECTIVE_DATE}>
      <p>
        These terms and conditions apply to the Memoli app (hereby referred to as &quot;Application&quot;) for
        mobile devices, developed by NamaLabs (hereby referred to as &quot;Service Provider&quot;), as a free
        service for managing household inventory, scanning product labels, tracking expiry dates, and related
        features.
      </p>
      <p>
        By downloading or using the Application, you agree to the following terms. Please read them carefully
        before using the Application.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Unauthorized copying or modification of the Application, any part of the Application, or our trademarks
        is strictly prohibited. You may not extract the source code of the Application, translate the Application
        into other languages, or create derivative versions without permission. All trademarks, copyrights,
        database rights, and other intellectual property rights related to the Application remain the property of
        the Service Provider.
      </p>

      <h2>Modifications &amp; Charges</h2>
      <p>
        The Service Provider may modify the Application or charge for services at any time and for any reason.
        Any charges for the Application or its services will be clearly communicated to you in advance.
      </p>

      <h2>Personal Data &amp; Security</h2>
      <p>
        The Application stores and processes personal data that you provide to the Service Provider in order to
        deliver the Service. You are responsible for maintaining the security of your device and access to the
        Application. The Service Provider strongly advises against jailbreaking or rooting your device; doing
        so can expose your device to malware, compromise security, and may cause the Application to malfunction or
        stop working.
      </p>

      <h2>Internet Connection &amp; Charges</h2>
      <p>
        Some functions of the Application require an active internet connection (Wi-Fi or mobile data). The
        Service Provider is not responsible if the Application does not work fully due to lack of connectivity or
        if you have exhausted your data allowance.
      </p>
      <p>
        If you use the Application outside of Wi-Fi, your mobile network provider&apos;s terms still apply. You
        may incur charges for data usage, roaming, or other third-party fees. By using the Application, you
        accept responsibility for those charges. If you are not the bill payer for the device, you represent that
        you have permission to use the service from the bill payer.
      </p>

      <h2>Device Responsibility</h2>
      <p>
        The Service Provider cannot be responsible for all aspects of your use of the Application. For example,
        keeping your device charged is your responsibility. If your device runs out of power and you cannot access
        the Service, the Service Provider is not liable for that interruption.
      </p>

      <h2>Accuracy &amp; Updates</h2>
      <p>
        While the Service Provider strives to keep the Application updated and accurate, some information may come
        from third parties. The Service Provider accepts no liability for any loss, direct or indirect, resulting
        from reliance on information or functionality in the Application.
      </p>
      <p>
        The Service Provider may update the Application. The Application is available subject to the requirements
        of the operating system; those requirements may change. You may need to install updates to continue using
        the Application. The Service Provider does not guarantee that updates will always be compatible with your
        device or use case. You agree to accept updates when offered. The Service Provider may stop providing the
        Application and may end your right to use it at any time. Unless stated otherwise, when use ends: (a) the
        rights and licenses granted in these terms end; and (b) you must stop using the Application and, if
        necessary, delete it from your device.
      </p>

      <h2>Changes to These Terms and Conditions</h2>
      <p>
        The Service Provider may update these Terms and Conditions from time to time. You should review this page
        periodically. The Service Provider will notify you of changes by posting the new Terms and Conditions on
        this page.
      </p>

      <div className="bg-memoli-section-bg border-l-4 border-memoli-accent p-4 rounded-lg mt-8">
        <strong className="text-memoli-dark">Contact us</strong>
        <p className="mt-2 mb-0 text-memoli-dark font-medium text-base">
          If you have questions or suggestions about these Terms and Conditions, contact the Service Provider at{" "}
          <a href="mailto:hello@memoli.app" className="text-memoli-accent underline">
            hello@memoli.app
          </a>
          .
        </p>
      </div>
    </LegalArticle>
  );
}
