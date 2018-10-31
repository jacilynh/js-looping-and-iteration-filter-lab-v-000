// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match
function findMatching(drivers, name) {
  return drivers.filter(function(driverMatch) {
    return driverMatch.toLowerCase() === name.toLowerCase()
  })
}


// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, subString) {
  let stringList = subString.length
  return drivers.filter(function(driverName) {
    return driverName.slice(0, stringList) === subString
  })
}



// accesses the data structure to check if name matches
 function matchName(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.name === name
  })
}