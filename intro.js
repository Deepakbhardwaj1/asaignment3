// solution of question2 calculating the percentage //

var orderData = {
    "below 500": 20,
    "500-1000" : 29,
    "1000-1500": 30,
    "1500-2000": 44,
    "above 2000": 76,
}

//total orders
var total = Object.values(orderData).reduce((a,b) => a + b);

// order propertions 
Object.keys(orderData);

var response = Object.keys(orderData).map((item, index) => {
    return {
        "id": index + 1,
        "resturant": "punjabi tadka",
        "proportion": item,
        "percentage":((orderData[item] / total) * 100).toFixed(2)
    }
})

console.log(response);

// solution of qurstion 1 
class RestaurantManager {
    restaurantList = [ 
        {
            name: "Neelamsweets",
            Place: "Mandi",
            city: "Nerchowk",
            itemsServed: 'aalotikki , chatpapdi, chanasamosa, daalmakhni,shahipaneer, pawbhaji , allsweets, lunch , breakfast , dinner' ,
             
        },
        {
            name: "SharmaBandhu",
            Place: "Mandi",
            city: "lunapani",
            itemsServed: 'aalotikki , chatpapdi, chanasamosa, kofta,shahipaneer, pawbhaji , allsweets, lunch , breakfast , dinner' ,
             
        },
        {
            name: "premsweets",
            Place: "Mandi",
            city: "sundernagar",
            itemsServed: 'aalotikki , chatpapdi, chanatikki, daalmakhni,kadhaipaneer, pawbhaji , allsweets, lunch , breakfast , dinner' ,
             
        },{
            name: "sweetbaisel",
            Place: "Mandi",
            city: "Dadour",
            itemsServed: 'aalotikki , chatpapdi, chanasamosa, daalmakhni,shahipaneer, pawbhaji , allsweets, lunch , breakfast , dinner' ,
             
        }
    ]

    printRestaurantNames = () => {
        return this.restaurantList.map(item => item.name);
    }

    filterRestaurantbyCity = (cityname) => {
        return this.restaurantList.filter(item => item.city == cityname);
    }

    
}

var obj = new RestaurantManager();
obj.printRestaurantNames();
obj.filterRestaurantbyCity("Dadour");