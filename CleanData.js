import { parseGear } from "./utilities/GearParser.js";
import GearItems from "./jsonFiles/items.json";
import GearDesc from "./jsonFiles/item_descriptions.json";

import fs from "fs";

// Loop through all gear and create new object
const itemKeys = Object.keys(GearItems);
let FullGear = {};
let count = 1;
itemKeys.forEach((key) => {
  let item = {};
  item._id = Number(key);
  item.name = GearItems[key].en;
  item.nameFull = GearItems[key].enl;
  item.jobs = GearItems[key].jobs;
  item.category = GearItems[key].category;
  item.level = GearItems[key].level;
  item.slots = GearItems[key].slots;
  if (GearDesc[key]) {
    item.desc = GearDesc[key].en;
  } else {
    item.desc = "None";
  }

  let obj = {};
  if (
    GearItems[key].category === "Armor" ||
    GearItems[key].category === "Weapon"
  ) {
    obj = parseGear(item);
    FullGear[Number(key)] = obj;
  }
  count++;
});

let data = JSON.stringify(FullGear);
console.log(count);
fs.writeFileSync("FullItems.json", data);
