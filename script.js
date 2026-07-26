const images=[
"img1.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg",
"img5.jpg",
"img6.jpg"
];

let currentIndex=0;

function openLightbox(index){
currentIndex=index;
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=images[currentIndex];
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function changeImage(step){

currentIndex+=step;

if(currentIndex<0){
currentIndex=images.length-1;
}

if(currentIndex>=images.length){
currentIndex=0;
}

document.getElementById("lightbox-img").src=images[currentIndex];

}

function filterImages(category){

let items=document.querySelectorAll(".image");

items.forEach(item=>{

if(category==="all"){
item.style.display="block";
}
else if(item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

}
