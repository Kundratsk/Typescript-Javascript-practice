const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  let results = [];

  for (let i = 0; i < rawData.length; i++) {
    let splitted = rawData[i].split("|");

    let isDuplicate = results.some((item) => item.sku === splitted[0]);
    if (isDuplicate) {
      continue;
    }
    let newObject = {
      sku: splitted[0],
      name: splitted[1],
      qty: parseInt(splitted[2]),
      expires: splitted[3],
      zone: splitted[4] || "general",
    };
    results.push(newObject);
  }
  return results;
}

function planRestock(pantry, shipment) {
  let actions = [];

  for (let i = 0; i < shipment.length; i++) {
    let currentItem = shipment[i];

    if (currentItem.qty <= 0) {
      actions.push({ type: "discard", item: currentItem });
      continue;
    } else if (currentItem.qty > 0) {
      let existsInPantry = pantry.some(
        (pantryItem) => pantryItem.sku === currentItem.sku,
      );
      if (existsInPantry) {
        actions.push({ type: "restock", item: currentItem });
      } else {
        actions.push({ type: "donate", item: currentItem });
      }
    }
  }
  return actions;
}
function groupByZone(actions) {
  let grouped = {}; // Alustame tühja objektiga, kuhu kogume tsoonid

  for (let i = 0; i < actions.length; i++) {
    let currentAction = actions[i];

    // Võtame toote tsooni nime (nt "fridge" või "general")
    let zone = currentAction.item.zone;

    // KONTROLL: Kas meil on 'grouped' objekti sees juba see tsoon olemas?
    if (!grouped[zone]) {
      // Kui seda tsooni veel pole (nt esimest korda näeme "fridge"),
      // siis loome sinna tühja massiivi:
      grouped[zone] = [];
    }

    // Nüüd, kui massiiv on kindlasti olemas, lisame selle tegevuse sinna tsooni massiivi:
    grouped[zone].push(currentAction);
  }

  return grouped;
}
