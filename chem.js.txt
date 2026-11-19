document.querySelectorAll('article h3').forEach(h=>h.addEventListener('click',()=>h.parentElement.classList.toggle('closed')));
document.getElementById('open').addEventListener('click',()=>document.querySelectorAll('article').forEach(a=>a.classList.remove('closed')));
document.getElementById('close').addEventListener('click',()=>document.querySelectorAll('article').forEach(a=>a.classList.add('closed'));
