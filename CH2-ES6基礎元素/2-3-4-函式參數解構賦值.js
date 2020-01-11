// options 完全解構，設定特性初始值
function carFactory ({ brand = 'Volkswagen', make = 1999 }) {
  console.log(brand)
  console.log(make)
}

carFactory({ make: 2000 })
// <- Volkswagen
// <- 2000


// 空物件解構賦值，設定特性初始值
function carFactory ({
  brand = 'Volkswagen',
  make = 1999
} = {}) {
  console.log(brand)
  console.log(make)
}

carFactory()
// <- Volkswagen
// <- 1999


var car = {
  owner: {
    id: 'e2c350a4181968c',
    name: 'Donald Draper'
  },
  brand: 'Peugeot',
  make: 2015,
  model: '208',
  preferences: {
    airbags: true,
    airConditioning: false,
    color: 'red'
  }
}

// 在函式參數賦值解構
var getCarProductModel = ({ brand, make, model }) => ({
  sku: brand + ':' + make + ':' + model,
  brand,
  make,
  model
})
getCarProductModel(car)
