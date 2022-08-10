let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const getEle = (id) => document.getElementById(id);

const renderGlassList = () => {
    const content = dataGlasses.reduce((preValue, ele) => {
        preValue += `
        <div class="col-md-4 glassList">
           <img src="${ele.virtualImg}" class="img-fluid" onclick="addGlass('${ele.id}')">
         </div>
        `
        return preValue;
    }, "");
    getEle("vglassesList").innerHTML = content;
}

renderGlassList();

const renderLayer = (id) => {
    let contentImg = "";
    dataGlasses.forEach(ele => {
        if (ele.id === id) {
            contentImg += `<img src="${ele.virtualImg}" class="img-fluid glassAdd" ">`;
        }
    });
    return contentImg;
}

const renderInfoContent = (id) => {
    let contentInfo = "";
    dataGlasses.forEach(ele => {
        if (ele.id === id) {
            contentInfo += `
            <div>
                <h4>${ele.name} - ${ele.brand} (${ele.color})</h4>
                <span class="glassPriceInfo">$${ele.price}</span><span class="glassStockInfo">Stocking</span>
                <p>${ele.description}</p>
            </div>
            `;
        }
    });
    return contentInfo;
}

window.addGlass = (id) => {
    getEle("glassesInfo").style.display = "block";
    getEle("avatar").innerHTML = renderLayer(id);
    getEle("glassesInfo").innerHTML = renderInfoContent(id);
}

window.removeGlasses = (isAdd) => {
    let glassAdded = document.getElementsByClassName("glassAdd")[0];
    glassAdded = isAdd ? glassAdded.style.display = "block" : glassAdded.style.display = "none";
}
// -------------------------------------------------------------------------------------------------------------------------------- \\
// let showListGlass = () => {
//     let content = "";
//     dataGlasses.map((products) => {
//       let { src, id } = products;
//       content += `
//           <div class="col-4">
//           <img onclick="showInfoGlass('${id}')" class="img-fluid" src="${src}" alt="">
//           </div>
//           `;
//       document.querySelector("#vglassesList").innerHTML = content;
//     });
//   };
// showListGlass();
// let showInfoGlass = (id) => {
//     for (const item of dataGlasses) {
//       if (id == item.id) {
//         document.querySelector("#avatar").innerHTML = `
//           <img id="showglass" class="img-fluid"  src="${item.virtualImg}" alt="">
//           `;
//         document.querySelector("#glassesInfo").innerHTML = `
//           <h2>${item.name} - ${item.brand} (${item.color})</h2>
//           <div>
//           <span class="btn btn-danger"><span>$</span>${item.price}</span><span class="glassStockInfo">Stocking</span>
          
//           </div>
//           <p>${item.description}</p>
//           `;
//       }
//     }
//   };
// document.querySelector("#glassesInfo").style.display = "block";
// let removeGlasses = (boolean) => {
//     if (boolean === true) {
//       document.querySelector("#showglass").style.display = "block";
//       document.querySelector("#glassesInfo").style.display = "block";
//     } else {
//       document.querySelector("#showglass").style.display = "none";
//       document.querySelector("#glassesInfo").style.display = "none";
//     }
//   };
// window.removeGlasses = removeGlasses;
// window.showInfoGlass = showInfoGlass;