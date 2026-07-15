// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Swiper
const swiper = new Swiper('.gallery-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 2
});

// Typed.js for Hero Title
new Typed('#typed-hero', {
    strings: ['كل قصة حب جميلة،', 'لكن قصتنا هي المفضلة لدي.', 'أنتِ النبض الذي يحيي قلبي ❤️'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    if(body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Falling Roses Canvas (Hearts and Stars)
const canvas = document.getElementById('falling-roses');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const emojis = ['🌹', '❤️', '✨', '💖', '🌸'];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedY = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.font = this.size + 'px Arial';
        ctx.fillText(this.emoji, 0, 0);
        ctx.restore();
    }
}

function initParticles() {
    for (let i = 0; i < 30; i++) {
        particlesArray.push(new Particle());
    }
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}
initParticles();
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Music Player
// Music Player (Universal Iframe Controller)
const playBtn = document.getElementById('play-pause');
const rotatingCover = document.querySelector('.rotating-cover');
const musicFrame = document.getElementById('music-frame');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        musicFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        isPlaying = true;
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
        rotatingCover.classList.add('playing');
    } else {
        musicFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        isPlaying = false;
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
        rotatingCover.classList.remove('playing');
    }
});

// Time Based Message
const timeMsgEl = document.getElementById('time-message');
const currentHour = new Date().getHours();
let greeting = '';
if (currentHour >= 5 && currentHour < 12) {
    greeting = 'صباح الخير يا أجمل نعمة ❤️';
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'مساء الخير يا روحي ❤️';
} else {
    greeting = 'تصبحين على خير يا أميرة قلبي ❤️';
}
timeMsgEl.textContent = greeting;

// Image Modal
const imgModal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        imgModal.style.display = 'flex';
        modalImg.src = this.src;
    });
});

// Close Modals
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == imgModal) imgModal.style.display = "none";
    const boxModal = document.getElementById('box-modal');
    if (event.target == boxModal) boxModal.style.display = "none";
}

// Love Letter
let envelopeOpened = false;
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.toggle('open');
    
    if(!envelopeOpened) {
        setTimeout(() => {
            new Typed('#typed-letter', {
                strings: ['<strong>نسيمتي الغالية،</strong> ❤️<br><br>قد تعجز الكلمات عن وصف ما أشعر به تجاهك، لكن قلبي لا يتوقف عن الحديث عنك في كل لحظة.<br><br>منذ أن دخلتِ حياتي، أصبح لكل يوم معنى، ولكل ابتسامة سبب، ولكل حلم أمل أكبر. وجودك إلى جانبي منحني راحة لم أعرفها من قبل، وسعادة لا يمكن للكلمات أن تصفها.<br><br>أنتِ لستِ مجرد شخص أحببته، بل أنتِ أجمل صدفة، وأغلى نعمة، وأروع فصل في قصة حياتي.<br><br>أعدكِ أن أبقى دائمًا إلى جانبك، في لحظات الفرح قبل الحزن، وأن أحبك بكل صدق وإخلاص.<br><br><strong>شكرًا لأنكِ دخلتِ حياتي... أحبك اليوم، وغدًا، وفي كل يوم إلى ما لا نهاية.</strong> ❤️♾️<br><br><strong>— زكرياء</strong>'],
                typeSpeed: 40,
                showCursor: false
            });
        }, 800);
        envelopeOpened = true;
    }
}

// Counters
const startDate = new Date('2023-07-01T21:00:00').getTime(); // 1 يوليوز 2023 من الساعة 9
const eventDate = new Date('2030-01-01T00:00:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    
    // Love Duration
    const date1 = new Date(startDate);
    const date2 = new Date(now);
    
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    const distance1 = now - startDate;
    let hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('c-years').textContent = years;
    document.getElementById('c-months').textContent = months;
    document.getElementById('c-days').textContent = days;
    document.getElementById('c-hours').textContent = hours;

    // Countdown
    const distance2 = eventDate - now;
    if(distance2 > 0) {
        document.getElementById('a-days').textContent = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        document.getElementById('a-hours').textContent = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('a-mins').textContent = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('a-secs').textContent = Math.floor((distance2 % (1000 * 60)) / 1000);
    }
}, 1000);

