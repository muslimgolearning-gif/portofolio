/* =====================================================
   DATA KONTEN — ganti gambar, link, judul, tahun di sini
   ===================================================== */
const B = 'https://i.ibb.co.com/';              // basis URL gambar (ImgBB)
const DESC = {
  'Feed Instagram':'Desain konten media sosial untuk kebutuhan publikasi, informasi, dan komunikasi visual.',
  'Poster':'Poster acara dengan fokus pada hierarki informasi, komposisi visual, dan daya tarik audiens.',
  'Banner':'Desain banner dan media publikasi acara dengan tampilan profesional dan mudah dibaca.',
  'ID Card':'Desain ID card untuk identitas organisasi, kepanitiaan, dan acara.',
  'Video':'Video dokumentasi acara yang dirangkai menjadi recap singkat, rapi, dan menarik.'
};
// c=kategori, t=judul, y=tahun, tl=tools, r=role, img=gambar, v=link video (opsional)
const WORKS = [
  {c:'Feed Instagram',t:'Instagram Feed Design',y:'2025',tl:'Canva',r:'Designer',img:'NnWbRvQf/Whats-App-Image-2026-06-10-at-11-06-19.jpg',x:'@paigathering2025, @alquds_arrasyid, @islamiceducationfair2026, @matafpaiumy2025, @baksaf2026'},
  {c:'Feed Instagram',t:'Instagram Feed Design',y:'2022-2023',tl:'Canva',r:'Designer',img:'Dffj6qy1/Whats-App-Image-2026-06-10-at-11-06-04.jpg',x:'@alqud_arrasyid'},
  {c:'Feed Instagram',t:'Instagram Feed Design',y:'2022-2023',tl:'Canva',r:'Designer',img:'1Y02gFdT/Whats-App-Image-2026-06-10-at-11-05-38-1.jpg',x:'@himapaiumy'},
  {c:'Poster',t:'Event Poster Design',tl:'Canva',r:'Designer',img:'BHvtHD22/Cyan-dan-Hijau-Elegan-Kajian-dan-Ceramah-Islam-A4.png'},
  {c:'Poster',t:'Event Poster Design',tl:'Canva',r:'Designer',img:'jZ6mRQCw/TAMPLATE-POSTER-DIVISI-6.png'},
  {c:'Poster',t:'Event Poster Design',tl:'Canva',r:'Designer',img:'YqqrZcp/TAMPLATE-POSTER-DIVISI-7.png'},
  {c:'Poster',t:'Event Poster Design',tl:'Canva',r:'Designer',img:'XfP9sMdF/POSTER-TEMPLATE-2627-7.png'},
  {c:'Poster',t:'Event Poster Design',tl:'Canva',r:'Designer',img:'pvKW9HK1/AKHIR-PERIODE.png'},
  {c:'Poster',t:'Social Campaign Poster',y:'2025',tl:'Canva',r:'Designer',img:'v6TK9GKk/TEMPLATE-DESAIN-RPC.png',d:'Desain poster kampanye atau publikasi digital dengan pesan visual yang kuat.'},
  {c:'Banner',t:'Event Banner & Backdrop',y:'2024',tl:'Canva',r:'Designer',img:'SwJHXYcV/Banner-mbkm.png'},
  {c:'ID Card',t:'ID Card HIMA PAI UMY',y:'2026-2027',tl:'Canva',r:'Designer',img:'1fk2MVwX/ID-CARD-LANYARD-HIMA-PAI-UMY-5.jpg'},
  {c:'ID Card',t:'ID Card PAI Gathering',y:'2025',tl:'Canva',r:'Designer',img:'gL81jQFH/ID-CARD-LANYARD-HIMA-PAI-UMY-4.jpg'},
  {c:'ID Card',t:'ID Card MATAF FSIP 2026',tl:'Canva',r:'Designer',img:'kg4q9RpT/ID-CARD-LANYARD-HIMA-PAI-UMY-3.jpg'},
  {c:'Video',t:'Company Profile',y:'2024',tl:'CapCut, Lightroom',r:'Videographer & Video Editor',img:'HpKt5zgf/Whats-App-Image-2026-06-10-at-11-17-51.jpg',v:'https://www.youtube.com/embed/kJJopX_UAzQ'},
  {c:'Video',t:'Company Profile HIMA PAI UMY',y:'2024',tl:'CapCut, Lightroom',r:'Videographer & Video Editor',img:'SDv70qtP/sddefault-1.jpg',v:'https://www.youtube.com/embed/wuH_fImnUFA'}
];
const SOCIAL = ['C50jd7BQ/Whats-App-Image-2026-06-10-at-11-06-18-1.jpg','Dffj6qy1/Whats-App-Image-2026-06-10-at-11-06-04.jpg','Q3bf8MJy/Whats-App-Image-2026-06-10-at-11-06-04-1.jpg','1Y02gFdT/Whats-App-Image-2026-06-10-at-11-05-38-1.jpg','f3w8WVn/Whats-App-Image-2026-06-10-at-11-05-38.jpg','yBWDPynY/Whats-App-Image-2026-06-10-at-11-22-31.jpg','rfGPg2c9/FEED-SATUAN-11.png','nNdzMM6r/Feed-HIMA-2526-15.png'];
const POSTERS = ['sdCs03W5/TEMPLATE-DESAIN-RPC-1.png','jZ6mRQCw/TAMPLATE-POSTER-DIVISI-6.png','YqqrZcp/TAMPLATE-POSTER-DIVISI-7.png','XfP9sMdF/POSTER-TEMPLATE-2627-7.png','pvKW9HK1/AKHIR-PERIODE.png','v6TK9GKk/TEMPLATE-DESAIN-RPC.png','SwJHXYcV/Banner-mbkm.png','wZ6dFG0j/Selamat-Sukses.png','0y4FShD0/BAKSAF-2026-3.png'];
const IDS = WORKS.filter(w => w.c === 'ID Card');
// Foto prestasi: tambah/ganti di sini. Caption = keterangan opsional.
const ACH = [
  {img:'0p15tYqy/Whats-App-Image-2026-11-24-at-21-24-00-1.jpg',cap:'AICIS 2026'},
  {img:'QFWGkbf7/Whats-App-Image-2026-11-24-at-21-23-59.jpg',cap:'AICIS 2026'},
  {img:'Kx3PMnXn/Whats-App-Image-2026-11-24-at-21-24-00.jpg',cap:'AICIS 2026'}
];
const AWARD = {name:'AICIS 2026 (Annual International Conference on Islamic, Science, and Society)',org:'Kementerian Agama',year:'2026',
  desc:'Finalis sekaligus meraih 3 kategori juara di UIN Siber Syekh Nurjati Cirebon:',list:['Sinematografi Terbaik (Juara 2)','Penyuntingan Terbaik (Juara 2)','Paling Kreatif (Juara 2)']};
