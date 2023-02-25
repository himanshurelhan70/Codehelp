// modals
const profile_modal = document.querySelector("#profile-modal");
const follow_modal = document.querySelector("#follow-modal");

// buttons to open modals
const share_btn = document.querySelector("#share-btn");
const follow_btn = document.querySelector("#follow-btn");

// buttons to close modals
const profile_modal_close = document.querySelector("#profile-modal-close");
const follow_modal_close = document.querySelector("#follow-modal-close");

// overlay
const overlay = document.querySelector("#overlay");

// open modal function
const openModal = (event) => {
    const elemId = event.target.id;

    if(elemId == 'share-btn'){
        profile_modal.classList.add('modal-active');
        overlay.classList.add('overlay-active');
        console.log("profile modal is open");
    }

    else if(elemId == 'follow-btn'){
        follow_modal.classList.add('modal-active');
        overlay.classList.add('overlay-active');
        console.log("follow modal is open");
    }
}; 

// close modal function
const closeModal = (event) => {
    const elemId = event.target.id;

    if(elemId == 'profile-modal-close'){
        profile_modal.classList.remove('modal-active');
        overlay.classList.remove('overlay-active');
        console.log("profile modal is closed");
    }

    else if(elemId == 'follow-modal-close'){
        follow_modal.classList.remove('modal-active');
        overlay.classList.remove('overlay-active');
        console.log("follow modal is closed");
    }

    else{
        profile_modal.classList.remove('modal-active');
        follow_modal.classList.remove('modal-active');
        overlay.classList.remove('overlay-active');
        console.log("modal is closed");
    }
}; 

// Event listener on buttons to open the modal
share_btn.addEventListener('click', openModal);
follow_btn.addEventListener('click', openModal);

// Event listener on buttons to close the modal
profile_modal_close.addEventListener('click', closeModal);
follow_modal_close.addEventListener('click', closeModal);

// modal will be closed when clicked on overlay
overlay.addEventListener('click', closeModal);
