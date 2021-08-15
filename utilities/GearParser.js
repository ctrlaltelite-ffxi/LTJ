import { getArmorSlot, getJobSlot } from "./GearDecoder.js";

export function parseGear(itemDesc) {
  let item = { ...itemDesc, stats: {}, descTest: itemDesc.desc };
  let tempObj = {};
  let testDesc = item.descTest;
  let tests = [];

  // Get Defense
  tests = [/DEF(:-|:\+|:)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.DEF = tempObj.stat;

  // Get Damage
  tests = [/DMG(:-|:)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.DMG = tempObj.stat;

  // Get Delay
  tests = [/Delay(:-|:)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.Delay = tempObj.stat;

  // Get HP
  tests = [/HP(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.HP = tempObj.stat;

  // Get MP
  tests = [/MP(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.MP = tempObj.stat;

  // Get STR
  tests = [/STR(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.STR = tempObj.stat;

  // Get DEX
  tests = [/DEX(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.DEX = tempObj.stat;

  // Get VIT
  tests = [/VIT(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.VIT = tempObj.stat;

  // Get AGI
  tests = [/AGI(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.AGI = tempObj.stat;

  // Get INT
  tests = [/INT(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.INT = tempObj.stat;

  // Get MND
  tests = [/MND(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.MND = tempObj.stat;

  // Get CHR
  tests = [/CHR(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.CHR = tempObj.stat;

  // Get Magic Accuracy
  tests = [/Magic Accuracy(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.MagicAcc = tempObj.stat;

  // Get Accuracy
  tests = [/Accuracy(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.MeleeAcc = tempObj.stat;

  // Get Haste
  tests = [/Haste(\+|-)\d*/g];
  tempObj = getStats(testDesc, tests);
  testDesc = tempObj.newDesc;
  if (tempObj.stat !== 0) item.stats.GearHaste = tempObj.stat;

  item.slotName = getArmorSlot(item.slots);
  item.jobSlots = getJobSlot(item.jobs);

  delete item["jobs"];
  delete item["slots"];
  delete item["descTest"];

  return item;
}

const getStats = (testDesc, tests) => {
  let desc = testDesc;
  let stat = 0;

  tests.forEach((test) => {
    let match = desc.match(test);
    if (match) {
      let type = match[0].match(/(:|\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = testDesc.replace(test, "");
    }
  });
  return { stat: stat, newDesc: desc };
};
