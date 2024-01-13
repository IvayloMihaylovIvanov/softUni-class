function solve(input) {
    let mapCars = new Map();
    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        if (!mapCars.has(brand)) {
            mapCars.set(brand, new Map());
        }
        let mapModels = mapCars.get(brand);
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        mapModels.set(model, mapModels.get(model) + Number(produced));
    }

    for (const car of mapCars.keys()) {
        console.log(car);
        let mapModels = mapCars.get(car);
        for (const iterator of mapModels.keys()) {
            console.log(`###${iterator} -> ${mapModels.get(iterator)}`);
        }
    }
}

solve(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10'])