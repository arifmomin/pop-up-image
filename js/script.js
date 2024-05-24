// const Allimage = [...document.querySelectorAll(".image")];
// const popup = document.querySelector(".popup");
// const closeBtn = document.querySelector(".close_button");
// const popup_big_img = document.querySelector (".popup_big_img")

// console.log(popup);
// Allimage.forEach((eachitem) => {
//     eachitem.addEventListener("click", (imginfo)=>{
//         popup.classList.toggle("active");
//         displayBigImg(imginfo.target.src);
//     })
// })

// closeBtn.addEventListener("click", () =>{
//     popup.classList.remove("active")
// }) 
// function displayBigImg (imginfo){
// let imgName = imginfo.split("/").splice (9).join("/");
// popup_big_img.src = imgName
// }


const Allimage = [...document.querySelectorAll(".image")];
const popup = document.querySelector(".popup");
const close_button = document.querySelector(".close_button");
const popup_big_img = document.querySelector (".popup_big_img");
console.log(Allimage);
Allimage.forEach((eachitem) =>{
    eachitem.addEventListener("click", (imginfo)=>{
        popup.classList.toggle("active")
        bigImage(imginfo.target.src);
    })
})
close_button.addEventListener("click", ()=>{
    popup.classList.remove("active")
})
function bigImage (imginfo){
    const imageName =imginfo.split("/").splice(9).join("/");
    popup_big_img.src = imageName
}