// link: YouTube embed / Google Drive / Instagram. Kosongkan ('') untuk pesan "Video link belum ditambahkan."
const VIDEOS = [
  {t:'Company Profile',type:'YouTube',dur:'14 seconds',tl:'CapCut',link:'https://www.youtube.com/embed/kJJopX_UAzQ',img:'HpKt5zgf/Whats-App-Image-2026-06-10-at-11-17-51.jpg'},
  {t:'Company Profile HIMA PAI UMY',type:'YouTube',dur:'14 seconds',tl:'CapCut',link:'https://www.youtube.com/embed/wuH_fImnUFA',img:'SDv70qtP/sddefault-1.jpg'},
  {t:'Event Documentation Recap',type:'Event Recap Instagram Reels / TikTok',dur:'30–60 seconds',tl:'CapCut',link:'https://www.instagram.com/reel/DbVzlXgPhvP/',img:'pvznfX0h/Whats-App-Image-2026-11-24-at-21-42-13.jpg'},
  {t:'Event Video',type:'Vlog / Content Creation',dur:'1–3 minutes',tl:'CapCut',link:'https://drive.google.com/file/d/1bAjW0BRxdMxmL5_YAJ112edShH0DX3FI/view?usp=drivesdk',img:'WNzr4CWy/Blue-Minimalist-Solitude-You-Tube-Thumbnail.jpg'},
  {t:'Event Documentation Recap',type:'Event Recap Instagram Reels / TikTok',dur:'30–60 seconds',tl:'CapCut',link:'https://drive.google.com/drive/folders/1u9L5pC3IxnErhedTaRdsUftI0dewoQA3?usp=drive_link',img:'WvnYt25b/Whats-App-Image-2026-11-24-at-22-15-29.jpg'},
  {t:'Event Documentation Recap',type:'Event Recap Instagram Reels / TikTok',dur:'30–60 seconds',tl:'CapCut',link:'https://drive.google.com/drive/folders/18dQpAgNVMO4ritBUMl1h5ajR6NooxtGk?usp=sharing',img:'qY4GDCS4/Whats-App-Image-2026-11-24-at-22-15-29-1.jpg'}
];
const EXPERTISE = [
  ['🎬','Video Editing','Mengedit video pendek, dokumentasi acara, vlog, reels, dan konten media sosial.'],
  ['✨','Content Creation','Membuat konsep dan produksi konten untuk Instagram, TikTok, dan publikasi digital.'],
  ['🎨','Visual Design','Membuat desain feed, poster, id card, banner, dan kebutuhan publikasi visual.'],
  ['📱','Social Media','Mengelola konten, publikasi, dan komunikasi visual untuk organisasi maupun acara.']
];
const TOOLS = ['Canva','CapCut','Lightroom','VN'];
const SKILLS = ['Content Creation','Video Editing','Feed Instagram Design','Poster Design','ID Card Design','Banner Design','Social Media Management','Photography','Videography','Event Documentation','Reels & TikTok Editing','Basic Motion Graphic'];
const MOTION = [
  ['Aa','Dynamic Caption','Caption dinamis untuk membuat video lebih mudah dipahami.'],
  ['⌁','Text Animation','Animasi teks sederhana untuk menonjolkan informasi penting.'],
  ['▭','Lower Third','Elemen nama/judul pembicara untuk video talking-head atau dokumentasi.'],
  ['♫','Social Media Motion','Elemen gerak sederhana untuk reels, TikTok, dan konten promosi.']
];
const EXP = [
  ['Freelance Content Creator','Videographer, Photographer, Content Creation, Vlogging, Producing','Membuat dan mengolah konten visual berupa foto, video, vlog, serta dokumentasi kegiatan. Bertanggung jawab dalam proses pengambilan gambar, editing, penyusunan konsep konten, dan produksi materi visual untuk kebutuhan media sosial.'],
  ['Duta Qur’an Indonesia','Tim Media Lembaga','Mendukung kebutuhan publikasi dan dokumentasi lembaga melalui pembuatan konten media, pengelolaan materi visual, serta penyusunan konten untuk komunikasi digital.'],
  ['Al-Quds Ar-Rasyid','Sekretaris Lembaga, Tim Media, Social Media Handler','Mengelola konten media sosial, membantu kebutuhan administrasi organisasi, serta terlibat dalam publikasi kegiatan dan dokumentasi visual lembaga.'],
  ['Baksaf 2025–2026','Medkom / Media Komunikasi','Terlibat dalam tim media komunikasi untuk mendukung publikasi, dokumentasi, dan penyampaian informasi kegiatan melalui media sosial.'],
  ['Mataf PAI 2025','Medkom / Media Komunikasi','Mendukung kebutuhan konten, dokumentasi, dan publikasi kegiatan melalui media digital.'],
  ['Islamic Education Fair','Medkom / Media Komunikasi','Membantu proses dokumentasi dan publikasi acara, termasuk pengolahan materi visual untuk kebutuhan media sosial.'],
  ['PAI Gathering','Medkom / Media Komunikasi','Terlibat dalam dokumentasi dan publikasi kegiatan, serta mendukung kebutuhan komunikasi visual acara.']
];

