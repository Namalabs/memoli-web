import LegalArticle from "@memoli/components/legal/LegalArticle";

const EFFECTIVE_DATE = "22 Desember 2025";

export default function PrivacyPage() {
  return (
    <LegalArticle title="Privacy Policy" effectiveDate={EFFECTIVE_DATE}>
      <p>
        This Privacy Policy describes how Namalabs under PT Cipta Cita Indonesia (&quot;Memoli,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information in connection with your use of
        the Memoli iOS application and related services.
      </p>
      <p>
        This policy is designed to align with the Memoli Terms of Service and adheres to the principles of
        transparency and &quot;Privacy by Design.&quot; By using the Service, you consent to the data practices
        described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p><strong>1.1 Information You Provide Directly</strong></p>
      <p>
        <strong>Account Data:</strong> When you register via Apple Sign-In, we receive a unique identifier and, depending on your
        settings, your name and email address.
      </p>
      <p>
        <strong>Inventory Data:</strong> This includes images of product labels, barcodes, and retail receipts (e.g., from Alfamart
        or Indomaret) that you upload to digitize your pantry.
      </p>
      <p><strong>User Preferences:</strong> Data regarding your household size, dietary sensitivities, or preferred alert frequencies.</p>
      <p><strong>1.2 Automatically Collected Information</strong></p>
      <p>
        <strong>Usage Metadata:</strong> We collect data on how you interact with the app, such as the frequency of scans, common
        categories of products tracked, and waste patterns (items marked as &quot;expired&quot; or
        &quot;disposed&quot;).
      </p>
      <p>
        <strong>Device Information:</strong> We collect technical details such as your iOS version and device model to optimize the
        performance of on-device AI-OCR (VisionKit).
      </p>

      <h2>2. Use of Information and AI Processing</h2>
      <p>
        <strong>2.1 Service Delivery and AI-OCR</strong> We use your information primarily to facilitate the &quot;Safety Net&quot;
        features of Memoli. Images of labels and receipts are processed using VisionKit (on-device) and Mistral AI
        (cloud-secured) to extract expiry dates and ingredient lists. This automated processing is essential for
        providing real-time safety alerts and inventory tracking.
      </p>
      <p>
        <strong>2.2 B2B Data Analytics and Market Insights</strong> A core component of our &quot;Waste to Value&quot; mission
        involves analyzing household consumption patterns. <strong>Namalabs under PT Cipta Cita Indonesia</strong> may use your
        anonymized, aggregated usage data to generate B2B analytical reports for Fast-Moving Consumer Goods (FMCG)
        partners.
      </p>
      <p>
        <strong>The Anonymization Standard:</strong> Before any data is utilized for B2B analytics, it is stripped of all Personal
        Identifiable Information (PII). FMCG partners receive insights such as &quot;Regional waste trends for
        dairy products&quot; or &quot;Commonly ignored ingredient alerts,&quot; which are never linked back to an
        individual user or household.
      </p>
      <p>
        <strong>Purpose:</strong> These insights help manufacturers improve supply chain efficiency and product safety, ultimately
        reducing global household waste.
      </p>

      <h2>3. Data Sharing and Third Parties</h2>
      <p>
        <strong>3.1 Third-Party Service Providers</strong> We share data with service providers who perform functions on our behalf,
        such as cloud hosting and database management. These partners are contractually obligated to protect your
        data and are prohibited from using it for their own marketing purposes.
      </p>
      <p>
        <strong>3.2 Affiliate and Replenishment Links</strong> When you use the &quot;Smart Replenishment&quot; feature to purchase
        items via third-party marketplaces (e.g., Tokopedia, Shopee), you will be redirected to their platforms.
        Those entities have their own privacy policies, and <strong>Namalabs under PT Cipta Cita Indonesia</strong> is not
        responsible for their data handling practices.
      </p>
      <p>
        <strong>3.3 Legal Compliance</strong> We may disclose your information if required to do so by Indonesian law (such as UU
        ITE) or in response to valid requests by public authorities.
      </p>

      <h2>4. Cross-Border Data Transfer</h2>
      <p>
        <strong>4.1 International Infrastructure</strong> While Memoli is operated by <strong>Namalabs under PT Cipta Cita Indonesia</strong> and
        primarily targets the Indonesian market, our Service utilizes global cloud infrastructure (such as AWS or
        Google Cloud).
      </p>
      <p>
        <strong>4.2 Transfer Safeguards</strong> By using Memoli, you acknowledge and agree that your information may be
        transferred to, and processed in, countries other than Indonesia. We ensure that these transfers comply
        with the Indonesian Personal Data Protection Law (UU PDP) and utilize Standard Contractual Clauses (SCCs)
        or equivalent safeguards to ensure your data receives a level of protection comparable to that in your
        home jurisdiction.
      </p>

      <h2>5. Security and Data Sovereignty</h2>
      <p>
        <strong>5.1 On-Device Processing</strong> To maximize privacy, Memoli prioritizes on-device processing for initial image
        recognition. This means that many of your photos are analyzed directly on your iPhone and are not
        necessarily uploaded to our servers unless required for cloud-based AI synthesis or database
        synchronization.
      </p>
      <p>
        <strong>5.2 Security Measures</strong> We implement industry-standard administrative, technical, and physical security
        measures to protect your data from unauthorized access or disclosure. However, no method of transmission
        over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>6. Your Rights and Choices</h2>
      <p><strong>6.1 Access and Updates</strong> You can view and modify your household inventory and account details directly within the Memoli app settings.</p>
      <p>
        <strong>6.2 The &quot;Right to be Forgotten&quot;</strong> You may request the deletion of your account at any time. Upon
        deletion, <strong>Namalabs under PT Cipta Cita Indonesia</strong> will purge your PII from our active databases. Residual
        anonymized data used in B2B aggregate reports may remain, as it no longer constitutes &quot;personal
        data&quot; under applicable law.
      </p>
      <p>
        <strong>6.3 Communication Preferences</strong> You may opt out of receiving non-essential notifications (such as marketing
        tips or &quot;Memoli Moments&quot;) via your iOS system settings.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy to reflect changes in our roadmap (Scenario 1) or regulatory
        requirements. We will notify you of any material changes by posting the new policy within the app and
        updating the &quot;Effective Date&quot; at the top of this document.
      </p>

      <h2>8. Contact Information</h2>
      <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Office:</p>
      <p><strong>Namalabs under PT Cipta Cita Indonesia</strong></p>
      Email: <a href="mailto:hello@memoli.app" className="text-memoli-accent underline">hello@memoli.app</a>
      <p>
        Address:
        Apple Developer Institute for Professionals Autograph Tower – 51st Floor | Thamrin Nine Complex
        Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230
        {/* <a href="https://maps.app.goo.gl/t94Tfq5YnBD94VpQ9" className="text-normal">🔗</a> */}
      </p>
      <p className="text-[15px] italic">
        By continuing to use Memoli, you acknowledge that you have read and understood this Privacy Policy and
        agree to the processing of your data as outlined above.
      </p>
    </LegalArticle>
  );
}
