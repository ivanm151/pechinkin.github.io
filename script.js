const translations = {
    ru: {
        greeting: 'привет',
        name: 'я - Даня',
        surname: 'Печинкин.',
        intro: 'это моё:',
        dj: 'дидж',
        resume: 'резюме',
        youtube: 'ютуб',
        telegram: 'телеграм',
        email: 'почта'
    },
    en: {
        greeting: 'hi',
        name: 'i\'m Danya',
        surname: 'Pechinkin.',
        intro: 'about me:',
        dj: 'didj',
        resume: 'resume',
        youtube: 'youtube',
        telegram: 'telegram',
        email: 'email'
    }
};

const circleLinks = {
    'circle-yt': 'https://www.youtube.com/pechinkin',
    'circle-didj': 'didj/index.html',
    'circle-dev': 'resume_ru.pdf',
    'circle-mail': 'mailto:pomor44@gmail.com',
    'circle-tg': 'https://t.me/pe4inkin',
};

function updateLanguage(lang) {
    // Обновление текстов
    document.querySelectorAll('.circle span').forEach(span => {
        const key = span.getAttribute('data-key');
        if (translations[lang][key]) {
            span.textContent = translations[lang][key];
        }
    });

    circleLinks['circle-dev'] = lang === 'ru' ? 'resume_ru.pdf' : 'resume_en.pdf';

    document.querySelector('.lang-btn').textContent = lang === 'ru' ? 'en' : 'ru';
    document.querySelector('.lang-btn').setAttribute('data-lang', lang === 'ru' ? 'en' : 'ru');

    document.documentElement.lang = lang;
    document.title = lang === 'ru' ? 'Даня Печинкин' : 'Danya Pechinkin';

    localStorage.setItem('language', lang);
}

const savedLang = localStorage.getItem('language') || 'ru';
updateLanguage(savedLang);

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {
        const circleClass = circle.classList[1];
        const url = circleLinks[circleClass];
        if (url) {
            window.location.href = url;
        }
    });
});

document.querySelector('.lang-btn').addEventListener('click', () => {
    const currentLang = document.querySelector('.lang-btn').getAttribute('data-lang');
    updateLanguage(currentLang);
});