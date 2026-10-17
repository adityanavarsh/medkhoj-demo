
import { useMemo, useState } from "react";
import "./App.css";

const medicines = [
  {
    id: 1,
    name: "Paracetamol 500 mg",
    nameHi: "पैरासिटामोल 500 मि.ग्रा.",
    category: "pain",
    price: "₹20",
    aliases:
      "paracetamol paracetemol acetaminophen पैरासिटामोल पेरासिटामोल पारासिटामोल परासिटामोल बुखार दर्द ताप",
    description: "A sample catalogue entry for a medicine commonly associated with pain and fever.",
    descriptionHi: "दर्द और बुखार से संबंधित जानकारी के लिए एक उदाहरण वाली दवा की लिस्टिंग।",
    use: "Pain and fever information",
    useHi: "दर्द और बुखार से संबंधित जानकारी",
    note: "Use only as directed by a qualified healthcare professional. Check the label and avoid duplicate paracetamol-containing products.",
    noteHi: "केवल योग्य स्वास्थ्य विशेषज्ञ के निर्देशानुसार उपयोग करें। लेबल जाँचें और एक से अधिक पैरासिटामोल वाली दवाएँ साथ लेने से बचें।",
    icon: "✚",
    tone: "mint",
  },
  {
    id: 2,
    name: "Vitamin C Tablets",
    nameHi: "विटामिन C टैबलेट",
    category: "vitamins",
    price: "₹85",
    aliases: "vitamin c विटामिन सी विटामिन सप्लीमेंट supplement vitamins",
    description: "A sample catalogue entry for a vitamin supplement.",
    descriptionHi: "विटामिन सप्लीमेंट की एक उदाहरण वाली लिस्टिंग।",
    use: "Vitamin supplement information",
    useHi: "विटामिन सप्लीमेंट से संबंधित जानकारी",
    note: "Supplements are not a substitute for a balanced diet or professional medical advice.",
    noteHi: "सप्लीमेंट संतुलित आहार या चिकित्सकीय सलाह का विकल्प नहीं हैं।",
    icon: "✿",
    tone: "peach",
  },
  {
    id: 3,
    name: "ORS Sachets",
    nameHi: "ORS सैशे",
    category: "hydration",
    price: "₹22",
    aliases: "ors ओआरएस ओ आर एस oral rehydration salts hydration हाइड्रेशन dehydration निर्जलीकरण पानी की कमी",
    description: "A sample catalogue entry for oral rehydration salts.",
    descriptionHi: "ओरल रिहाइड्रेशन सॉल्ट (ORS) की एक उदाहरण वाली लिस्टिंग।",
    use: "Rehydration information",
    useHi: "शरीर में पानी और लवण की कमी से संबंधित जानकारी",
    note: "Prepare exactly as instructed on the product pack. Seek medical care for severe dehydration or concerning symptoms.",
    noteHi: "पैकेट पर दिए निर्देशों के अनुसार ही घोल तैयार करें। गंभीर निर्जलीकरण या चिंताजनक लक्षण होने पर चिकित्सकीय सहायता लें।",
    icon: "＋",
    tone: "blue",
  },
  {
    id: 4,
    name: "Cetirizine 10 mg",
    nameHi: "सेटिरिज़िन 10 मि.ग्रा.",
    category: "allergy",
    price: "₹18",
    aliases: "cetirizine सेटिरिज़िन सेटिरीज़िन allergy एलर्जी antihistamine छींक खुजली",
    description: "A sample catalogue entry for an antihistamine medicine.",
    descriptionHi: "एंटीहिस्टामिन दवा की एक उदाहरण वाली लिस्टिंग।",
    use: "Allergy symptom information",
    useHi: "एलर्जी के लक्षणों से संबंधित जानकारी",
    note: "May cause drowsiness. Check suitability, precautions and dosage with a qualified healthcare professional.",
    noteHi: "इससे नींद आ सकती है। उपयुक्तता, सावधानियों और खुराक के लिए योग्य स्वास्थ्य विशेषज्ञ से सलाह लें।",
    icon: "❋",
    tone: "lilac",
  },
];

