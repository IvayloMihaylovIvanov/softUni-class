function juiceFlavors(data) {

    let store = new Map();
    let result = new Map();

    for (const line of data) {
        let [fruit, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!store.has(fruit)) {
            store.set(fruit, quantity)
        } else {
            let existingValue = store.get(fruit);
            let newValue = existingValue + Number(quantity)
            store.set(fruit, newValue);

        }

        if (store.get(fruit) >= 1000) {
            let existingValueInstore = store.get(fruit);
            let bottle = Math.trunc(existingValueInstore / 1000);
            let newValueInResult;
            let newValue = existingValueInstore - (bottle * 1000);
            if (result.has(fruit)) {
                let existingBottle = result.get(fruit);
                newValueInResult = existingBottle + Number(bottle);
                result.set(fruit, newValueInResult);
                store.set(fruit, newValue);
                break;
            }

            result.set(fruit, bottle);
            store.set(fruit, newValue);
        }

    }


    for (const [fruit, bottle] of result) {
        console.log(`${fruit} => ${bottle}`)
    }

}

juiceFlavors(['Orange => 2000',

    'Peach => 1432',

    'Banana => 450',

    'Peach => 600',

    'Strawberry => 549'])