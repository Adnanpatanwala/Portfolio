
import Img from "./images/camera.jpg"
import Quiz from "./images/quiz.PNG"
import Furniture from "./images/furniture.PNG"
import unsplash from "./images/unsplash-img.PNG"
import  node from "./images/node.png";

export const data = [
    {
        id:1,
        txt:"Home",
        Url :"/"
    },
    {
        id:2,
        txt:"About",
        Url :"/about"
    },
    {
        id:3,
        txt:"Projects",
        Url :"/project"
    },
    {
        id:4,
        txt:"Contact",
        Url :"/contact"
    }
]


export const projects = [
    {
        id:2,
        name:"Unsplash",
        img : unsplash,
        des:"contains wide range of picture. Build on unsplash api",
        link:"https://github.com/Adnanpatanwala/UnsplashClone"
    },
    {
        id:3,
        name:"Furniture",
        img : Furniture,
        des : "Furniture store Ecommerce",
        link:"https://github.com/Adnanpatanwala/FurnitureStore"
    },
    {
        id:4,
        name:"Ecommerce",
        img : node,
        des : "backend based on ecommerce",
        link:"https://github.com/Adnanpatanwala/Ecommerce-Backend"
    },
    {
        id:1,
        name:"Quiz",
        img : Quiz,
        des:"Quiz Webpage",
        link:"https://github.com/Adnanpatanwala/Quiz"
    },
]

 export const experience = [
     {
         id:3,
         date:"18-03-2024 - 15-09-2024",
         name:"Shypbuddy",
         designation:"Frontend Developer"
     },
    {
        id:1,
        date:"20-09-2023 - 20-06-2024",
        name:"Arcitech",
        designation:"UI developer"
    },
    {
        id:2,
        date:"01-03-2022 - 31-05-2022",
        name:"DotMinds",
        designation:"React Developer"
    },
]