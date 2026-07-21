const restaurantMenu = [
    {
        title: "Korma",
        price: "300 PKR",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ug5OJWVQlM4afEXComi7f8ZLEpEVKl1H7gZygQ58Vw&s=10",
        description: "Korma bhot acha ha....",
        category: "lunch" 
    }, 
    {
        title: "Halwa Puri",
        price: "150 PKR",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjpsme4NOQlOrf7rO6oeg18DqfYJ0axFpcCRxU8seshRZwyrzVwGF0mHj&s=10",
        description: "Garam garam puriyan...",
        category: "breakfast" 
    },
    {
        title: "allo ka paratha",
        price: "160 PKR",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTY8yBhc2sIocD2vQqXB-Iev_RuCHFLTJwFCM1D_jNA&s=10",
        description: "allo ka paratha hai....",
        category: "breakfast" 
    },
    {
        title: "Biryani",
        price: "250 PKR",
        imageurl: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg",
        description: "Spicy biryani...",
        category: "lunch" 
    },
    {
        title: "steake",
        price: "250 PKR",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYom7wM1u4keNQRV9e19e6cgQcFWhlayRf6PPMh3dbA&s=10",
        description: "bhot acha steake ha",
        category: "lunch" 
    },
    {
        title: "mango shake",
        price: "250 PKR",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFINabeQqj7lfboOLUKp9XuXtnMcLC-VF67oZ2gys8w&s=10",
        description: "bhot acha mango shake...",
        category: "drinks" 
    },
    {
        title: "Pakola milk",
        price: "250 PKR",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjGTG-NIJvtWUvkKTR2rtzZ-3jAz5nLIZtPeRvpehpQ&s=10",
        description: "bhot acha hai...",
        category: "drinks" 
    },
    {
        title: "Mint Margarita",
        price: "550 PKR",
        imageurl: "https://ghwakhe.com/sites/default/files/styles/webp/public/2024-06/mint%20margarita%203%201.webp?itok=ngPiWihr",
        description: "bhot acha hai...",
        category: "drinks" 
    },
];


const foodItemsContainer = document.getElementById("fooditems");

// function displayMenuItems(menuItems) {
//     const displayMenu = menuItems.map(function (menu) {
//         return `<div class="food-item"> <!-- CSS se match karne ke liye food-item kiya -->
//             <!-- image -->
//             <div class="imagediv">
//                 <img src="${menu.imageurl}" alt="${menu.title}">
//             </div>
//             <!-- title & price -->
//             <div class="tittledescription">
//                 <h1>${menu.title}</h1> <!-- Yahan close tag ki mistake text format fix ki -->
//                 <h2>${menu.price}</h2> <!-- small 'p' se match kiya -->
//                 <!-- Description -->
//                 <p>${menu.description}</p>
//             </div>
//         </div>`;
//     });

//     foodItemsContainer.innerHTML = displayMenu.join("");
// }

allhandler()



function allhandler (){ 
    const displayMenu = restaurantMenu.map(function (menu) {
        return `<div class="food-item"> 
            <!-- image -->
            <div class="imagediv">
                <img src="${menu.imageurl}" alt="${menu.title}">
            </div>
            <!-- title & price -->
            <div class="tittledescription">
                <h1>${menu.title}</h1> 
                <h2>${menu.price}</h2> 
                <!-- Description -->
                <p>${menu.description}</p>
            </div>
        </div>`;
    });

    foodItemsContainer.innerHTML = displayMenu.join("");
};

function breakfasthandler (){
    
    const displayMenu = restaurantMenu.filter(function (menu){
        return menu.category == "breakfast" 
    }).map(function (menu) {
        return `<div class="food-item"> 
            <!-- image -->
            <div class="imagediv">
                <img src="${menu.imageurl}" alt="${menu.title}">
            </div>
            <!-- title & price -->
            <div class="tittledescription">
                <h1>${menu.title}</h1> 
                <h2>${menu.price}</h2> 
                <!-- Description -->
                <p>${menu.description}</p>
            </div>
        </div>`;
    });

    foodItemsContainer.innerHTML = displayMenu.join("");
}

function lunchallhandler (){
     const displayMenu = restaurantMenu.filter(function (menu){
        return menu.category == "lunch" 
    }).map(function (menu) {
        return `<div class="food-item"> 
            <!-- image -->
            <div class="imagediv">
                <img src="${menu.imageurl}" alt="${menu.title}">
            </div>
            <!-- title & price -->
            <div class="tittledescription">
                <h1>${menu.title}</h1> 
                <h2>${menu.price}</h2> 
                <!-- Description -->
                <p>${menu.description}</p>
            </div>
        </div>`;
    });

    foodItemsContainer.innerHTML = displayMenu.join("");
}

function drinkshandler (){
     const displayMenu = restaurantMenu.filter(function (menu){
        return menu.category == "drinks" 
    }).map(function (menu) {
        return `<div class="food-item"> 
            <!-- image -->
            <div class="imagediv">
                <img src="${menu.imageurl}" alt="${menu.title}">
            </div>
            <!-- title & price -->
            <div class="tittledescription">
                <h1>${menu.title}</h1> 
                <h2>${menu.price}</h2> 
                <!-- Description -->
                <p>${menu.description}</p>
            </div>
        </div>`;
    });

    foodItemsContainer.innerHTML = displayMenu.join("");
};
