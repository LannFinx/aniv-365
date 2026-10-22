# DESIGN RULES: HERO-ALIGNED MOTION GRAPHIC SCROLLYTELLING
**Project:** Website 1st Anniversary — Tri & Ahnaf  
**Visual Theme:** Pure OLED Black (`#000000`), Electric Cyan Glow (`#00D2FF`), Cobalt Blue Halo (`#0070F3`), Diamond White (`#FFFFFF`)  
**Design Benchmark & Visual Anchor:** `HeroSection.jsx` (Bold Geometric Sans Typography & Cinematic Cutout Depth)  
**Target Girl's Full Name:** Tri Ayuaningsih  
**Directives Anchor:** `.agents/skills/` & `.agents/plan/PLAN.md`  

---

## 0. MANDATORY DIRECTIVE: Skill Integration, Plan Adherence & Clean Code

1. **Wajib Menggunakan Skills (`.agents/skills/`):**  
   Setiap langkah rekayasa, pemilihan token visual, kurva motion (GSAP), struktur komponen, dan review anti-slop WAJIB secara aktif mengadopsi panduan dan standar dari `.agents/skills/`:
   - `ui-ux-pro-max` & `impeccable`: Untuk standar craft tingkat tinggi, ritme spasial, kurva easing, dan audit visual quality floor.
   - `design-system` & `ui-styling`: Untuk arsitektur token tiga lapis (primitive → semantic → component) dan styling glassmorphism presisi.
   - `design-taste-frontend` (`SKILL (2).md`): Untuk penegakan anti-slop (larangan template generik, arsitektur headline maksimal 2 baris, larangan dummy lorem ipsum).

2. **Wajib Mengikuti Plan Secara Teratur (`.agents/plan/PLAN.md`):**  
   Setiap eksekusi WAJIB mengikuti tahapan di `.agents/plan/PLAN.md` secara ketat:
   - Dilarang melompati task atau mengerjakan tugas di luar urutan yang telah ditetapkan.
   - Kerjakan section per section secara bertahap (*Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5 → Fase 6 → Fase 7*).
   - Setiap task harus dipoles hingga benar-benar matang (visual tajam, 60 FPS, foto asli terintegrasi) sebelum melangkah ke task berikutnya.
   - Update checklist di `.agents/plan/PLAN.md` dan `.agents/plan/TASK.md` seiring berjalannya progres.

3. **Clean Code & Modular Architecture (Zero Comments):**  
   - Seluruh komponen harus modular dan terpisah rapi per section file di `src/components/`.
   - Data dipisahkan secara terpusat di `src/data/`.
   - Kode harus *clean* dan *self-documenting* menggunakan penamaan yang jelas dan intuitif.
   - **Dilarang menyertakan komentar dalam kode** (tanpa komentar penjelasan, tanpa komentar penanda section panjang, dan tanpa blok kode mati).

---

## 1. Typography & Aesthetic Harmony (The Hero Section Benchmark)

Karena Hero Section telah terbukti memberikan impresi visual yang sangat kuat, modern, dan disukai pengguna, maka **SELURUH KOMPONEN DAN FASE WAJIB MENGADOPSI ATURAN TIPOGRAFI & SUASANA YANG SAMA DENGAN HERO SECTION**:

### 🔤 Standar Tipografi Tunggal (No Serif Clash)
1. **Primary Display / Headline Font:** `Outfit` (`font-display`).  
   - Karakter: Geometris, bold/black, punchy, modern luxury, tracking rapat (`tracking-tight` atau `tracking-[-0.04em]`).  
   - Digunakan untuk: Judul besar, monogram, nama "Tri Ayuaningsih", judul bab perjalanan, nama bulan, dan headline penutup.
2. **Body & Supporting Font:** `Plus Jakarta Sans` (`font-sans`).  
   - Karakter: Bersih, lapang, elegan, sangat nyaman dibaca, sans-serif geometris modern.  
   - Digunakan untuk: Paragraf cerita cinta, tanggal/penanggalan, lirik lagu, teks surat pribadi, dan micro-annotations.
3. **Pemberhentian Penggunaan Font Serif / Kaligrafi Kuno:**  
   - Dilarang mencampurkan font serif antik (`font-serif` / Cormorant Garamond) atau kaligrafi ornamen vintage yang bertentangan dengan gaya modern Hero Section. Seluruh website harus terasa sebagai satu kesatuan produk sinematik kontemporer.

