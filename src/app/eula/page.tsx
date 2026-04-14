import LegalArticle from "@memoli/components/legal/LegalArticle";

const EFFECTIVE_DATE = "22 Desember 2025";

export default function EULAPage() {
  return (
    <LegalArticle title="End User License Agreement (EULA)" effectiveDate={EFFECTIVE_DATE}>
      <p>
        This <strong>Licensed Application End User License Agreement (&quot;EULA&quot;)</strong> is a legal agreement
        between you and <strong>Namalabs under PT Cipta Cita Indonesia</strong>.
      </p>
      <p>
        Apps made available through the App Store are licensed, not sold, to you. Your license to
        Memoli (the &quot;Licensed Application&quot;) is subject to your prior acceptance of this EULA. Your
        license to the Licensed Application under this EULA is granted by <strong>Namalabs under PT Cipta
        Cita Indonesia</strong> (&quot;Application Provider&quot;). The Application Provider reserves all rights in and
        to the Licensed Application not expressly granted to you under this EULA.
      </p>

      <h2>A. Scope of License</h2>
      <p>
        Application Provider grants to you a nontransferable license to use the Licensed Application
        on any Apple-branded products that you own or control and as permitted by the Usage Rules.
        The terms of this EULA will govern any content, materials, or services accessible from (such
        as the ingredient safety database and expiry tracking system) or purchased within (such as
        the &quot;Go Unlimited - Personal&quot; or &quot;Family Plan&quot; subscriptions) the Licensed Application.
      </p>
      <p>
        You may not distribute or make the Licensed Application available over a network where it
        could be used by multiple devices at the same time, except as permitted under the &quot;Safety
        Pro Family Pass&quot; synchronization features. You may not transfer, redistribute, or sublicense
        the Licensed Application. You may not copy, reverse-engineer, disassemble, attempt to derive
        the source code of, modify, or create derivative works of the Licensed Application,
        particularly its proprietary AI-OCR (VisionKit) implementation and safety scoring algorithms,
        which remain the exclusive property of <strong>Namalabs under PT Cipta Cita Indonesia</strong>.
      </p>

      <h2>B. Consent to Use of Data</h2>
      <p>
        You agree that Application Provider may collect and use technical data and related
        information—including but not limited to technical information about your device, system and
        application software, and peripherals—to facilitate software updates and product support.
      </p>
      <p>
        Furthermore, in accordance with our Privacy Policy, you agree that <strong>Namalabs under PT Cipta
        Cita Indonesia</strong> may collect and process inventory data, receipt images, and usage patterns.
        You explicitly consent to the use of aggregated and anonymized data (e.g., household waste
        trends and product expiry frequency) for B2B Data Analytics and Market Insights provided to
        third-party FMCG partners. You also acknowledge that your data may be subject to <strong>Cross-Border Data Transfer</strong> to secure international cloud infrastructure (e.g., AWS/Google
        Cloud) to facilitate the Service&apos;s global functionality.
      </p>

      <h2>C. Termination</h2>
      <p>
        This EULA is effective until terminated by you or the Application Provider. Your rights under
        this EULA will terminate automatically if you fail to comply with any of its terms, including
        the misuse of the Service or violation of prohibited conduct as outlined in the Terms of
        Service. Upon termination, you must cease all use of the Licensed Application and destroy all
        copies, full or partial, of the Licensed Application.
      </p>

      <h2>D. External Services</h2>
      <p>
        The Licensed Application enables access to Application Provider&apos;s and/or third-party services
        and websites, including but not limited to Mistral AI, the BPOM/e-BPOM registry, and
        e-commerce platforms like Tokopedia and Shopee via the &quot;Smart Replenishment&quot; feature
        (collectively, &quot;External Services&quot;).
      </p>
      <p>
        <strong>No Warranty for External Content:</strong> Application Provider is not responsible for examining or
        evaluating the content, accuracy, or regulatory status of products provided by third-party
        External Services.
      </p>
      <p>
        <strong>Informational Purposes Only:</strong> Safety ratings (BPOM/SNI/INCI) and AI-generated summaries
        provided by External Services are for general informational purposes only and are not
        guaranteed.
      </p>
      <p>
        <strong>Affiliate Disclosure:</strong> You acknowledge that certain External Services are accessed via
        affiliate links, and Application Provider may receive a commission on purchases made therein.
      </p>

      <h2>E. No Warranty (Critical Safety Limitation)</h2>
      <p>
        YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED APPLICATION IS AT YOUR SOLE
        RISK. MEMOLI IS A SECONDARY &quot;SAFETY NET&quot; AND NOT A MEDICAL DEVICE. TO THE MAXIMUM EXTENT
        PERMITTED BY APPLICABLE LAW, THE LICENSED APPLICATION IS PROVIDED &quot;AS IS&quot; AND &quot;AS
        AVAILABLE.&quot; <strong>NAMALABS UNDER PT CIPTA CITA INDONESIA</strong> HEREBY DISCLAIMS ALL WARRANTIES
        REGARDING THE ACCURACY OF AI-GENERATED EXPIRY DETECTION OR INGREDIENT SAFETY ANALYSIS. NO
        ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLICATION PROVIDER SHALL CREATE A WARRANTY.
        SHOULD THE LICENSED APPLICATION PROVE DEFECTIVE (E.G., MISIDENTIFYING A HAZARDOUS INGREDIENT
        OR AN EXPIRATION DATE), YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING OR CORRECTION. <strong>RELIANCE ON THE LICENSED APPLICATION FOR THE DETECTION OF LIFE-THREATENING ALLERGENS IS
        STRICTLY PROHIBITED</strong>.
      </p>

      <h2>F. Limitation of Liability</h2>
      <p>
        TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL <strong>NAMALABS UNDER PT CIPTA CITA
        INDONESIA</strong> BE LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR
        CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR HEALTH
        COMPLICATIONS, ALLERGIC REACTIONS, OR FINANCIAL LOSSES ARISING OUT OF THE USE OF OR
        INABILITY TO USE THE LICENSED APPLICATION.
      </p>
      <p>
        In no event shall Application Provider&apos;s total liability to you for all damages exceed the
        amount of your most recent subscription payment or one hundred thousand Indonesian Rupiah
        (IDR 100,000.00), whichever is greater.
      </p>

      <h2>G. Beta Testing and Experimental Features</h2>
      <p>
        You acknowledge that certain features within the Licensed Application may be designated as
        &quot;Beta&quot; or &quot;Experimental.&quot; These features are provided for testing purposes and carry a higher
        risk of data inaccuracy or service interruption. Application Provider bears zero liability
        for any reliance placed on such experimental features.
      </p>

      <h2>H. Export Compliance</h2>
      <p>
        You may not use or otherwise export or re-export the Licensed Application except as
        authorized by United States law and the laws of the Republic of Indonesia. You represent and
        warrant that you are not located in a country that is subject to a U.S. Government embargo
        or that has been designated as a &quot;terrorist supporting&quot; country.
      </p>

      <h2>I. Intellectual Property Holder</h2>
      <p>
        The Licensed Application and all related documentation are the sole property of{" "}
        <strong>Namalabs under PT Cipta Cita Indonesia</strong>. Your use of the app grants you no ownership
        rights. &quot;Memoli&quot; and its associated logos are trademarks of{" "}
        <strong>Namalabs under PT Cipta Cita Indonesia</strong>.
      </p>

      <h2>J. Governing Law and Jurisdiction</h2>
      <p>
        This EULA and the relationship between you and <strong>Namalabs under PT Cipta Cita Indonesia</strong>{" "}
        shall be governed by the laws of the <strong>Republic of Indonesia</strong>, excluding its conflicts of law
        provisions. You agree to submit to the personal and exclusive jurisdiction of the competent
        courts located within the territory where <strong>PT Cipta Cita Indonesia</strong> is legally registered to
        resolve any dispute or claim arising from this Agreement.
      </p>

      <h2>K. Force Majeure</h2>
      <p>
        Application Provider shall not be held liable for any failure to perform its obligations
        under this EULA where such failure results from any cause beyond Application Provider&apos;s
        reasonable control, including, without limitation, mechanical, electronic, or communications
        failure or degradation.
      </p>

      <h2>L. Contact Information</h2>
      <p>If you have questions or concerns about this Licensed Application End User License Agreement, please contact our Data Protection Office:</p>
      <p><strong>Namalabs under PT Cipta Cita Indonesia</strong></p>
      Email: <a href="mailto:hello@memoli.app" className="text-memoli-accent underline">hello@memoli.app</a>
      <p>
        Address: Apple Developer Institute for Professionals Autograph Tower – 51st Floor |
        Thamrin Nine Complex Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230
      </p>
    </LegalArticle>
  );
}