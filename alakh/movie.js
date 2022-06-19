// var img1=document.createElement("img")
// img1.src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/super-kidz-brett-butler.jpg"

// var img2=document.createElement("img")
// img2.src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/super-kidz-brett-butler.jpg"

// var img4=document.createElement("img")
// img4.src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/super-kidz-brett-butler.jpg"

// var img3=document.createElement("img")
// img3.src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/super-kidz-brett-butler.jpg"


// document.getElementById("slid")




var Data=JSON.parse(localStorage.getItem("movieSlider"))

var s1=document.getElementById("slid")
Data.forEach(el => {
    var div=document.createElement("div")
   var image= document.createElement("img")
   image.src=el.image;
   var dis=document.createElement("p")
   dis.innerText=el.title;
   var logo=document.createElement("h3")
   var i=document.createElement("i")
   i.setAttribute("class","fa-solid fa-crown")
   logo.append(i)
   var div1=document.createElement("div")
   var p1=document.createElement("div")
   p1.innerText="WATCH"

   var p2=document.createElement("div")
   p2.innerText="BUY PLAN"

   div1.append(p1,p2)
   div.append(image,dis,div1,logo)
   document.getElementById("slid").append(div)
});



{
  let list1=JSON.parse(localStorage.getItem("moviePoster1"))

// for(var i=0; i<4; i++){
//    var movieZ1= document.createElement("div");
   let upDiv=document.createElement("div")
   upDiv.setAttribute("id","para")
   
   let p5=document.createElement("p");
   p5.innerText="ZEE||New-Movies"
   p5.style.cursor="pointer"
   p5.addEventListener("click",rechOnLPage11)
   let p6=document.createElement("p");
   p6.innerText="MORE >"
   p6.style.color="purple"
   p6.style.cursor="pointer"
   p6.addEventListener("click",rechOnLPage12)

   upDiv.append(p5,p6)
   document.getElementById("boxes").append(upDiv)
//    movieZ1.append(p5,p6)

    let D1= document.createElement("div")
    D1.setAttribute("id","poster")

    list1.forEach(el =>{
      let Tt=el.title;
      let lang=el.lang+"||"+el.type;
      let v_link=el.vLink;
      let Image=el.poster
      console.log(Image)
      let img5=document.createElement("img")
      img5.src=el.poster;
      img5.setAttribute("id","myPoster")
      img5.addEventListener("click",function(){
        movie_Discreption(Image,lang,Tt,v_link)
      })
      

      D1.append(img5)
    //   movieZ1.append(D1)
      document.getElementById("boxes").append(D1)
    });
  }
   
// }

function movie_Discreption(img,lang,title,vLink){
  let dis_Data=[
    {
        image:img,
        language:lang,
        name:title,
        videoLink:vLink
    }
  ]
  localStorage.setItem("disData",JSON.stringify(dis_Data))
  window.location.href="movie_Dis.html"
}

function rechOnLPage11(){
    window.location.href="movie-list1.html"
}

function rechOnLPage12(){
  window.location.href="movie-list1.html"
}






{
  let list1=JSON.parse(localStorage.getItem("moviePoster2"))

// for(var i=0; i<4; i++){
//    var movieZ1= document.createElement("div");
   let upDiv=document.createElement("div")
   upDiv.setAttribute("id","para")
   
   let p5=document.createElement("p");
   p5.innerText="ZEE||Sort Movies"
   p5.style.cursor="pointer"
   p5.addEventListener("click",rechOnLPage11)
   let p6=document.createElement("p");
   p6.innerText="MORE >"
   p6.style.color="purple"
   p6.style.cursor="pointer"
   p6.addEventListener("click",rechOnLPage12)

   upDiv.append(p5,p6)
   document.getElementById("boxes").append(upDiv)
//    movieZ1.append(p5,p6)
let D1= document.createElement("div")
D1.setAttribute("id","poster")
    list1.forEach(el =>{
     
      let img5=document.createElement("img")
      img5.src=el.poster;
      D1.append(img5)
    //   movieZ1.append(D1)
      document.getElementById("boxes").append(D1)
    });
  }






{
  let list1=JSON.parse(localStorage.getItem("moviePoster3"))

// for(var i=0; i<4; i++){
//    var movieZ1= document.createElement("div");
   let upDiv=document.createElement("div")
   upDiv.setAttribute("id","para")
   
   let p5=document.createElement("p");
   p5.innerText="ZEE||Animetion"
   p5.style.cursor="pointer"
   p5.addEventListener("click",rechOnLPage11)
   let p6=document.createElement("p");
   p6.innerText="MORE >"
   p6.style.color="purple"
   p6.style.cursor="pointer"
   p6.addEventListener("click",rechOnLPage12)

   upDiv.append(p5,p6)
   document.getElementById("boxes").append(upDiv)
//    movieZ1.append(p5,p6)
let D1= document.createElement("div")
D1.setAttribute("id","poster")
    list1.forEach(el =>{
     
      let img5=document.createElement("img")
      img5.src=el.poster;
      D1.append(img5)
    //   movieZ1.append(D1)
      document.getElementById("boxes").append(D1)
    });
  }




{
  let list1=JSON.parse(localStorage.getItem("moviePoster4"))

// for(var i=0; i<4; i++){
//    var movieZ1= document.createElement("div");
   let upDiv=document.createElement("div")
   upDiv.setAttribute("id","para")
   
   let p5=document.createElement("p");
   p5.innerText="ZEE||Hpllywood"
   p5.style.cursor="pointer"
   p5.addEventListener("click",rechOnLPage11)
   let p6=document.createElement("p");
   p6.innerText="MORE >"
   p6.style.color="purple"
   p6.style.cursor="pointer"
   p6.addEventListener("click",rechOnLPage12)

   upDiv.append(p5,p6)
   document.getElementById("boxes").append(upDiv)
//    movieZ1.append(p5,p6)
let D1= document.createElement("div")
D1.setAttribute("id","poster")
    list1.forEach(el =>{
     
      let img5=document.createElement("img")
      img5.src=el.poster;
      D1.append(img5)
    //   movieZ1.append(D1)
      document.getElementById("boxes").append(D1)
    });
  }



// var b1=document.createElement("div");
// b1.setAttribute("id","b1");

// var upB1=document.createElement("div")
// var downB1=document.createElement("div")
// var p1=document.createElement("p")
// p1.innerText="Zee5 Orignals"

// var p2=document.createElement("p")
// p2.innerText="See More >"

// upB1.append(p1,p2)

// downB1.append(img1,img2)

// b1.append(upB1,downB1)
// document.getElementById("boxes").append(b1)