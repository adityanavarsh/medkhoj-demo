
import { useState } from "react";
import "./App.css";

const medicines = [
  {
    id: 1,
    name: "Paracetamol 500 mg",
    category: "Pain & Fever",
    price: "₹20",
    description:
      "A sample catalogue entry for a medicine commonly used for pain and fever.",
    use: "Pain and fever information",
    note: "Use only as directed by a qualified healthcare professional. Check the label and avoid duplicate paracetamol-containing products.",
  },
  {
    id: 2,
    name: "Vitamin C Tablets",
    category: "Vitamins & Supplements",
    price: "₹85",
    description:
      "A sample catalogue entry for a vitamin supplement.",
    use: "Vitamin supplement information",
    note: "Supplements are not a substitute for a balanced diet or professional medical advice.",
  },
  {
    id: 3,
    name: "ORS Sachets",
    category: "Hydration & Wellness",
    price: "₹22",
    description:
      "A sample catalogue entry for oral rehydration salts.",
    use: "Rehydration information",
    note: "Prepare exactly as instructed on the product pack. Seek medical care for severe dehydration or concerning symptoms.",
  },
  {
    id: 4,
    name: "Cetirizine 10 mg",
    category: "Allergy Care",
    price: "₹18",
    description:
      "A sample catalogue entry for an antihistamine medicine.",
    use: "Allergy symptom information",
    note: "May cause drowsiness. Check suitability, precautions and dosage with a qualified healthcare professional.",
  },
];

