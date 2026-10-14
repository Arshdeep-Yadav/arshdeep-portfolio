/* ══════════════════════════════════════════════════════════════════════
   ARSHDEEP / AI LAB — INTERACTIVE CANVAS & COMMAND CENTER ENGINE
   ══════════════════════════════════════════════════════════════════════ */

// ── Rich Case Studies Data ───────────────────────────────────────────
const projects = {
  xvit: {
    meta: 'RESEARCH · IEEE RMKMATE’26 · JAN–MAY 2026',
    title: 'Explainable Vision Transformer',
    context: 'High-resolution satellite imagery classification often relies on black-box deep networks. For mission-critical geospatial and environmental auditing, stakeholders need to understand why a model made a specific prediction.',
    problem: 'Standard Vision Transformers (ViT) attend across all image patches, but raw multi-head self-attention maps can be noisy, lack class-specificity, and fail to distinguish critical spectral features from irrelevant background clutter.',
    approach: 'Fine-tuned ViT-B/16 on satellite datasets, integrating Attention Rollout and Grad-CAM for patch-level saliency mapping. Constructed an interpretability pipeline that generates visual explanation heatmaps alongside class probability distributions.',
    stack: 'Python · PyTorch · timm · torchvision · Grad-CAM · OpenCV · Matplotlib',
    role: 'Lead Researcher & First Author',
    status: 'Oral Presentation · IEEE Xplore Published',
    decisions: [
      'Adopted ViT-B/16 over traditional ResNets for global contextual reasoning across large geospatial tiles.',
      'Combined Attention Rollout with Grad-CAM to overcome attention diffusion across deep transformer layers.',
      'Implemented custom patch interpolation to handle variable-resolution satellite image inputs without loss of spatial fidelity.'
    ],
    result: 'Achieved high classification accuracy on multi-class satellite imagery while delivering interpretable patch attribution masks validated for publication at IEEE RMKMATE 2026.',
    learnings: 'Attention is not explanation by itself; post-hoc gradient grounding is essential to prove that high-attention patches actually drove the classification decision.',
    link: 'https://github.com/Arshdeep-Yadav/satellite-vit-xai'
  },
  ipo: {
    meta: 'FINTECH · BLUESTOCK · MAY–JUN 2025',
    title: 'IPO Tracking Platform & Analytics',
    context: 'Retail investors in India face fragmented information across SME and Mainline IPOs—GMP (Grey Market Premium), subscription numbers, DRHP filings, and allotment statuses are scattered across outdated sites.',
    problem: 'Building a real-time, responsive tracking interface that harmonizes volatile financial data feeds, maintains low latency during heavy traffic spikes (listing days), and simplifies complex financial metrics.',
    approach: 'Spearheaded frontend and API integrations for the IPO analytics module. Created dynamic status trackers, subscription gauges, timeline steps, and clean data visualizations tailored for mobile-first retail investors.',
    stack: 'JavaScript · Python · REST APIs · Chart.js / D3 · Responsive CSS · Git',
    role: 'SDE Intern → Team Lead (May–Jun 2025)',
    status: 'Production Core Module',
    decisions: [
      'Decoupled live GMP polling from static DRHP prospectus data to minimize redundant server requests.',
      'Architected modular UI widgets allowing rapid feature rollouts without disrupting existing dashboard views.',
      'Promoted to Team Lead to coordinate sprints, code reviews, and cross-functional alignment between engineering and product.'
    ],
    result: 'Delivered a streamlined, real-time IPO discovery experience serving active fintech users with intuitive subscription tracking and zero-latency UI updates.',
    learnings: 'In fintech product engineering, clarity and trust trump decorative animations. Information density must be paired with immediate scannability.',
    link: 'https://github.com/Arshdeep-Yadav'
  },
  plant: {
    meta: 'AGRITECH · 2025',
    title: 'Plant Disease Detection & Diagnosis',
    context: 'Crop diseases cause catastrophic yield loss in developing agricultural communities where agricultural extension officers are scarce and laboratory diagnosis is inaccessible.',
    problem: 'Field images taken with budget smartphones suffer from variable lighting, noisy backgrounds, partial occlusion, and multiple overlapping symptoms that confuse generic vision models.',
    approach: 'Developed a deep convolutional network pipeline trained on extensive plant pathology datasets. Built a lightweight, accessible Streamlit web interface with real-time image preprocessing, confidence scoring, and treatment recommendations.',
    stack: 'TensorFlow · Keras · OpenCV · Python · Streamlit · Pillow',
    role: 'AI/ML Product Builder',
    status: 'Shipped Prototype',
    decisions: [
      'Employed data augmentation (rotations, color jittering, random crops) to mimic real in-field camera conditions.',
      'Optimized model size using quantization to allow rapid inference on low-cost serverless instances.',
      'Added confidence threshold gating to avoid false diagnoses: low-confidence queries prompt farmers to retake clearer photos.'
    ],
    result: '94%+ test classification accuracy across multi-crop leaf pathologies with sub-second diagnostic turnaround time in browser.',
    learnings: 'A 98% accurate model is useless if farmers cannot understand the recommendation. Pairing detection with human-readable actionable remediation advice made the app practical.',
    link: 'https://github.com/Arshdeep-Yadav'
  },
  object: {
    meta: 'COMPUTER VISION · 2024',
    title: 'Deep Learning Object Detection & Tracking',
    context: 'Real-time video analytics requires continuous balancing between frames-per-second (FPS) throughput and bounding box precision across varying object scales.',
    problem: 'Standard deep detectors struggle with latency lag and missed detections under high-speed video feeds, occlusions, and sudden scene transitions on consumer hardware.',
    approach: 'Engineered an end-to-end detection and multi-object tracking pipeline utilizing modern YOLO architectures coupled with OpenCV video stream management and transfer learning on domain-specific classes.',
    stack: 'YOLO · OpenCV · PyTorch · Python · NumPy',
    role: 'Computer Vision Engineer',
    status: 'Shipped Project',
    decisions: [
      'Selected YOLO architecture for its single-stage regression speed over two-stage R-CNNs for real-time video streams.',
      'Implemented Non-Maximum Suppression (NMS) threshold tuning to eliminate bounding box flicker in consecutive video frames.',
      'Integrated lightweight centroid tracking to maintain object IDs across momentary occlusions.'
    ],
    result: 'Maintained 30+ FPS real-time detection and multi-target tracking on live webcam feeds with robust precision across people, vehicles, and custom objects.',
    learnings: 'In computer vision, the bottleneck is frequently the video frame I/O pipeline rather than the neural network forward pass.',
    link: 'https://github.com/Arshdeep-Yadav'
  },
  stress: {
    meta: 'HEALTHTECH · 2023',
    title: 'Stress Detection via Medical & Biosignal Data',
    context: 'Continuous mental health monitoring requires non-invasive, objective biomarkers rather than retrospective self-reported questionnaires.',
    problem: 'Biosignal datasets (heart rate variability, galvanic skin response, respiration) have high noise-to-signal ratios, individual physiological baselines, and temporal drift.',
    approach: 'Designed an ML pipeline extracting time-domain, frequency-domain, and non-linear biometric features. Evaluated multiple classifiers (Random Forest, SVM, Gradient Boosting) using rigorous cross-validation.',
    stack: 'scikit-learn · Pandas · NumPy · SciPy · Matplotlib · Seaborn',
    role: 'ML Developer',
    status: 'Academic Research',
    decisions: [
      'Extracted HRV features (RMSSD, SDNN, LF/HF ratio) from raw signals based on clinical autonomic nervous system literature.',
      'Applied robust z-score standardization per subject to normalize for individual baseline variance.',
      'Utilized SHAP feature importance to verify that the model relied on genuine physiological stress indicators rather than dataset artifacts.'
    ],
    result: 'Outperformed baseline models by 12% in multi-class stress state prediction while providing interpretable feature contribution rankings.',
    learnings: 'Domain knowledge in signal processing (filtering, windowing, spectral analysis) yields far more performance improvement than blind hyperparameter tuning.',
    link: 'https://github.com/Arshdeep-Yadav'
  },
  iot: {
    meta: 'EMBEDDED & IOT · 2023',
    title: 'Smart Assistive & Environmental Hardware',
    context: 'Assistive technology often carries prohibitive price tags. Accessible, open hardware can provide life-changing mobility and safety solutions for visually impaired and vulnerable individuals.',
    problem: 'Designing low-power, lightweight micro-controller hardware that provides reliable obstacle warning with zero false-alarm fatigue in unpredictable physical environments.',
    approach: 'Built a suite of embedded IoT solutions including a smart ultrasonic blind stick with haptic feedback, an emergency GPS tracker with SMS alert dispatch, and ambient environmental monitoring using ESP32.',
    stack: 'ESP32 · Arduino · C++ · MQTT · Ultrasonic Sensors · GPS/GSM Modules',
    role: 'Hardware & Embedded Builder',
    status: 'Working Hardware Prototypes',
    decisions: [
      'Designed dual ultrasonic sensory zones (knee height and head height) to detect hanging obstacles traditional canes miss.',
      'Implemented sleep-mode power optimization on ESP32 to stretch battery life over continuous multi-hour usage.',
      'Utilized vibration motor frequency escalation rather than loud beeps to preserve user dignity in public spaces.'
    ],
    result: 'Built and tested working hardware prototypes demonstrating sub-50ms haptic alert response to approaching obstacles.',
    learnings: 'Hardware forces strict constraint awareness: memory limits, electrical noise, battery drain, and tactile human factors cannot be patched with an over-the-air update.',
    link: 'https://github.com/Arshdeep-Yadav'
  }
};

