const data = document.getElementById('form')
const title = document.getElementById('title')
const name = document.getElementById('name')
const text = document.getElementById('text')

for (const el of data.children) {
    if(el.classList.contains('empty')){
        el.textContent = el.dataset.placeholder
    }
}