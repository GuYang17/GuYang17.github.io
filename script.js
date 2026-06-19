// Theme switching
const themeToggle = document.getElementById('themeToggle');
const themes = ['system', 'light', 'dark'];
let currentThemeIndex = 0;

// Get the stored theme or default to 'system'
const getStoredTheme = () => localStorage.getItem('theme') || 'system';

// Get the preferred color scheme based on system settings
const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Get the display name for current theme
const getThemeDisplayName = (theme) => {
  const names = {
    'system': 'System',
    'light': 'Light',
    'dark': 'Dark'
  };
  return names[theme] || theme;
};

// Update the button icon based on theme
const updateThemeIcon = (theme) => {
  const icons = {
    'system': 'fa-desktop',
    'light': 'fa-sun',
    'dark': 'fa-moon'
  };
  const icon = themeToggle.querySelector('i');
  icon.className = `fas ${icons[theme]}`;
};

// Update the tooltip based on current and next theme
const updateThemeTooltip = () => {
  const currentTheme = themes[currentThemeIndex];
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
  const currentName = getThemeDisplayName(currentTheme);
  const nextName = getThemeDisplayName(nextTheme);
  themeToggle.setAttribute('title', `Current: ${currentName} | Next: ${nextName}`);
};

// Apply theme to the document
const applyTheme = (theme) => {
  let finalTheme = theme;
  if (theme === 'system') {
    finalTheme = getSystemTheme();
  }
  
  if (finalTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
};

// Initialize theme on page load
const initTheme = () => {
  const storedTheme = getStoredTheme();
  currentThemeIndex = themes.indexOf(storedTheme);
  applyTheme(storedTheme);
  updateThemeIcon(storedTheme);
  updateThemeTooltip();
};

// Toggle to next theme
themeToggle.addEventListener('click', () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const nextTheme = themes[currentThemeIndex];
  
  localStorage.setItem('theme', nextTheme);
  applyTheme(nextTheme);
  updateThemeIcon(nextTheme);
  updateThemeTooltip();
  
  // Visual feedback
  themeToggle.style.transform = 'scale(1.1)';
  setTimeout(() => {
    themeToggle.style.transform = 'scale(1)';
  }, 150);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const storedTheme = getStoredTheme();
  if (storedTheme === 'system') {
    applyTheme('system');
  }
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to top smoothly when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize
scrollToTopBtn.style.display = 'none';
initTheme();