// ── Scoped Toast Notification Service ────────────────────────────────
const showToast = (() => {
  const el = document.getElementById('toast');
  let timer = null;
  return (msg, duration = 2500) => {
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => el.classList.remove('show'), duration);
  };
})();

// ── Dialog Focus & Inert Coordinator ─────────────────────────────────
const Dialog = (() => {
  let lastFocused = null;
  const backdrops = () => [
    document.getElementById('modalBackdrop'),
    document.getElementById('commandBackdrop'),
    document.getElementById('mobileNav')
  ].filter(Boolean);
  const isOpen = () => backdrops().some(b => b.classList.contains('show') || b.classList.contains('open'));

  function syncInert() {
    const locked = isOpen();
    document.querySelectorAll('main, header.topbar, footer, .skip-link').forEach(el => {
      if (locked) el.setAttribute('inert', '');
      else el.removeAttribute('inert');
    });
  }

  function saveFocus() {
    if (!isOpen()) lastFocused = document.activeElement;
  }

  function restoreFocus() {
    if (isOpen()) return;
    if (lastFocused && document.contains(lastFocused) && typeof lastFocused.focus === 'function') {
      lastFocused.focus({ preventScroll: true });
    }
    lastFocused = null;
  }

  function trapFocus(container, e) {
    if (e.key !== 'Tab') return;
    const focusables = Array.from(container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'))
      .filter(el => el.offsetParent !== null || el.offsetWidth > 0 || el.offsetHeight > 0);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return { isOpen, syncInert, saveFocus, restoreFocus, trapFocus };
})();

// ── Case Study Modal System ──────────────────────────────────────────
const Modal = (() => {
  const backdrop = document.getElementById('modalBackdrop');
  if (!backdrop) return { open() {}, close() {} };

  function open(key) {
    const p = projects[key];
    if (!p) return;

    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val || '';
    };

    set('modalMeta', p.meta);
    set('modalTitle', p.title);
    set('modalContext', p.context || '');
    set('modalProblem', p.problem || '');
    set('modalApproach', p.approach || '');
    set('modalStack', p.stack || '');
    set('modalRole', p.role || '');
    set('modalStatus', p.status || '');
    set('modalResult', p.result || '');
    set('modalLearnings', p.learnings || '');

    const decisionsList = document.getElementById('modalDecisions');
    const decisionsWrap = document.getElementById('modalDecisionsWrap');
    if (decisionsList) {
      decisionsList.replaceChildren();
      if (p.decisions && p.decisions.length) {
        p.decisions.forEach(d => {
          const li = document.createElement('li');
          li.textContent = d;
          decisionsList.appendChild(li);
        });
        if (decisionsWrap) decisionsWrap.style.display = '';
      } else if (decisionsWrap) {
        decisionsWrap.style.display = 'none';
      }
    }

    const link = document.getElementById('modalLink');
    if (link) {
      const safeLink = p.link && /^https?:\/\//i.test(p.link) ? p.link : '#';
      link.href = safeLink;
      link.setAttribute('rel', 'noopener noreferrer');
      const label = safeLink.includes('github') ? 'View on GitHub' : 'View project';
      link.innerHTML = `${label} <svg class="astryx-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>`;
    }

    Dialog.saveFocus();
    backdrop.classList.add('show');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    Dialog.syncInert();
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (!backdrop.classList.contains('show')) return;
    backdrop.classList.remove('show');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    Dialog.syncInert();
    Dialog.restoreFocus();
  }

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      open(btn.dataset.project);
    });
  });

  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('dblclick', () => open(card.dataset.project));
  });

  const closeBtn = document.getElementById('closeModal');
  const doneBtn = document.getElementById('modalDone');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (doneBtn) doneBtn.addEventListener('click', close);

  let isBackdropTarget = false;
  backdrop.addEventListener('mousedown', e => { isBackdropTarget = e.target === backdrop; });
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop && isBackdropTarget) close();
    isBackdropTarget = false;
  });
  backdrop.addEventListener('keydown', e => Dialog.trapFocus(backdrop, e));

  return { open, close };
})();
const openModal = Modal.open;
const closeModal = Modal.close;

