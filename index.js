var recipes = { bread: 'wheat', cheese: 'cheddar'}


function updateObjectWithKeyAndValue(object, key, value) {
    var obj = { prop: 1 }
    return Object.assign(obj, { prop2: 2} )
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  obj.prop2 = 2;
  return obj
}

function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 };
  var newObj = Object.assign(obj)
  delete newObj.prop;
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { prop: 1 };
  delete obj;
  return obj
}