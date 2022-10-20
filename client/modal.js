const modal = document.querySelector('#modal');
const modalHeader = modal.querySelector('h2');
const modalClose = modal.querySelector('i a');
const modalContent = modal.querySelector('article');

const fields = [
    { tag: 'input', attributes: { type: 'text', name: 'title', placeholder: 'Title' } },
    { tag: 'input', attributes: { type: 'text', name: 'pseudo', placeholder: 'Pseudonym' } },
    { tag: 'textarea', attributes: { name: 'abstract', placeholder: 'Abstract' } },
    { tag: 'input', attributes: { type: 'submit', value: 'Add Secret' } }
]

// async function renderPostModal(post) {
//     modalHeader.textContent = `${post.dataset.title}`;
//     modalName.textContent = `${post.dataset.pseudo}`;
//     modalContent.textContent = `${post.dataset.abstract}`;
// }

async function loadModalFor(secrets, id) {
    modalContent.innerHTML = '';
    modal.style.display = 'block';
    if (id === 'new') {
        renderNewSecretPost();
    } else {
        const data = await getById(secrets, id);
        if (secrets === 'secrets') { 
            renderPostModal(data)
        }
    }
}
// double check if statement

function renderPostModal(secret) {
    modalHeader.textContent = `${secret.title}`;
    const secretLink = createItemLink(secret);
    const abstract = document.createElement('p');
    abstract.textContent = secret.abstract;
    modalContent.appendChild(secretLink);
    modalContent.appendChild(abstract);
    modalClose.href = `#secrets`;
}

function renderNewSecretPost(){
    modalHeader.textContent = 'Add a Secret';
    const form = document.createElement('form');
    fields.forEach(f => {
        const field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
        form.appendChild(field);
    })
    form.onsubmit = postSecret;
    modalContent.appendChild(form);
    modalClose.href = `#secrets`;
}

function createItemLink(data){
    const link = document.createElement('a');
    // console.log(data.p)
    link.href = `#${data.pseudo}`;
    // link.textContent = data.name || data.title;
    link.textContent = data.pseudo;
    return link;
}