// ── Project Category Filters ─────────────────────────────────────────
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const tags = (card.dataset.tags || '').split(' ');
      const show = f === 'all' || tags.includes(f);
      card.style.display = show ? '' : 'none';
    });
  });
});

// ── Toolbox Cross-Filter Interaction ─────────────────────────────────
document.querySelectorAll('.toolbox-card[data-filter-target]').forEach(card => {
  card.addEventListener('click', () => {
    const target = card.dataset.filterTarget;
    const filterBtn = document.querySelector(`.filter[data-filter="${target}"]`);
    if (filterBtn) {
      filterBtn.click();
      const workSec = document.getElementById('work');
      if (workSec) workSec.scrollIntoView({ behavior: 'smooth' });
      showToast(`Filtered projects by: ${target.toUpperCase()}`);
    }
  });
});

// ── Operating Principles Micro-Interaction ───────────────────────────
const principleNotes = {
  build: '01 / Build to deploy: Every model is trained with runtime constraints, latency bounds, and production deployment in mind.',
  explain: '02 / Explain what you build: Black-box AI creates liability. Interpretable attention and XAI create confidence.',
  cross: '03 / Cross-pollinate domains: Bridging computer vision, AgriTech, FinTech, and IoT to find non-obvious engineering solutions.',
  ship: '04 / Ship fast, measure everything: Prioritize software that solves real pain for real users over academic isolation.'
};

