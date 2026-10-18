/* ===== For Shona =====
   Everything personal lives in CONFIG. Adding a photo = adding one string.
   Photo files live in Photos/ and keep their real extension. */

const CONFIG = {
  her: "Himanshi",
  pet: "Shona",

  ui: {
    eyebrow: "ek chhoti si website, sirf tere liye",
    sub: "Meri jaan - do saal, do mahine, aur dher saari yaadein",
    cue: "scroll down",
    letterTitle: "Mujhe kuch kehna hai",
    galleryTitle: "Hum dono",
    galleryNote: "swipe kar... and see us together",
    sign: "— Tanmay, jo ab late nahi aayega.",
  },

  hero: "Photos/1_solo.jpg",

  /* one beat = one paragraph that types itself + the photo pinned beside it.
     note = a short love line that fades in after the paragraph finishes. */
  letter: [
    {
      photo: "Photos/1_couple.jpg",
      text: "Shona, aaj main defend nahi karunga. Kal subah tu ne jo kaha, main usse poora din apne man mai soch rha tha aur sach baat ye hai ki you were 100% correct. Maine apne cheezon ko justify karne ki koshish ki hai har baari, ki uth jaata m , tu kyu utha rhi, call kr rhi, tere efforts ko value nhi diya. I am sorry for hurting u baby girl",
      note: "I want to make you feel valued and be better for you.",
    },
    {
      photo: "Photos/2_couple.jpeg",
      text: "Pehli baat: meri neend, aur mera hamesha late ho jaana. Tu ne kaha ki tu ek constant darr ke saath jeeti hai meri neend ki wajah se, aur yahi line mujhe sabse zyada hurt kri. Tu mere liye darti hai, roz, aur us darr ka reason main hoon. Toh ab sirf baatein nahi: khud ke liye deadlines, aur har cheez ka time decide karke chalna — khana 1:20 pe hai to 1:20 pe hi, library time pe, paper time pe, aur sona time pe. Yeh saari chizen mai khudse implement kr rha hun in chutiyon mai. Aur phone kabhi silent pe nahi chhodunga. Tu call kare, to ghanti bajni chahiye — har baar aur usse bhi zaruri hai ki mai uthau calls.",
      note: "",
    },
    {
      photo: "Photos/2_solo.jpg",
      text: "Jabse tu ghar gayi hai, maine efforts kam lagaye. Distance ko lekar sochta tha ki 2-3 chizen he hai joh mai kar sakta hun tujhe khush krne ke liye, excuses he dhundta rehta tha, par sach ye hai ki mene dhyaan diya par kabhi dhang se koshish nhi kari. Tu door hai, iska matlab zyada effort banta hai, kam nahi. Us kami ke liye bhi sorry — aur un cheezon ke liye bhi jo main ne ki, aage se dhyaan rakhunga baccha.",
      note: "",
    },
    {
      photo: "Photos/4_couple.jpeg",
      text: "Do saal aur do mahine. Itne time mein tu ne mera sabse kharab version bhi dekha hai, aur phir bhi roz wapas aayi hai, roz samjhaya hai. Main us patience ko taken for granted nahi lunga. Tu meri aadat nahi hai, Shona — tu meri sabse acchi kismat hai, I am very sorry for making u feel and mere words ki value itni down karne ke liye.",
      note: "I love you dherrrr saaraaa babyyy girlllll.",
    },
    {
      photo: "Photos/3_solo.jpg",
      text: "Main ye nahi keh raha ki sab bhool ja. Bas itna keh rha ki mujhe change hote hue dekh le. Baaton se nahi: time pe pahunch ke, time pe so ke, phone uthake, aur agli baar jab tu kuch bole to chup-chaap sunn ke. Tu dekhti reh. Main prove karunga.",
      note: "",
    },
  ],

  gallery: [
    "Photos/1_couple.jpg",
    "Photos/5_couple.jpg",
    "Photos/2_solo.jpg",
    "Photos/6_couple.jpg",
    "Photos/3_couple.jpeg",
    "Photos/4_solo.jpg",
    "Photos/4_couple.jpeg",
    "Photos/1_solo.jpg",
    "Photos/2_couple.jpeg",
    "Photos/3_solo.jpg",
  ],

  cupcake: {
    photo: "Photos/5_couple.jpg",
    chip: "18 October &middot; National Chocolate Cupcake Day",
    title: "Happy National Chocolate Cupcake Day, Shona",
    body: [
      "Aaj 18 October hai — National Chocolate Cupcake Day. Aur jis insaan ke liye ye din bana hai, woh aaj mere saath hai he nhi :( I miss seeing you eat choco lava cake with a smile and happiness on your face, It's my favourite thing to do.",
      "Jab tu wapas aayegi, do order karenge — ek tera, aur doosra bhi tera. Main bas tujhe khaate hue dekhunga. Happy Chocolate Cupcake Day meri jaan. I love you Shona",
    ],
  },
};

