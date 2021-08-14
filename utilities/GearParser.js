import { getArmorSlot, getJobSlot } from "./GearDecoder.js";

export function parseGear(itemDesc) {
  let item = { ...itemDesc, descTest: itemDesc.desc };
  let gearItem = {};
  let desc = item.descTest;
  let tests = [];
  let stat = 0;

  // Get Defense
  desc = item.descTest;
  tests = [/DEF(:-|:\+|:)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match) {
      let type = match[0].match(/(:|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.DEF = stat;

  // Get Damage
  desc = item.descTest;
  tests = [/DMG(:-|:)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(:|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.DMG = stat;

  // Get Delay
  desc = item.descTest;
  tests = [/Delay(:-|:)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(:|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.Delay = stat;

  // Get HP
  desc = item.descTest;
  tests = [/HP(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.HP = stat;

  // Get MP
  desc = item.descTest;
  tests = [/MP(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.MP = stat;

  // Get STR
  desc = item.descTest;
  tests = [/STR(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.STR = stat;

  // Get DEX
  desc = item.descTest;
  tests = [/DEX(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.DEX = stat;

  // Get VIT
  desc = item.descTest;
  tests = [/VIT(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.VIT = stat;

  // Get AGI
  desc = item.descTest;
  tests = [/AGI(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.AGI = stat;

  // Get INT
  desc = item.descTest;
  tests = [/INT(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.INT = stat;

  // Get MND
  desc = item.descTest;
  tests = [/MND(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.MND = stat;

  // Get CHR
  desc = item.descTest;
  tests = [/CHR(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.CHR = stat;

  // Get Magic Accuracy
  desc = item.descTest;
  tests = [/Magic Accuracy(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.MagicAcc = stat;

  // Get Accuracy
  desc = item.descTest;
  tests = [/Accuracy(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.MeleeAcc = stat;

  // Get Haste
  desc = item.descTest;
  tests = [/Haste(\+|-)\d*/g];
  stat = 0;
  tests.forEach((test) => {
    let match = desc.match(test);
    if (match !== null) {
      let type = match[0].match(/(\+|-)/g)[0];
      let value = match[0].match(/\d+/g)[0];
      if (type === "-") {
        stat = Number(value) * -1;
      } else {
        stat = Number(value) * 1;
      }
      desc = desc.replace(test, "");
      item.descTest = desc;
    }
  });
  gearItem.GearHaste = stat;
  item.slotName = getArmorSlot(item.slots);
  item.jobSlots = getJobSlot(item.jobs);
  item.stats = gearItem; 

  return item;
}
