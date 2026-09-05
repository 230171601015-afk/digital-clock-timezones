# Digital Clock - Multiple Time Zones

A modern, interactive digital clock application that displays the current time across multiple time zones with real-time updates.

## ✨ Features

### Core Features
- **Multiple Time Zones** - Display time for different locations simultaneously
- **Real-Time Updates** - Clock updates every second automatically
- **Time Format Toggle** - Switch between 24-hour and 12-hour (AM/PM) formats
- **Dark Mode** - Toggle between light and dark themes
- **Add/Remove Clocks** - Easily manage time zones
- **Offset Display** - Shows UTC offset for each timezone
- **Date Display** - Shows current date for each timezone

### User Experience
- Clean, modern interface
- Responsive design (desktop, tablet, mobile)
- Smooth animations and transitions
- LocalStorage for persistent settings
- Default clocks for quick start

## 📁 File Structure

```
digital-clock-timezones/
├── index.html      # HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Clock functionality and logic
└── README.md       # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- JavaScript enabled
- Internet connection (optional, app works offline)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/230171601015-afk/digital-clock-timezones.git
cd digital-clock-timezones
```

2. **Open in browser:**
```bash
# Simply open index.html
open index.html

# Or use a local server
python -m http.server 8000
# Visit http://localhost:8000
```

## 🌐 Live Demo

**Repository:** https://github.com/230171601015-afk/digital-clock-timezones

**Live URL:** https://230171601015-afk.github.io/digital-clock-timezones/

## 📖 How to Use

### Add a Time Zone Clock
1. Click the "+ Add Time Zone" button
2. Search or select a location from the list
3. Clock appears in the grid immediately

### Change Time Format
1. Select "24-Hour" or "12-Hour (AM/PM)" from the dropdown
2. All clocks update instantly

### Toggle Dark Mode
1. Click the theme button (Moon/Sun icon)
2. Background changes to dark theme

### Remove a Clock
1. Click the × button on any clock card
2. Clock is removed from the display

## 🕐 Supported Time Zones

### UTC Offsets
- UTC to UTC±12 (standard offsets)

### Major Cities
- **Americas:** New York, Los Angeles, Chicago, Toronto, Mexico City, São Paulo, Buenos Aires
- **Europe:** London, Paris, Berlin, Moscow, Istanbul
- **Asia:** Dubai, Kolkata, Bangkok, Singapore, Hong Kong, Tokyo, Seoul
- **Oceania:** Sydney, Melbourne, Auckland
- **Africa:** Cairo, Johannesburg

## 💾 Data Persistence

The app automatically saves:
- Selected time zones (via localStorage)
- Time format preference (24-hour or 12-hour)
- Dark mode preference
- All data persists across browser sessions

## 🎨 Design Highlights

- **Color Scheme:** Purple-blue gradient with accent colors
- **Typography:** Clean, modern font hierarchy
- **Layout:** Card-based responsive grid
- **Animations:** Smooth transitions and hover effects
- **Dark Mode:** Comfortable viewing in low-light environments

## 📱 Browser Compatibility

| Browser | Compatibility |
|---------|---------------|
| Chrome | ✅ 60+ |
| Firefox | ✅ 55+ |
| Safari | ✅ 12+ |
| Edge | ✅ 79+ |
| Mobile | ✅ Modern browsers |

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript ES6** - Class-based architecture
- **Intl API** - Timezone handling
- **LocalStorage** - Data persistence

### Key Features Implementation
- Object-oriented design with `DigitalClock` class
- Intl.DateTimeFormat for accurate timezone conversion
- Real-time updates using `setInterval`
- Modal dialog for timezone selection
- Responsive grid layout
- Theme toggle with CSS variables

## 📊 Performance

- **Lightweight:** No external dependencies
- **Fast:** Pure vanilla JavaScript
- **Efficient:** Minimal DOM manipulation
- **Responsive:** Smooth 60fps animations

## 🔐 Privacy

- All data stored locally in browser
- No server requests (except loading the page)
- No tracking or analytics
- Works completely offline after loading

## 🐛 Troubleshooting

### Clock shows incorrect time
- Check your system time
- Verify timezone selection
- Clear browser cache and reload

### Not saving preferences
- Ensure localStorage is enabled
- Check browser privacy settings
- Try a different browser

### UI not displaying correctly
- Update your browser
- Clear cache and reload
- Try different browser for compatibility

## 📝 Browser Console

No console errors should appear. If you see errors:
1. Check browser console (F12)
2. Report issue on GitHub
3. Include error message and browser info

## 🚀 Future Enhancements

- [ ] Timezone search with autocomplete
- [ ] Custom timezone names
- [ ] Analog clock display
- [ ] Timezone comparison
- [ ] Alarm/reminder functionality
- [ ] Timezone converter
- [ ] Stopwatch/timer
- [ ] Export settings

## 📄 License

Open source under MIT License

## 🙏 Acknowledgments

- Built with vanilla JavaScript, HTML5, and CSS3
- Timezone data from JavaScript Intl API
- No external libraries or frameworks

## 📞 Support

- Issues: GitHub Issues
- Questions: GitHub Discussions
- Pull Requests: Welcome!

---

**Happy Time Tracking!** 🕐⏰🌍

Made with ❤️ by [230171601015-afk](https://github.com/230171601015-afk)