// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Create a function to calculate how many tv's we have to sell
const toSell = function (inventory) {
    // Create a temporary original stock count
    let originalStockCount = 0
    // Create a temporary sold count
    let soldCount = 0
    // Looping over all the inventory inputs
    for (let i = 0; i < inventory.length; i++) {
        // Creating a temporary tv variable
        let tmpInventory = inventory[i].originalStock
        // Adding the original stock to the temporary stock variable
        originalStockCount += tmpInventory
    }
    // Looping over all the inventory inputs
    for (let i = 0; i < inventory.length; i++) {
        // Creating a temporary sold variable
        let tmpInventory = inventory[i].sold
        // Adding the sold to the temporary stock variable
        soldCount += tmpInventory
    }
    // Returning the original stock counts minus the sold count
    return originalStockCount - soldCount
}

// Creating a sold variable from the toSell function
const sold = toSell(inventory)
// Target the node in index.html and display the sold count in the webpage
document.getElementById('to-sell').innerHTML = sold

// Creating  variable to create an array with all the tv names
const tvType = inventory.map((inventory) => {
    return inventory.type
})

// Creating a function to keep track of the tv' that are sold out
const soldOutTv = function (inventory) {
    // Creating a temporary variable to save in the sold out tv's
    let tmpSoldOutInventory = inventory.filter((inventory) => {
        // Creating an if statement to check if the original stock has the same number as the sold
        if (inventory.originalStock === inventory.sold) {
            // If statement is true then return the inventory
            return inventory
        }
    })
    // Printing the sold out inventory
    console.log(tmpSoldOutInventory)
}

// Creating a function to show the tv's with the ambilight option
const ambiLightTV = function (inventory) {
    // Creating a temporary variable to save the tv's with the ambilight option
    let tmpAmbiLightTv = inventory.filter((inventory) => {
        // If the tv option has the ambilight option return it
        return inventory.options.ambiLight === true
    })
    // Logging the tv's with the ambilight option
    console.log(tmpAmbiLightTv)
}

// Creating a function to sort TV on price
const sortTvOnPrice = function (inventory) {
    // Using the sort array methode to sort the tv's on price and save it in a temporary variable
    let tmpSortOnPriceTv = inventory.sort((a, b) => {
        // Returning the lowest price first
        return a.price - b.price
    })
    // Logging the tv's sorted on price
    console.log(tmpSortOnPriceTv)
}

// Create a function for sales target
const salesTarget = function (inventory) {
    // Create a variable to keep track of total price
    let totalPrice = 0
    // Looping through each tv object in inventory array
    for (let i = 0; i < inventory.length; i++) {
        // Create a temporary variable for the total price per loop
        let tmpTotalPrice = 0
        // Create a temporary variable for the price per loop
        let tmpPrice = inventory[i].price
        // Create a temporary variable for the original stock per loop
        let tmpOriginalStock = inventory[i].originalStock
        // Multiply the temporary price and temporary original stock and save it
        // in the temporary total price
        tmpTotalPrice = tmpPrice * tmpOriginalStock
        // Adding the temporary total price to the total price
        totalPrice += tmpTotalPrice
    }
    // Returning the total price
    return totalPrice
}

// Creating a sales target variable from the salesTarget function
const saleTarget = salesTarget(inventory)
// Target the node in index.html
const saleElement = document.getElementById('sales-target')
// Display the sales target in the webpage
saleElement.innerHTML = saleTarget

// Creating a function to see how much sales there is at the moment
const actualSales = function (inventory) {
    // Creating a variable to keep track of the total sales
    let totalSales = 0
    // Looping over each tv object
    for (let i = 0; i < inventory.length; i++) {
        // Creating a temporary variable to keep track of the total sales
        let tmpTotalSale = 0
        // Creating a temporary variable to keep track of each sold tv per loop
        let tmpSold = inventory[i].sold
        // Creating a temporary variable to keep track each tv's price
        let tmpPrice = inventory[i].price

        // Multiply the price with the sold tv's and save it in the temporary total sales variable
        tmpTotalSale = tmpSold * tmpPrice
        // Adding the temporary total sale per loop in the total sale
        totalSales += tmpTotalSale
    }
    // Returning the total sales
    return totalSales
}

