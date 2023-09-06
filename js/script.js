/*---Banner slider below the nav cards---*/ 
let bannerList =[
    {
        imgUrl: "https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg",
    },
    {
        imgUrl: "https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg",
    },
    {
        imgUrl: "https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/fe96207b711-WELL25PE.jpg",
    },
    {
        imgUrl: "https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg",
    }
];

let bannerContainer = document.querySelector(".banner");
createOFFerList(bannerList,bannerContainer)

function createOFFerList(list,container){
    list.forEach(function (el) {
        let img = document.createElement("img");
        img.setAttribute("src",el.imgUrl);
        img.style.margin="10px";
        img.style.width="500px";
        container.append(img);
    })
}

let bannerList2 =[
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0",
    },



    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0",
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0",
    }
];


let bannerContainer2 = document.querySelector(".banner2");
createOFFerList2(bannerList2,bannerContainer2)

function createOFFerList2(list,container){
    list.forEach(function (ele) {
        let img = document.createElement("img");
        img.setAttribute("src",ele.imgUrl1);
        img.style.margin="15px";
        // img.style.width="500px";
        img.setAttribute("height","160px");
        img.setAttribute("width","210px");

        container.append(img);
    })
}

// Banner 3
let bannerList3 =[
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/cbd16e3b586-Mintop.jpg?dim=1440x0",
        brandName:"Mintop"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/93a4059623e-Softovac.png?dim=1440x0",
        brandName:"Softovac"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/b0c905ce347-APTIVATE.png?dim=1440x0",
        brandName:"Aptivate"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/d3481485e73-App_stayfree.jpg?dim=1440x0",
        brandName:"Stayfree"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/2f3e832e341-Everherb-min.png?dim=1440x0",
        brandName:"EverHerb"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0",
        brandName:"Be One"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/e642f1b8237-Glucon_D.jpg?dim=1440x0",
        brandName:"Glucon-D"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/88d71d2fad4-App_Featured-brand.jpg?dim=1440x0",
        brandName:"Friends"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/98de77fb574-Groviva.jpg?dim=1440x0",
        brandName:"Groviva"
    },
    {
        imgUrl1: "https://cms-contents.pharmeasy.in/carousel_item/201210bc27d-App_Huggies.jpg?dim=1440x0",
        brandName:"Huggies"
    }
];

let bannerContainer3 = document.querySelector(".banner3");
createOFFerList3(bannerList3,bannerContainer3)

function createOFFerList3(list,container,brandName){
    list.forEach(function (ele) {
        let img = document.createElement("img");
        let fig = document.createElement("figure");
        let h3 = document.createElement("h3");
        let caption = document.createElement("figcaption");
        let text=document.createTextNode(ele.brandName);
        caption.appendChild(text)
        

        img.setAttribute("src",ele.imgUrl1);

        img.style.margin="15px";
        // img.style.width="500px";
        img.setAttribute("width","210px");
        img.setAttribute("height","160px");
        fig.appendChild(img);
        h3.appendChild(caption)
        fig.appendChild(h3)

        container.append(fig);

    })
}



// window.addEventListener('load', randomCode);
// function generateRandomCode() {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let code = '';
  
//     // Generate the first 4 random alphabets
//     for (let i = 0; i < 4; i++) {
//       const randomIndex = Math.floor(Math.random() * alphabet.length);
//       code += alphabet.charAt(randomIndex);
//     }
  
//     // Generate the next 2 random numbers
//     for (let i = 0; i < 2; i++) {
//       const randomNumber = Math.floor(Math.random() * 10); // 0 to 9
//       code += randomNumber.toString();
//     }
  
//     return code;
//   }
//   const randomCode= generateRandomCode();
//    let btn = document.querySelector(".btn")
//    btn.value = randomCode;
