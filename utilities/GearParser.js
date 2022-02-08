import { getArmorSlot, getJobSlot } from "./GearDecoder.js";

export function parseGear(itemDesc) {
  let item = { ...itemDesc, stats: {}, descTest: itemDesc.desc };

  let testDesc = item.descTest;
  const tests = [
    { stat: "DEF", test: [/DEF(:-|:\+|:)\d*\%?/g] },
    { stat: "DMG", test: [/DMG(:-|:\+|:)\d*\%?/g] },
    { stat: "Delay", test: [/Delay(:-|:\+|:)\d*\%?/g] },
    { stat: "HP", test: [/HP(\+|-)\d*\%?/g] },
    { stat: "MP", test: [/MP(\+|-)\d*\%?/g] },
    { stat: "STR", test: [/STR(\+|-)\d*\%?/g] },
    { stat: "DEX", test: [/DEX(\+|-)\d*\%?/g] },
    { stat: "VIT", test: [/VIT(\+|-)\d*\%?/g] },
    { stat: "AGI", test: [/AGI(\+|-)\d*\%?/g] },
    { stat: "INT", test: [/INT(\+|-)\d*\%?/g] },
    { stat: "MND", test: [/MND(\+|-)\d*\%?/g] },
    { stat: "CHR", test: [/CHR(\+|-)\d*\%?/g] },
    { stat: "MagicAcc", test: [/Magic Accuracy(\+|-)\d*\%?/g] },
    { stat: "MagicAcc", test: [/Magic Accracy(\+|-)\d*\%?/g] }, // Typo on some Gear
    { stat: "MeleeAcc", test: [/Accuracy(\+|-)\d*\%?/g] },
    { stat: "GearHaste", test: [/Haste(\+|-)\d*\%?/g] },
    { stat: "CurePot", test: [/"[Cc]ure\" [Pp]otency\s?(\+|-)\d*\%?/g] },
    { stat: "Enmity", test: [/Enmity(\+|-)\d*\%?/g] },
    { stat: "MAB", test: [/"Magic Atk. Bonus\\"(\+|-)\d*\%?/g] },
    { stat: "mEva", test: [/Magic Eva.(\+|-)\d*\%?/g] },
    { stat: "Eva", test: [/Eva.(\+|-)\d*\%?/g] },
    { stat: "mDefBonus", test: [/"Magic Def. Bonus\"\s?(\+|-)\d*\%?/g] },
    { stat: "mBurstBonus", test: [/Magic burst damage (\+|-)\d*\%?/g] },
    { stat: "MDT", test: [/[Mm]agic [Dd]amage taken (\+|-)\d*\%?/g] },
    { stat: "PDT", test: [/[Pp]hysical [Dd]amage taken (\+|-)\d*\%?/g] },
    { stat: "DT", test: [/[Dd]amage taken (\+|-)\d*\%?/g] },
  ];

  // Remove Line Breaks
  testDesc = testDesc.replace(/(\r\n|\n|\r)/gm, "")
  
  // Remove Generic Conditions at the end of Descriptions
  testDesc = testDesc.replace(/Automaton:.+/g, "")
  testDesc = testDesc.replace(/Pet:.+/g, "")
  testDesc = testDesc.replace(/Avatar:.+/g, "")
  testDesc = testDesc.replace(/Wyvern:.+/g, "")
  testDesc = testDesc.replace(/Dispense:.+/g, "")
  testDesc = testDesc.replace(/Reives:.+/g, "")
  testDesc = testDesc.replace(/Enchantment:.+/g, "")
  testDesc = testDesc.replace(/Experience point bonus:.+/g, "")
  testDesc = testDesc.replace(/Capacity point bonus:.+/g, "")
  
  tests.forEach((test) => {
    const [stat, desc] = getStats(testDesc, test.test);
    testDesc = desc;
    if (stat !== 0) item.stats[test.stat] = stat;
  });

  item.slotName = getArmorSlot(item.slots);
  item.jobSlots = getJobSlot(item.jobs);

  // console.log(testDesc);

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
  return [stat, desc];
};
