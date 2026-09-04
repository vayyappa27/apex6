// admin.js – basic admin page interactions

document.addEventListener('DOMContentLoaded', () => {
  const adminLinks = document.querySelectorAll('.admin-list a');
  adminLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Feature "${link.textContent}" is not implemented yet.`);
    });
  });
});