document.querySelectorAll('.principle').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.principle;
    if (principleNotes[key]) {
      showToast(principleNotes[key], 4000);
    }
  });
});

// ── Copy Email Icon Button ───────────────────────────────────────────
const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async e => {
    e.preventDefault();
    e.stopPropagation();
    const email = copyEmailBtn.dataset.email || 'arshdeep.yadav.work@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      copyEmailBtn.classList.add('copied');
      const tooltip = copyEmailBtn.querySelector('.action-tooltip');
      if (tooltip) tooltip.textContent = 'Copied! ✓';
      showToast(`Copied ${email} to clipboard!`);
      setTimeout(() => {
        copyEmailBtn.classList.remove('copied');
        if (tooltip) tooltip.textContent = 'Copy';
      }, 2400);
    } catch (_) {
      showToast(`Email: ${email}`);
    }
  });
}

const emailRow = document.getElementById('emailRow');
if (emailRow) {
  emailRow.addEventListener('click', e => {
    if (e.target.closest('#copyEmailBtn')) return;
    if (e.target.closest('.contact-email-link')) return;
    window.location.href = 'mailto:arshdeep.yadav.work@gmail.com';
  });
}

// ── Theme Engine (Default: Crisp Light Theme) ────────────────────────
(() => {
  const btn = document.getElementById('themeBtn');
  const meta = document.querySelector('meta[name="theme-color"]');

  function sync(isDark) {
    if (meta) meta.setAttribute('content', isDark ? '#0f0f0e' : '#f6f3ec');
    if (btn) {
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode (Sun)' : 'Switch to dark mode (Moon)');
      btn.setAttribute('title', isDark ? 'Switch to light mode (Sun)' : 'Switch to dark mode (Moon)');
      if (!btn.querySelector('.celestial-sun')) {
        btn.textContent = isDark ? '☾' : '☼';
      }
    }
  }

  let saved = null;
  try { saved = localStorage.getItem('arshdeep-theme'); } catch (_) {}
  const isDark = saved === 'dark';
  document.documentElement.classList.toggle('dark-mode', isDark);
  sync(isDark);

  if (btn) {
    btn.addEventListener('click', () => {
      const css = document.createElement('style');
      css.textContent = '*,*::before,*::after{transition:none!important}';
      document.head.appendChild(css);

      const dark = document.documentElement.classList.toggle('dark-mode');
      try { localStorage.setItem('arshdeep-theme', dark ? 'dark' : 'light'); } catch (_) {}
      sync(dark);

      void document.body.offsetHeight;
      requestAnimationFrame(() => {
        try { document.head.removeChild(css); } catch (_) {}
      });
      showToast(dark ? 'Lunar dark mode enabled' : 'Solar light mode enabled', 1500);
    });
  }
})();

