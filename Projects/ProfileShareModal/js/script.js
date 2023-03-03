const share_btn = document.querySelector("#share-btn");
const modal_close = document.querySelector("#modal-close");

const profile_modal = document.querySelector("#profile-modal");
const overlay = document.querySelector("#overlay");

const openModal = () => {
    profile_modal.classList.add('profile-modal-active');
    overlay.classList.add('overlay-active');
    console.log("modal is open");
}; 

const closeModal = () => {
    profile_modal.classList.remove('profile-modal-active');
    overlay.classList.remove('overlay-active');
    console.log("modal is closed");
}; 

share_btn.addEventListener('click', openModal);
modal_close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

