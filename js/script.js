<!--~~~~~~~~~~~~~~~~~~ js/script.js for adv-manual.bauska.org ~~~~~~~~~~~~~~~~~~~~~~~-->
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const searchInput = document.getElementById('search-input');
  const modules = document.querySelectorAll('.manual-module');

  // Theme Switcher
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
  });

  // Mobile Sidebar Toggle
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Live Search Filter
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    modules.forEach(mod => {
      const text = mod.textContent.toLowerCase();
      mod.style.display = text.includes(term) ? 'block' : 'none';
    });
  });
});
