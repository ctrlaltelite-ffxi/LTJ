import { getArmorSlot, getJobSlot } from "./GearDecoder.js";

export function parseGear(itemDesc) {
  let item = { ...itemDesc, stats: {}, descTest: itemDesc.desc };

  let testDesc = item.descTest;
  const tests = [
    { stat: "DEF", tests: [/DEF(:-|:\+|:)\d*/g] },
    { stat: "DMG", tests: [/DMG(:-|:)\d*/g] },
    { stat: "Delay", tests: [/Delay(:-|:)\d*/g] },
    { stat: "HP", tests: [/HP(\+|-)\d*/g] },
    { stat: "MP", tests: [/MP(\+|-)\d*/g] },
    { stat: "STR", tests: [/STR(\+|-)\d*/g] },
    { stat: "DEX", tests: [/DEX(\+|-)\d*/g] },
    { stat: "VIT", tests: [/VIT(\+|-)\d*/g] },
    { stat: "AGI", tests: [/AGI(\+|-)\d*/g] },
    { stat: "INT", tests: [/INT(\+|-)\d*/g] },
    { stat: "MND", tests: [/MND(\+|-)\d*/g] },
    { stat: "CHR", tests: [/CHR(\+|-)\d*/g] },
    { stat: "MagicAcc", tests: [/Magic Accuracy(\+|-)\d*/g] },
    { stat: "MagicAcc", tests: [/Magic Accracy(\+|-)\d*/g] },
    { stat: "MeleeAcc", tests: [/Accuracy(\+|-)\d*/g] },
    { stat: "GearHaste", tests: [/Haste(\+|-)\d*/g] },
    { stat: "CurePot", tests: [/"[Cc]ure\\" [Pp]otency (\+|-)\d*/g] },
    { stat: "Enmity", tests: [/Enmity(\+|-)\d*/g] },
    { stat: "MAB", tests: [/"Magic Atk. Bonus\\"(\+|-)\d*/g] },
    { stat: "mEva", tests: [/Magic Eva.(\+|-)\d*/g] },
    { stat: "Eva", tests: [/Eva.(\+|-)\d*/g] },
    { stat: "mDefBonus", tests: [/"Magic Def. Bonus\\"(\+|-)\d*/g] },
    { stat: "mBurstBonus", tests: [/Magic burst damage (\+|-)\d*/g] },
    { stat: "MDT", tests: [/[Mm]agic [Dd]amage taken (\+|-)\d*/g] },
    { stat: "PDT", tests: [/[Pp]hysical [Dd]amage taken (\+|-)\d*/g] },
    { stat: "DT", tests: [/[Dd]amage taken (\+|-)\d*/g] },

  ];

  tests.forEach((test) => {
    const tempObj = getStats(testDesc, test.tests);
    testDesc = tempObj.newDesc;
    if (tempObj.stat !== 0) item.stats[test.stat] = tempObj.stat;
  });

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
