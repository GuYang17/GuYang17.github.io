(function () {
  const themes = ['light', 'dark', 'gruvbox', 'gruvbox-light'];
  const root = document.documentElement;
  const storageKey = 'site-theme';
  const scrollBtn = document.getElementById('scrollTopBtn');
  const themeBtn = document.getElementById('themeToggleBtn');

  function setTheme(name) {
    if (!themes.includes(name)) {
      name = 'light';
    }
    root.dataset.theme = name;
    localStorage.setItem(storageKey, name);
    themeBtn.title = 'Change Themes(Current: ' + name + ')';
  }

  function nextTheme() {
    const current = root.dataset.theme || 'light';
    const next = themes[(themes.indexOf(current) + 1) % themes.length];
    setTheme(next);
  }

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  themeBtn.addEventListener('click', nextTheme);

  const savedTheme = localStorage.getItem(storageKey);
  setTheme(savedTheme || 'light');
})();
