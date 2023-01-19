const captions = document.getElementsByClassName("caption");

console.log(captions);

Array.from(captions).forEach((caption, index) => {
    caption.innerText = `Image ${index+1}`;
});
