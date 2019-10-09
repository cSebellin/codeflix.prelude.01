const lowerCase = require('./ex01')
const upperCase = require('./ex02')
const length = require('./ex03')
const capitalize = require('./ex04')
const decapitalize = require('./ex05')
const kebab = require('./ex06')
//const snakeCase = require('./ex07')
const swapCase = require('./ex08')
const charAt = require('./ex09')
//const first = require('./ex10')
const substr = require('./ex12')
const slice = require('./ex13')
const count = require('./ex14')
const countSubstring = require('./ex15')

console.log('lowerCase:')
console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))

console.log('upperCase:')
console.log(upperCase('Choper'))
console.log(upperCase('TONY TONY'))

console.log('length:')
console.log(length('Chopper'))

console.log('capitalize:')
console.log(capitalize('one Code'))
console.log(capitalize('One CODE', true))

console.log('decapitalize:')
console.log(decapitalize('Woonan'))
console.log(decapitalize('El Drago'))

console.log('kebab:')
console.log(kebab('love one code'))
console.log(kebab('LoveOneCode'))
console.log(kebab('-Love-One-Code'))

/*console.log('snakeCase:')
console.log(snakeCase('gold d roger'))
console.log(snakeCase('GoldDRoger'))
console.log(snakeCase('-Gold-D-Roger'))*/

console.log('swapCase:')
console.log(swapCase('One Code'))
console.log(swapCase('1337 Fruits'))

console.log('charAt:')
console.log(charAt('chopper', 0))
console.log(charAt('chopper',1))

/*console.log('first:')
console.log(first('chopper'))
console.log(first('tony'))*/

console.log('substr:')
console.log(substr('tony tony chopper'[1,2,3]))
console.log(substr('chOpper'[1]))

console.log('slice:')
console.log(slice('chOpper', 1))
console.log(slice('chOpper', -4))
console.log(slice('chOpper', 1 , 4))


console.log('count:')
console.log(count('chopper'))

console.log('countSubstring:')
console.log(countSubstring('Tony Tony Choper', 'Tony'))
console.log(countSubstring('gomu gomu no bazuka', 'gatling'))