/* ------------------------------------------------------------------ */

const $ = (id) => document.getElementById(id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const wide = matchMedia("(min-width: 860px)");

/* a photo inside a fixed-ratio frame. A missing file just leaves the
   dashed placeholder showing instead of a broken-image icon. */
function photoFrame(src, alt, extraClass) {
  const frame = document.createElement("div");
  frame.className = "frame" + (extraClass ? " " + extraClass : "");
  frame.appendChild(photo(src, alt));
  return frame;
}
function photo(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  img.loading = "lazy";
  img.decoding = "async";
  img.onerror = () => { img.style.display = "none"; };
  return img;
}

/* ---------- hero + static copy ---------- */
function paintStatic() {
  const u = CONFIG.ui;
  const hero = photo(CONFIG.hero, CONFIG.her);
  hero.loading = "eager";                 // above the fold, never defer it
  $("heroBg").appendChild(hero);
  $("eyebrow").textContent = u.eyebrow;
  $("heroName").textContent = CONFIG.pet;
  $("heroSub").textContent = u.sub;
  $("cueText").textContent = u.cue;
  $("letterTitle").textContent = u.letterTitle;
  $("galleryTitle").textContent = u.galleryTitle;
  $("galleryNote").textContent = u.galleryNote;
  $("sign").textContent = u.sign;

  const c = CONFIG.cupcake;
  $("dayChip").innerHTML = c.chip;
  $("cupcakeTitle").textContent = c.title + " \u{1F9C1}";
  $("cupcakeBody").innerHTML = c.body.map((p) => "<p>" + p + "</p>").join("");
  $("cupcakeFrame").appendChild(photo(c.photo, "Tanmay aur " + CONFIG.her));
}

/* ---------- floating hearts ---------- */
function hearts() {
  if (reduced) return;
  const box = $("hearts");
  const glyphs = ["❤", "❥", "✿"];
  for (let i = 0; i < 14; i++) {
    const h = document.createElement("i");
    h.textContent = glyphs[i % glyphs.length];
    h.style.left = Math.random() * 98 + "%";
    h.style.fontSize = 10 + Math.random() * 18 + "px";
    h.style.animationDuration = 13 + Math.random() * 14 + "s";
    h.style.animationDelay = -Math.random() * 20 + "s";
    box.appendChild(h);
  }
}

/* ---------- sprinkles over the cupcake section ---------- */
function sprinkles() {
  if (reduced) return;
  const box = $("sprinkles");
  const colors = ["#ff8fa3", "#e9c6a0", "#ffd9e0", "#7b4a2d", "#fff"];
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 98 + "%";
    s.style.background = colors[i % colors.length];
    s.style.animationDuration = 3.5 + Math.random() * 3.5 + "s";
    s.style.animationDelay = -Math.random() * 6 + "s";
    s.style.transform = "rotate(" + Math.random() * 180 + "deg)";
    box.appendChild(s);
  }
}

/* ---------- typewriter ---------- */
function typeInto(p, text, done) {
  const caret = document.createElement("span");
  caret.className = "caret";
  p.textContent = "";
  p.appendChild(caret);

  let i = 0;
  const tick = () => {
    i++;
    p.textContent = text.slice(0, i);
    p.appendChild(caret);
    if (i < text.length) {
      const ch = text[i - 1];
      setTimeout(tick, ch === "." || ch === "—" ? 170 : ch === "," ? 70 : 17);
    } else {
      setTimeout(() => caret.remove(), 1200);
      if (done) done();
    }
  };
  setTimeout(tick, 200);
}