### 🚫 Yang DILARANG KERAS (Banned "AI-Slop" Patterns):
1. **No Generic 3-Column Feature Cards:** Dilarang membuat baris kartu SaaS generik dengan icon di dalam kotak berwarna di atasnya.
2. **No Faux-Cyberpunk / Robotic AI Clutter:** Dilarang keras menggunakan teks dan badge berformat cyber/robotik alay (seperti `ARCHIVE // 365 DAYS`, `DOSSIER // NO. 365`, `CHAPTER 01`, `SYSTEM STATUS`, `FOTO: Tri`, label monospace teknis kaku, atau penamaan sci-fi/hacker). Gunakan tipografi modern yang hangat, manusiawi, elegan, dan penuh rasa sayang.
3. **No Monospace/Eyebrow Overuse:** Dilarang memakai label kecil bertingkat seperti `[ 01 // OVERVIEW ]` atau pill badge `NEW ·` yang tidak punya fungsi emosional.
4. **No Sliced Pie Wedges:** Dilarang memotong foto wajah Tri & Ahnaf menjadi baji trapesium roda kue melengkung. Foto kenangan harus tampil utuh dan proporsional.
5. **No Muddy Gradients:** Dilarang menggunakan gradien ungu-violet murahan ala template AI standar.
6. **No Thin Hairline Dividers:** Jangan membagi layout dengan garis 1px abu-abu pudar yang membuat tampilan kotor. Gunakan ruang negatif (spatial rhythm) dan kontras intensitas cahaya.
7. **No Wall of Text:** Judul maksimal **2 baris** pada semua ukuran viewport. Teks paragraf maksimal 25 kata per blok dengan tipografi yang tajam dan nyaman dibaca.
8. **No Fake Placeholder Data / Stock Photos:** Gunakan hanya foto autentik dari `assets/tri/` dan narasi asli perjalanan 1 tahun Tri & Ahnaf.

### ✨ Yang WAJIB DITERAPKAN (Craft & Premium Standards):
1. **OLED Pure Depth & Rim Lighting:** Background hitam pekat (`#000000`) dengan efek *cyan rim-light / cobalt backlight glow* layaknya Hero Section.
2. **Beacon Points & Visual Cadence:** Aksen titik pendar cyan kecil (`w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF]`) sebagai jangkar visual yang konsisten di setiap section.
3. **Authentic Photography & Depth Masks:** Mengintegrasikan foto asli Tri & Ahnaf dengan grading kontras yang tajam, drop shadow lembut, dan gradien pudar halus (*bottom fade mask*).
4. **Scrollytelling Like a Rendered Video:** Menggunakan *pinned sections* (layar terkunci saat di-scroll) sehingga elemen bertransformasi layaknya memutar timeline video motion graphic di After Effects / Blender.
5. **One Live Interactive Moment:** Ada fitur interaktif berkesan yang menyatu dengan alur cerita (pemutar vinyl kenangan, interaksi surat cinta modern, pembuka monogram).

---

## 2. Aturan Eksekusi Task Step-by-Step (Anti-Rushing & Strict User Approval Protocol)

Untuk memastikan setiap bagian memiliki kualitas tingkat tinggi (*award-winning craft*) dan tidak dibuat terburu-buru, WAJIB mengikuti protokol ketat ini:

1. **One Section per Turn ONLY (Dilarang Memborong/Melompat):** Kerjakan tepat **SATU fase/section** saja dalam satu waktu. DILARANG KERAS langsung mengerjakan atau melompat ke fase berikutnya tanpa konfirmasi.
2. **Review & Approval Gate:** Setelah satu fase/section selesai dikerjakan dan diverifikasi via browser subagent, agen WAJIB berhenti dan mempresentasikan hasilnya kepada pengguna untuk dicek dan disetujui terlebih dahulu sebelum melangkah ke fase selanjutnya.
3. **Foto Asli Terkurasi:** Setiap slot foto harus mengambil file spesifik dari `assets/tri/` (misal: `wisudasmk`, `photoboothlucu`, `fotobareng`, `senyum_hoodie`, `transparan_ahnaftri.png`) yang sesuai dengan tema momennya.
4. **Focus-Pull & Blur In-Out:** Setiap pergantian scene harus mengimplementasikan transisi sinematik: elemen masuk dengan `filter: blur(16px) -> blur(0px)` dan keluar secara anggun saat scroll berlanjut.
5. **Browser Testing Gate:** Setiap penyelesaian satu task, cek langsung di browser (visual audit & 60 FPS check) untuk memastikan tidak ada jank atau alignment yang patah.

---

## 3. Color System & Light Tokens

| Token | Nilai Hex / HSL | Penggunaan & Karakter |
|---|---|---|
| `--bg-void` | `#000000` | Pure Black (OLED depth, kontras maksimal) |
| `--bg-surface` | `#050811` | Obsidian dark blue (surface layer / card canvas) |
| `--blue-glow-core` | `#0070F3` | Cobalt Blue murni (ambient backlighting) |
| `--blue-neon` | `#00D2FF` / `#38BDF8` | Electric Cyan / Neon rim light (highlights & beacon dots) |
| `--text-primary` | `#FFFFFF` | Diamond White (100% opacity, crisp headlines) |
| `--text-secondary` | `#94A3B8` | Slate Blue-White (60-70% opacity untuk body/captions) |
| `--font-display` | `Outfit, sans-serif` | Tipografi Display Geometris Utama (Headlines & Badges) |
| `--font-sans` | `Plus Jakarta Sans, sans-serif` | Tipografi Body & Narasi Humanis |
