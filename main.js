let percorsi = [
    "https://picsum.photos/id/101/900/400",
    "https://picsum.photos/id/102/900/400",
    "https://picsum.photos/id/103/900/400",
    "https://picsum.photos/id/104/900/400",
    "https://picsum.photos/id/106/900/400"
];

for (let i = 0; i < percorsi.length; i++) {
    immagine = `<img class="slide" src="${percorsi[i]}"></img>`;

    document.getElementById("pic-wrapper").innerHTML += immagine;
    
}
const immagini = document.getElementsByClassName("slide");
let imgAttuale = 0 
immagini[imgAttuale].classList.add("visible");

document.getElementById("backBtn").addEventListener("click", function() {
    console.log("back");
    if (imgAttuale != 0){
        immagini [imgAttuale].classList.remove("visible");
        imgAttuale--;
        immagini[imgAttuale].classList.add("visible")
    }
});

document.getElementById("nextBtn").addEventListener("click", function() {
    if (imgAttuale != 4){
        immagini [imgAttuale].classList.remove("visible");
        imgAttuale++;
        immagini[imgAttuale].classList.add("visible")
    }
});