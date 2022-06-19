var movie_dis=JSON.parse(localStorage.getItem("disData"))

document.querySelector("title").innerText=movie_dis[0].name+"/zee5_movies/zee5.com"
var k=document.querySelector("iframe").src=movie_dis[0].videoLink;

var z=document.createElement("img")
z.src=movie_dis[0].image
var Lm=document.createElement("h1")
Lm.innerText=movie_dis[0].name

var Lt=document.createElement("h3")
Lt.innerText=movie_dis[0].language
 document.querySelector("#vid").append(z,Lm,Lt)

 var post2=JSON.parse(localStorage.getItem("moviePoster2"))

 for(var i=0; i<6; i++){
    let d1=document.createElement("div")
 
    let img=document.createElement("img")
    img.src=post2[i].poster
    let title=document.createElement("h3")
    title.innerText=post2[i].title
    let bag=post2[i].lang+"||"+post2[i].type
    let lang=document.createElement("h6")
    lang.innerText=bag
    lang.style.color="black"
    // console.log(lang)
    d1.append(img)
    document.getElementById("pos").append(d1)
 }
 

 var post4=JSON.parse(localStorage.getItem("moviePoster4"))

post4.forEach(el => {
    let d1=document.createElement("div")

    let img=document.createElement("img")
    img.src=el.poster
    let title=document.createElement("h3")
    title.innerText=el.title
    let bag=el.lang+"||"+el.type
    let lang=document.createElement("h6")
    lang.innerText=bag
    lang.style.color="black"
    // console.log(lang)
    d1.append(img)
    document.getElementById("below").append(d1)
});