/* ---------- the letter: sticky photo on desktop, inline photo on phone ---------- */
const typed = new Set();
let beatObserver = null;

function buildLetter() {
  const grid = $("letterGrid");
  const desktop = wide.matches;
  if (beatObserver) beatObserver.disconnect();
  grid.innerHTML = "";

  let stickyImgs = [];
  if (desktop) {
    const col = document.createElement("div");
    col.className = "sticky-col";
    const frame = document.createElement("div");
    frame.className = "frame";
    CONFIG.letter.forEach((b, i) => {
      const img = photo(b.photo, "Tanmay aur " + CONFIG.her);
      if (i === 0) img.classList.add("on");
      frame.appendChild(img);
    });
    col.appendChild(frame);
    grid.appendChild(col);
    stickyImgs = [...frame.children];
  }

  const beats = document.createElement("div");
  CONFIG.letter.forEach((b, i) => {
    const art = document.createElement("article");
    art.className = "beat";
    art.dataset.i = i;

    if (!desktop) art.appendChild(photoFrame(b.photo, "Tanmay aur " + CONFIG.her));

    const p = document.createElement("p");
    art.appendChild(p);

    let note = null;
    if (b.note) {
      note = document.createElement("p");
      note.className = "note";
      note.textContent = b.note;
      art.appendChild(note);
    }

    // already typed before a resize rebuild, or reduced motion: show it whole
    if (reduced || typed.has(i)) {
      p.textContent = b.text;
      if (note) note.classList.add("in");
      typed.add(i);
    }

    beats.appendChild(art);
  });
  grid.appendChild(beats);

  beatObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const i = +e.target.dataset.i;

        if (stickyImgs.length) {
          stickyImgs.forEach((img, k) => img.classList.toggle("on", k === i));
        }
        if (typed.has(i)) return;

        typed.add(i);
        const note = e.target.querySelector(".note");
        typeInto(e.target.querySelector("p"), CONFIG.letter[i].text, () => {
          if (note) note.classList.add("in");
        });
      });
    },
    { threshold: 0.35, rootMargin: "0px 0px -12% 0px" }
  );
  [...beats.children].forEach((b) => beatObserver.observe(b));
}

/* ---------- gallery carousel + lightbox ---------- */
function buildGallery() {
  const track = $("track");
  const dots = $("dots");

  CONFIG.gallery.forEach((src, i) => {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.setAttribute("aria-label", "Photo " + (i + 1) + " — zoom");
    card.appendChild(photoFrame(src, "Hum dono"));
    card.addEventListener("click", () => openLightbox(src));
    track.appendChild(card);

    const dot = document.createElement("b");
    if (i === 0) dot.classList.add("on");
    dots.appendChild(dot);
  });

  const step = () => track.firstElementChild.getBoundingClientRect().width + 16;
  const go = (dir) => {
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    if (dir > 0 && atEnd) track.scrollTo({ left: 0 });
    else track.scrollBy({ left: dir * step() });
  };

  $("nextBtn").addEventListener("click", () => { stopAuto(); go(1); });
  $("prevBtn").addEventListener("click", () => { stopAuto(); go(-1); });

  let auto = reduced ? null : setInterval(() => go(1), 4800);
  function stopAuto() { if (auto) { clearInterval(auto); auto = null; } }
  track.addEventListener("pointerdown", stopAuto, { passive: true });

  track.addEventListener("scroll", () => {
    const i = Math.round(track.scrollLeft / step());
    [...dots.children].forEach((d, k) => d.classList.toggle("on", k === i));
  }, { passive: true });
}

function openLightbox(src) {
  const lb = $("lightbox");
  if (!lb.showModal) { window.open(src, "_blank"); return; }   // ancient browser fallback
  $("lbImg").src = src;
  lb.showModal();
}

/* ---------- scroll reveals ---------- */
function reveals() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- go ---------- */
paintStatic();
hearts();
sprinkles();
buildLetter();
buildGallery();
reveals();

// ponytail: full rebuild on the 860px boundary. Cheap, and typed beats are
// remembered in `typed` so nothing re-types mid-read.
wide.addEventListener("change", buildLetter);

$("lbClose").addEventListener("click", () => $("lightbox").close());
$("lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") $("lightbox").close(); });
