// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const links = document.querySelectorAll('a, .btn, .skill-tag');

window.addEventListener('mousemove', (e) => {
    // smooth cursor follow using gsap
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
    }); 
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
    });
});

// GSAP Animations Registration
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
const heroTl = gsap.timeline();

heroTl.from('.logo', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from('.nav-item', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
}, "-=0.5")
.from('.subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.3")
.from('.hero .title .line', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.5")
.from('.description', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.4")
.from('.cta-group', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.4");

// Parallax Hero Image
gsap.to('.bg-img', {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// About Section Animations
gsap.from('.about .section-header', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 75%',
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from('.about-visual', {
    scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 75%',
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Skills Marquee Animations (Optional fade in)
gsap.from('.skills', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Portfolio Hub (Tabs) Animations
gsap.from('.portfolio-hub .section-header', {
    scrollTrigger: {
        trigger: '.portfolio-hub',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from('.folder-tab', {
    scrollTrigger: {
        trigger: '.folder-tabs',
        start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out"
});

gsap.from('.folder-contents', {
    scrollTrigger: {
        trigger: '.folder-tabs',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Contact Section animations
gsap.from('.contact-box', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// i18n Logic
const i18nData = {
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_subtitle: "HELLO, WORLD!",
        hero_im: "I'm ",
        hero_desc: "A passionate Fullstack Developer creating modern web experiences",
        hero_btn_work: "View Work",
        hero_btn_talk: "Let's Talk",
        about_title: "About Me",
        about_p1: "I’m a passionate Fullstack Developer who enjoys building modern, scalable, and user-friendly digital experiences. I focus on creating applications that combine powerful backend systems with clean, responsive, and intuitive frontend interfaces. From developing efficient APIs and managing databases to crafting seamless user interactions, I always strive to deliver applications that are both functional and visually engaging.",
        about_p2: "My journey in software development has introduced me to a wide range of technologies and frameworks, allowing me to continuously grow and adapt in the ever-evolving tech industry. I’m driven by curiosity, problem-solving, and the desire to turn complex ideas into simple and meaningful solutions. I believe that great software is created through the balance of performance, accessibility, and minimalist design.",
        about_role: "'Programmer'",
        about_passion: "'Interactive UI'",
        about_status: "'Building the future'",
        about_cv_btn: "Download CV",
        services_title: "My Services",
        srv_web_title: "Web Development",
        srv_web_desc: "Building fast, responsive, and scalable websites and web applications.",
        srv_mob_title: "Mobile Development",
        srv_mob_desc: "Creating seamless native and cross-platform mobile applications.",
        srv_ui_title: "UI/UX Designer",
        srv_ui_desc: "Designing intuitive and beautiful user interfaces focused on user experience.",
        srv_vid_title: "Video Editing",
        srv_vid_desc: "Producing high-quality, engaging video content with professional editing and effects.",
        skills_title: "Skills & Technologies",
        sk_cat: "Category",
        sk_lang: "Languages & Applications",
        projects_title: "Selected Projects",
        projects_1_desc: "A modern, dark-themed data visualization dashboard using advanced chart libraries and a fully responsive grid system.",
        projects_2_desc: "A full-stack e-commerce solution with dynamic inventory management, real-time updates, and an intuitive user interface.",
        projects_view: "View Project →",
        contact_title: "Ready to collaborate?",
        contact_desc: "I'm currently open for new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        contact_btn: "Say Hello",
        footer_copy: "&copy; 2026 Aceinzberg. Built with passion.",
        project_1_title: "DataVis Dashboard",
        project_1_presentation: "This dashboard allows users to visualize complex datasets with real-time updates. It utilizes advanced charting libraries to render thousands of data points smoothly without sacrificing performance. The dark UI enhances visibility of the glowing charts, keeping the focus entirely on the data.",
        project_1_tech: "<span>React</span><span>D3.js</span><span>Tailwind</span>",
        project_2_title: "E-Commerce Platform",
        project_2_presentation: "A complete e-commerce solution featuring a user-friendly storefront, secure checkout, and a comprehensive admin dashboard for inventory management. The platform is highly scalable and ensures a seamless experience for both customers and administrators.",
        project_2_tech: "<span>JavaScript</span><span>ReactJS</span><span>CSS</span><span>MongoDB</span>",
        portfolio_hub_title: "Services & Projects",
        proj_add_new: "Add New Project",
        proj_coming_soon: "Projects coming soon"
    },
    id: {
        nav_about: "Tentang",
        nav_services: "Layanan",
        nav_skills: "Keahlian",
        nav_projects: "Proyek",
        nav_contact: "Kontak",
        hero_subtitle: "HALO DUNIA!",
        hero_im: "Saya ",
        hero_desc: "Seorang Fullstack Developer yang bersemangat menciptakan pengalaman web modern",
        hero_btn_work: "Lihat Karya",
        hero_btn_talk: "Mari Berbincang",
        about_title: "Tentang Saya",
        about_p1: "Saya adalah seorang Fullstack Developer yang senang membangun pengalaman digital yang modern, skalabel, dan ramah pengguna. Saya fokus pada pembuatan aplikasi yang menggabungkan sistem backend yang kuat dengan antarmuka frontend yang bersih, responsif, dan intuitif. Dari mengembangkan API yang efisien dan mengelola database hingga menyusun interaksi pengguna yang mulus, saya selalu berusaha menghasilkan aplikasi yang fungsional dan menarik secara visual.",
        about_p2: "Perj  dalam pengembangan perangkat lunak telah memperkenalkan saya pada berbagai teknologi dan framework, yang memungkinkan saya untuk terus berkembang dan beradaptasi dalam industri teknologi yang terus berubah. Saya didorong oleh rasa ingin tahu, pemecahan masalah, dan keinginan untuk mengubah ide kompleks menjadi solusi yang sederhana dan bermakna. Saya percaya bahwa perangkat lunak yang hebat diciptakan melalui keseimbangan antara kinerja, aksesibilitas, dan desain minimalis.",
        about_role: "'Programmer'",
        about_passion: "'UI Interaktif'",
        about_status: "'Membangun masa depan'",
        about_cv_btn: "Unduh CV",
        services_title: "Layanan Saya",
        srv_web_title: "Web Development",
        srv_web_desc: "Membangun situs web dan aplikasi web yang cepat, responsif, dan skalabel.",
        srv_mob_title: "Mobile Development",
        srv_mob_desc: "Menciptakan aplikasi seluler native dan lintas platform yang mulus.",
        srv_ui_title: "Desainer UI/UX",
        srv_ui_desc: "Merancang antarmuka pengguna yang intuitif dan indah yang berfokus pada pengalaman pengguna.",
        srv_vid_title: "Pengeditan Video",
        srv_vid_desc: "Memproduksi konten video berkualitas tinggi dan menarik dengan pengeditan dan efek profesional.",
        skills_title: "Keahlian & Teknologi",
        sk_cat: "Kategori",
        sk_lang: "Bahasa & Aplikasi",
        projects_title: "Proyek Pilihan",
        projects_1_desc: "Dashboard visualisasi data modern bertema gelap menggunakan pustaka grafik lanjutan dan sistem grid yang sepenuhnya responsif.",
        projects_2_desc: "Solusi e-commerce full-stack dengan manajemen inventaris dinamis, pembaruan real-time, dan antarmuka pengguna yang intuitif.",
        projects_view: "Lihat Proyek →",
        contact_title: "Siap berkolaborasi?",
        contact_desc: "Saya saat ini terbuka untuk peluang baru dan proyek yang menarik. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba membalasnya dengan sebaik mungkin!",
        contact_btn: "Kirim Pesan",
        footer_copy: "&copy; 2026 Aceinzberg. Dibuat dengan semangat.",
        project_1_title: "Dashboard DataVis",
        project_1_presentation: "Dashboard ini memungkinkan pengguna memvisualisasikan kumpulan data kompleks dengan pembaruan secara real-time. Proyek ini menggunakan library chart tingkat lanjut untuk memproses ribuan titik data dengan sangat mulus tanpa mengorbankan performa. Tampilan antarmuka gelap mempertegas pendaran grafik, sehingga fokus sepenuhnya tertuju pada data.",
        project_1_tech: "<span>React</span><span>D3.js</span><span>Tailwind</span>",
        project_2_title: "Platform E-Commerce",
        project_2_presentation: "Solusi e-commerce lengkap yang dilengkapi etalase ramah pengguna, proses checkout yang aman, dan dashboard admin komprehensif untuk manajemen inventaris. Platform ini sangat skalabel dan memastikan pengalaman mulus baik untuk pelanggan maupun pengelola toko.",
        project_2_tech: "<span>JavaScript</span><span>ReactJS</span><span>CSS</span><span>MongoDB</span>",
        portfolio_hub_title: "Layanan & Proyek",
        proj_add_new: "Tambah Proyek Baru",
        proj_coming_soon: "Proyek segera hadir"
    }
};

const btnEn = document.getElementById('btn-en');
const btnId = document.getElementById('btn-id');
const i18nElements = document.querySelectorAll('[data-i18n]');

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'en') {
        btnEn.classList.add('active');
        btnId.classList.remove('active');
    } else {
        btnId.classList.add('active');
        btnEn.classList.remove('active');
    }

    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[lang][key]) {
            el.innerHTML = i18nData[lang][key];
            if (el.hasAttribute('data-text')) {
                el.setAttribute('data-text', i18nData[lang][key]);
            }
        }
    });
}

if(btnEn && btnId) {
    btnEn.addEventListener('click', () => setLanguage('en'));
    btnId.addEventListener('click', () => setLanguage('id'));
}

// Modal Logic
const projectModal = document.getElementById('project-modal');
const modalCloseBtns = document.querySelectorAll('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc  = document.getElementById('modal-desc');
const modalTech  = document.getElementById('modal-tech');
const modalImg   = document.getElementById('modal-img');

// Open modal on project card click
document.addEventListener('click', (e) => {
    const card = e.target.closest('.open-modal');
    if (!card) return;

    const projectId = card.getAttribute('data-project');
    const langData  = i18nData[currentLang];

    modalTitle.innerHTML = langData[`project_${projectId}_title`]        || '';
    modalDesc.innerHTML  = langData[`project_${projectId}_presentation`] || '';
    modalTech.innerHTML  = langData[`project_${projectId}_tech`]         || '';

    // Thumbnail — fallback silently if file missing
    modalImg.style.display = '';
    modalImg.src    = projectId === '1' ? 'assets/project1.png' : 'assets/Project2.png';
    modalImg.onerror = () => { modalImg.style.display = 'none'; };

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
});

// Also support keyboard Enter/Space on project cards
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = document.activeElement?.closest('.open-modal');
    if (card) card.click();
});

// Close modal
function closeModal() {
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
}

modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));

document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('open')) closeModal();
});

// Tab Logic
const tabs        = document.querySelectorAll('.folder-tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t        => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const target = document.getElementById(tab.getAttribute('data-target'));
        if (target) target.classList.add('active');
    });
});


