import { parseGear } from "./utilities/GearParser.js";
import GearItems from "./jsonFiles/items.json";
import GearDesc from "./jsonFiles/item_descriptions.json";

import fs from "fs";

// Loop through all gear and create new object
const itemKeys = Object.keys(GearItems);
let FullGear = {};
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
  if (GearItems[key].category === "Armor") {
    obj = parseGear(item);
  } else {
    obj = item;
  }

  FullGear[Number(key)] = obj;
});

let data = JSON.stringify(FullGear);
fs.writeFileSync("FullItems.json", data);
