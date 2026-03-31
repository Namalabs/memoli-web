import LegalArticle from "@memoli/components/legal/LegalArticle";

const EFFECTIVE_DATE = "22 Desember 2025";

export default function TermsPage() {
  return (
    <LegalArticle title="Terms & Conditions" effectiveDate={EFFECTIVE_DATE}>
      <p>
        Welcome to Memoli. By accessing, downloading, or using the Memoli iOS application, website, and related
        services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service
        (&quot;Terms&quot;). These Terms constitute a legally binding agreement between you (&quot;User,&quot;
        &quot;you,&quot; or &quot;your&quot;) and Namalabs under PT Cipta Cita Indonesia (&quot;Memoli,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the exclusive intellectual property legal holder and
        operator of the Service.
      </p>
      <p>If you do not agree with any part of these Terms, you must immediately cease all use of the Service.</p>

      <h2>1. Description of Service</h2>
      <p>
        1.1 Memoli&apos;s Ecosystem and Functionality Memoli operates as a digital household management ecosystem
        designed to mitigate household waste and provide product safety insights. The Service’s core
        functionalities include AI-powered Optical Character Recognition (AI-OCR) for barcode and expiry date
        detection, digital pantry visualization, bulk item addition via retail receipt scanning (e.g., Alfamart,
        Indomaret, Superindo), and automated expiry-based wishlists.
      </p>
      <p>
        1.2 User Contributions Users interact with the Service by voluntarily scanning physical product labels,
        uploading receipts, and manually inputting household inventory data. You are solely responsible for
        ensuring the clarity and accuracy of the images and data you provide to the Service.
      </p>
      <p>
        1.3 Third-Party Integration The Service integrates with external databases, including the public e-BPOM
        database, to provide real-time product verification. We also integrate with third-party authentication
        services (Apple Sign-In) and e-commerce platforms for replenishment features. Namalabs under PT Cipta Cita
        Indonesia does not control these third-party systems and is not responsible for their operational uptime
        or data accuracy.
      </p>
      <p>
        1.4 Subscriptions (Freemium and Go Unlimited) Memoli operates on a Freemium Business Model. Basic features
        are provided free of charge. We offer premium subscription tiers, specifically &quot;Go Unlimited -
        Personal Plan&quot; and &quot;Go Unlimited - Family Plan&quot; (also referred to as the Safety Pro Family
        Pass), which unlock advanced capabilities such as multi-user family sharing and inventory synchronization,
        automated expiry alerts, and unlimited bulk receipt scanning.
      </p>
      <p>
        1.5 Billing and Renewals Premium subscriptions are billed automatically on a recurring basis (monthly or
        annually) through your designated Apple App Store account. Your subscription will automatically renew
        unless auto-renew is turned off at least 24 hours before the end of the current billing period. Namalabs
        under PT Cipta Cita Indonesia reserves the right to modify subscription pricing with reasonable prior
        notice provided within the app.
      </p>

      <h2>2. Eligibility and Account Registration</h2>
      <p>
        2.1 Minimum Age and Legal Capacity You must be at least 17 years of age, or the age of legal majority in
        your jurisdiction, to create an account and use the Service. By registering, you represent and warrant
        that you possess the legal capacity to enter into a binding contract with Namalabs under PT Cipta Cita
        Indonesia.
      </p>
      <p>
        2.2 Account Creation, Security, and Authentication To utilize the Service, you must register using a valid
        Apple ID. You are strictly responsible for maintaining the confidentiality of your authentication
        credentials. Namalabs under PT Cipta Cita Indonesia utilizes secure authentication protocols but cannot be
        held liable for unauthorized access resulting from your failure to secure your device or credentials.
      </p>
      <p>
        2.3 Responsibility for Activity You are entirely responsible for all activities, data entries, and
        household management decisions executed under your account. If you utilize the &quot;Go Unlimited - Family
        Plan&quot;, the primary account holder bears full responsibility for the compliance of all invited
        household members with these Terms.
      </p>

      <h2>3. Use of Information and Ownership</h2>
      <p>
        3.1 User-Provided Information You retain all ownership rights to the personal images (e.g., photos of your
        pantry or receipts) you upload. By providing this information, you grant Namalabs under PT Cipta Cita
        Indonesia a non-exclusive, royalty-free license to process, store, and analyze this data strictly to
        deliver the Service&apos;s core functionalities.
      </p>
      <p>
        3.2 Third-Party Information and Information Accuracy Memoli aggregates data from public regulatory
        registries and open-source product databases. While we strive for high accuracy, Namalabs under PT Cipta
        Cita Indonesia does not independently verify, nor do we guarantee, the completeness, currentness, or
        absolute accuracy of third-party ingredient or regulatory data.
      </p>
      <p>
        3.3 The &quot;Safety Net&quot; Limitation (CRITICAL) Memoli is intended to function as an organizational
        tool and a secondary safety net for household management; it is strictly not a medical device, nor a
        substitute for professional medical or dietary advice. You acknowledge that reliance on Memoli for
        detecting life-threatening allergens or preventing foodborne illness is strictly prohibited. You must
        independently verify product safety by inspecting physical packaging.
      </p>
      <p>
        3.4 Regulatory Compliance (BPOM/SNI/INCI) The Service may highlight product statuses based on public
        standards from the Indonesian Food and Drug Authority (BPOM), Indonesian National Standards (SNI), or
        International Nomenclature of Cosmetic Ingredients (INCI). A &quot;safe&quot; indicator within Memoli
        denotes only that the item aligns with specific queried databases at the time of scanning; it does not
        constitute a safety guarantee or an endorsement by Namalabs under PT Cipta Cita Indonesia.
      </p>

      <h2>4. Prohibited Conduct</h2>
      <p>4.1 Misuse of Service</p>
      <p>
        You agree not to engage in any activity that disrupts or manipulates the Service. Prohibited conduct
        includes, but is not limited to: uploading fraudulent barcodes or receipts to manipulate the database;
        attempting to reverse-engineer, decompile, or extract the source code of the Memoli application; utilizing
        automated scripts or bots to scrape data from the Service; and utilizing the app to organize or traffic
        illegal, uncertified, or illicit substances. Namalabs under PT Cipta Cita Indonesia reserves the right to
        investigate and pursue legal action against any violation of this clause.
      </p>

      <h2>5. Account Termination and Changes to Service</h2>
      <p>5.1 Account Termination</p>
      <p>
        You may terminate your account at any time via the in-app settings. Namalabs under PT Cipta Cita Indonesia
        reserves the right, at its sole discretion and without prior notice, to suspend, disable, or terminate
        your access to the Service if we determine that you have violated these Terms. Upon termination, your
        right to use the Service ceases immediately.
      </p>
      <p>5.2 Changes to Service</p>
      <p>
        We continuously evolve Memoli to improve user experience. We reserve the right to modify, suspend, or
        discontinue any feature or component of the Service (including altering AI-OCR capabilities or database
        access) at any time, with or without notice, without incurring liability to you.
      </p>

      <h2>6. Privacy and Data Handling</h2>
      <p>
        6.1 Data Sovereignty and B2B Analytics Your privacy is foundational to our operations. Namalabs under PT
        Cipta Cita Indonesia collects and processes your data in accordance with our Privacy Policy. We maintain
        data sovereignty by ensuring personal identifiers are protected. Furthermore, you consent that we may
        aggregate and entirely anonymize your usage data (such as product expiry trends and waste patterns) to
        generate B2B Safety Insights and Data Sales for fast-moving consumer goods (FMCG) partners. This
        aggregated data cannot be traced back to your individual household.
      </p>
      <p>
        6.2 Cross-Border Data Transfer While our primary operations and target markets reside within Indonesia,
        our cloud infrastructure providers may route or store data on servers located outside of your resident
        jurisdiction. By utilizing the Service, you explicitly consent to the cross-border transfer, processing,
        and storage of your information in accordance with international data protection standards applied by our
        enterprise cloud partners.
      </p>

      <h2>7. Use of AI and Automated Processing</h2>
      <p>
        7.1 AI and Automated Processing Disclosure Memoli heavily relies on automated processing technologies,
        including Artificial Intelligence (AI) and Large Language Models (LLMs), to perform Optical Character
        Recognition (OCR), parse bulk receipt data, and generate contextual ingredient safety insights. You
        explicitly acknowledge that machine-generated outputs are probabilistic by nature and may occasionally
        produce hallucinations, misread expiration dates, or incorrectly categorize ingredients. Namalabs under PT
        Cipta Cita Indonesia disclaims any liability for errors generated by our automated systems. You remain
        solely responsible for manually verifying critical safety dates and ingredient lists.
      </p>

      <h2>8. Intellectual Property Rights</h2>
      <p>
        8.1 Our Rights All intellectual property rights, including but not limited to copyrights, patents,
        database rights, and source code associated with the Memoli application, are the exclusive legal property
        of Namalabs under PT Cipta Cita Indonesia. No rights or licenses are granted to you except the limited,
        revocable right to use the Service in accordance with these Terms. 8.2 Your Information and Content You
        retain full ownership of the raw data and images you input into the Service. 8.3 Trademarks
        &quot;Memoli,&quot; &quot;Lascan,&quot; and all associated logos, branding, and service marks are registered
        or unregistered trademarks of Namalabs under PT Cipta Cita Indonesia. You may not utilize these trademarks
        without our prior written consent.
      </p>

      <h2>9. Third-Party Services &amp; Links</h2>
      <p>
        9.1 Third-Party Services and Information The Service incorporates links to external domains, regulatory
        bodies, and third-party APIs. Your interaction with these third-party systems is governed by their
        respective terms of service.
      </p>
      <p>
        9.2 Smart Replenishment and Affiliate Disclosure Memoli features a &quot;Smart Replenishment System&quot;
        that provides low-stock alerts accompanied by direct checkout links to third-party marketplaces (e.g.,
        Tokopedia, Shopee, Alfagift). You acknowledge that these are affiliate links. Namalabs under PT Cipta Cita
        Indonesia may earn an affiliate commission if you finalize a purchase through these links.
      </p>
      <p>
        9.3 No Endorsement The presence of affiliate links or safe alternatives within the app does not constitute
        a formal endorsement of the third-party merchant, product quality, or delivery fulfillment by Namalabs
        under PT Cipta Cita Indonesia. Any transaction you initiate is strictly between you and the respective
        third-party merchant.
      </p>

      <h2>10. Disclaimers and Limitation of Liability</h2>
      <p>
        10.1 No Warranty The Service is provided strictly on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
        basis. Namalabs under PT Cipta Cita Indonesia explicitly disclaims all warranties, whether express,
        implied, or statutory, including but not limited to warranties of merchantability, fitness for a
        particular purpose, and non-infringement.
      </p>
      <p>
        10.2 Limitation of Liability To the maximum extent permitted by applicable law, in no event shall Namalabs
        under PT Cipta Cita Indonesia, its founders, directors, or employees be liable for any indirect,
        incidental, consequential, special, or punitive damages, including but not limited to physical harm,
        allergic reactions, financial loss due to expired goods, or data breaches, arising out of your use or
        inability to use the Service.
      </p>
      <p>
        10.3 User Assumption of Risk You assume all risks associated with consuming or utilizing products tracked
        within the Memoli app. You acknowledge that relying on digitized expiry dates rather than inspecting
        physical products carries inherent risks, which you fully accept.
      </p>
      <p>
        10.4 Beta Testing Liability Certain features, particularly early-stage AI implementations or Closed Beta
        launches, are experimental. By participating in beta testing, you acknowledge that the Service may
        contain significant bugs or flaws, and Namalabs under PT Cipta Cita Indonesia shall bear zero liability
        for any data loss or inaccurate safety tracking during these phases.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Namalabs under PT Cipta Cita Indonesia, its affiliates,
        and their respective officers, and employees from any claims, liabilities, damages, judgments, awards,
        losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or relating to your
        violation of these Terms, your misuse of the Service, or your gross negligence regarding household safety
        and ingredient consumption.
      </p>

      <h2>12. Governing Law and Dispute Resolution</h2>
      <p>12.1 Governing Law</p>
      <p>
        These Terms, and any dispute arising from your use of the Service, shall be governed by and construed in
        accordance with the laws of the Republic of Indonesia, without regard to its conflict of law provisions.
      </p>
      <p>12.2 Dispute Resolution</p>
      <p>
        Any disputes must first be attempted to be resolved through amicable, good-faith negotiation. If
        unresolved within sixty (60) days, the dispute shall be submitted to the exclusive jurisdiction of the
        competent district courts within Indonesia where Namalabs under PT Cipta Cita Indonesia is legally
        registered.
      </p>
      <p>12.3 Force Majeure</p>
      <p>
        Namalabs under PT Cipta Cita Indonesia shall not be liable for any failure or delay in performance under
        these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God,
        natural disasters, internet service provider failures, server outages, government mandates, or civil
        unrest.
      </p>

      <h2>13. Apple/Google Third-Party Beneficiary Clause</h2>
      <p>If you download the Service from the Apple App Store, you acknowledge and agree that Apple, and Apple's subsidiaries, are third-party beneficiaries of these Terms.</p>
      <p>Upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary. Apple holds no responsibility for the Service, its content, or any claims relating to your use of the Service, including product liability or consumer protection claims.</p>

      <h2>14. Entire Agreement; Severability</h2>
      <p>These Terms, our Privacy Policy, and any other legal notices published by Namalabs under PT Cipta Cita Indonesia within the app constitute the entire agreement between you and us concerning the Service. If any provision of these Terms is deemed invalid or unenforceable by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions, which shall remain in full force and effect.</p>

      <h2>15. Changes to Terms</h2>
      <p>Namalabs under PT Cipta Cita Indonesia reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 15 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
    </LegalArticle>
  );
}
