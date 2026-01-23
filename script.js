// --- CRITICAL: Project Data & Modal Logic (Must load first) ---
const projectData = {
    'ecfilms': {
        title: 'LED Rental System (Live)',
        jpTitle: 'LEDレンタルシステム (実運用中)',
        desc: 'A robust, real-time web application developed for EC Films in Kumbakonam to streamline their rental business operations. This full-stack system efficiently manages bookings for high-value assets like LCD projectors, LED walls, and screen projections. It features a comprehensive admin dashboard for tracking live booking statuses, managing inventory, and uploading digital bills, while providing a dedicated user portal for clients to view their booking history and bills.',
        jpDesc: 'クンバコナムのEC Filmsのために開発された、レンタル事業を効率化するための堅牢なリアルタイムWebアプリケーションです。このフルスタックシステムは、LCDプロジェクター、LEDウォール、スクリーン投影などの高価値資産の予約を効率的に管理します。リアルタイムの予約状況の追跡、在庫管理、デジタル請求書のアップロードを行う包括的な管理ダッシュボードを備えており、クライアントが予約履歴と請求書を確認できる専用ユーザーポータルも提供しています。',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Live Hosting'],
        features: ['Real-time Booking Management', 'Admin Dashboard & Inventory Control', 'Digital Bill Upload & Client View', 'Live Status Tracking'],
        jpFeatures: ['リアルタイム予約管理', '管理ダッシュボードと在庫管理', 'デジタル請求書のアップロードとクライアント閲覧', 'リアルタイムステータス追跡']
    },
    'weather': {
        title: 'AI Weather Prediction System',
        jpTitle: '天気予測システム',
        desc: 'A comprehensive weather forecasting application that uses machine learning to predict temperatures and weather conditions. The UI dynamically changes its background videos based on real-time weather forecasts, providing an immersive experience.',
        jpDesc: '機械学習を用いて気温や天候を予測する包括的な気象予測アプリケーションです。リアルタイムの天気予報に基づいて背景動画がダイナミックに変化し、没入感のある体験を提供します。',
        tech: ['Python', 'Scikit-learn', 'Flask', 'JavaScript', 'Weather API'],
        features: ['Real-time predictions', 'Dynamic Video Backgrounds', 'Historical Data Analysis'],
        jpFeatures: ['リアルタイム予測', 'ダイナミックなビデオ背景', '過去データの分析']
    },
    'recruitment': {
        title: 'Campus Recruitment System',
        jpTitle: 'キャンパス採用管理システム',
        desc: 'A digital platform designed to streamline the college placement process. It features a Three-Tier Architecture (Admin, Student, Company) with secure login, profile management, job postings, and application tracking.',
        jpDesc: '就職活動プロセスを効率化するために設計されたデジタルプラットフォームです。管理者、学生、企業の3層構造（3-Tier Architecture）を備え、セキュアなログイン、プロフィール管理、求人投稿、応募追跡が可能です。',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'XAMPP'],
        features: ['Role-based access control', 'Automated Notifications', 'Resume Database'],
        jpFeatures: ['ロールベースのアクセス制御', '自動通知機能', '履歴書データベース']
    },
    'nutrition': {
        title: 'AI Smart Nutrition & Kitchen App',
        jpTitle: 'スマート栄養・キッチン管理アプリ',
        desc: 'An intelligent health assistant that tracks nutritional intake and manages kitchen inventory. It uses AI to recommend recipes based on available ingredients and specific dietary goals.',
        jpDesc: '栄養摂取量を追跡し、キッチンの在庫を管理するインテリジェントな健康アシスタントです。AIを使用して、利用可能な食材や特定の食事目標に基づいたレシピを提案します。',
        tech: ['Python', 'AI Logic', 'Full-Stack Web', 'NLP'],
        features: ['Inventory Tracking', 'AI Recipe Generator', 'Nutritional Analytics'],
        jpFeatures: ['在庫追跡', 'AIレシピ生成', '栄養分析']
    },
    'idea-gen': {
        title: 'AI Project Idea Generator',
        jpTitle: 'AIプロジェクトアイデア生成',
        desc: 'A platform that helps developers overcome creative blocks by generating project ideas tailored to their skill level. It converts vague concepts into actionable project roadmaps using LLM technology.',
        jpDesc: '開発者がスキルのレベルに合わせたプロジェクトのアイデアを生成することで、クリエイティブな行き詰まりを克服するのを助けるプラットフォームです。LLM技術を使用して、曖昧なコンセプトを実行可能なプロジェクトロードマップに変換します。',
        tech: ['LLM APIs', 'Productivity Logic', 'React/JS', 'Node.js'],
        features: ['Instant Brainstorming', 'Roadmap Generation', 'Resource Mapping'],
        jpFeatures: ['インスタント・ブレインストーミング', 'ロードマップ生成', 'リソースマッピング']
    }
};

// Open Project Details Function
function openDetails(projectId) {
    console.log("Attempting to open details for:", projectId);
    const project = projectData[projectId];

    if (!project) {
        console.error("Project data not found for ID:", projectId);
        return;
    }

    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");

    if (!modal || !modalBody) {
        console.error("Modal elements missing in DOM.");
        return;
    }

    const isJP = document.body.classList.contains("lang-jp-active");

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${isJP ? project.jpTitle : project.title}</h2>
        </div>
        <div class="modal-body-content">
            <p>${isJP ? project.jpDesc : project.desc}</p>
            <h4>${isJP ? '主な特徴:' : 'Key Features:'}</h4>
            <ul>
                ${(isJP ? project.jpFeatures : project.features).map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="tech-stack-modal">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scroll
}

// Make globally accessible (Backup)
window.openDetails = openDetails;

// Modal Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const closeModal = document.querySelector(".close-modal");

    if (closeModal && modal) {
        closeModal.onclick = () => {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        };
    }

    if (modal) {
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        };
    }
});