// Reasons (20 Cards Generator)
const reasonsData = [
    "ابتسامتك", "عيناك", "اهتمامك", "دعمك", "شخصيتك",
    "حنونتك", "ضحكتك", "ذكائك", "طيبة قلبك", "جنونك أحياناً",
    "صوتك", "نظرتك", "روحك الجميلة", "تفهمك", "صبرك",
    "عفويتك", "احترامك", "قوتك", "حضنك المريح", "لأنك نسيمة ببساطة"
];
const grid = document.querySelector('.cards-grid');
reasonsData.forEach((reason, index) => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index%4)*50);
    card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <i class="fas fa-heart"></i>
            </div>
            <div class="flip-card-back">
                ${index+1}. ${reason}
            </div>
        </div>
    `;
    card.onclick = () => card.classList.toggle('flipped');
    grid.appendChild(card);
});

// Counter Up Animation
const counters = document.querySelectorAll('.counter-up');
let animated = false;
window.addEventListener('scroll', () => {
    const section = document.getElementById('achievements');
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight && !animated) {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / 100;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
        animated = true;
    }
});

// Surprise Boxes
const boxRewards = [
    { title: "📜 رسالة سرية", desc: "إلى نسيمتي... ❤️\n\nإذا وصلتِ إلى هذه الرسالة، فهذا يعني أنكِ اكتشفتِ جزءًا من قلبي لم أستطع أن أعبّر عنه دائمًا بالكلمات.\n\nأريدكِ أن تعلمي أنكِ لستِ مجرد شخص في حياتي، بل أنتِ أجمل هدية منحني الله إياها.\n\nوجودكِ جعل أيامي أكثر إشراقًا، وابتسامتكِ أصبحت سببًا لسعادتي، وصوتكِ راحةً لقلبي.\n\nأنتِ الفصل الأجمل في قصة حياتي، والنبض الذي يجعل قلبي يبتسم كل يوم.\n\nأحبكِ أكثر مما تستطيع الكلمات وصفه... وإلى الأبد. ❤️\n\n— زكرياء", media: '<i class="fas fa-envelope-open-text box-icon"></i>' },
    { title: "🧸 هدية افتراضية", desc: "إلى نسيمتي... ❤️\n\nقد لا أستطيع أن أقدّم لكِ في هذه اللحظة هدية تلمسينها بيديك، لكنني أقدّم لكِ شيئًا أثمن من كل الهدايا... قلبي بكل ما يحمله من حب ووفاء.\n\nداخل هذا الصندوق وضعتُ كل دعواتي لكِ، وكل أحلامي التي أتمنى أن نعيشها معًا، وكل نبضة تنطق باسمكِ.\n\nأسأل الله أن يجمعنا بالحلال، وأن يكتب لنا مستقبلًا مليئًا بالمحبة، والسكينة، والسعادة، وأن نبني معًا بيتًا يجمع قلوبنا قبل أن يجمع جدراننا.\n\nهذه ليست مجرد هدية... إنها قطعة من قلبي أهديتها إليكِ بكل حب. ❤️🎁\n\n— زكرياء", media: '<i class="fas fa-gift box-icon"></i>' },
    { title: "صورة ذكرى 📸", desc: "صورة لمكان لقائنا الأول الذي لن أنساه أبداً.", media: '<img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=200&auto=format&fit=crop" style="border-radius:10px;">' }
];
function openBox(num) {
    const data = boxRewards[num - 1];
    document.getElementById('box-title').innerText = data.title;
    document.getElementById('box-desc').innerHTML = data.desc.replace(/\n/g, '<br>');
    document.getElementById('box-media').innerHTML = data.media;
    document.getElementById('box-modal').style.display = 'flex';
}

// AI Surprise
const aiAnswers = [
    "قلبي يقول أنك النور الذي يضيء حياتي ❤️",
    "لا يوجد كلمات تصف مدى حبي لك.. أنت كل شيء.",
    "أنتِ الحاضر والمستقبل، و أجمل ما في القدر 💖",
    "لو كان الحب يُقاس، لكان حبي لك أكبر من الكون.",
    "رأيت فيك ما لم أره في أحد، وأحببتك كما لم أحب أحداً من قبل ✨"
];
function askHeart() {
    const q = document.getElementById('ai-question').value;
    const ansDiv = document.getElementById('ai-answer');
    if (!q) {
        ansDiv.innerText = "اكتبي سؤالاً أولاً يا حبيبتي.. 😉";
        return;
    }
    ansDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> قلبي يفكر...';
    setTimeout(() => {
        const reply = aiAnswers[Math.floor(Math.random() * aiAnswers.length)];
        ansDiv.innerHTML = `<span style="opacity:0; transition: 1s;" id="fade-reply">${reply}</span>`;
        setTimeout(() => document.getElementById('fade-reply').style.opacity = 1, 50);
    }, 1500);
}

// Guestbook Save
function saveMessage() {
    const msg = document.getElementById('love-message').value;
    if(msg.trim()) {
        document.getElementById('msg-content').innerText = msg;
        document.getElementById('saved-msg-display').classList.remove('hidden');
        document.getElementById('love-message').value = '';
        
        // Open WhatsApp link automatically
        const whatsappUrl = `https://wa.me/212710282367?text=${encodeURIComponent("رسالة من حبيبتك نسيمة 💖:\n\n" + msg)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Send Final Reply to WhatsApp
function sendFinalReply() {
    const msg = document.getElementById('final-reply-msg').value;
    if(msg.trim()) {
        const whatsappUrl = `https://wa.me/212710282367?text=${encodeURIComponent("إجابة نسيمة على رسالتك الأخيرة 💖:\n\n" + msg)}`;
        window.open(whatsappUrl, '_blank');
        document.getElementById('final-reply-msg').value = '';
    } else {
        alert("اكتبي شيئاً أولاً يا حبيبتي.. 😉");
    }
}
