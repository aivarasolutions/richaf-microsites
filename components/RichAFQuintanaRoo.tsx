import React from 'react';

const BRAND = {
  name: "Rich AF Travel",
  site: "https://richaf.global",
  phone: "+1 202-288-3113",
  email: "bvmpz@richaf.global",
  instagram: "https://instagram.com/richaf.global",
  gold: "#D4AF37",
  ink: "#0E0E0E",
  paper: "#FAF8F5",
};

const formatUSD = (n: number) => `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

type Hotel = {
  id: string;
  name: string;
  adultsOnly: boolean;
  allInclusive: boolean;
  vibe?: string[];
  hero: string;
  thumbs?: string[];
  gallery?: string;
  room: string;
  total: number;
  rooms?: { name: string; total: number | null; notes?: string }[];
  notes?: string;
};

type LocationBlock = { location: string; hotels: Hotel[] };

const DATA: LocationBlock[] = [
  {
    location: "Cancún",
    hotels: [
      {
        id: "iberostar-selection-cancun",
        name: "Iberostar Selection Cancún",
        adultsOnly: false,
        allInclusive: true,
        vibe: ["Beachfront", "Resort"],
        hero: "https://www.iberostarcancunhotel.com/images/gallery/iberostar-selection-cancun-01.jpg",
        thumbs: [
          "/attached_assets/stock_images/luxury_resort_pool_c_57b7e02d.jpg",
          "/attached_assets/stock_images/tropical_resort_beac_14d4e092.jpg",
          "/attached_assets/stock_images/beach_resort_dining__dfdf2e33.jpg",
        ],
        gallery: "https://www.iberostarcancunhotel.com/gallery.asp",
        room: "Premium Ocean View — All Inclusive",
        total: 2109,
        rooms: [
          { name: "Premium Ocean View", total: 2109, notes: "Quoted category" },
          { name: "Superior Ocean View", total: null, notes: "Request exact quote" },
          { name: "Suite Oceanfront", total: null, notes: "Request exact quote" },
        ],
        notes: "Refundable option shown; other categories available.",
      },
      {
        id: "hyatt-ziva-cancun",
        name: "Hyatt Ziva Cancún",
        adultsOnly: false,
        allInclusive: true,
        vibe: ["Family-friendly", "Club Level"],
        hero: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/12/07/1005/Hyatt-Ziva-Cancun-Pool.jpg",
        thumbs: [
          "/attached_assets/stock_images/tropical_resort_beac_03a3c6a7.jpg",
          "/attached_assets/stock_images/luxury_hotel_room_oc_7c2072db.jpg",
          "/attached_assets/stock_images/beach_resort_dining__d5925f50.jpg",
        ],
        gallery: "https://www.resortsbyhyatt.com/ziva/ziva-cancun/gallery",
        room: "Resort View — All Inclusive",
        total: 2900,
        rooms: [
          { name: "Resort View", total: 2900, notes: "Quoted category" },
          { name: "Oceanfront King", total: null, notes: "Request exact quote" },
          { name: "Club Oceanfront", total: null, notes: "Request exact quote" },
        ],
        notes: "Upgrades like Oceanfront / Club available (higher total).",
      },
    ],
  },
  {
    location: "Isla Mujeres",
    hotels: [
      {
        id: "almare-luxury-collection",
        name: "Almare, a Luxury Collection (Adults Only)",
        adultsOnly: true,
        allInclusive: true,
        vibe: ["Boutique", "Luxury"],
        hero: "https://cache.marriott.com/Content/dam/marriott-digital/mx/hotels/cunim/cunim-exterior-27557.jpg",
        thumbs: [
          "/attached_assets/stock_images/adults_only_luxury_r_51bfb744.jpg",
          "/attached_assets/stock_images/luxury_hotel_room_oc_2f4ec9e1.jpg",
          "/attached_assets/stock_images/all_inclusive_resort_919cdcf8.jpg",
        ],
        gallery: "https://all-inclusive.marriott.com/almare-a-luxury-collection-all-inclusive-resort-isla-mujeres/gallery",
        room: "Standard King — All Inclusive",
        total: 3662,
        rooms: [
          { name: "Standard King", total: 3662, notes: "Quoted category" },
          { name: "Deluxe King Ocean View", total: null, notes: "Request exact quote" },
          { name: "Suite", total: null, notes: "Request exact quote" },
        ],
        notes: "Deluxe & Ocean View categories available.",
      },
      {
        id: "privilege-aluxes",
        name: "Privilege Aluxes (Adults Only)",
        adultsOnly: true,
        allInclusive: true,
        vibe: ["Relaxed", "Great Beach"],
        hero: "https://www.privilegehotels.com/images/custom/galeria/hotel/galeria_hotel_1_mini.jpg",
        thumbs: [
          "/attached_assets/stock_images/tropical_resort_beac_14d4e092.jpg",
          "/attached_assets/stock_images/luxury_resort_pool_c_57b7e02d.jpg",
          "/attached_assets/stock_images/all_inclusive_resort_59a4ec3d.jpg",
        ],
        gallery: "https://www.privilegehotels.com/gallery",
        room: "Suite King with Jacuzzi — All Inclusive",
        total: 3242,
        rooms: [
          { name: "Suite King Jacuzzi", total: 3242, notes: "Quoted category" },
          { name: "Honeymoon Suite", total: null, notes: "Request exact quote" },
          { name: "Grand Platinum Suite", total: null, notes: "Request exact quote" },
        ],
        notes: "Value-forward adults-only pick; jacuzzi suites vary.",
      },
    ],
  },
  {
    location: "Riviera Maya / Playa del Carmen",
    hotels: [
      {
        id: "secrets-maroma",
        name: "Secrets Maroma Beach (Adults Only)",
        adultsOnly: true,
        allInclusive: true,
        vibe: ["Iconic Beach", "Romantic"],
        hero: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2024/02/15/1143/Secrets-Maroma-Beach-Pool.jpg",
        thumbs: [
          "/attached_assets/stock_images/luxury_hotel_room_oc_3a3eb040.jpg",
          "/attached_assets/stock_images/tropical_resort_beac_c60d133b.jpg",
          "/attached_assets/stock_images/beach_resort_dining__6e0b0b4c.jpg",
        ],
        gallery: "https://www.hyattinclusivecollection.com/en/resorts-hotels/secrets/mexico/maroma-beach-riviera-cancun/gallery/",
        room: "Junior Suite Tropical View — All Inclusive",
        total: 2976,
        rooms: [
          { name: "Junior Suite Tropical View", total: 2976, notes: "Quoted category" },
          { name: "Junior Suite Ocean View", total: null, notes: "Request exact quote" },
          { name: "Preferred Club Suite", total: null, notes: "Request exact quote" },
        ],
        notes: "Garden / Ocean views priced differently.",
      },
      {
        id: "secrets-moxche",
        name: "Secrets Moxché (Adults Only)",
        adultsOnly: true,
        allInclusive: true,
        vibe: ["Modern", "Design-forward"],
        hero: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/04/12/1651/Secrets-Moxche-Exterior.jpg",
        thumbs: [
          "/attached_assets/stock_images/adults_only_luxury_r_00cd1a98.jpg",
          "/attached_assets/stock_images/luxury_resort_pool_c_25fbb954.jpg",
          "/attached_assets/stock_images/all_inclusive_resort_314f4c67.jpg",
        ],
        gallery: "https://www.hyatt.com/en-US/hotel/mexico/moxche-playa-del-carmen/sepdc/photos-reviews",
        room: "Junior Suite Tropical View — All Inclusive",
        total: 4087,
        rooms: [
          { name: "Junior Suite Tropical View", total: 4087, notes: "Quoted category" },
          { name: "Junior Suite Swim-Out", total: null, notes: "Request exact quote" },
          { name: "Preferred Club Ocean View", total: null, notes: "Request exact quote" },
        ],
        notes: "Multiple pool/rooftop scenes; room tiers vary.",
      },
      {
        id: "hyatt-vivid",
        name: "Hyatt Vivid Playa del Carmen (Adults Only)",
        adultsOnly: true,
        allInclusive: true,
        vibe: ["Value", "Walkable"],
        hero: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2024/05/20/1400/Hyatt-Vivid-Playa-del-Carmen-Pool.jpg",
        thumbs: [
          "/attached_assets/stock_images/adults_only_luxury_r_fc40d5a7.jpg",
          "/attached_assets/stock_images/luxury_resort_pool_c_c7459413.jpg",
          "/attached_assets/stock_images/all_inclusive_resort_59a4ec3d.jpg",
        ],
        gallery: "https://www.hyatt.com/hyatt-vivid/en-US/hvpdc-hyatt-vivid-playa-del-carmen/gallery",
        room: "Junior Suite — All Inclusive",
        total: 1927,
        rooms: [
          { name: "Junior Suite", total: 1927, notes: "Quoted category" },
          { name: "Oceanfront Junior Suite", total: null, notes: "Request exact quote" },
          { name: "Club Oceanfront", total: null, notes: "Request exact quote" },
        ],
        notes: "Oceanfront Junior Suite and Club options above this.",
      },
    ],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs tracking-wide border border-black/10 bg-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function HotelCard({ h, onOpen, onCompare }: { h: Hotel; onOpen: (h: Hotel)=>void; onCompare: (h: Hotel)=>void }) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-xl transition-all">
      <div className="relative h-56 w-full overflow-hidden">
        <img src={h.hero} alt={h.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
        <div className="absolute top-4 left-4 flex gap-2">
          {h.adultsOnly && <Badge>Adults Only</Badge>}
          {h.allInclusive && <Badge>All Inclusive</Badge>}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{h.name}</h3>
            <p className="text-sm text-black/60">{h.room}</p>
          </div>
          <div className="text-right">
            <div className="text-[12px] uppercase tracking-wide text-black/50">Total (5 nights)</div>
            <div className="text-lg font-semibold">{formatUSD(h.total)}</div>
            <div className="text-[11px] text-black/50">Nov 3–8 · 2 adults</div>
          </div>
        </div>
        {h.thumbs && (
          <div className="flex gap-2 overflow-x-auto py-1">
            {h.thumbs.map((t, i) => (
              <img key={i} src={t} alt={`${h.name} thumb ${i + 1}`} className="h-16 w-24 object-cover rounded-xl border border-black/10" />
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-1">
          {h.vibe?.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-3 rounded-2xl border border-black/10 overflow-hidden">
          <div className="px-4 py-2 text-[12px] uppercase tracking-wide bg-black/5">Available Room Categories</div>
          <div className="divide-y divide-black/10">
            {h.rooms?.map((r, i) => (
              <div key={i} className="px-4 py-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-black/60">{r.notes}</div>
                </div>
                <div className="text-right">
                  {r.total ? <div className="text-sm font-semibold">{formatUSD(r.total)}</div> : <a href="#contact" className="text-sm underline">Request quote</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button onClick={() => onOpen(h)} className="px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-90">View Details</button>
            <button onClick={() => onCompare(h)} className="px-4 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition">Compare</button>
          </div>
          {h.gallery && <a href={h.gallery} target="_blank" rel="noreferrer" className="text-sm underline">Photo gallery</a>}
        </div>
      </div>
    </div>
  );
}

export default function RichAFQuintanaRoo() {
  const [tab, setTab] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [activeHotel, setActiveHotel] = React.useState<Hotel | null>(null);
  const [compare, setCompare] = React.useState<Hotel[]>([]);

  const locations = DATA.map((d) => d.location);
  const current = DATA[tab];
  const filteredHotels = React.useMemo(() => {
    const q = query.toLowerCase();
    return current.hotels.filter((h) => [h.name, h.room, ...(h.vibe || [])].join(" ").toLowerCase().includes(q));
  }, [current, query]);

  const openHotel = (h: Hotel) => { setActiveHotel(h); setOpen(true); };
  const toggleCompare = (h: Hotel) => {
    setCompare((prev) => {
      const exists = prev.find((x) => x.id === h.id);
      if (exists) return prev.filter((x) => x.id !== h.id);
      if (prev.length >= 3) return prev;
      return [...prev, h];
    });
  };

  return (
    <div style={{ background: BRAND.paper }} className="min-h-screen text-black">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#FAF8F5]/80 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl" style={{ background: BRAND.gold }} />
            <a href={BRAND.site} target="_blank" rel="noreferrer" className="font-serif text-xl tracking-tight hover:opacity-80">{BRAND.name}</a>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#picks" className="hover:opacity-70">Honeymoon Picks</a>
            <a href="#contact" className="hover:opacity-70">VIP Concierge</a>
            <a href={BRAND.site} target="_blank" rel="noreferrer" className="hover:opacity-70">richaf.global</a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs tracking-wide border border-black/10 bg-white/70 mb-4">
              Quintana Roo · Nov 3–8 · 2 adults · All inclusive picks
            </div>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight">Curated Honeymoon Resorts by Location</h1>
            <p className="mt-4 text-[15px] text-black/70 max-w-xl">
              Elegant, fast, and client‑friendly. These totals are for <strong>5 nights</strong>.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#picks" className="px-6 py-3 rounded-full bg-black text-white hover:opacity-90">See the Picks</a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition">Get an Exact Quote</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-black/10 shadow-lg">
              <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80" alt="Quintana Roo Coast" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl border border-black/10 shadow">
              <div className="text-xs uppercase tracking-wide text-black/60">Budget Target</div>
              <div className="text-xl font-semibold">$4k–$5k total</div>
              <div className="text-[12px] text-black/60">for two · 5 nights</div>
            </div>
          </div>
        </div>
      </section>

      <section id="picks" className="border-t border-b border-black/10 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {locations.map((loc, i) => (
              <button key={loc} onClick={() => setTab(i)}
                className={"px-4 py-2 rounded-full border text-sm transition " + (i===tab ? "bg-black text-white border-black" : "bg-white text-black border-black/20 hover:border-black")}>
                {loc}
              </button>
            ))}
          </div>
          <input placeholder="Search hotel, vibe, or room…" className="px-4 py-2 rounded-full border border-black/20 bg-white text-sm" value={query} onChange={(e)=>setQuery(e.target.value)} />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((h) => (
          <HotelCard key={h.id} h={h} onOpen={openHotel} onCompare={toggleCompare} />
        ))}
        {filteredHotels.length === 0 && <div className="col-span-full text-center text-black/60 py-16">No matches. Try a different location or clear the search.</div>}
      </section>

      <section id="contact" className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif">VIP Concierge · Lock Your Dates</h2>
            <p className="mt-3 text-white/80 max-w-xl">Message us with your must‑haves (suite type, oceanfront, spa, private dinner). We confirm live availability and fine‑tune to your total under $5k.</p>
            <div className="mt-6 flex flex-wrap gap-3 items-center text-sm">
              <a href={BRAND.site} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white text-black hover:opacity-90">richaf.global</a>
              <a href={"tel:" + BRAND.phone.replace(/\s/g, '')} className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition">{BRAND.phone}</a>
              <a href={"mailto:" + BRAND.email} className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition">{BRAND.email}</a>
              <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition">Instagram @richaf.global</a>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <form className="grid gap-3">
              <input className="px-4 py-3 rounded-xl bg-black/50 border border-white/10" placeholder="Full Name" />
              <input className="px-4 py-3 rounded-xl bg-black/50 border border-white/10" placeholder="Email" />
              <div className="grid grid-cols-2 gap-3">
                <input className="px-4 py-3 rounded-xl bg-black/50 border border-white/10" placeholder="Max Budget (USD)" defaultValue={5000} />
                <input className="px-4 py-3 rounded-xl bg-black/50 border border-white/10" placeholder="# Nights" defaultValue={5} />
              </div>
              <textarea className="px-4 py-3 rounded-xl bg-black/50 border border-white/10" placeholder="Notes (romantic dinner, spa, excursions)"></textarea>
              <button className="mt-2 px-6 py-3 rounded-full bg-white text-black w-fit">Send</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-black/60">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="text-sm text-black/60">Quintana Roo Honeymoon Edition</div>
        </div>
      </footer>

      <div className="fixed bottom-6 inset-x-0 flex justify-center pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-black/10">
          <span className="text-sm">Need a human to finalize?</span>
          <a href="#contact" className="px-4 py-2 rounded-full bg-black text-white text-sm">Talk to Concierge</a>
        </div>
      </div>
    </div>
  );
}
