import jobs from "../jsonFiles/jobs.json";
import slots from "../jsonFiles/slots.json";

const intToBin = (int) => {
  return (int >>> 0).toString(2);
};

export function getArmorSlot(slotID) {
  const bitMap = [...intToBin(slotID).toString()];
  const bitMapLength = bitMap.length;
  let armorName = "";

  bitMap.forEach((bit, index) => {
    if (bit === "1") {
      armorName = slots[bitMapLength - 1 - index].en;
    }
  });
  return armorName;
}

export function getJobSlot(slotID) {
  const bitMap = [...intToBin(slotID).toString()];
  const bitMapLength = bitMap.length;
  let jobSlotName = [];

  bitMap.forEach((bit, index) => {
    if (bit === "1") {
      jobSlotName = [...jobSlotName, jobs[bitMapLength - 1 - index].ens];
    }
  });
  return jobSlotName;
}