/* =====================================================
   HELPER
   ===================================================== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const src = p => p.startsWith('http') ? p : B + p;
const img = (p, alt) => `<img src="${src(p)}" alt="${esc(alt)}" loading="lazy">`;
const meta = a => `<div class="meta">${a.filter(Boolean).map(m => `<span>${esc(m)}</span>`).join('')}</div>`;

/* =====================================================
   RENDER SECTION
   ===================================================== */
$('#expertise').innerHTML = EXPERTISE.map(e => `<div class="card exp-card reveal"><span class="ico">${e[0]}</span><h3>${e[1]}</h3><p>${e[2]}</p></div>`).join('');
$('#tools').innerHTML = TOOLS.map(t => `<span class="pill t">${t}</span>`).join('');
$('#skillpills').innerHTML = SKILLS.map(s => `<span class="pill">${esc(s)}</span>`).join('');
$('#marquee').innerHTML = [...TOOLS, ...SKILLS, ...TOOLS, ...SKILLS].map(s => `<span>${esc(s)}</span>`).join('');   // diduplikasi agar loop mulus

// Selected Works + filter
const cats = ['All','Feed Instagram','Poster','Banner','ID Card','Video'];
$('#filters').innerHTML = cats.map((c,i) => `<button class="${i?'':'on'}" data-c="${c}">${c}</button>`).join('');
function workCard(w, i) {
  return `<article class="card reveal ${w.v?'vid':''}" data-c="${w.c}">
    <div class="thumb" data-i="${i}">${img(w.img, w.t)}</div>
    <div class="body"><span class="tag">${w.c}</span><h3>${esc(w.t)}</h3>
    <p>${esc(w.d || DESC[w.c])}</p>${w.x ? `<p><small>${esc(w.x)}</small></p>` : ''}
    ${meta([w.y, w.tl, w.r])}<button class="btn dark" data-i="${i}">${w.v ? 'Watch Video' : 'View Project'}</button></div></article>`;
}
$('#workGrid').innerHTML = WORKS.map(workCard).join('');
$('#workGrid').addEventListener('click', e => {
  const el = e.target.closest('[data-i]'); if (!el) return;
  const w = WORKS[el.dataset.i];
  w.v ? openVideo(w.v) : openLightbox(w.img, w.t);
});
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#filters button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('#workGrid .card').forEach(card => {
    const show = b.dataset.c === 'All' || card.dataset.c === b.dataset.c;
    if (show) { card.classList.remove('hide'); requestAnimationFrame(() => card.classList.remove('fade')); }
    else { card.classList.add('fade'); setTimeout(() => card.classList.add('hide'), 300); }   // fade lalu sembunyikan
  });
});

