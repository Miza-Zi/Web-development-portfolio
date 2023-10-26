document.getElementById('increment').addEventListener('click', function() {
    var counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) + 1;
    counter.style.color = (parseInt(counter.textContent) >= 0) ? 'green' : 'red';
});
  
  document.getElementById('decrement').addEventListener('click', function() {
    var counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) - 1;
    counter.style.color = (parseInt(counter.textContent) >= 0) ? 'green' : 'red';
});
  
  document.getElementById('reset').addEventListener('click', function() {
    var counter = document.getElementById('counter');
    counter.textContent = 0;
    counter.style.color = 'green';
});