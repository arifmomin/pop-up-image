
const Allimage = [...document.querySelectorAll(".image")];
const popup = document.querySelector(".popup");
const close_button = document.querySelector(".close_button");
const popup_big_img = document.querySelector (".popup_big_img");
Allimage.forEach((eachitem) =>{
    eachitem.addEventListener("click", (imginfo)=>{
        popup.classList.toggle("active")
        bigImage(imginfo.target.src);
    });
});
close_button.addEventListener("click", ()=>{
    popup.classList.remove("active")
});
function bigImage (imginfo){
    const imageName = imginfo.split("/").splice(3).join("/");
    console.log(imageName);
    popup_big_img.src = imageName;
}
