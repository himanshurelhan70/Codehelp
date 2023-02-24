const share_btn = document.querySelector("#share_btn");
const profile_modal = document.querySelector("#profile_modal");
const modal_close = document.querySelector("#modal_close");
const overlay = document.querySelector("#overlay");

share_btn.addEventListener('click', () => {
    profile_modal.style.transform = "translate(-50%, -50%)  scale(1)";
    overlay.style.visibility = "visible";
});

modal_close.addEventListener('click', () => {
    profile_modal.style.transform = "translate(-50%, -50%)  scale(0)";
    overlay.style.visibility = "hidden";
});

overlay.addEventListener('click', () => {
    profile_modal.style.transform = "translate(-50%, -50%)  scale(0)";
    overlay.style.visibility = "hidden";
});