// ── Mobile Navigation Drawer ─────────────────────────────────────────
const MobileNav = (() => {
  const btn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mobileNav');
  const scrim = document.getElementById('mobileScrim');
  const closeBtn = document.getElementById('mobileNavClose');

  if (!nav) return { open() {}, close() {}, isOpen: () => false };
  nav.setAttribute('inert', '');

  function open() {
    Dialog.saveFocus();
    nav.classList.add('open');
    nav.setAttribute('aria-hidden', 'false');
    nav.removeAttribute('inert');
    if (scrim) scrim.classList.add('open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    Dialog.syncInert();
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  }

  function close() {
    if (!nav.classList.contains('open')) return;
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden', 'true');
    nav.setAttribute('inert', '');
    if (scrim) scrim.classList.remove('open');
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
    Dialog.syncInert();
    Dialog.restoreFocus();
  }

  window.matchMedia('(min-width: 901px)').addEventListener('change', e => {
    if (e.matches) close();
  });

  if (btn) btn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (scrim) scrim.addEventListener('click', close);
  nav.addEventListener('keydown', e => Dialog.trapFocus(nav, e));
  document.querySelectorAll('.mobile-nav-links a').forEach(a => a.addEventListener('click', close));

  return { open, close, isOpen: () => nav.classList.contains('open') };
})();

// ── Draggable Hero Sticky Notes ──────────────────────────────────────
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (finePointer) {
  function makeDraggable(el) {
    let active = false, startX = 0, startY = 0, baseX = 0, baseY = 0;
    const initialRot = el.classList.contains('sticky-a') ? '-4deg' : el.classList.contains('sticky-b') ? '4deg' : '2deg';

    el.addEventListener('pointerdown', e => {
      const boardEl = el.parentElement;
      if (!boardEl) return;
      active = true;
      try { el.setPointerCapture(e.pointerId); } catch (_) {}
      const rect = el.getBoundingClientRect();
      const board = boardEl.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      baseX = rect.left - board.left;
      baseY = rect.top - board.top;
      el.style.transform = 'rotate(0deg) scale(1.04)';
      el.style.zIndex = '20';
      el.style.cursor = 'grabbing';
    });

    el.addEventListener('pointermove', e => {
      if (!active) return;
      const board = el.parentElement;
      if (!board) return;
      const maxX = board.clientWidth - el.offsetWidth;
      const maxY = board.clientHeight - el.offsetHeight;
      const nx = Math.max(0, Math.min(maxX, baseX + (e.clientX - startX)));
      const ny = Math.max(0, Math.min(maxY, baseY + (e.clientY - startY)));
      el.style.left = `${nx}px`;
      el.style.top = `${ny}px`;
      el.style.bottom = 'auto';
      el.style.right = 'auto';
    });

    const onUp = e => {
      if (!active) return;
      active = false;
      if (e && e.pointerId) {
        try { el.releasePointerCapture(e.pointerId); } catch (_) {}
      }
      el.style.transform = `rotate(${initialRot}) scale(1)`;
      el.style.zIndex = '4';
      el.style.cursor = 'grab';
    };

    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('lostpointercapture', onUp);
  }

  document.querySelectorAll('.draggable').forEach(makeDraggable);
}

// ── Command Palette (⌘K / Ctrl+K) ────────────────────────────────────
const CommandPalette = (() => {
  const backdrop = document.getElementById('commandBackdrop');
  const input = document.getElementById('commandInput');
  const results = document.getElementById('commandResults');
  const triggerBtn = document.getElementById('commandBtn');
  if (!backdrop) return { open() {}, close() {}, isOpen: () => false, handleKey() {} };

  const commands = [
    { label: 'Explainable Vision Transformer (XViT)', hint: 'Research · Case Study', action: () => openModal('xvit') },
    { label: 'IPO Tracking Platform (Bluestock)', hint: 'Fintech · Case Study', action: () => openModal('ipo') },
    { label: 'Plant Disease Detection (AgriTech)', hint: 'CNN · Case Study', action: () => openModal('plant') },
    { label: 'Deep Learning Object Detection (YOLO)', hint: 'Vision · Case Study', action: () => openModal('object') },
    { label: 'Stress Detection via Bio-Signals', hint: 'HealthTech · Case Study', action: () => openModal('stress') },
    { label: 'Smart Embedded Systems (IoT)', hint: 'Hardware · Case Study', action: () => openModal('iot') },
    { label: 'Filter: AI / ML Projects', hint: 'Tag: AI', action: () => { const b = document.querySelector('.filter[data-filter="ai"]'); if (b) b.click(); location.hash = 'work'; } },
    { label: 'Filter: Product Projects', hint: 'Tag: Product', action: () => { const b = document.querySelector('.filter[data-filter="product"]'); if (b) b.click(); location.hash = 'work'; } },
    { label: 'Filter: Research Projects', hint: 'Tag: Research', action: () => { const b = document.querySelector('.filter[data-filter="research"]'); if (b) b.click(); location.hash = 'work'; } },
    { label: 'Filter: Systems Projects', hint: 'Tag: Systems', action: () => { const b = document.querySelector('.filter[data-filter="systems"]'); if (b) b.click(); location.hash = 'work'; } },
    { label: 'Jump to About / North Star', hint: '/#about', action: () => { location.hash = 'about'; } },
    { label: 'Jump to Selected Work', hint: '/#work', action: () => { location.hash = 'work'; } },
    { label: 'Jump to Career Trajectory', hint: '/#journey', action: () => { location.hash = 'journey'; } },
    { label: 'Jump to Toolbox & Lab', hint: '/#stack', action: () => { location.hash = 'stack'; } },
    { label: 'IIT Patna MBA Programme', hint: 'GenAI & PM', action: () => { const el = document.querySelector('.mba-panel'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'What I\'m Doing Now', hint: '/#now', action: () => { location.hash = 'now'; } },
    { label: 'Production Ship Checklist', hint: '/#launch', action: () => { location.hash = 'launch'; } },
    { label: 'Contact Arshdeep', hint: '/#contact', action: () => { location.hash = 'contact'; } },
    { label: 'Copy Email Address', hint: 'arshdeep.yadav.work@gmail.com', action: () => { const copyBtn = document.getElementById('copyEmailBtn'); if (copyBtn) copyBtn.click(); } },
    { label: 'View Resume / CV', hint: 'External PDF', action: () => window.open('https://drive.google.com/file/d/1koy1MbHsjYekuMFHmuQfoqnsp4EB-gck/view?usp=sharing', '_blank', 'noopener,noreferrer') },
    { label: 'Toggle Light / Dark Mode', hint: 'Theme toggle', action: () => { const t = document.getElementById('themeBtn'); if (t) t.click(); } },
    { label: 'Print / Save as PDF', hint: 'System dialog', action: () => window.print() }
  ];

  let selectedIndex = 0;

  function filterList(text = '') {
    const f = text.trim().toLowerCase();
    return commands.filter(c => c.label.toLowerCase().includes(f) || c.hint.toLowerCase().includes(f));
  }

  function render(text = '') {
    const list = filterList(text);
    selectedIndex = Math.min(selectedIndex, Math.max(0, list.length - 1));
    if (!results) return;
    results.replaceChildren();

    if (!list.length) {
      const empty = document.createElement('div');
      empty.style.padding = '18px 12px';
      empty.style.fontSize = '12px';
      empty.style.color = 'var(--muted)';
      empty.textContent = 'No matching commands found.';
      results.appendChild(empty);
      return;
    }

    list.forEach((c, i) => {
      const b = document.createElement('button');
      b.className = 'command-item' + (i === selectedIndex ? ' active' : '');
      const span = document.createElement('span');
      span.textContent = c.label;
      const small = document.createElement('small');
      small.textContent = c.hint;
      b.appendChild(span);
      b.appendChild(small);
      b.addEventListener('click', () => {
        if (typeof c.action === 'function') c.action();
        close();
      });
      results.appendChild(b);
    });

    const activeItem = results.children[selectedIndex];
    if (activeItem && typeof activeItem.scrollIntoView === 'function') {
      activeItem.scrollIntoView({ block: 'nearest' });
    }
  }

  function open() {
    Dialog.saveFocus();
    backdrop.classList.add('show');
    backdrop.setAttribute('aria-hidden', 'false');
    Dialog.syncInert();
    if (input) {
      input.value = '';
      selectedIndex = 0;
      render();
      setTimeout(() => input.focus(), 50);
    }
  }

  function close() {
    if (!backdrop.classList.contains('show')) return;
    backdrop.classList.remove('show');
    backdrop.setAttribute('aria-hidden', 'true');
    Dialog.syncInert();
    Dialog.restoreFocus();
  }

  function executeCurrent() {
    const list = filterList(input ? input.value : '');
    if (list[selectedIndex] && typeof list[selectedIndex].action === 'function') {
      list[selectedIndex].action();
      close();
    }
  }

  if (triggerBtn) triggerBtn.addEventListener('click', open);

  let isBackdropTarget = false;
  backdrop.addEventListener('mousedown', e => { isBackdropTarget = e.target === backdrop; });
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop && isBackdropTarget) close();
    isBackdropTarget = false;
  });
  backdrop.addEventListener('keydown', e => Dialog.trapFocus(backdrop, e));

  if (input) {
    input.addEventListener('input', () => {
      selectedIndex = 0;
      render(input.value);
    });
  }

  return {
    open,
    close,
    isOpen: () => backdrop.classList.contains('show'),
    handleKey(e) {
      if (e.key === 'Escape') {
        close();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const list = filterList(input ? input.value : '');
        if (list.length) selectedIndex = (selectedIndex + 1) % list.length;
        render(input ? input.value : '');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const list = filterList(input ? input.value : '');
        if (list.length) selectedIndex = (selectedIndex - 1 + list.length) % list.length;
        render(input ? input.value : '');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeCurrent();
      }
    }
  };
})();

