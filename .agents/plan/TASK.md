# TACTICAL TASK EXECUTION TRACKER
**Project:** Website 1st Anniversary — Tri & Ahnaf  
**Governance:** `.agents/rules/RULES.md`  
**Blueprint:** `.agents/plan/PLAN.md`  

---

## 📊 Status Progres Pilar (Cosmic Constellation Overhaul)

| Pilar / Modul | Deskripsi | Status |
|---|---|---|
| **Opening Gate** | The Classified Document Opening Gate & Audio Ignition | **Selesai (Completed & Verified)** |
| **Background Engine** | The Cosmic Memory Constellation (Bintang & Garis Konstelasi Persisten) | **Selesai (Completed & Verified)** |
| **Pilar 1: Hero & Journey** | Hero Aperture & 4 Babak Perjalanan Cinta dalam Gugusan Bintang | **Selesai (Dipertahankan)** |
| **Pilar 2: Arc & Grid** | Galeri Annular Wheel & Spotify 3D Player dengan Lantai 3D Grid | **Selesai (Completed & Verified)** |
| **Pilar 3: Love Letter** | Surat Cinta 3D Interaktif Bermandikan Cahaya Bintang | **Selesai (Dipertahankan)** |
| **Pilar 4: Grand Finale** | Selebrasi Akbar 365 Hari Bersama Rasi Bintang Abadi | **Selesai (Dipertahankan)** |

---

## 📍 Rincian Task Rombak Galeri Arc (Task 11)

### ✅ TASK 11: Transformasi Galeri Arc Menjadi Annular Wheel Editorial (Okt 2025 – Okt 2026) [COMPLETED]
- [x] **Task 11.1: Pembaruan Data 13 Bulan (`memories.js`):** [COMPLETED]
  - Mengisi `ARC_MEMORIES` dengan 13 momen bulanan dari Oktober 2025 hingga Oktober 2026.
  - Memasang foto-foto placeholder autentik dari `public/assets/tri/` yang siap dikustomisasi.
- [x] **Task 11.2: Rekayasa Annular Radial Sliced Wheel (`ArcCarouselSection.jsx`):** [COMPLETED]
  - Mengadopsi struktur visual referensi poster editorial: teks panduan kartu di sisi kiri (`[ BULAN ]`, `What's Next`, garis pembagi, `MOMENT GUIDE`, narasi, tombol navigasi `→`, dan bar pemilih bulan).
  - Merancang roda cincin radial SVG 360° dengan potongan baji melengkung (*curved annular wedges*) dan rim light cyan neon pendar pada irisan aktif.
  - Menjaga orientasi foto tetap tegak lurus (*upright 0°*) saat berada di titik fokus aktif agar wajah tidak miring atau terbalik.
- [x] **Task 11.3: Sinkronisasi Scroll & Navigasi Interaktif (`App.jsx`):** [COMPLETED]
  - ScrollTrigger GSAP scrub rotasi roda seiring scroll halaman.
  - Dukungan klik langsung pada irisan foto, tombol *Next/Prev*, dan pil bulan untuk rotasi presisi ke babak yang dipilih.
- [x] **Task 11.4: Audit Visual & Responsivitas Browser:** [COMPLETED]
  - Tidak ada tabrakan (*zero overlap*) antara teks kartu kiri dan roda kanan.
  - Build produksi lolos (`npm run build` sukses).
- [x] **Task 11.5: Pengecilan Dimensi, Margin Terpadu & Efek Pop-Out Membesar/Mengecil:** [COMPLETED]
  - Menyesuaikan proporsi section ke `max-w-5xl` dengan padding seimbang sesuai margin section lain.
  - Mengubah perilaku roda menjadi berputar penuh di poros pusatnya (*in-place spinning wheel*).
  - Foto yang dipilih ter-highlight pendar neon cyan dan membesar (*scale 1.18x pop-out spring*), sementara foto lainnya mengecil (*scale 0.88x*) dan meredup halus.
