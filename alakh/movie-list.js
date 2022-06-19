var post=JSON.parse(localStorage.getItem("moviePoster1"))

  post.forEach(el => {
        let d1=document.createElement("div")
        d1.addEventListener("click",function(){
            movie_Discreption(img.src,lang.innerText,title.innerText,trelir)
        })
        let trelir=el.vLink;
        let img=document.createElement("img")
        img.src=el.poster
        let title=document.createElement("h3")
        title.innerText=el.title
        let bag=el.lang+"||"+el.type
        let lang=document.createElement("h6")
        lang.innerText=bag
        lang.style.color="black"
        // console.log(lang)
        d1.append(img,title,lang)
        document.getElementById("container").append(d1)
});

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




var post2=JSON.parse(localStorage.getItem("moviePoster2"))

post2.forEach(el => {
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
    d1.append(img,title,lang)
    document.getElementById("container").append(d1)
});

var post3=JSON.parse(localStorage.getItem("moviePoster3"))

post3.forEach(el => {
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
    d1.append(img,title,lang)
    document.getElementById("container").append(d1)
});

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
    d1.append(img,title,lang)
    document.getElementById("container").append(d1)
});

