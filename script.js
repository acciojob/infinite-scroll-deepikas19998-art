const listContainer = document.getElementById('list');
let itemCount = 0;

// Function to create and append n list items
function addItems(n) {
  for (let i = 0; i < n; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `List Item ${itemCount}`;
    listContainer.appendChild(li);
  }
}

// Initial load with 10 items
addItems(10);

// Infinite scroll logic
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    addItems(2);
  }
});
