(() => {
  const KEY = 'sangsoo1ee-theme';
  const root = document.documentElement;
  const current = localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light';
  root.dataset.theme = current;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'theme-toggle interactive';
  toggle.setAttribute('aria-label', current === 'dark' ? 'Switch to white theme' : 'Switch to black theme');
  toggle.setAttribute('title', current === 'dark' ? 'White theme' : 'Black theme');
  toggle.innerHTML = '<img src="cursor.svg" alt="">';
  document.body.appendChild(toggle);

  // Home has an intro/loading sequence: reveal this toggle together with the other UI.
  if (document.getElementById('loadingScreen')) document.body.classList.add('has-loading-intro');

  function setTheme(theme){
    root.dataset.theme = theme;
    localStorage.setItem(KEY, theme);
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to white theme' : 'Switch to black theme');
    toggle.setAttribute('title', theme === 'dark' ? 'White theme' : 'Black theme');
  }

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });
})();