// Creating a variable to save the actual sales function outcome in from the inventory array
const actualSale = actualSales(inventory)

// Creating a variable to save the element from the HTML in for actual sales
const salesElement = document.getElementById('actual-sales')
// Using the innerHTML to show the actual sales on the webpage
salesElement.innerHTML = actualSale

// Creating a variable for the Hitachi tv type
const tvTypeOne = inventory[3].type
// Creating a variable to save the element from the HTML in for Hitachi tv
const hitachiTypeTv = document.getElementById(`hitachi-tv`)
// Using the innerHTML to show the Hitachi on the webpage
hitachiTypeTv.innerHTML = tvTypeOne

// Creating a variable for the Philips tv type
const tvTypeTwo = inventory[6].type
// Creating a variable to save the element from the HTML in for Philips tv
const philipsTypeTv = document.getElementById(`philips-tv`)
// Using the innerHTML to show the Philips tv on the webpage
philipsTypeTv.innerHTML = tvTypeTwo

// Creating a function to print the tv name
const tvName = function (tvName) {
    // Returning the brand, type and name properties in a single string
    return `${tvName.brand} ${tvName.type} - ${tvName.name}`
}

// Creating a function to print the tv price
const tvPrice = function (price) {
    // Returning the price property in a string
    return `€${price.price},-`
}

// Creating a function to print the screen Sizes
const screenSize = function (screenSize) {
    // Creating an emptry string variable
    let emptyString = ''
    // Looping over all the available sizes objects in the array
    for (let i = 0; i < screenSize.availableSizes.length; i++) {
        // Creating a temporary empty string
        let tmpString = ''
        // Creating a temporary variable to save each available screen size in per loop
        let tmpScreenSize = screenSize.availableSizes[i]
        // Creating a variable to calculate inches to cm
        let inchToCentimeters = tmpScreenSize * 2.54
        // Rounding the outcome from incToCentimeters in a whole number
        let roundedCentimeters = Math.round(inchToCentimeters)

        // Saving the screen size in inch and in cm in the temporary string
        tmpString += `${tmpScreenSize} inch (${roundedCentimeters} cm) | `
        // Saving the temporary string in the empty string
        emptyString += tmpString
    }
    // Returning the empty string
    return emptyString

}

// Creating a variable to save the Philips type tv in
const philipsTv = inventory[4]

// Creating a variable to save the tv name String in for the Philips tv from the tvName function
const philipsTvName = tvName(philipsTv)
// Creating a variable to save the tv price String in for the Philips tv from the tvPrice function
const philipsTvPrice = tvPrice(philipsTv)
// Creating a variable to save the tv screen sizes String in for the Philips tv from the screenSize function
const philipsScreenSize = screenSize(philipsTv)

// using the innerHTML to show the string on the webpage
philipsTypeTv.innerHTML = `${philipsTvName} <br />${philipsTvPrice} <br />${philipsScreenSize}`

// Creating a tv generator to create a string for each tv in the array
const tvGenerator = function (inventory) {
    // Creating an empty String
    let tmpController = ''
    // Looping over each tv object in the array
    for (let i = 0; i < inventory.length; i++) {
        // Creating a temporary variable to save each tv in per loop
        let tmpInventory = inventory[i]
        // Creating a variable to save the tv name in from the function tvName
        let tmpTvName = tvName(tmpInventory)
        // Creating a variable to save the tv price in from the function tvPrice
        let tmpTvPrice = tvPrice(tmpInventory)
        // Creating a variable to save the screen size in from the function screenSize
        let tmpScreenSize = screenSize(tmpInventory)
        // Adding the variables into a single string
        tmpController += `<br />${tmpTvName} <br /> ${tmpTvPrice} <br /> ${tmpScreenSize} <br />`
    }
    // Returning the whole string
    return tmpController
}

// Creating a variable to save the tvGenerator function in with the inventory array
const tvGeneratorFunction = tvGenerator(inventory)
// Creating a variable to save the element from the HTML file
const allTvs = document.getElementById('tv-generator')
// Using the innerHTML to show the function on the webpage
allTvs.innerHTML = tvGeneratorFunction