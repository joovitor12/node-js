
//módulos nativos
const path = require('path')
console.log(path.basename(__filename)) //retorna o nome do arquivo base

//meus módulos
const myModle = require('./exports')
console.log(myModle)
