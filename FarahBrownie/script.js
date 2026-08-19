const menuItems = [
    { id:1, name:"Classic Fudge",     desc:"Brownies original lumer, dark chocolate 70%, tekstur dense yang bikin nagih.", price:25000, category:"classic", badge:"bestseller", colors:["#3D1A06","#5C2D0A","#6B3410","#4A2008"] },
    { id:2, name:"Cream Cheese Swirl",desc:"Perpaduan brownies cokelat pekat dengan swirl cream cheese yang creamy.",     price:30000, category:"classic", badge:null,         colors:["#4A2008","#fff8ef","#5C2D0A","#fff8ef"] },
    { id:3, name:"Salted Caramel",    desc:"Brownies fudgy dengan drizzle karamel asin. Sweet & salty perfection.",       price:32000, category:"premium", badge:"bestseller", colors:["#6B3410","#BA7517","#4A2008","#EF9F27"] },
    { id:4, name:"Red Velvet Brownie",desc:"Sentuhan red velvet kaya dengan lapisan cream cheese frosting tipis.",        price:33000, category:"premium", badge:"new",        colors:["#A32D2D","#5C2D0A","#E24B4A","#3D1A06"] },
    { id:5, name:"Matcha Lava",       desc:"Brownies matcha premium dengan lelehan white chocolate di dalamnya.",         price:35000, category:"premium", badge:"new",        colors:["#27500A","#3B6D11","#085041","#639922"] },
    { id:6, name:"Milo Dinosaurus",   desc:"Dibalut Milo powder, dihias biskuit dinosaurus. Nostalgia banget!",           price:32000, category:"spesial", badge:"bestseller", colors:["#633806","#4A2008","#854F0B","#3D1A06"] },
    { id:7, name:"Triple Choco",      desc:"Dark, milk, dan white chocolate dalam satu gigitan. Hardcore chocoholic.",    price:38000, category:"premium", badge:null,         colors:["#2B1A0E","#6B3410","#fff8ef","#4A2008"] },
  ];

  function fmt(n) { return 'Rp ' + n.toLocaleString('id-ID'); }

  function renderMenu(category) {
    const grid = document.getElementById('menuGrid');
    const filtered = category === 'semua' ? menuItems : menuItems.filter(i => i.category === category);
    grid.innerHTML = filtered.map(item => `
      <div class="menu-card">
        <div class="menu-card-img">${item.colors.map(c=>`<div class="thumb-sq" style="background:${c}"></div>`).join('')}</div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <div class="menu-card-name">${item.name}</div>
            ${item.badge ? `<span class="menu-card-badge badge-${item.badge}">${item.badge==='bestseller'?'★ TERLARIS':'✦ BARU'}</span>` : ''}
          </div>
          <div class="menu-card-desc">${item.desc}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price">${fmt(item.price)}</span>
          </div>
        </div>
      </div>`).join('');
  }

  function filterMenu(category, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(category);
  }

  // ── TICKER ──
  const words = ['BROWNIES UMIQ','DARK CHOCOLATE','FRESH DAILY','JAKARTA','HUBUNGI KAMI','LUMER BANGET'];
  const track = document.getElementById('tickerTrack');
  let tickerHtml = '';
  for(let i=0;i<4;i++) words.forEach(w => { tickerHtml += `<span class="ticker-item">${w}<span class="ticker-dot"> ✦ </span></span>`; });
  track.innerHTML = tickerHtml;

  // ── QUIZ ──
  const TOTAL_STEPS = 4;
  let answers = [];
  let currentStep = 1;

  const results = [
    {
      id: 'classic',
      name: 'CLASSIC FUDGE',
      price: 'Rp 25.000',
      desc: 'Kamu adalah jiwa klasik yang menghargai kualitas sejati. Tidak butuh banyak embel-embel — dark chocolate 70% yang rich dan tekstur dense yang lumer sudah cukup bikin hari kamu sempurna.',
      personality: '☕ The Purist — Simple is always the best.',
      colors: ['#3D1A06','#5C2D0A','#6B3410','#4A2008'],
      emoji: '☕'
    },
    {
      id: 'cream_cheese',
      name: 'CREAM CHEESE SWIRL',
      price: 'Rp 30.000',
      desc: 'Kamu suka keseimbangan yang sempurna — perpaduan brownies cokelat pekat dengan swirl cream cheese yang creamy. Kamu tipe orang yang punya selera tinggi tapi tetap relatable.',
      personality: '🧀 The Balanced — Sweet meets creamy, perfect harmony.',
      colors: ['#4A2008','#fff8ef','#5C2D0A','#fff8ef'],
      emoji: '🧀'
    },
    {
      id: 'salted_caramel',
      name: 'SALTED CARAMEL',
      price: 'Rp 32.000',
      desc: 'Kamu hidup di antara dua dunia — manis dan asin, serius dan fun. Drizzle karamel asin di atas brownies fudgy adalah representasi sempurna dari kepribadianmu yang penuh kejutan.',
      personality: '🧂 The Adventurer — Always keeping people on their toes.',
      colors: ['#6B3410','#BA7517','#4A2008','#EF9F27'],
      emoji: '✨'
    },
    {
      id: 'red_velvet',
      name: 'RED VELVET BROWNIE',
      price: 'Rp 33.000',
      desc: 'Kamu dramatic dalam cara terbaik! Suka tampil beda, punya estetika, dan selalu ingin memberikan kesan yang tak terlupakan. Red velvet dengan cream cheese frosting adalah ekspresi dirimu.',
      personality: '💅 The Showstopper — Born to stand out.',
      colors: ['#A32D2D','#5C2D0A','#E24B4A','#3D1A06'],
      emoji: '❤️'
    },
    {
      id: 'matcha',
      name: 'MATCHA LAVA',
      price: 'Rp 35.000',
      desc: 'Kamu sophisticated dan punya taste yang unik. Suka hal-hal yang tidak biasa, appreciates complexity, dan selalu jadi yang pertama mencoba sesuatu yang baru. Matcha lava adalah kamu.',
      personality: '🍵 The Trendsetter — Always ahead of the curve.',
      colors: ['#27500A','#3B6D11','#085041','#639922'],
      emoji: '🌿'
    },
    {
      id: 'milo',
      name: 'MILO DINOSAURUS',
      price: 'Rp 32.000',
      desc: 'Kamu fun, nostalgic, dan tidak pernah terlalu serius. Biskuit dinosaurus dan Milo powder adalah simbol bahwa inner child-mu masih hidup dan menjadikan hidupmu lebih berwarna!',
      personality: '🦕 The Nostalgia Kid — Young at heart, always.',
      colors: ['#633806','#4A2008','#854F0B','#3D1A06'],
      emoji: '🦕'
    },
    {
      id: 'triple',
      name: 'TRIPLE CHOCO',
      price: 'Rp 38.000',
      desc: 'Kamu all-or-nothing. Kalau mau sesuatu, harus yang terbaik dan paling maksimal. Dark, milk, dan white chocolate dalam satu gigitan — karena kenapa harus pilih satu kalau bisa semua?',
      personality: '🔥 The Maximalist — Go big or go home.',
      colors: ['#2B1A0E','#6B3410','#fff8ef','#4A2008'],
      emoji: '💪'
    }
  ];

  // Build progress dots
  function buildProgress() {
    const prog = document.getElementById('quizProgress');
    prog.innerHTML = '';
    for (let i = 1; i <= TOTAL_STEPS; i++) {
      const dot = document.createElement('div');
      dot.className = 'progress-dot' + (i === currentStep ? ' active' : i < currentStep ? ' done' : '');
      prog.appendChild(dot);
    }
  }

  function selectOption(btn) {
    const parent = btn.closest('.quiz-options');
    parent.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const stepNum = parseInt(btn.closest('.quiz-step').id.split('-')[1]);
    document.getElementById('nextBtn-' + stepNum).classList.add('ready');
  }

  function nextStep(current) {
    const selected = document.querySelector('#qstep-' + current + ' .quiz-option.selected');
    if (!selected) return;
    answers[current - 1] = selected.dataset.val;

    document.getElementById('qstep-' + current).classList.remove('active');
    currentStep = current + 1;
    document.getElementById('qstep-' + currentStep).classList.add('active');
    buildProgress();
    window.scrollTo({ top: document.getElementById('quiz').offsetTop - 80, behavior: 'smooth' });
  }

  function calcResult() {
    // Scoring system
    const score = { classic:0, cream_cheese:0, salted_caramel:0, red_velvet:0, matcha:0, milo:0, triple:0 };

    // Q1: suasana
    if (answers[0] === 'classic')   { score.classic += 3; score.cream_cheese += 1; }
    if (answers[0] === 'premium')   { score.red_velvet += 3; score.salted_caramel += 2; score.triple += 1; }
    if (answers[0] === 'unique')    { score.matcha += 3; score.salted_caramel += 2; }
    if (answers[0] === 'nostalgia') { score.milo += 3; score.classic += 1; }

    // Q2: rasa
    if (answers[1] === 'choco')      { score.classic += 3; score.triple += 3; }
    if (answers[1] === 'creamy')     { score.cream_cheese += 3; score.red_velvet += 2; }
    if (answers[1] === 'sweet-salty') { score.salted_caramel += 4; }
    if (answers[1] === 'matcha')     { score.matcha += 4; }

    // Q3: tekstur
    if (answers[2] === 'fudgy')    { score.classic += 2; score.salted_caramel += 2; score.triple += 1; }
    if (answers[2] === 'layered')  { score.cream_cheese += 3; score.red_velvet += 3; }
    if (answers[2] === 'crunchy')  { score.milo += 3; score.salted_caramel += 1; }
    if (answers[2] === 'dense')    { score.classic += 2; score.triple += 3; }

    // Q4: kebiasaan
    if (answers[3] === 'alone')   { score.matcha += 2; score.classic += 2; }
    if (answers[3] === 'friends') { score.milo += 2; score.triple += 2; }
    if (answers[3] === 'gift')    { score.red_velvet += 3; score.cream_cheese += 2; }
    if (answers[3] === 'photo')   { score.red_velvet += 2; score.matcha += 2; score.salted_caramel += 1; }

    return Object.entries(score).sort((a,b) => b[1]-a[1])[0][0];
  }

  function showResult() {
    const selected = document.querySelector('#qstep-4 .quiz-option.selected');
    if (!selected) return;
    answers[3] = selected.dataset.val;

    document.getElementById('qstep-4').classList.remove('active');
    const resultId = calcResult();
    const r = results.find(x => x.id === resultId);

    document.getElementById('resultEmoji').textContent = r.emoji;
    document.getElementById('resultName').textContent = r.name;
    document.getElementById('resultPrice').textContent = r.price;
    document.getElementById('resultDesc').textContent = r.desc;
    document.getElementById('resultPersonality').innerHTML = `<span>${r.personality}</span>`;
    document.getElementById('resultColors').innerHTML = r.colors.map(c =>
      `<div class="result-color-dot" style="background:${c}"></div>`).join('');

    document.getElementById('quizProgress').innerHTML = '';
    for (let i = 0; i < TOTAL_STEPS; i++) {
      const dot = document.createElement('div');
      dot.className = 'progress-dot done';
      document.getElementById('quizProgress').appendChild(dot);
    }

    document.getElementById('quizResult').classList.add('active');
    window.scrollTo({ top: document.getElementById('quiz').offsetTop - 80, behavior: 'smooth' });
  }

  function retryQuiz() {
    answers = [];
    currentStep = 1;
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll('.quiz-next-btn').forEach(b => b.classList.remove('ready'));
    document.getElementById('quizResult').classList.remove('active');
    document.getElementById('qstep-1').classList.add('active');
    buildProgress();
    window.scrollTo({ top: document.getElementById('quiz').offsetTop - 80, behavior: 'smooth' });
  }

  buildProgress();

  renderMenu('semua');

  // ── MOBILE MENU ──
  function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }