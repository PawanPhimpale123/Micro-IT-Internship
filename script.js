function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression + ' = ' + result);
  } catch (error) {
    alert("Invalid expression");
  }
}

function addToHistory(entry) {
  const historyDiv = document.getElementById('history');
  const newEntry = document.createElement('div');
  newEntry.className = 'history-item';
  newEntry.textContent = entry;
  historyDiv.appendChild(newEntry);
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
