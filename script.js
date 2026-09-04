// script.js – general page interactions

document.addEventListener('DOMContentLoaded', () => {
  // Example: handle primary button click
  const actionBtn = document.getElementById('actionBtn');
  if (actionBtn) {
    actionBtn.addEventListener('click', () => {
      alert('Primary action button clicked!');
    });
  }
});
