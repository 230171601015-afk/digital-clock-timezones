// Digital Clock - Multiple Time Zones
class DigitalClock {
    constructor() {
        this.clocks = [];
        this.format24 = true;
        this.darkMode = false;
        this.init();
    }

    init() {
        this.initializeElements();
        this.attachEventListeners();
        this.loadClocks();
        this.setupClockUpdate();
        this.loadTheme();
    }

    initializeElements() {
        this.modal = document.getElementById('modal');
        this.closeModal = document.getElementById('closeModal');
        this.addClockBtn = document.getElementById('addClockBtn');
        this.timezoneSearch = document.getElementById('timezoneSearch');
        this.suggestions = document.getElementById('suggestions');
        this.timezoneList = document.getElementById('timezoneList');
        this.clocksGrid = document.getElementById('clocksGrid');
        this.emptyState = document.getElementById('emptyState');
        this.formatToggle = document.getElementById('formatToggle');
        this.themeToggle = document.getElementById('themeToggle');
    }

    attachEventListeners() {
        this.addClockBtn.addEventListener('click', () => this.openModal());
        this.closeModal.addEventListener('click', () => this.closeModalDialog());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModalDialog();
        });
        this.timezoneSearch.addEventListener('input', (e) => this.filterTimezones(e.target.value));
        this.formatToggle.addEventListener('change', (e) => this.setFormat(e.target.value));
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Timezone Data
    getTimezones() {
        return [
            'UTC',
            'UTC+01:00',
            'UTC+02:00',
            'UTC+03:00',
            'UTC+04:00',
            'UTC+05:00',
            'UTC+05:30',
            'UTC+06:00',
            'UTC+07:00',
            'UTC+08:00',
            'UTC+09:00',
            'UTC+10:00',
            'UTC+11:00',
            'UTC+12:00',
            'UTC-01:00',
            'UTC-02:00',
            'UTC-03:00',
            'UTC-04:00',
            'UTC-05:00',
            'UTC-06:00',
            'UTC-07:00',
            'UTC-08:00',
            'UTC-09:00',
            'UTC-10:00',
            'UTC-11:00',
            'America/New_York',
            'America/Los_Angeles',
            'America/Chicago',
            'America/Denver',
            'America/Toronto',
            'America/Mexico_City',
            'America/Sao_Paulo',
            'America/Buenos_Aires',
            'Europe/London',
            'Europe/Paris',
            'Europe/Berlin',
            'Europe/Moscow',
            'Europe/Istanbul',
            'Asia/Dubai',
            'Asia/Kolkata',
            'Asia/Bangkok',
            'Asia/Singapore',
            'Asia/Hong_Kong',
            'Asia/Tokyo',
            'Asia/Seoul',
            'Australia/Sydney',
            'Australia/Melbourne',
            'Pacific/Auckland',
            'Africa/Cairo',
            'Africa/Johannesburg',
        ];
    }

    getLocationLabel(timezone) {
        const labels = {
            'UTC': 'UTC (Universal Time)',
            'America/New_York': 'New York (EST/EDT)',
            'America/Los_Angeles': 'Los Angeles (PST/PDT)',
            'America/Chicago': 'Chicago (CST/CDT)',
            'America/Denver': 'Denver (MST/MDT)',
            'America/Toronto': 'Toronto (EST/EDT)',
            'America/Mexico_City': 'Mexico City (CST/CDT)',
            'America/Sao_Paulo': 'São Paulo (BRT/BRST)',
            'America/Buenos_Aires': 'Buenos Aires (ART)',
            'Europe/London': 'London (GMT/BST)',
            'Europe/Paris': 'Paris (CET/CEST)',
            'Europe/Berlin': 'Berlin (CET/CEST)',
            'Europe/Moscow': 'Moscow (MSK)',
            'Europe/Istanbul': 'Istanbul (EET/EEST)',
            'Asia/Dubai': 'Dubai (GST)',
            'Asia/Kolkata': 'Kolkata (IST)',
            'Asia/Bangkok': 'Bangkok (ICT)',
            'Asia/Singapore': 'Singapore (SGT)',
            'Asia/Hong_Kong': 'Hong Kong (HKT)',
            'Asia/Tokyo': 'Tokyo (JST)',
            'Asia/Seoul': 'Seoul (KST)',
            'Australia/Sydney': 'Sydney (AEDT/AEST)',
            'Australia/Melbourne': 'Melbourne (AEDT/AEST)',
            'Pacific/Auckland': 'Auckland (NZDT/NZST)',
            'Africa/Cairo': 'Cairo (EET/EEST)',
            'Africa/Johannesburg': 'Johannesburg (SAST)',
        };
        return labels[timezone] || timezone;
    }

    openModal() {
        this.modal.classList.remove('hidden');
        this.populateTimezoneList();
    }

    closeModalDialog() {
        this.modal.classList.add('hidden');
        this.timezoneSearch.value = '';
        this.suggestions.innerHTML = '';
    }

    populateTimezoneList() {
        const timezones = this.getTimezones();
        this.timezoneList.innerHTML = timezones.map(tz => 
            `<button class="timezone-btn" onclick="clock.addClock('${tz}')">${this.getLocationLabel(tz)}</button>`
        ).join('');
    }

    filterTimezones(query) {
        if (query.length === 0) {
            this.suggestions.innerHTML = '';
            this.populateTimezoneList();
            return;
        }

        const timezones = this.getTimezones();
        const filtered = timezones.filter(tz => 
            tz.toLowerCase().includes(query.toLowerCase()) || 
            this.getLocationLabel(tz).toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length > 0) {
            this.suggestions.innerHTML = filtered.map(tz => 
                `<div class="suggestion-item" onclick="clock.addClock('${tz}')">${this.getLocationLabel(tz)}</div>`
            ).join('');
            this.timezoneList.innerHTML = '';
        } else {
            this.suggestions.innerHTML = '<div class="suggestion-item">No time zones found</div>';
            this.timezoneList.innerHTML = '';
        }
    }

    addClock(timezone) {
        if (!this.clocks.find(c => c.timezone === timezone)) {
            this.clocks.push({ timezone, id: Date.now() });
            this.saveClocks();
            this.render();
            this.closeModalDialog();
        }
    }

    removeClock(id) {
        this.clocks = this.clocks.filter(c => c.id !== id);
        this.saveClocks();
        this.render();
    }

    getTime(timezone) {
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: !this.format24
            });
            return formatter.format(new Date());
        } catch (e) {
            return '--:--:--';
        }
    }

    getDate(timezone) {
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            return formatter.format(new Date());
        } catch (e) {
            return 'Date';
        }
    }

    getOffset(timezone) {
        try {
            if (timezone.startsWith('UTC')) {
                return timezone;
            }
            const now = new Date();
            const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
            const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
            const offset = (tzDate - utcDate) / 3600000;
            const sign = offset >= 0 ? '+' : '';
            return `UTC${sign}${offset.toFixed(1).replace('.0', '')}`;
        } catch (e) {
            return 'UTC';
        }
    }

    render() {
        this.clocksGrid.innerHTML = '';

        if (this.clocks.length === 0) {
            this.emptyState.style.display = 'block';
            return;
        }

        this.emptyState.style.display = 'none';

        this.clocks.forEach(clock => {
            const clockEl = document.createElement('div');
            clockEl.className = 'clock-card';
            clockEl.innerHTML = `
                <button class="remove-btn" onclick="clock.removeClock(${clock.id})">×</button>
                <div class="timezone-name">${this.getLocationLabel(clock.timezone)}</div>
                <div class="digital-time">${this.getTime(clock.timezone)}</div>
                <div class="date-display">${this.getDate(clock.timezone)}</div>
                <div class="offset-display">${this.getOffset(clock.timezone)}</div>
                <div class="time-format">${this.format24 ? '24-HOUR' : '12-HOUR'}</div>
            `;
            this.clocksGrid.appendChild(clockEl);
        });
    }

    setupClockUpdate() {
        setInterval(() => this.render(), 1000);
    }

    setFormat(format) {
        this.format24 = format === '24';
        localStorage.setItem('timeFormat', this.format24 ? '24' : '12');
        this.render();
    }

    toggleTheme() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode');
        this.themeToggle.textContent = this.darkMode ? '☀️ Light' : '🌙 Dark';
        localStorage.setItem('darkMode', this.darkMode);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('darkMode') === 'true';
        if (savedTheme) {
            this.darkMode = true;
            document.body.classList.add('dark-mode');
            this.themeToggle.textContent = '☀️ Light';
        }
    }

    saveClocks() {
        localStorage.setItem('clocks', JSON.stringify(this.clocks));
    }

    loadClocks() {
        const saved = localStorage.getItem('clocks');
        if (saved) {
            this.clocks = JSON.parse(saved);
        } else {
            // Default clocks
            const defaults = ['UTC', 'Europe/London', 'Asia/Tokyo', 'America/New_York'];
            this.clocks = defaults.map((tz, i) => ({ timezone: tz, id: i }));
            this.saveClocks();
        }

        const savedFormat = localStorage.getItem('timeFormat');
        if (savedFormat) {
            this.format24 = savedFormat === '24';
            this.formatToggle.value = savedFormat === '24' ? '24' : '12';
        }

        this.render();
    }
}

// Initialize
let clock;
document.addEventListener('DOMContentLoaded', () => {
    clock = new DigitalClock();
});