document.addEventListener('DOMContentLoaded', () => {
    // --- Data Configuration ---
    const scheduleData = {
        meta: {
            title: { ar: "جدول المرحلة الثالثة - الكورس الثاني", en: "Timetable - Level 3, Semester 2" },
            dept: { ar: "قسم هندسة تكنولوجيا الأمن السيبراني", en: "Cybersecurity Engineering Department" },
            sections: { ar: "شعبة A و B", en: "Sections A & B" },
            footer: { ar: "الاحد (محاضرات اون لاين ان وجدت)", en: "Sunday (Online Lectures if available)" }
        },
        days: [
            {
                day: { ar: "الاثنين", en: "Monday" },
                sessions: [
                    {
                        subject: { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
                        professor: { ar: "ا.د. دلال عبد المحسن", en: "Prof. Dalal Abdul Mohsin" },
                        type: { ar: "نظري", en: "Theory" },
                        time: "10:30",
                        room: { ar: "قاعة رقم 1", en: "Hall 1" },
                        isLab: false
                    },
                    {
                        subject: { ar: "نظرية المعلومات والترميز", en: "Information Theory & Coding" },
                        professor: { ar: "م.م. عباس عقيل", en: "Mr. Abbas Aqeel" },
                        type: { ar: "عملي", en: "Lab" },
                        time: "12:00",
                        room: { ar: "مختبر الامنية", en: "Security Lab" },
                        isLab: true
                    },
                    {
                        subject: { ar: "تصميم المواقع الالكترونية", en: "Web Design" },
                        professor: { ar: "م.م. تحسين حسين", en: "Mr. Tahseen Hussein" },
                        type: { ar: "عملي", en: "Lab" },
                        time: "02:00",
                        room: { ar: "مختبر الامنية", en: "Security Lab" },
                        isLab: true
                    }
                ]
            },
            {
                day: { ar: "الثلاثاء", en: "Tuesday" },
                sessions: [
                    {
                        subject: { ar: "اساسيات الامن السيبراني", en: "Cybersecurity Fundamentals" },
                        professor: { ar: "ا.ميثم علي ناجي", en: "Mr. Maitham Ali Naji" },
                        type: { ar: "نظري", en: "Theory" },
                        time: "10:30",
                        room: { ar: "قاعة رقم 3", en: "Hall 3" },
                        isLab: false
                    },
                    {
                        subject: { ar: "نظم التشغيل", en: "Operating Systems" },
                        professor: { ar: "م.د. لؤي طالب", en: "Dr. Luay Talib" },
                        type: { ar: "نظري", en: "Theory" },
                        time: "12:30",
                        room: { ar: "قاعة رقم 4", en: "Hall 4" },
                        isLab: false
                    },
                    {
                        subject: { ar: "اساسيات الامن السيبراني", en: "Cybersecurity Fundamentals" },
                        professor: { ar: "ا.ميثم علي ناجي", en: "Mr. Maitham Ali Naji" },
                        type: { ar: "عملي", en: "Lab" },
                        time: "02:00",
                        room: { ar: "مختبر البرمجة", en: "Programming Lab" },
                        isLab: true
                    }
                ]
            },
            {
                day: { ar: "الاربعاء", en: "Wednesday" },
                sessions: [
                    {
                        subject: { ar: "نظم التشغيل", en: "Operating Systems" },
                        professor: { ar: "م.د. لؤي طالب", en: "Dr. Luay Talib" },
                        type: { ar: "عملي", en: "Lab" },
                        time: "10:30",
                        room: { ar: "مختبر الامنية", en: "Security Lab" },
                        isLab: true
                    },
                    {
                        subject: { ar: "نظرية المعلومات والترميز", en: "Information Theory & Coding" },
                        professor: { ar: "م.م. عباس عقيل", en: "Mr. Abbas Aqeel" },
                        type: { ar: "نظري", en: "Theory" },
                        time: "12:00",
                        room: { ar: "قاعة رقم 3", en: "Hall 3" },
                        isLab: false
                    },
                    {
                        subject: { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
                        professor: { ar: "ا.د. دلال عبد المحسن", en: "Prof. Dalal Abdul Mohsin" },
                        type: { ar: "عملي", en: "Lab" },
                        time: "01:30",
                        room: { ar: "مختبر البرمجة", en: "Programming Lab" },
                        isLab: true
                    }
                ]
            },
            {
                day: { ar: "الخميس", en: "Thursday" },
                sessions: [
                    {
                        subject: { ar: "بروتوكولات شبكات الحاسوب", en: "Computer Network Protocols" },
                        professor: { ar: "ا.م.د. محمود شكر محمود", en: "Dr. Mahmoud Shuker" },
                        type: { ar: "نظري", en: "Theory" },
                        time: "10:30",
                        room: { ar: "قاعة رقم 3", en: "Hall 3" },
                        isLab: false
                    },
                    {
                        subject: { ar: "بروتوكول شبكات الحاسب", en: "Computer Network Protocols" },
                        professor: { ar: "ا.م.د. محمود شكر محمود", en: "Dr. Mahmoud Shuker" },
                        type: { ar: "عملي", en: "Lab" },
                        time: "12:30",
                        room: { ar: "مختبر الامنية", en: "Security Lab" },
                        isLab: true
                    },
                    {
                        subject: { ar: "تصميم المواقع الإلكترونية", en: "Web Design" },
                        professor: { ar: "م.م. تحسين حسين", en: "Mr. Tahseen Hussein" },
                        type: { ar: "نظري", en: "Theory" },
                        time: "02:00",
                        room: { ar: "قاعة رقم 3", en: "Hall 3" },
                        isLab: false
                    }
                ]
            }
        ]
    };

    // --- State ---
    let currentLang = 'ar';

    // --- DOM Elements ---
    const htmlEl = document.documentElement;
    const langToggleBtn = document.getElementById('lang-toggle');
    const langTextEl = document.getElementById('lang-text');
    const scheduleGrid = document.getElementById('schedule-grid');

    // Header Elements
    const titleMain = document.getElementById('title-main');
    const sectionsInfo = document.getElementById('sections-info');
    const deptName = document.getElementById('dept-name');
    const footerText = document.getElementById('footer-text');

    // --- Functions ---
    function renderSchedule() {
        // Update Direction & Font
        htmlEl.setAttribute('lang', currentLang);
        htmlEl.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

        // Update Static Text
        titleMain.textContent = scheduleData.meta.title[currentLang];
        deptName.textContent = scheduleData.meta.dept[currentLang];
        sectionsInfo.innerHTML = `<i class="fa-solid fa-users"></i> ${scheduleData.meta.sections[currentLang]}`;
        footerText.textContent = scheduleData.meta.footer[currentLang];

        langTextEl.textContent = currentLang === 'ar' ? 'English' : 'العربية';

        // Render Grid
        scheduleGrid.innerHTML = '';

        scheduleData.days.forEach(dayBox => {
            const row = document.createElement('div');
            row.className = 'day-row';

            const dayHeader = document.createElement('div');
            dayHeader.className = 'day-header';
            dayHeader.textContent = dayBox.day[currentLang];

            const sessionsGrid = document.createElement('div');
            sessionsGrid.className = 'sessions-grid';

            dayBox.sessions.forEach(session => {
                const card = document.createElement('div');
                card.className = `session-card ${session.isLab ? 'lab' : 'theory'}`;

                const typeLabel = session.type[currentLang];
                const typeClass = session.isLab ? 'lab' : 'theory';

                card.innerHTML = `
                    <div class="session-title">${session.subject[currentLang]}</div>
                    <div class="session-info">
                        <div class="info-row">
                            <i class="fa-solid fa-clock"></i> <span>${session.time}</span>
                            <span class="tag ${typeClass}">${typeLabel}</span>
                        </div>
                        <div class="info-row">
                            <i class="fa-solid fa-chalkboard-user"></i> <span>${session.professor[currentLang]}</span>
                        </div>
                        <div class="info-row">
                            <i class="fa-solid fa-location-dot"></i> <span>${session.room[currentLang]}</span>
                        </div>
                    </div>
                `;
                sessionsGrid.appendChild(card);
            });

            row.appendChild(dayHeader);
            row.appendChild(sessionsGrid);
            scheduleGrid.appendChild(row);
        });
    }

    function toggleLanguage() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        renderSchedule();
    }

    // --- Initialization ---
    renderSchedule();

    // --- Event Listeners ---
    langToggleBtn.addEventListener('click', toggleLanguage);



    // Export PNG
    document.getElementById('btn-png').addEventListener('click', async () => {
        const element = document.getElementById('timetable-capture');

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: '#1a1a2e' // Ensure dark background
            });

            const link = document.createElement('a');
            link.download = `timetable_${currentLang}.png`;
            link.href = canvas.toDataURL();
            link.click();
        } catch (err) {
            console.error(err);
            alert('Error generating Image');
        }
    });
});
