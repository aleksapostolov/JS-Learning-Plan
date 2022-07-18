function legendaryFarming(string) {
    let stringArr = string.split(' ');
    let materials = {};
    let junk = {};
    materials.shards = 0;
    materials.fragments = 0;
    materials.motes = 0;
    for (let i = 0; i < stringArr.length; i += 2) {
        let temp = stringArr[i + 1];
        let material = temp.toLowerCase();
        if (material === "shards" || material === "fragments" || material === "motes") {
            materials[material] += Number(stringArr[i]);
            if (material === "shards") {
                if (materials[material] >= 250) {
                    materials[material] -= 250;
                    console.log(`Shadowmourne obtained!`);
                    break;
                }
            }
            if (material === "fragments") {
                if (materials[material] >= 250) {
                    materials[material] -= 250;
                    console.log(`Valanyr obtained!`);
                    break;
                }
            }
            if (material === "motes") {
                if (materials[material] >= 250) {
                    materials[material] -= 250;
                    console.log(`Dragonwrath obtained!`);
                    break;
                }
            }
        } else {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = Number(stringArr[i]);
            } else {
                junk[material] += Number(stringArr[i]);
            }
        }
    }
    function materialsSort([keyA, valueA], [keyB, valueB]) {
        if (materials[keyA] !== materials[keyB]) {
            return materials[keyB] - materials[keyA];
        }
        return keyA.localeCompare(keyB);
    }
    let sortedMaterials = Object.entries(materials).sort(materialsSort);
    let sortedJunk = Object.entries(junk).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    for (let element of sortedMaterials) {
        let material = element[0];
        let quantity = element[1];
        console.log(`${material}: ${quantity}`);
    }
    for (let element of sortedJunk) {
        let material = element[0];
        let quantity = element[1];
        console.log(`${material}: ${quantity}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')