// Galeri masonry
const gallery = (id, items) => $(id).innerHTML = items.map(it => {
  const o = typeof it === 'string' ? {img: it} : it;
  return `<figure class="reveal" data-img="${o.img}" data-cap="${esc(o.cap||'')}">${img(o.img, o.cap || 'Karya Muadzinul Ummah')}</figure>`;
}).join('');
gallery('#socialGrid', SOCIAL); gallery('#posterGrid', POSTERS); gallery('#achGrid', ACH);
document.querySelectorAll('.masonry').forEach(m => m.addEventListener('click', e => {
  const f = e.target.closest('figure'); if (f) openLightbox(f.dataset.img, f.dataset.cap);
}));

// ID Card
$('#idGrid').innerHTML = IDS.map(w => `<article class="card idc reveal"><div class="thumb" data-img="${w.img}" data-cap="${esc(w.t)}">${img(w.img, w.t)}</div>
  <div class="body"><span class="tag">ID Card</span><h3>${esc(w.t)}</h3>${meta([w.y, w.tl, 'Role: ' + w.r])}</div></article>`).join('');
$('#idGrid').addEventListener('click', e => {
  const t = e.target.closest('.thumb'); if (t) openLightbox(t.dataset.img, t.dataset.cap);
});

// Prestasi
$('#award').innerHTML = `<h3>${esc(AWARD.name)}</h3><p>${AWARD.org} · ${AWARD.year}</p><p>${AWARD.desc}</p><ul>${AWARD.list.map(l => `<li>${l}</li>`).join('')}</ul>`;

