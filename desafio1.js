function getFlag(flag){ 
  const ind = process.argv.indexOf(flag) + 1 
  return process.argv[ind]
}
module.exports =  getFlag;