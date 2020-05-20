module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enchantment >= 0 && item.enchantment < 20){
    return {...item, enchantment: item.enchantment + 1}
  } else {
    
    return { ...item };

  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
