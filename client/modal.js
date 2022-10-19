const modalHeader = modal.querySelector('h2');
const modalName = modal.querySelector('address');
const modalContent = modal.querySelector('p');

async function renderPostModal(post) {
    modalHeader.textContent = `${post.dataset.title}`;
    modalName.textContent = `${post.dataset.pseudo}`;
    modalContent.textContent = `${post.dataset.abstract}`;
}