const pharmacies = [
  {
    id: 1,
    name: "Demo Pharmacy One",
    city: "Lucknow",
    pincode: "226001",
    address: "Sample address — not a real store",
    status: "Demo listing",
  },
  {
    id: 2,
    name: "Demo Pharmacy Two",
    city: "Farrukhabad",
    pincode: "209625",
    address: "Sample address — not a real store",
    status: "Demo listing",
  },
  {
    id: 3,
    name: "Demo Pharmacy Three",
    city: "Kanpur",
    pincode: "208001",
    address: "Sample address — not a real store",
    status: "Demo listing",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const filteredMedicines = medicines.filter((medicine) =>
    `${medicine.name} ${medicine.category}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  const filteredPharmacies = pharmacies.filter((pharmacy) =>
    `${pharmacy.city} ${pharmacy.pincode} ${pharmacy.name}`
      .toLowerCase()
      .includes(locationSearch.toLowerCase().trim())
  );

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-icon">M+</span>
          <span>
            Med<span className="brand-accent">Khoj</span>
            <small>YOUR MEDICINE FINDER</small>
          </span>
        </a>

        <nav>
          <a href="#search">Medicines</a>
          <a href="#pharmacy-finder">Find Pharmacy</a>
          <a href="#how">How It Works</a>
        </nav>

        <button
          className="outline-button"
          onClick={() =>
            document.getElementById("search")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Explore Demo
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="live-dot" />
              YOUR LOCAL MEDICINE DISCOVERY PLATFORM
            </span>

            <h1>
              Find your medicine.
              <br />
              <span>With more confidence.</span>
            </h1>

            <p>
              Explore medicine information and discover how a local pharmacy
              finder could work. This is an interactive sample demo.
            </p>

            <div className="hero-search" id="search">
              <span className="search-icon">⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search medicine name..."
                aria-label="Search medicines"
              />
              <button
                onClick={() =>
                  document.getElementById("results")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Search
              </button>
            </div>

            <div className="trust-line">
              <span>✓</span>
              Interactive demo · No account required
            </div>
          </div>

          <div className="hero-art" aria-label="Medicine search illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="medicine-box">
              <div className="box-top">MEDICAL CARE</div>
              <div className="box-cross">+</div>
              <div className="box-name">
                MED<span>KHOJ</span>
              </div>
              <div className="box-caption">YOUR HEALTH JOURNEY</div>
            </div>
            <div className="floating-pill pill-one" />
            <div className="floating-pill pill-two" />
            <div className="floating-card">
              <span>⌕</span>
              <div>
                <b>Medicine Search</b>
                <small>Explore sample listings</small>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div>
            <span className="benefit-icon">⌕</span>
            <span>
              <b>Easy discovery</b>
              <small>Search by medicine name</small>
            </span>
          </div>
          <div>
            <span className="benefit-icon">＋</span>
            <span>
              <b>Pharmacy focused</b>
              <small>Explore sample store listings</small>
            </span>
          </div>
          <div>
            <span className="benefit-icon">↗</span>
            <span>
              <b>Clear information</b>
              <small>Demo data is labelled</small>
            </span>
          </div>
        </section>

        <section className="catalog" id="results">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE THE DEMO</span>
              <h2>Medicine discovery</h2>
              <p>Search and open any sample medicine for more information.</p>
            </div>
            <span className="result-count">
              {filteredMedicines.length} results
            </span>
          </div>

          <div className="medicine-grid">
            {filteredMedicines.map((medicine) => (
              <article className="medicine-card" key={medicine.id}>
                <div className="medicine-visual">
                  <span className="product-symbol">✚</span>
                  <span className="demo-tag">DEMO</span>
                </div>

                <div className="medicine-info">
                  <span className="medicine-category">
                    {medicine.category}
                  </span>
                  <h3>{medicine.name}</h3>

                  <div className="price-row">
                    <strong>{medicine.price}</strong>
                    <span>Illustrative price</span>
                  </div>

                  <button
                    className="card-button"
                    onClick={() => setSelectedMedicine(medicine)}
                  >
                    View details ↗
                  </button>
                </div>
              </article>
            ))}

            {filteredMedicines.length === 0 && (
              <p className="empty-state">
                No matching demo listings. Try another medicine name.
              </p>
            )}
          </div>

          <p className="disclaimer">
            Demo catalogue only. Prices, product descriptions and listings are
            illustrative. This is not a prescription or a medical diagnosis.
          </p>
        </section>

        <section className="pharmacy-section" id="pharmacy-finder">
          <div className="pharmacy-heading">
            <span className="eyebrow">LOCAL DISCOVERY · DEMO</span>
            <h2>Find a pharmacy</h2>
            <p>
              Enter a city or PIN code to explore example pharmacy cards.
              These are not verified shops.
            </p>
          </div>

          <div className="pharmacy-search">
            <span>⌕</span>
            <input
              value={locationSearch}
              onChange={(event) => setLocationSearch(event.target.value)}
              placeholder="Try Lucknow or 226001"
              aria-label="Search pharmacies by city or PIN code"
            />
            {locationSearch && (
              <button
                className="clear-search"
                onClick={() => setLocationSearch("")}
              >
                Clear
              </button>
            )}
          </div>

          <div className="pharmacy-results-heading">
            <h3>Example pharmacy listings</h3>
            <span>{filteredPharmacies.length} results</span>
          </div>

          <div className="pharmacy-grid">
            {filteredPharmacies.map((pharmacy) => (
              <article className="pharmacy-card" key={pharmacy.id}>
                <div className="pharmacy-icon">＋</div>
                <span className="demo-tag">DEMO</span>
                <h3>{pharmacy.name}</h3>
                <p className="pharmacy-city">
                  {pharmacy.city} · {pharmacy.pincode}
                </p>
                <p className="pharmacy-address">{pharmacy.address}</p>
                <span className="pharmacy-status">{pharmacy.status}</span>
                <button
                  className="card-button"
                  onClick={() => setSelectedPharmacy(pharmacy)}
                >
                  View pharmacy details ↗
                </button>
              </article>
            ))}

            {filteredPharmacies.length === 0 && (
              <p className="empty-state">
                No sample listing matches that search. Try Lucknow,
                Farrukhabad, Kanpur or a sample PIN code.
              </p>
            )}
          </div>

          <p className="disclaimer">
            Pharmacy names, addresses and PIN-code associations are sample
            interface data only. No live stock, location or licence has been
            verified. Do not rely on this demo to locate or purchase medicine.
          </p>
        </section>

        <section className="how-section" id="how">
          <span className="eyebrow">SIMPLE BY DESIGN</span>
          <h2>Your search, made simpler.</h2>
          <div className="steps">
            <div>
              <span>01</span>
              <h3>Search</h3>
              <p>Enter the name of a medicine you are looking for.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Explore</h3>
              <p>Open sample medicine and pharmacy details.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Confirm</h3>
              <p>
                In a future live service, confirm stock and prescription
                requirements directly with a licensed pharmacy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#">
          <span className="brand-icon">M+</span>
          <span>
            Med<span className="brand-accent">Khoj</span>
            <small>MEDICINE DISCOVERY</small>
          </span>
        </a>
        <span>Interactive demo · Sample data only</span>
      </footer>

      {selectedMedicine && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedMedicine(null)}
        >
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="medicine-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close medicine details"
              onClick={() => setSelectedMedicine(null)}
            >
              ×
            </button>

            <span className="eyebrow">MEDICINE DETAILS · DEMO</span>
            <div className="detail-symbol">✚</div>
            <span className="medicine-category">
              {selectedMedicine.category}
            </span>
            <h2 id="medicine-detail-title">{selectedMedicine.name}</h2>
            <div className="detail-price">
              {selectedMedicine.price}
              <small>Illustrative price only</small>
            </div>
            <p>{selectedMedicine.description}</p>

            <div className="detail-info-row">
              <b>Information category</b>
              <span>{selectedMedicine.use}</span>
            </div>

            <div className="medical-notice">
              <b>Important safety note</b>
              <p>{selectedMedicine.note}</p>
            </div>

            <p className="disclaimer">
              This sample does not verify the product, price, stock or
              suitability for an individual. Consult a qualified healthcare
              professional.
            </p>

            <button
              className="primary-modal-button"
              onClick={() => setSelectedMedicine(null)}
            >
              Close details
            </button>
          </section>
        </div>
      )}

      {selectedPharmacy && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedPharmacy(null)}
        >
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pharmacy-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close pharmacy details"
              onClick={() => setSelectedPharmacy(null)}
            >
              ×
            </button>

            <span className="eyebrow">PHARMACY DETAILS · DEMO</span>
            <div className="detail-symbol">＋</div>
            <h2 id="pharmacy-detail-title">{selectedPharmacy.name}</h2>

            <div className="detail-info-row">
              <b>Sample city</b>
              <span>{selectedPharmacy.city}</span>
            </div>
            <div className="detail-info-row">
              <b>Sample PIN code</b>
              <span>{selectedPharmacy.pincode}</span>
            </div>
            <div className="detail-info-row">
              <b>Address</b>
              <span>{selectedPharmacy.address}</span>
            </div>

            <div className="medical-notice">
              <b>Demo only — not a real pharmacy</b>
              <p>
                No real store, licence, stock, price, contact number or order
                service is connected to this listing.
              </p>
            </div>

            <button
              className="primary-modal-button"
              onClick={() => setSelectedPharmacy(null)}
            >
              Close details
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
