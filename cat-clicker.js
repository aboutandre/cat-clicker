var cat1 = document.getElementById('cat1');
var cat2 = document.getElementById('cat2');
var namePlaceholder1 = document.getElementById('cat1-name');
var namePlaceholder2 = document.getElementById('cat2-name');
var name1 = "Miezi";
var name2 = "Mingau";
var clicks = 0;
cat1.addEventListener('click', function() {
    clicks += 1;
    document.getElementById('clicker-counter').textContent=clicks;
    console.log(clicks);
},
false);
cat2.addEventListener('click', function() {
    clicks += 1;
    document.getElementById('clicker-counter').textContent=clicks;
    console.log(clicks);
},
false);

var go = function() {
  namePlaceholder1.textContent=name1;
  namePlaceholder2.textContent=name2;
  console.log(namePlaceholder1);
}

window.addEventListener("load", go);
