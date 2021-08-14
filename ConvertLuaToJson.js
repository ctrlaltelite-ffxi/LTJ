const { format, parse } = require("lua-json");

const GearItems = require('./windower/items.lua')


const itemJson = parse(GearItems)

itemJson.forEach(item => {
  console.log(item)
});