// Video
$('#videoGrid').innerHTML = VIDEOS.map((v,i) => `<article class="card vid reveal"><div class="thumb" data-v="${i}">${img(v.img, v.t)}</div>
  <div class="body"><span class="tag">${esc(v.type)}</span><h3>${esc(v.t)}</h3><p>${DESC.Video}</p>${meta([v.dur, v.tl])}
  <button class="btn dark" data-v="${i}">Watch Video</button></div></article>`).join('');
$('#videoGrid').addEventListener('click', e => {
  const el = e.target.closest('[data-v]'); if (el) openVideo(VIDEOS[el.dataset.v].link);
});

// Motion & Experience
$('#motionGrid').innerHTML = MOTION.map(m => `<div class="card exp-card reveal"><span class="ico">${m[0]}</span><h3>${m[1]}</h3><p>${m[2]}</p></div>`).join('');
$('#timeline').innerHTML = EXP.map(x => `<div class="tl reveal"><h3>${esc(x[0])}</h3><div class="r">${esc(x[1])}</div><p>${esc(x[2])}</p></div>`).join('');

/* =====================================================
   MODAL: LIGHTBOX & VIDEO
   ===================================================== */
function openLightbox(p, cap) {
  $('#lbImg').src = src(p); $('#lbImg').alt = cap || 'Karya'; $('#lbCap').textContent = cap || '';
  $('#lightbox').classList.add('open');
}
// Ubah link biasa jadi link embed bila memungkinkan
function toEmbed(l) {
  if (l.includes('youtube.com/embed')) return l;
  const d = l.match(/drive\.google\.com\/file\/d\/([^/]+)/); if (d) return `https://drive.google.com/file/d/${d[1]}/preview`;
  const r = l.match(/instagram\.com\/reel\/([^/?]+)/); if (r) return `https://www.instagram.com/reel/${r[1]}/embed`;
  return null;                                   // folder Drive, TikTok, dll → tombol buka link
}
function openVideo(link) {
  const box = $('#vbox');
  if (!link) box.innerHTML = '<p>Video link belum ditambahkan.</p>';
  else {
    const e = toEmbed(link);
    box.innerHTML = (e ? `<iframe src="${e}" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen title="Video"></iframe>`
                       : '<p>Video ini dibuka di tab baru.</p>') +
      (e ? '' : `<a class="btn" target="_blank" rel="noopener" href="${link}">Buka Video</a>`);
  }
  $('#vmodal').classList.add('open');
}
function closeModals() { document.querySelectorAll('.modal').forEach(m => m.classList.remove('open')); $('#vbox').innerHTML = ''; }
document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => {
  if (e.target === m || e.target.classList.contains('close')) closeModals();
}));
document.addEventListener('keydown', e => e.key === 'Escape' && closeModals());

/* =====================================================
   NAVBAR, SCROLL, ANIMASI
   ===================================================== */
const burger = $('#burger'), menu = $('#menu');
burger.onclick = () => { burger.classList.toggle('open'); menu.classList.toggle('open'); };
menu.addEventListener('click', e => { if (e.target.tagName === 'A') { burger.classList.remove('open'); menu.classList.remove('open'); } });  // smooth scroll lewat CSS

const totop = $('#totop');
addEventListener('scroll', () => totop.classList.toggle('show', scrollY > 600), {passive: true});
totop.onclick = () => scrollTo({top: 0, behavior: 'smooth'});

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
}), {threshold: .12});
document.querySelectorAll('.reveal, .title').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(el); });

// Cursor-style element (hanya perangkat dengan mouse)
const cur = $('#cursor');
addEventListener('mousemove', e => { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; });
document.addEventListener('mouseover', e => {
  const big = e.target.closest('a,button,.thumb,figure');
  cur.style.width = cur.style.height = big ? '46px' : '22px';
});

// Fallback gambar gagal dimuat
document.addEventListener('error', e => {
  if (e.target.tagName === 'IMG') { e.target.style.display = 'none'; e.target.parentElement.classList.add('fail'); }
}, true);