const pharmacies = [
  {
    id: 1,
    name: "Demo Pharmacy One",
    nameHi: "डेमो फार्मेसी एक",
    city: "Lucknow",
    cityHi: "लखनऊ",
    pincode: "226001",
    address: "Sample address — not a real store",
    addressHi: "उदाहरण वाला पता — यह वास्तविक दुकान नहीं है",
  },
  {
    id: 2,
    name: "Demo Pharmacy Two",
    nameHi: "डेमो फार्मेसी दो",
    city: "Farrukhabad",
    cityHi: "फर्रुखाबाद",
    pincode: "209625",
    address: "Sample address — not a real store",
    addressHi: "उदाहरण वाला पता — यह वास्तविक दुकान नहीं है",
  },
  {
    id: 3,
    name: "Demo Pharmacy Three",
    nameHi: "डेमो फार्मेसी तीन",
    city: "Kanpur",
    cityHi: "कानपुर",
    pincode: "208001",
    address: "Sample address — not a real store",
    addressHi: "उदाहरण वाला पता — यह वास्तविक दुकान नहीं है",
  },
];

const copy = {
  en: {
    navMedicines: "Medicines",
    navPharmacy: "Find Pharmacy",
    navHow: "How It Works",
    explore: "Explore Demo",
    eyebrow: "YOUR LOCAL MEDICINE DISCOVERY PLATFORM",
    heroLine1: "Find your medicine.",
    heroLine2: "With more confidence.",
    heroText: "Explore medicine information and discover how a local pharmacy finder could work. This is an interactive sample demo.",
    searchPlaceholder: "Search medicine name or use...",
    search: "Search",
    trust: "Interactive demo · No account required",
    benefit1: "Easy discovery",
    benefit1Text: "Search in Hindi or English",
    benefit2: "Pharmacy focused",
    benefit2Text: "Explore sample store listings",
    benefit3: "Clear information",
    benefit3Text: "Demo data is labelled",
    demo: "EXPLORE THE DEMO",
    catalogTitle: "Medicine discovery",
    catalogText: "Search and open any sample medicine for more information.",
    results: "results",
    demoTag: "DEMO",
    illustrative: "Illustrative price",
    details: "View details ↗",
    noMedicine: "No matching demo listings. Try another medicine name.",
    catalogueDisclaimer: "Demo catalogue only. Prices and listings are illustrative. This is not a prescription or a medical diagnosis.",
    local: "LOCAL DISCOVERY · DEMO",
    pharmacyTitle: "Find a pharmacy",
    pharmacyText: "Enter a city or PIN code to explore example pharmacy cards. These are not verified shops.",
    pharmacyPlaceholder: "Try Lucknow or 226001",
    clear: "Clear",
    listings: "Example pharmacy listings",
    pharmacyDetails: "View pharmacy details ↗",
    noPharmacy: "No sample listing matches that search. Try Lucknow, Farrukhabad, Kanpur or a sample PIN code.",
    pharmacyDisclaimer: "Pharmacy names, addresses and PIN-code associations are sample data only. No live stock, location or licence has been verified. Do not rely on this demo to locate or purchase medicine.",
    howEyebrow: "SIMPLE BY DESIGN",
    howTitle: "Your search, made simpler.",
    step1: "Search",
    step1Text: "Enter the name of a medicine you are looking for.",
    step2: "Explore",
    step2Text: "Open sample medicine and pharmacy details.",
    step3: "Confirm",
    step3Text: "In a future live service, confirm stock and prescription requirements directly with a licensed pharmacy.",
    footer: "Interactive demo · Sample data only",
    medDetail: "MEDICINE DETAILS · DEMO",
    illustrativeOnly: "Illustrative price only",
    infoCategory: "Information category",
    safety: "Important safety note",
    close: "Close details",
    pharmacyDetail: "PHARMACY DETAILS · DEMO",
    sampleCity: "Sample city",
    samplePin: "Sample PIN code",
    address: "Address",
    fakePharmacy: "Demo only — not a real pharmacy",
    fakePharmacyText: "No real store, licence, stock, price, contact number or order service is connected to this listing.",
    language: "हिन्दी",
    languageLabel: "Language",
    categories: {
      pain: "Pain & Fever",
      vitamins: "Vitamins & Supplements",
      hydration: "Hydration & Wellness",
      allergy: "Allergy Care",
    },
  },
  hi: {
    navMedicines: "दवाइयाँ",
    navPharmacy: "फार्मेसी खोजें",
    navHow: "कैसे काम करता है",
    explore: "डेमो देखें",
    eyebrow: "आपका मेडिसिन डिस्कवरी प्लेटफॉर्म",
    heroLine1: "अपनी दवा खोजें।",
    heroLine2: "और अधिक भरोसे के साथ।",
    heroText: "दवाइयों की जानकारी देखें और समझें कि स्थानीय फार्मेसी खोजने की सुविधा कैसे काम कर सकती है। यह एक इंटरैक्टिव डेमो है।",
    searchPlaceholder: "दवा का नाम या संबंधित शब्द खोजें...",
    search: "खोजें",
    trust: "इंटरैक्टिव डेमो · अकाउंट की जरूरत नहीं",
    benefit1: "आसान खोज",
    benefit1Text: "हिन्दी या English में खोजें",
    benefit2: "फार्मेसी की जानकारी",
    benefit2Text: "उदाहरण वाली दुकानें देखें",
    benefit3: "स्पष्ट जानकारी",
    benefit3Text: "डेमो डेटा की पहचान स्पष्ट",
    demo: "डेमो देखें",
    catalogTitle: "दवाइयों की खोज",
    catalogText: "उदाहरण वाली दवाइयाँ खोजें और अधिक जानकारी खोलें।",
    results: "परिणाम",
    demoTag: "डेमो",
    illustrative: "केवल उदाहरण का मूल्य",
    details: "जानकारी देखें ↗",
    noMedicine: "इस नाम की कोई डेमो दवा नहीं मिली। दूसरा नाम खोजें।",
    catalogueDisclaimer: "यह केवल डेमो कैटलॉग है। कीमतें और लिस्टिंग उदाहरण के लिए हैं। यह प्रिस्क्रिप्शन या मेडिकल डायग्नोसिस नहीं है।",
    local: "स्थानीय खोज · डेमो",
    pharmacyTitle: "फार्मेसी खोजें",
    pharmacyText: "उदाहरण वाली फार्मेसी देखने के लिए शहर या PIN कोड डालें। ये सत्यापित दुकानें नहीं हैं।",
    pharmacyPlaceholder: "Lucknow या 226001 लिखें",
    clear: "हटाएँ",
    listings: "उदाहरण वाली फार्मेसी",
    pharmacyDetails: "फार्मेसी विवरण देखें ↗",
    noPharmacy: "कोई उदाहरण नहीं मिला। Lucknow, Farrukhabad, Kanpur या PIN कोड आज़माएँ।",
    pharmacyDisclaimer: "फार्मेसी के नाम, पते और PIN कोड केवल डेमो डेटा हैं। लाइव स्टॉक, स्थान या लाइसेंस सत्यापित नहीं हैं। दवा खरीदने या दुकान खोजने के लिए इस डेमो पर निर्भर न रहें।",
    howEyebrow: "सरल और आसान",
    howTitle: "आपकी खोज, अब और आसान।",
    step1: "खोजें",
    step1Text: "जिस दवा की जानकारी चाहिए उसका नाम लिखें।",
    step2: "जानकारी देखें",
    step2Text: "उदाहरण वाली दवा और फार्मेसी का विवरण खोलें।",
    step3: "पुष्टि करें",
    step3Text: "भविष्य की लाइव सेवा में स्टॉक और प्रिस्क्रिप्शन की जरूरत लाइसेंस प्राप्त फार्मेसी से पुष्टि करें।",
    footer: "इंटरैक्टिव डेमो · केवल उदाहरण डेटा",
    medDetail: "दवा का विवरण · डेमो",
    illustrativeOnly: "केवल उदाहरण की कीमत",
    infoCategory: "जानकारी की श्रेणी",
    safety: "जरूरी सुरक्षा सूचना",
    close: "विवरण बंद करें",
    pharmacyDetail: "फार्मेसी विवरण · डेमो",
    sampleCity: "उदाहरण वाला शहर",
    samplePin: "उदाहरण PIN कोड",
    address: "पता",
    fakePharmacy: "केवल डेमो — असली फार्मेसी नहीं",
    fakePharmacyText: "इस लिस्टिंग में कोई वास्तविक दुकान, लाइसेंस, स्टॉक, कीमत, संपर्क नंबर या ऑर्डर सेवा जुड़ी नहीं है।",
    language: "English",
    languageLabel: "भाषा",
    categories: {
      pain: "दर्द और बुखार",
      vitamins: "विटामिन और सप्लीमेंट",
      hydration: "हाइड्रेशन और वेलनेस",
      allergy: "एलर्जी की देखभाल",
    },
  },
};

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[़॒॑]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function App() {
  const [language, setLanguage] = useState("en");
  const [search, setSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const t = copy[language];

  const filteredMedicines = useMemo(() => {
    const term = normalizeSearchText(search);
    if (!term) return medicines;

    return medicines.filter((medicine) => {
      const searchableText = normalizeSearchText([
        medicine.name,
        medicine.nameHi,
        medicine.category,
        t.categories[medicine.category],
        medicine.aliases,
        medicine.description,
        medicine.descriptionHi,
        medicine.use,
        medicine.useHi,
        medicine.note,
        medicine.noteHi,
      ].join(" "));

      return searchableText.includes(term);
    });
  }, [search, t]);

  const filteredPharmacies = useMemo(() => {
    const term = normalizeSearchText(locationSearch);
    if (!term) return pharmacies;

    return pharmacies.filter((pharmacy) =>
      normalizeSearchText([
        pharmacy.name,
        pharmacy.nameHi,
        pharmacy.city,
        pharmacy.cityHi,
        pharmacy.pincode,
        pharmacy.address,
        pharmacy.addressHi,
      ].join(" ")).includes(term)
    );
  }, [locationSearch]);

  const medicineDisplayName = (medicine) =>
    language === "hi" ? medicine.nameHi : medicine.name;

  const pharmacyDisplayName = (pharmacy) =>
    language === "hi" ? pharmacy.nameHi : pharmacy.name;

  const pharmacyDisplayCity = (pharmacy) =>
    language === "hi" ? pharmacy.cityHi : pharmacy.city;

  const pharmacyDisplayAddress = (pharmacy) =>
    language === "hi" ? pharmacy.addressHi : pharmacy.address;

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="MedKhoj home">
          <span className="brand-icon">M+</span>
          <span className="brand-word">
            Med<span className="brand-accent">Khoj</span>
            <small>MEDICINE DISCOVERY</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#search">{t.navMedicines}</a>
          <a href="#pharmacy-finder">{t.navPharmacy}</a>
          <a href="#how">{t.navHow}</a>
        </nav>

        <div className="nav-actions">
          <button
            className="language-button"
            onClick={() => setLanguage((current) => current === "en" ? "hi" : "en")}
            aria-label={`${t.languageLabel}: ${t.language}`}
            title={t.languageLabel}
          >
            <span aria-hidden="true">文</span> {t.language}
          </button>
          <button className="outline-button" onClick={() => scrollTo("search")}>
            {t.explore}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="live-dot" />
              {t.eyebrow}
            </span>
            <h1>
              {t.heroLine1}
              <br />
              <span>{t.heroLine2}</span>
            </h1>
            <p>{t.heroText}</p>

            <form
              className="hero-search"
              id="search"
              onSubmit={(event) => {
                event.preventDefault();
                scrollTo("results");
              }}
            >
              <span className="search-icon" aria-hidden="true">⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchPlaceholder}
              />
              <button type="submit">{t.search} <span aria-hidden="true">→</span></button>
            </form>

            <div className="trust-line">
              <span aria-hidden="true">✓</span> {t.trust}
            </div>
          </div>

          <div className="hero-art" aria-label="MedKhoj medicine illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="medicine-box">
              <div className="box-top">HEALTH &amp; WELLNESS</div>
              <div className="box-cross">+</div>
              <div className="box-name">MED<span>KHOJ</span></div>
              <div className="box-caption">YOUR HEALTH JOURNEY</div>
            </div>
            <div className="floating-pill pill-one" />
            <div className="floating-pill pill-two" />
            <div className="floating-card">
              <span aria-hidden="true">⌕</span>
              <div>
                <b>{t.navMedicines}</b>
                <small>{t.catalogText}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits" aria-label="Features">
          <div>
            <span className="benefit-icon" aria-hidden="true">⌕</span>
            <span><b>{t.benefit1}</b><small>{t.benefit1Text}</small></span>
          </div>
          <div>
            <span className="benefit-icon" aria-hidden="true">＋</span>
            <span><b>{t.benefit2}</b><small>{t.benefit2Text}</small></span>
          </div>
          <div>
            <span className="benefit-icon" aria-hidden="true">✓</span>
            <span><b>{t.benefit3}</b><small>{t.benefit3Text}</small></span>
          </div>
        </section>

        <section className="catalog" id="results">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{t.demo}</span>
              <h2>{t.catalogTitle}</h2>
              <p>{t.catalogText}</p>
            </div>
            <span className="result-count">{filteredMedicines.length} {t.results}</span>
          </div>

          <div className="medicine-grid">
            {filteredMedicines.map((medicine) => (
              <article className="medicine-card" key={medicine.id}>
                <div className={`medicine-visual ${medicine.tone}`}>
                  <span className="product-symbol" aria-hidden="true">{medicine.icon}</span>
                  <span className="demo-tag">{t.demoTag}</span>
                </div>
                <div className="medicine-info">
                  <span className="medicine-category">{t.categories[medicine.category]}</span>
                  <h3>
                    {language === "hi"
                      ? (medicine.nameHi || "हिन्दी नाम उपलब्ध नहीं")
                      : medicine.name}
                  </h3>
                  <div className="price-row">
                    <strong>{medicine.price}</strong>
                    <span>{t.illustrative}</span>
                  </div>
                  <button className="card-button" onClick={() => setSelectedMedicine(medicine)}>
                    {t.details}
                  </button>
                </div>
              </article>
            ))}
            {filteredMedicines.length === 0 && <p className="empty-state">{t.noMedicine}</p>}
          </div>

          <p className="disclaimer">{t.catalogueDisclaimer}</p>
        </section>

        <section className="pharmacy-section" id="pharmacy-finder">
          <div className="pharmacy-heading">
            <span className="eyebrow">{t.local}</span>
            <h2>{t.pharmacyTitle}</h2>
            <p>{t.pharmacyText}</p>
          </div>

          <div className="pharmacy-search">
            <span aria-hidden="true">⌕</span>
            <input
              value={locationSearch}
              onChange={(event) => setLocationSearch(event.target.value)}
              placeholder={t.pharmacyPlaceholder}
              aria-label={t.pharmacyPlaceholder}
            />
            {locationSearch && (
              <button className="clear-search" onClick={() => setLocationSearch("")} type="button">
                {t.clear}
              </button>
            )}
          </div>

          <div className="pharmacy-results-heading">
            <h3>{t.listings}</h3>
            <span>{filteredPharmacies.length} {t.results}</span>
          </div>

          <div className="pharmacy-grid">
            {filteredPharmacies.map((pharmacy) => (
              <article className="pharmacy-card" key={pharmacy.id}>
                <div className="pharmacy-icon" aria-hidden="true">＋</div>
                <span className="demo-tag">{t.demoTag}</span>
                <h3>{pharmacyDisplayName(pharmacy)}</h3>
                <p className="pharmacy-city">{pharmacyDisplayCity(pharmacy)} · {pharmacy.pincode}</p>
                <p className="pharmacy-address">{pharmacyDisplayAddress(pharmacy)}</p>
                <span className="pharmacy-status">{t.demoTag} listing</span>
                <button className="card-button" onClick={() => setSelectedPharmacy(pharmacy)}>
                  {t.pharmacyDetails}
                </button>
              </article>
            ))}
            {filteredPharmacies.length === 0 && <p className="empty-state">{t.noPharmacy}</p>}
          </div>

          <p className="disclaimer">{t.pharmacyDisclaimer}</p>
        </section>

        <section className="how-section" id="how">
          <span className="eyebrow">{t.howEyebrow}</span>
          <h2>{t.howTitle}</h2>
          <div className="steps">
            <div><span>01</span><h3>{t.step1}</h3><p>{t.step1Text}</p></div>
            <div><span>02</span><h3>{t.step2}</h3><p>{t.step2Text}</p></div>
            <div><span>03</span><h3>{t.step3}</h3><p>{t.step3Text}</p></div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-icon">M+</span>
          <span className="brand-word">Med<span className="brand-accent">Khoj</span><small>MEDICINE DISCOVERY</small></span>
        </a>
        <span>{t.footer}</span>
      </footer>

      {selectedMedicine && (
        <div className="modal-backdrop" onClick={() => setSelectedMedicine(null)}>
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="medicine-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" aria-label={t.close} onClick={() => setSelectedMedicine(null)}>×</button>
            <span className="eyebrow">{t.medDetail}</span>
            <div className={`detail-symbol ${selectedMedicine.tone}`} aria-hidden="true">{selectedMedicine.icon}</div>
            <span className="medicine-category">{t.categories[selectedMedicine.category]}</span>
            <h2 id="medicine-detail-title">
              {language === "hi"
                ? (selectedMedicine.nameHi || "हिन्दी नाम उपलब्ध नहीं")
                : selectedMedicine.name}
            </h2>
            <div className="detail-price">{selectedMedicine.price}<small>{t.illustrativeOnly}</small></div>
            <p>{language === "hi" ? selectedMedicine.descriptionHi : selectedMedicine.description}</p>
            <div className="detail-info-row">
              <b>{t.infoCategory}</b>
              <span>{language === "hi" ? selectedMedicine.useHi : selectedMedicine.use}</span>
            </div>
            <div className="medical-notice">
              <b>{t.safety}</b>
              <p>{language === "hi" ? selectedMedicine.noteHi : selectedMedicine.note}</p>
            </div>
            <p className="disclaimer">{t.catalogueDisclaimer}</p>
            <button className="primary-modal-button" onClick={() => setSelectedMedicine(null)}>{t.close}</button>
          </section>
        </div>
      )}

      {selectedPharmacy && (
        <div className="modal-backdrop" onClick={() => setSelectedPharmacy(null)}>
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pharmacy-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" aria-label={t.close} onClick={() => setSelectedPharmacy(null)}>×</button>
            <span className="eyebrow">{t.pharmacyDetail}</span>
            <div className="detail-symbol mint" aria-hidden="true">＋</div>
            <h2 id="pharmacy-detail-title">{pharmacyDisplayName(selectedPharmacy)}</h2>
            <div className="detail-info-row"><b>{t.sampleCity}</b><span>{pharmacyDisplayCity(selectedPharmacy)}</span></div>
            <div className="detail-info-row"><b>{t.samplePin}</b><span>{selectedPharmacy.pincode}</span></div>
            <div className="detail-info-row"><b>{t.address}</b><span>{pharmacyDisplayAddress(selectedPharmacy)}</span></div>
            <div className="medical-notice"><b>{t.fakePharmacy}</b><p>{t.fakePharmacyText}</p></div>
            <button className="primary-modal-button" onClick={() => setSelectedPharmacy(null)}>{t.close}</button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
