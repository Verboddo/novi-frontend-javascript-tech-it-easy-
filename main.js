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
const toSell = function(inventory) {
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

const tvType = inventory.map( (inventory) => {
  return inventory.type
})

const soldOutTv = inventory.filter( (inventory) => {
  if (inventory.originalStock === inventory.sold) {
    return inventory
  }
})

const ambiLightTv = inventory.filter( ( inventory) => {
  return inventory.options.ambiLight === true
})

inventory.sort( (a, b) => {
  return a.price - b.price
})

// Create a function for sales target
const salesTarget = function(inventory) {
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

const actualSales = function(inventory) {
  let totalSales = 0
  for (let i = 0; i < inventory.length; i++) {
    let tmpTotalSale = 0
    let tmpSales = inventory[i].sold
    let tmpPrice = inventory[i].price

    tmpTotalSale = tmpSales * tmpPrice
    totalSales += tmpTotalSale
  }
  return totalSales
}

const actualSale = actualSales(inventory)

const salesElement = document.getElementById('actual-sales')
salesElement.innerHTML = actualSale

// Hitachi tv type
const tvTypeOne = inventory[3].type
const hitachiTypeTv = document.getElementById(`hitachi-tv`)
hitachiTypeTv.innerHTML = tvTypeOne

// Philips tv type
const tvTypeTwo = inventory[6].type
const philipsTypeTv = document.getElementById(`philips-tv`)
philipsTypeTv.innerHTML = tvTypeTwo

const TvName = function(tvName) {
  return `${tvName.brand} ${tvName.type} - ${tvName.name}`
}

const TvPrice = function (price) {
  return `€${price.price},-`
}

const screenSize = function (screenSize) {
    let emptyString = ''
  for (let i = 0; i < screenSize.availableSizes.length; i++) {
    let tmpString = ''
    let tmpScreenSize = screenSize.availableSizes[i]
    let inchToCentimeters = tmpScreenSize * 2.54
    let roundedCentimeters = Math.round(inchToCentimeters)

    tmpString += `${tmpScreenSize} inch (${roundedCentimeters} cm) | `
    emptyString += tmpString
  }
  return emptyString

}

console.log(screenSize(inventory[5]))