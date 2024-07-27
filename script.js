let productImg = document.getElementById("productsImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "image1.png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productsImg.src = "image2.png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classlist.add("active");
}
btn[2].onclick = function(){
    productsImg.src = "image3.png";

    for(bt of btn){
        bt.classlist.remove("active");
    }
    this.classli
}