- [x] **Task 11.6: Highlight Foto Diperbesar (Center Spotlight Lens & Modal Preview):** [COMPLETED]
  - Mengubah bagian tengah roda (*hub*) menjadi lensa sorot foto aktif berdiameter 350px dengan rim light neon cyan, vignette sinematik, dan badge bab.
  - Menambahkan tombol interaktif dan aksi klik pada foto untuk membuka modal pratinjau foto resolusi tinggi (*high-res lightbox modal*) dengan kutipan cinta dan tanggal.
  - Membesarkan irisan aktif pada roda hingga `1.25x` dengan pendaran neon intens.

---

## 📍 Rincian Task Scroll Indicator & Scrubber Rail (Task 12)

### ✅ TASK 12: Penghapusan Rail Global & Penataan Timeline Scrubber Glowing pada Arc Carousel [COMPLETED]
- [x] **Task 12.1: Penghapusan Rail Scroll Global:** [COMPLETED]
  - Menghapus komponen `StoryScrollRail.jsx` dan membersihkan import serta rendering di [App.jsx](file:///d:/Coding/Gabut/aniv-tri/src/App.jsx) sesuai instruksi pengguna.
- [x] **Task 12.2: Eliminasi Scrollbar Bawaan Kasar pada Arc Carousel:** [COMPLETED]
  - Menerapkan kelas `.no-scrollbar` pada kontainer tombol bulan di [ArcCarouselSection.jsx](file:///d:/Coding/Gabut/aniv-tri/src/components/ArcCarouselSection.jsx) agar scrollbar tebal abu-abu/biru bawaan browser tidak muncul.
- [x] **Task 12.3: Alternatif Scrubber Timeline Neon Berpendar (Glowing Timeline Laser):** [COMPLETED]
  - Menambahkan garis timeline laser 2px dengan gradien cyan ke cobalt blue dan pendar neon (`shadow-[0_0_8px_#00D2FF]`).
  - Menambahkan bead pendar cyan mengambang yang meluncur halus sesuai bulan aktif (`w-2.5 h-2.5 bg-cyan-300`).
  - Menyediakan 13 titik milestone bulan yang dapat diklik langsung untuk melompat ke momen yang diinginkan.
- [x] **Task 12.4: Validasi & Audit Visual:** [COMPLETED]
  - Verifikasi browser subagent mengonfirmasi hilangnya scrollbar kasar dan berfungsinya scrubber timeline glowing dengan mulus 60 FPS.

---

## 📍 Rincian Task Opening Document Gate & Audio Ignition (Task 13)

### ✅ TASK 13: The Interactive Document Dossier Opening Gate & Audio Ignition [COMPLETED]
- [x] **Task 13.1: Desain 1 Layar Full Screen & Background Hitam Murni (`DocumentOpeningGate.jsx`):** [COMPLETED]
  - Merevisi pembuka menjadi 1 layar penuh (*full viewport*) dengan background hitam pekat OLED (`#000000`).
  - Menghapus elemen teks berlebih (menghilangkan metadata teknis yang cluttered) sehingga fokus pada tipografi esensial yang bersih, puitis, dan berkelas.
- [x] **Task 13.2: Rekayasa Tombol Segel Interaktif Minimalis & Pendar Neon:** [COMPLETED]
  - Menghadirkan segel hati bercahaya neon cyan dengan denyut halus (*breathing animation*), pendaran backdrop blur, dan tombol `Buka Dokumen`.
- [x] **Task 13.3: Orkestrasi Animasi Masuk Sinematik GSAP:** [COMPLETED]
  - Transisi terkoordinasi simultan (*continuous blend & focus pull*): saat segel ditekan, teks gate memudar ke atas, portal pendaran meluas, dan bersamaan pada `t = 0.35s` elemen Hero Section (`365 Days.`, foto apertura, dan narasi) langsung ditarik halus dari latar belakang kosmik (`scale: 0.9 -> 1`, `y: 40 -> 0`, `blur: 20px -> 0px`, `opacity: 0 -> 1`) dengan kurva `power3.out`.
  - Menghilangkan jeda/tahapan kaku (*zero pause*) sehingga transisi terasa mengalir menjadi satu tarikan visual yang menyatu.
- [x] **Task 13.4: Sistem Audio Ignition & Fade-In Manager:** [COMPLETED]
  - Memanfaatkan interaksi klik pengguna (*user gesture*) untuk membuka blokir *autoplay policy* browser secara elegan dan deterministik.
  - Menjalankan audio dengan *exponential volume fade-in* (0% → 100% dalam 2.5 detik).
  - Menyiapkan slot folder dan file lagu kenangan di `public/assets/audio/` dengan penanganan fallback yang aman dan fleksibel saat file diganti pengguna.
- [x] **Task 13.5: Integrasi State di `App.jsx`, Lenis Control & Audit Browser:** [COMPLETED]
  - Mengatur state `hasEntered` di `App.jsx` sehingga scroll Lenis terkunci selama di layar dokumen dan aktif mulus begitu animasi transisi selesai.
  - Memastikan transisi berjalan di 60 FPS tanpa jank pada desktop dan mobile viewport.

---

## 📍 Rincian Task Spotify 3D Coverflow Player (Task 14)

### ✅ TASK 14: Transformasi Perspective Grid Menjadi Spotify 3D Player [COMPLETED]
- [x] **Task 14.1: Struktur Data Playlist & Foto Hitam Putih (`memories.js`):** [COMPLETED]
  - Menyiapkan `SPOTIFY_TRACKS` berisi 5 track dengan foto autentik Tri & Ahnaf: *Secukupnya* (Hindia), *Kita Ke Sana* (Hindia), *everything u are* (Hindia - center hero), *Nina* (.Feast), dan *Tarot* (.Feast).
  - Menerapkan filter visual foto hitam-putih kontras tinggi (`grayscale contrast-125 brightness-100`).
- [x] **Task 14.2: Rekayasa 3D Perspective Coverflow Deck (`PerspectiveGridSection.jsx`):** [COMPLETED]
  - Merancang stage 3D coverflow interaktif 5 kartu dengan transisi `preserve-3d`, rotasi baji perspektif (`rotateY`), dan kedalaman `translateZ`.
  - Kartu aktif tengah upright dengan glowing silver border, judul track, nama artis, dan animasi gelombang audio (*soundwave equalizer*).
  - Navigasi halus saat kartu diklik atau melalui tombol playback.
- [x] **Task 14.3: Floating Glassmorphic Player Pill & Full Playback Controls:** [COMPLETED]
  - Menghadirkan floating player pill bar dengan thumbnail mini track, scrubber progress yang hidup dan interaktif, tombol Spotify checkmark hijau (`#1DB954`), shuffle, volume, dan cast.
  - Menghadirkan bar kontrol playback besar di bawah pill: slider volume kiri-kanan, tombol *Previous*, tombol besar *Play/Pause*, tombol *Next*, dan watermark eksklusif `archive by TRI & AHNAF`.
- [x] **Task 14.4: Integrasi 3D Perspective Floor Halus & Transparan:** [COMPLETED]
  - Mengurangi opasitas lantai 3D (`perspective-grid-floor`) menjadi ultra-transparan (`opacity: 0.15`) dengan garis kisi cyan/biru yang sangat lembut (`rgba 0.08`) dan gradien meluruh ke kejauhan.
  - Memperhalus pantulan lantai (*ground reflection*) menjadi transparan alami (`opacity: 0.15`) agar menyatu mulus dengan OLED black background tanpa visual clashing.
- [x] **Task 14.5: Harmonisasi Animasi Masuk GSAP & Verifikasi Browser:** [COMPLETED]
  - Menyempurnakan animasi masuk sinematik bertingkat (*staggered focus-pull*) di `gridTl` [App.jsx](file:///d:/Coding/Gabut/aniv-tri/src/App.jsx):
    - Lantai 3D meluncur dari bawah (`y: 70 -> 0`, `scale: 0.88 -> 1`, `blur: 10px -> 0px`, `opacity: 0 -> 0.15`).
    - Ground reflection memancar halus bersamaan (`scale: 0.5 -> 1`, `opacity: 0 -> 0.15`).
    - Spotify badge merekah dari atas (`y: -20 -> 0`, `blur: 16px -> 0px`).
    - Deck coverflow 3D melayang anggun (`y: 50 -> 0`, `scale: 0.9 -> 1`, `blur: 16px -> 0px`).
    - Floating player dock & controls meluncur naik dengan transisi pegas halus (`y: 35 -> 0`, `blur: 10px -> 0px`).
- [x] **Task 14.6: Integrasi Audio Asli 5 Lagu Favorit pada Player 3D Coverflow:** [COMPLETED]
  - Menyesuaikan `SPOTIFY_TRACKS` di [memories.js](file:///d:/Coding/Gabut/aniv-tri/src/data/memories.js) dengan 5 file lagu asli dari `public/assets/audio/`: *Film Favorit* (Sheila On 7), *Cinta Dan Rahasia* (Yura Yunita & Glenn Fredly), *Teh Hijau* (Tulus), *XXL* (LANY), dan *I Lay My Love on You* (Westlife).
  - Menyambungkan elemen `<audio>` di [App.jsx](file:///d:/Coding/Gabut/aniv-tri/src/App.jsx) dengan [PerspectiveGridSection.jsx](file:///d:/Coding/Gabut/aniv-tri/src/components/PerspectiveGridSection.jsx):
    - Mengganti lagu secara instan saat kartu diklik atau tombol Next/Prev ditekan.
    - Sinkronisasi status Play/Pause, animasi soundwave equalizer, real seek progress scrubber, dan slider volume.
    - Otomatis memutar lagu berikutnya (*auto-advance next track*) saat lagu selesai (*onEnded*).
- [x] **Task 14.7: Perapihan Layout Dock Player (Single Volume & Smooth Track Transition):** [COMPLETED]
  - Menyederhanakan kontrol volume menjadi tepat **1 kontrol volume terpadu** di sisi kanan player dock (ikon mute toggle `Volume2`/`VolumeX` + slider bar), menghilangkan kontrol volume ganda yang berlebih.
  - Mengoptimasi mekanisme pergantian lagu di [App.jsx](file:///d:/Coding/Gabut/aniv-tri/src/App.jsx) dan [PerspectiveGridSection.jsx](file:///d:/Coding/Gabut/aniv-tri/src/components/PerspectiveGridSection.jsx):
    - Mengunci posisi kelompok tombol playback (Shuffle, Prev, Play/Pause, Next) di titik tengah absolut (*absolute optical center: `left-1/2 -translate-x-1/2`*) agar tombol tetap statis/fixed dan tidak bergeser mengikuti panjang judul lagu.
    - Pembatasan lebar info lagu di sisi kiri dengan truncate rapi sehingga judul panjang tidak pernah menabrak kontrol playback.
    - Penanganan `pause()` sebelum pergantian `src` untuk mencegah `AbortError` saat berpindah lagu secara cepat.
    - Mengintegrasikan aksi klik pada kartu: kartu aktif melakukan Play/Pause, kartu samping berpindah lagu secara mulus.
    - Menghadirkan scrubber timeline presisi dengan tampilan waktu digital `currentTime` dan `duration`.
  - Validasi build produksi lolos 100% (`npm run build`).
- [x] **Task 14.8: Resolusi Total Bug Parallax Background Freezing:** [COMPLETED]
  - Mengidentifikasi akar masalah: saat halaman pertama dimuat (`!hasEntered`), container utama memiliki class `h-screen overflow-hidden` sehingga GSAP ScrollTrigger mengukur tinggi scroll halaman adalah 0 (frozen). Saat tombol F12 ditekan, resize window memicu refresh otomatis.
  - Solusi permanen:
    - Menghapus class `h-screen overflow-hidden` dari container utama dan memindahkan kunci scroll awal ke `document.body.style.overflow = 'hidden'`.
    - Mengubah konfigurasi scrub background tracks di [App.jsx](file:///d:/Coding/Gabut/aniv-tri/src/App.jsx) menjadi `start: 0, end: 'max', invalidateOnRefresh: true` yang terikat langsung ke viewport scroll seluruh dokumen.
    - Menambahkan siklus `ScrollTrigger.refresh()` bertahap saat gate terbuka (`onCompleteGate`), `useEffect` on `hasEntered`, dan listener event `window.load`.
    - Mengganti `loading="lazy"` pada gambar di [ParallaxMemoryVoid.jsx](file:///d:/Coding/Gabut/aniv-tri/src/components/ParallaxMemoryVoid.jsx) menjadi `decoding="async"` agar gambar latar tidak ditunda pemuatannya oleh browser.
  - Pengujian browser subagent sukses memverifikasi pergerakan parallax konstelasi lancar seketika tanpa perlu F12 atau refresh.

---

## 📍 Rincian Task Editorial Cinema Hero Overhaul (Task 15)

### ✅ TASK 15: Transformasi Hero Section Menjadi Editorial Cinema Poster ("Subject-Behind-Type") [COMPLETED]
- [x] **Task 15.1: Desain Arsitektur Layer 3D & Backlight Halo:** [COMPLETED]
  - Menyiapkan kontainer Hero full-screen dengan radial aura neon cyan & sapphire rim lighting tepat di belakang subjek (`opacity-35 to 40%`).
- [x] **Task 15.2: Rekayasa Giant Typography Layer ("Text-Behind-Subject"):** [COMPLETED]
  - Mengimplementasikan teks raksasa display condensed ultra-bold `365 DAYS` membentang `16vw - 18vw` di layer belakang (`z-10`) di balik subjek utama.
- [x] **Task 15.3: Integrasi Master Portrait & Gradient Dissolve:** [COMPLETED]
  - Memasang portrait vertikal kurasi autentik di layer depan (`z-20`) menjulang `78vh - 84vh` dengan grading monokrom kontras tinggi dan gradien fade bawah menyatu mulus ke OLED black void.
  - Menyediakan tombol interaktif di top bar untuk berganti antara foto solo Tri dan foto berdua Tri & Ahnaf.
- [x] **Task 15.4: Penataan Editorial Annotations & Subtle Scroll Cue:** [COMPLETED]
  - Menghilangkan badge avatar dan quote klise; menggantinya dengan anotasi editorial flanking kiri-kanan (`REKAM JEJAK` & `MEMOIR ARCHIVE`) dan hairline laser vertical scroll cue.
- [x] **Task 15.5: Orkestrasi Motion GSAP Fly-Through & Browser Testing:** [COMPLETED]
  - Menyelaraskan animasi GSAP scrub di [App.jsx](file:///d:/Coding/Gabut/aniv-tri/src/App.jsx): parallax optical zoom menembus subjek masuk ke Babak 1 (Journey) pada 60 FPS terkunci.
  - Validasi browser subagent mengonfirmasi pergerakan mulus tanpa jank.

---

## 📍 Rincian Task Anti-Robotic & Cutout Integration (Task 16)

### ✅ TASK 16: Penerapan Aturan Anti-Cyber AI, Integrasi Cutout `transparan_ahnaftri.png`, & Background Motion [COMPLETED]
- [x] **Task 16.1: Amandemen Aturan Desain (`RULES.md` & `GEMINI.md`):** [COMPLETED]
  - Menambahkan larangan eksplisit (Rule 1.2: *No Faux-Cyberpunk / Robotic AI Clutter*): dilarang keras menambahkan teks bertema cyber, robotik, hacker, AI, atau metadata bergaya fiksi ilmiah (`ARCHIVE //`, monospace slash, `SYS:`, `CHAPTER 01`, technical badges).
  - Menetapkan bahwa seluruh teks harus menggunakan pendekatan tipografi editorial yang hangat, humanis, autentik, dan romantis.
- [x] **Task 16.2: Integrasi Aset Foto Cutout Transparan (`transparan_ahnaftri.png`):** [COMPLETED]
  - Memasang aset PNG transparan asli `public/assets/tri/transparan_ahnaftri.png` sebagai subjek utama di layer depan (`z-20`) dengan tinggi vertikal proporsional (`h-[72vh] - h-[86vh]`).
  - Menempatkan teks raksasa display `365 DAYS` tepat di belakang subjek (`z-10`) lengkap dengan drop shadow dan backlight halo biru safir.
- [x] **Task 16.3: Transparansi Latar Belakang & Motion Konstelasi Bintang:** [COMPLETED]
  - Menjadikan kontainer Hero Section transparan (`bg-transparent`) sehingga pergerakan partikel konstelasi bintang dari `ParallaxMemoryVoid` di latar belakang terlihat jelas dan hidup.
- [x] **Task 16.4: Pembersihan Teks Robotik & Peningkatan Editorial Humanis:** [COMPLETED]
  - Menghapus seluruh tag cyber (`ARCHIVE // 365 DAYS`, `CHAPTER 01`, `FOTO: Tri`).
  - Menggantinya dengan teks humanis berkelas:
    - Judul atas: `Tri & Ahnaf`
    - Kiri bawah: `Satu Tahun Bersama · 20 Oktober 2024 — Selamanya`
    - Kanan bawah: `Awal Selamanya · Tri & Ahnaf`
- [x] **Task 16.5: Pengujian Browser Subagent & Validasi 60 FPS:** [COMPLETED]
  - Terverifikasi via screenshot browser subagent: foto cutout tampil tajam, tipografi berada di belakang subjek, animasi scroll scrub berjalan 60 FPS, dan tidak ada elemen berbau cyber/robotik.

---

## 📍 Rincian Task Hero-Aligned Cinema & Anti-Slop Overhaul (Task 17)

### 📋 TASK 17: Blueprint Redesain Komponen Selaras Tipografi & Suasana Hero Section
- [x] **Task 17.1 (Fase 1): Penyesuaian Opening Gate (`DocumentOpeningGate.jsx`):** [SELESAI - MINIMALIS & CLEAN REVISED]
  - Mengeliminasi struktur kartu kotak kaku yang membatasi layar, menggantinya dengan layout *full-viewport cinematic splash* ala Awwwards.
  - Tipografi 100% konsisten dengan Hero Section:
    - Display headline **`TRI AYUANINGSIH`** dalam font `Outfit` bold/black geometris raksasa tanpa kotak pembatas.
    - Top bar (`Tri & Ahnaf` + cyan beacon dot + penanggalan) dan footer annotations (`Satu Tahun Penuh Makna` & `Awal Selamanya`) selaras identik dengan frame Hero Section.
    - Tombol picu minimalis **`BUKA KENANGAN →`** berbentuk kapsul kaca modern berpendar neon cyan dengan chime audio Web Audio API.
  - Terverifikasi via screenshot browser: bersih, lapang, modern, 60 FPS, dan transisi ke Hero Section mengalir alami.
- [x] **Task 17.2 (Fase 2): Transformasi `JourneySection.jsx` (Modern Parallax Lookbook):** [SELESAI - MENUNGGU REVIEW PENGGUNA]
  - Mengeliminasi seluruh sisa font serif/antik (`Cormorant Garamond`). Seluruh judul babak kini menggunakan font display geometris `Outfit Bold` (`tracking-tight uppercase text-white`) selaras 100% dengan Hero Section.
  - Mengganti border squircle neon kaku dengan frame potret rasio 3:4 bergaya modern lookbook majalah fashion, dengan pendar backlight cyan-kobalt lembut dan kartu watermark `font-display`.
  - Mengadopsi titik pendar cyan (*cyan beacon dot*) pada pil penanda periode dan header milestone (`Milestone Perjalanan · Tri & Ahnaf`).
  - Seluruh narasi dan anotasi menggunakan font `Plus Jakarta Sans` yang jernih dan nyaman dibaca.
  - Terverifikasi via browser subagent: scrubbing timeline GSAP berjalan 60 FPS, transisi in-out kartu mulus dengan optical blur, dan komposisi simetris di tengah layar.
- [x] **Task 17.3 (Fase 3): Transformasi `ArcCarouselSection.jsx` (Horizontal 3D Filmstrip Ribbon):** [SELESAI - MENUNGGU REVIEW PENGGUNA]
  - Mengeliminasi seluruh sisa font serif/antik (`Cormorant Garamond`). Seluruh judul momen bulanan kini menggunakan font display geometris `Outfit Black` (`tracking-tight uppercase text-white`) selaras 100% dengan Hero Section.
  - Mempertahankan kartu potret 3D perspektif uncropped yang menampilkan foto autentik tanpa potongan baji pie chart, dengan pendaran neon cyan pada kartu aktif dan transisi halus.
  - Mengharmoniskan seluruh pil bulan, laser timeline scrubber, serta tombol navigasi menggunakan tipografi `Outfit` dan aksen titik pendar cyan (*cyan beacon dot*).
  - Modal pratinjau foto resolusi tinggi (*lightbox modal*) kini menggunakan tema dark obsidian yang bersih dengan tipografi geometris modern.
  - Terverifikasi via browser subagent: navigasi klik, scrub scroll, dan pembukaan modal berfungsi sempurna pada 60 FPS.
- [x] **Task 17.4 (Fase 4): Penyempurnaan `PerspectiveGridSection.jsx` (Modern Neon Vinyl Console):** [SELESAI - MENUNGGU REVIEW PENGGUNA]
  - Mengeliminasi seluruh sisa font serif/antik (`Cormorant Garamond`) dan badge Spotify generik.
  - Menghadirkan headline geometris raksasa **`MELODI PERJALANAN KITA`** dalam font `Outfit Black` dengan pil beacon cyan `Soundtrack Kenangan · Tri & Ahnaf` selaras 100% dengan Hero Section.
  - Memasang 3D perspective vinyl cards dengan foto autentik Tri & Ahnaf, pendaran neon cyan pada kartu aktif, animasi visualizer soundwave dinamis, dan piringan hitam vinyl berputar.
  - Spotify player dock konsol obsidian modern dengan kontrol interaktif lengkap (Play/Pause, Prev/Next, Shuffle, Volume Bar, Scrubber Timeline).
  - Terverifikasi via browser subagent: transisi pergantian lagu mulus 60 FPS, pendaran cahaya realistis, dan kontrol responsif.
- [x] **Task 17.5 (Fase 5): Rekayasa Ulang Surat Cinta (`LoveLetterSection.jsx`):** [SELESAI - MENUNGGU REVIEW PENGGUNA]
  - Mengeliminasi total seluruh sisa font serif/antik (`Cormorant Garamond`) dan tekstur kertas perkamen usang yang bertentangan dengan estetika Hero Section.
  - Mengganti amplop segitiga poligon jadul dengan **Modern Obsidian Folio Clutch (`#050811`)** berbalut aksen neon cyan elektrik dan backlight halo biru kobalt.
  - Memasang monogram **`T & A`** geometris modern dalam lingkaran kaca obsidian dengan pendaran beacon cyan.
  - Modal memoir surat pribadi kini menggunakan tema kaca obsidian gelap (*obsidian glass*) dengan tajuk **`UNTUK TRI AYUANINGSIH`** dalam font **`Outfit Black`**, stempel foto berpolaroid modern dengan lencana cyan `1ST ANIV`, teks narasi tulus dalam `Plus Jakarta Sans`, kartu kutipan pendar cyan, dan tanda tangan digital `Ahnaf`.
  - Terverifikasi via browser subagent: interaksi buka/tutup folio berjalan responsif, transisi modal mulus 60 FPS, dan tampilan selaras 100% dengan Hero Section.
- [x] **Task 17.6 (Fase 6): Perombakan Total Grand Finale (`FinaleSection.jsx`):** [SELESAI - MENUNGGU REVIEW PENGGUNA]
  - Mengeliminasi seluruh sisa font serif/antik (`Cormorant Garamond`) dan menghapus total grid 3-kolom metrik SaaS generik (`365 Days / 8,760 Hours / 525.6K Minutes`).
  - Menghadirkan headline geometris besar **`SATU TAHUN & AWAL SELAMANYA`** dalam font **`Outfit Black`** (`tracking-[-0.03em] uppercase`) selaras 100% dengan Hero Section.
  - Memasang **Duo Portrait Card** autentik berukuran besar menampilkan foto berdua Tri Ayuaningsih & Ahnaf (`fotobareng2.jpeg`) berbalut rim light neon cyan, backlight halo biru safir, dan monogram caption.
  - Menghadirkan tombol kapsul modern **`• PUTAR ULANG KENANGAN ↑`** yang berfungsi melakukan *smooth scroll* kembali ke puncak halaman.
  - Mengharmoniskan teks penutup: `Dibuat dengan segenap cinta oleh Ahnaf untuk Tri Ayuaningsih · 20 Oktober 2024 — Selamanya`.
  - Terverifikasi via browser subagent: transisi masuk mulus 60 FPS, tata letak proporsional, dan interaksi *smooth scroll-to-top* berfungsi sempurna.
- [x] **Task 17.7 (Fase 7): Pembersihan Latar Belakang & Audio Toggle (`ParallaxMemoryVoid.jsx` & `AudioToggle.jsx`):** [SELESAI - TAHAP AKHIR HERO-ALIGNED OVERHAUL]

---

## 📍 Rincian Task Mobile Performance & WebP Optimization (Task 18)

### ✅ TASK 18: Optimasi Kinerja Ponsel (Mobile 60 FPS) & Kompresi Aset WebP [COMPLETED]
- [x] **Task 18.1: Skrip Konversi & Kompresi WebP Lokal (`execution/convert_to_webp.py`):** [COMPLETED]
  - Mengeksekusi kompresi cerdas offline menggunakan pustaka Python Pillow pada seluruh gambar di `public/assets/tri/`.
  - Berhasil mereduksi ukuran total aset dari **31.04 MB menjadi hanya 2.70 MB (hemat 91.3%)** dengan kualitas visual tajam tanpa kompromi.
  - Subjek utama `transparan_ahnaftri` terkompresi dari 2.78 MB menjadi 211 KB (-92.4%) dengan transparansi alpha sempurna.
- [x] **Task 18.2: Pembaruan Referensi File Gambar di Seluruh Proyek:** [COMPLETED]
  - Memperbarui seluruh pemetaan gambar di `src/data/memories.js`, `HeroSection.jsx`, `FinaleSection.jsx`, `LoveLetterSection.jsx`, dan `ParallaxMemoryVoid.jsx` menjadi format `.webp`.
  - Menambahkan atribut `decoding="async"` pada elemen gambar untuk mencegah jank rendering.
- [x] **Task 18.3: Eliminasi Beban GPU Filter Blur saat Scroll Aktif:** [COMPLETED]
  - Menghapus animasi `filter: blur(...)` real-time pada event scroll GSAP di `src/App.jsx`.
  - Transisi scroll kini mengandalkan murni akselerasi hardware GPU (`opacity` & `transform: scale/translate3d`).
- [x] **Task 18.4: Penyesuaian Responsif Layar Ponsel & Lenis Touch:** [COMPLETED]
  - Mengisolasi kalkulasi parallax track 3-lapis di `ParallaxMemoryVoid.jsx` hanya untuk desktop (`md:`), sehingga ponsel tidak terbebani rendering 21 foto bergerak di balik kartu konten.
  - Menyesuaikan radius blur lingkaran pendar menjadi adaptif (`blur-[50px] sm:blur-[140px]`).
  - Menyelaraskan setting Lenis `touchMultiplier: 1.0` untuk scroll layar sentuh yang natural dan bebas jitter.
- [x] **Task 18.5: Verifikasi Build & Browser Testing:** [COMPLETED]
  - Build produksi lolos sempurna (`vite build` sukses dalam 16.48s).
  - Verifikasi browser subagent mengonfirmasi interaksi lancar, visual jernih, dan console 100% bebas error.
