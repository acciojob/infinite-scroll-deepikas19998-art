const listContainer = document.getElementById('infi-list');
let itemCount = 0;

// Add n list items
function addItems(n) {
  for (let i = 0; i < n; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `List Item ${itemCount}`;
    listContainer.appendChild(li);
  }
}

// Add 10 items on load
addItems(10);

// Add more when scrolled near bottom
listContainer.addEventListener('scroll', () => {
  if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight - 20) {
    addItems(2);
  }
});
