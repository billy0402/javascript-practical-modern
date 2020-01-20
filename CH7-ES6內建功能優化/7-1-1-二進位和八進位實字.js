// (ES5) 轉成二進制
console.log(parseInt('101', 2))
// <- 5

// 二進制實字，b 大小寫皆可
console.log(0b000) // <- 0
console.log(0b001) // <- 1
console.log(0b010) // <- 2
console.log(0b011) // <- 3
console.log(0b100) // <- 4
console.log(0b101) // <- 5
console.log(0b110) // <- 6
console.log(0b111) // <- 7


// (ES3) 開頭為 0，預設為八進制
console.log(parseInt('01'))
// <- 1
console.log(parseInt('012'))
// <- 10
console.log(parseInt('012', 10))
// <- 12

// (ES5) 開頭為 0，預設為十進制
// 設定基數 radix 以達到向下相容
console.log(parseInt('100', 8))
// <- 64

// 八進制實字，o 大小寫皆可，建議小寫，較易辨識
console.log(0o001) // <- 1
console.log(0o010) // <- 8
console.log(0o100) // <- 64


// 十六進制實字，x 大小寫皆可，ES5 已加入
console.log(0x0FF) // <- 255
console.log(0xF00) // <- 3840