// --- Event Delegation for Project Details (Robust Fix) ---
document.addEventListener('click', function (event) {
    // Check if clicked element is the button or icon inside it
    const btn = event.target.closest('.project-details-btn');
    if (btn) {
        event.preventDefault();
        const projectId = btn.getAttribute('data-project');
        console.log("Button clicked via delegation for:", projectId);
        openDetails(projectId);
    }
});


// --- Particles.js Config (Protected) ---
try {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#7b2ff7" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#7b2ff7", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    } else {
        console.warn("Particles.js library not loaded yet.");
    }
} catch (e) {
    console.error("Particles.js initialization failed:", e);
}

// Force refresh to top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Hero Mouse Parallax
document.addEventListener("mousemove", (e) => {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    const shapes = document.querySelectorAll(".shape");
    const frame = document.querySelector(".glass-photo-frame");

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        shape.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });

    if (frame) {
        frame.style.transform = `translate(${mouseX * -10}px, ${mouseY * -10}px) rotateY(${mouseX * 20}deg) rotateX(${mouseY * -10}deg)`;
    }
});

// Typing Effect
const typingText = document.getElementById("typing-text");
const professionsEN = [
    "Artificial Intelligence Student",
    "Machine Learning Aspirant",
    "JLPT N5 | Path to N4/N3",
    "Building Future in Japan 🇯🇵"
];
const professionsJP = [
    "AI専攻の学生",
    "機械学習エンジニア志望",
    "JLPT N5 | N4/N3へ挑戦中",
    "日本でのキャリアを構築中 🇯🇵"
];

let profIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const waitTime = 2000;

function type() {
    if (!typingText) return;

    const isJP = document.body.classList.contains("lang-jp-active");
    const professions = isJP ? professionsJP : professionsEN;

    const currentProf = professions[profIndex] || professionsEN[profIndex];

    if (isDeleting) {
        typingText.textContent = currentProf.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentProf.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentProf.length) {
        isDeleting = true;
        setTimeout(type, waitTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        profIndex = (profIndex + 1) % professions.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    const fill = document.querySelector(".progress-bar-fill");

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                if (loader) {
                    loader.style.opacity = "0";
                    setTimeout(() => {
                        loader.style.display = "none";
                        type();
                    }, 500);
                }
            }, 500);
        } else {
            width += 2;
            if (fill) fill.style.width = width + "%";
        }
    }, 30);
});

// Reveal on Scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 });

reveals.forEach(reveal => observer.observe(reveal));

// Scroll Progress & Header
window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scroll-progress");
    const header = document.querySelector("header");
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = progress + "%";

    if (window.scrollY > 50) {
        if (header) header.classList.add("scrolled");
    } else {
        if (header) header.classList.remove("scrolled");
    }
});

// Japanese Language Toggle
const langToggle = document.getElementById("lang-toggle");
let currentLang = "EN";

if (langToggle) {
    // Scroll to Top Button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scroll-top";
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    langToggle.addEventListener("click", () => {
        const body = document.body;
        body.classList.toggle("lang-jp-active");
        currentLang = body.classList.contains("lang-jp-active") ? "JP" : "EN";

        // Update Nav Menu if open
        const navLinks = document.querySelector(".nav-links");
        if (navLinks && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
}

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    });
}

// Current Date for Resume
const dateEl = document.getElementById("current-date");
if (dateEl) dateEl.textContent = new Date().toLocaleDateString();

// Easter Egg
let keys = "";
window.addEventListener("keydown", (e) => {
    keys += e.key.toLowerCase();
    if (keys.includes("japan")) {
        alert("🇯🇵 未来のために、一歩ずつ。 (Step by step, for the future.)");
        document.body.style.animation = "rainbow 5s linear infinite";
        keys = "";
    }
    if (keys.length > 20) keys = keys.substring(10);
});


// Contact Form Handling with Formspree AJAX
const contactForm = document.getElementById("portfolio-contact");
if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Stop page from refreshing

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const isJP = document.body.classList.contains("lang-jp-active");

        // Prepare Data
        const formData = new FormData(contactForm);

        // Show "Sending..." state
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = isJP ? '送信中... <i class="fas fa-spinner fa-spin"></i>' : 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                const successMsg = isJP
                    ? "メッセージを送信しました！ありがとうございます。"
                    : "Message Sent Successfully! Thank you for reaching out.";
                alert(successMsg);
                contactForm.reset();
            } else {
                // Error from server
                const errorMsg = isJP
                    ? "申し訳ありません、エラーが発生しました。後でもう一度お試しください。"
                    : "Oops! There was a problem submitting your form. Please try again later.";
                alert(errorMsg);
            }
        } catch (error) {
            // Network error
            const networkError = isJP
                ? "接続エラーが発生しました。ネットワークを確認してください。"
                : "Network error occurred. Please check your connection.";
            alert(networkError);
        } finally {
            // Revert button
            submitBtn.innerHTML = originalContent;
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
        }
    });
}
