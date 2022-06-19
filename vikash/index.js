

let moviesArr = JSON.parse(localStorage.getItem("moviesData")) || []

function Image(name, image) {
    this.name = name
    this.image = image
}

let p1 = new Image('RRR', "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-10z5145273/cover/rrrpfp27in1170x658090620220ef886894f604ee8b6266bb061743a66.jpg")
let p2 = new Image('The Kashmir File', 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/cover/1170x658withlogo39e9b67c713e4044a52d5131b6ccd535351614f22f2b4b71b1c6212b4866e89a.jpg')
let p3 = new Image('Tonic', "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z588913/cover/1170x658withlogof4d15b791bfd439e92e8c174c13edbb8874794679b624eec8f91cc31d9c489c0.jpg")
let p4 = new Image('The Broken News', "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/cover/1170x658withlogo05d4d0839eca4866a1881b4218b99fad.jpg")
let p5 = new Image('Bhagya Lakshmi', "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1170x658withlogob168fa3c7f9c427ba6b10f6e869aa3cf.jpg")
let p6 = new Image('Kumdali Bhagya', "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1170x658withlogo759cb1985ac14d279a10352566e46681.jpg")
let p7 = new Image('Attack: Part 1', "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/cover/1170x658withlogo7d3b23a5bbeb483298901769ba1e97bb.jpg")
moviesArr.push(p1, p2, p3, p4, p5, p6, p7)

localStorage.setItem("moviesData", JSON.stringify(moviesArr))
console.log(moviesArr)

let sliderImage = JSON.parse(localStorage.getItem("moviesData"))

let i = 0
displaySlider(sliderImage)

let picture = sliderImage[0].image
let avatar = document.createElement("img")
avatar.setAttribute("id", "sliderPhoto")
avatar.src = picture

// let MovieName = sliderImage[0].name
let title = sliderImage[i].name
let name = document.createElement("h1")
name.innerText = title

document.querySelector(".append_image").append(avatar, name)

i = i + 1

function displaySlider(sliderImage) {

    setInterval(function () {
        if (i == sliderImage.length) {
            i = 0
        }
        document.querySelector(".append_image").innerHTML = ""

        let title = sliderImage[i].name
        let name = document.createElement("h1")

        let photo = sliderImage[i].image
        let avatar = document.createElement("img")

        avatar.setAttribute("id", "sliderPhoto")
        avatar.src = photo

        name.innerText = title
        name.setAttribute("id", "sliderName")

        let watch_div=document.createElement("button")
        watch_div.setAttribute("id","watch_button")
        watch_div.innerText="▶ WATCH"

        
        let buy_Plan_div=document.createElement("button")
        buy_Plan_div.setAttribute("id","buy_button")
        buy_Plan_div.innerText="♕  BUY PLAN"
         
        let button_div=document.createElement("div")
        button_div.setAttribute("id","watch_buy_button")
        button_div.append(watch_div,buy_Plan_div)

        let crown=document.createElement("img")
        crown.setAttribute("id","crown_icon")
        crown.src="https://www.zee5.com/images/premium-ic.svg?ver=2.51.65"

        document.querySelector(".append_image").append(crown,avatar,name,button_div)
        i++
    }, 2000)
}


// // DATA ZEE 5 WEB SERIES*********************************************************


// let Zee5WebSeriesArray= JSON.parse(localStorage.getItem("zee_Webseries")) || []
//     function Zee5WebSeries(name,image,crownUrl,videoUrl){
//         this.name=name
//         this.image=image
//         this.crownUrl=crownUrl
//         this.videoUrl=videoUrl
//     }

//     let zee1=new Zee5WebSeries("The Broken News","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/portrait/1920x770a9add3f2aa4745838288b4147deb1b0f.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=ru2t7vsKzL4")
//     let zee2=new Zee5WebSeries("Never Kiss Your Best Friend","https://akamaividz2.zee5.com/image/upload/w_1366,h_548,c_scale,f_webp,q_auto:eco/resources/0-6-2356/cover/1170x658withlogo155a32e43edf43fd90d164eae636e159.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=h5zyJ-vSLfY")
//     let zee3=new Zee5WebSeries("Abhay","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-1298/portrait/1920x770d9ead07e5b304a989d85cf8c6e0113fb.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=0anKho2PSv4")
//     let zee4=new Zee5WebSeries("Abhay S1","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_845469717/portrait/abhaymalay1920440833706440b0555aecf434464db266c3facbab88437ba48f7ff9824b4a938be5a1856be487.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=x8yc30nLXUM")
//     let zee5=new Zee5WebSeries("Abhay S2","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-101-externall_2128515498/portrait/abhay21920x77081b7aba24204493eaa486fce263a1827.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=x8yc30nLXUM")
//     let zee6=new Zee5WebSeries("Bloody Brothers","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z596111/portrait/1920x7709fcbdd4c78184b51aadd7e2e34396dbf.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=jwo0Lhms-MM")
//     let zee7=new Zee5WebSeries("Mithya","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z587408/portrait/1920x770195db875fe204fa4afe115764b5dc00ba004028948aa4211b107faed649301d7.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=-0d7TVQ-SpM")
//     let zee8=new Zee5WebSeries("Sutliyan","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z597039/portrait/1920x7708ac7dc91daf34fd390f8c9042bf8ec42.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=rmNi6-by3nQ")
//     let zee9=new Zee5WebSeries("Kaun Banegi Shikharwati","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z560880/portrait/1920x77049b3662989f0475198d1963a5d256ebc.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=HEWqYBWMd5A")
//     let zee10=new Zee5WebSeries("Jeet Ki Zid","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-2955/portrait/1920x7702bde888e01a54a1688ff0a84809a657aef9692fca19245ee980762d8461cfb17.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=7hfQnPvyTMk")
//     let zee11=new Zee5WebSeries("Sunflower","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=7hfQnPvyTMk")
//     let zee12=new Zee5WebSeries("Sunflower","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=7hfQnPvyTMk")
//     let zee13=new Zee5WebSeries("Sunflower","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=7hfQnPvyTMk")
//     let zee14=new Zee5WebSeries("Sunflower","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=7hfQnPvyTMk")
//     let zee15=new Zee5WebSeries("Sunflower","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=7hfQnPvyTMk")
//     let zee16=new Zee5WebSeries("Sunflower","https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
//     "https://www.zee5.com/images/premium-ic.svg?ver=2.51.65","https://www.youtube.com/watch?v=7hfQnPvyTMk")
     
//     Zee5WebSeriesArray.push(zee1,zee2,zee3,zee4,zee5,zee6,zee7,zee8,zee9,zee10,zee11,zee12,zee13,zee14,zee15,zee16)
//     console.log(Zee5WebSeriesArray)

//     localStorage.setItem("zee_Webseries",JSON.stringify(Zee5WebSeriesArray))

// let ZEE5_Original_Web_Series_section=document.querySelector("#section_ZEE5_Original_Web_Series")

// //displayDataInCategories(Zee5WebSeriesArray)

// function displayDataInCategories(data){
//     data.forEach(function(el){
//         let Web_Series_box=document.createElement("div")
//         Web_Series_box.setAttribute("class","Web_Series_card")

//         let Web_Series_title=document.createElement("h2")
//         let Web_Series_thumbnail=document.createElement("img")
//         let Web_Series_crown=document.createElement("img")
//         let Web_Series_videoLink=document.createElement("iframe")

//         Web_Series_title.innerText=el.name
//         Web_Series_thumbnail.src=el.image
//         Web_Series_crown.src=el.crownUrl
//         Web_Series_videoLink.src=el.videoUrl
        
//         Web_Series_box.append(Web_Series_crown,Web_Series_thumbnail,Web_Series_title)

//         ZEE5_Original_Web_Series_section.append(Web_Series_box)

//         // this.name=name
//         // this.image=image
//         // this.crownUrl=crownUrl
//         // this.videoUrl=videoUrl
//     })
// }