// ── Global Keyboard Shortcuts ────────────────────────────────────────
window.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    CommandPalette.isOpen() ? CommandPalette.close() : CommandPalette.open();
    return;
  }

  if (CommandPalette.isOpen()) {
    CommandPalette.handleKey(e);
    return;
  }

  if (e.key === 'Escape') {
    closeModal();
    if (MobileNav.isOpen()) MobileNav.close();
  }
});

// ── Easter Eggs ──────────────────────────────────────────────────────
(() => {
  let secretKeyBuffer = '';
  window.addEventListener('keydown', e => {
    if (e.target && e.target.closest && e.target.closest('input, textarea, [contenteditable]')) return;
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      secretKeyBuffer = (secretKeyBuffer + e.key.toLowerCase()).slice(-10);
      if (secretKeyBuffer.endsWith('launch')) {
        showToast('🚀 Launch checklist verified — all systems go!');
      } else if (secretKeyBuffer.endsWith('iitp')) {
        showToast('🎓 IIT Patna MBA: GenAI & Product Management (2026–2028)');
      }
    }
  });
})();

// ── Native Hardware-Accelerated Scroll Reveals (Zero External Dependencies) ──
(function initScrollReveals() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const targets = document.querySelectorAll(
    '.marquee-band, .proof-strip, .manifesto, .project-card, .timeline-item, .toolbox-card, .mba-panel, .now-section, .launch-board, .contact'
  );
  if (!targets.length) return;

  targets.forEach((el, idx) => {
    el.classList.add('reveal-init');
    // Subtle stagger on grid cards and timeline
    if (el.classList.contains('project-card') || el.classList.contains('toolbox-card') || el.classList.contains('timeline-item')) {
      el.style.transitionDelay = `${(idx % 4) * 0.07}s`;
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    targets.forEach(el => observer.observe(el));
  } else {
    targets.forEach(el => el.classList.add('is-revealed'));
  }
})();

/* ========================================================================
   FLUID INK CURSOR TRAIL (Editorial Aesthetic)
   ======================================================================== */
(function() {
  const canvas = document.getElementById('inkCanvas');
  if (!canvas) return;
  // Desktop-only effect: skip on touch devices and for reduced-motion users.
  if (!finePointer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let width = 0, height = 0;
  let trail = [];
  const maxTrail = 40;
  let raf = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  let lastPos = null;
  let isIdle = false;
  let idleTimeout;

  // Pause draw loop when tab is backgrounded
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      lastPos = null;
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    }
  });

  window.addEventListener('mouseout', e => {
    if (!e.relatedTarget) lastPos = null;
  }, { passive: true });

  window.addEventListener('blur', () => {
    lastPos = null;
  }, { passive: true });

  window.addEventListener('mousemove', e => {
    const current = { x: e.clientX, y: e.clientY };
    if (lastPos && !isIdle) {
      const dx = current.x - lastPos.x;
      const dy = current.y - lastPos.y;
      const dist = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.floor(dist / 4));
      for (let i = 0; i < steps; i++) {
        trail.push({
          x: lastPos.x + (dx * i) / steps,
          y: lastPos.y + (dy * i) / steps,
          age: 0
        });
      }
    }
    trail.push({ x: current.x, y: current.y, age: 0 });
    lastPos = current;
    isIdle = false;
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => { isIdle = true; }, 50);
    if (raf === null && !document.hidden) raf = requestAnimationFrame(draw);
  }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    
    // Support dark mode teal or light mode teal dynamically
    const isDark = document.documentElement.classList.contains('dark-mode');
    const rgb = isDark ? '45, 212, 191' : '13, 148, 136';

    trail.forEach(p => p.age += 1);
    trail = trail.filter(p => p.age < maxTrail);

    for (let i = 0; i < trail.length; i++) {
      const p = trail[i];
      const progress = p.age / maxTrail;
      const radius = 10 * (1 - progress);
      const opacity = (1 - progress) * 0.4;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + rgb + ", " + opacity + ")";
      ctx.fill();
    }
    // Sleep when the trail has faded out instead of burning a frame loop forever.
    raf = trail.length ? requestAnimationFrame(draw) : null;
  }
})();

// ── Top Navigation Scrollspy ─────────────────────────────────────────
(function setupScrollSpy() {
  const navLinks = document.querySelectorAll('.topnav a[href^="#"]');
  if (!navLinks.length) return;

  const sectionIds = Array.from(navLinks).map(a => a.getAttribute('href').replace('#', ''));
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  // Clear active highlight when user scrolls to the top of the canvas
  window.addEventListener('scroll', () => {
    if (window.scrollY < 120) {
      navLinks.forEach(link => link.classList.remove('active'));
    }
  }, { passive: true });

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      if (window.scrollY < 120) {
        navLinks.forEach(link => link.classList.remove('active'));
        return;
      }
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1
    });

    sections.forEach(sec => observer.observe(sec));
  }
})();
