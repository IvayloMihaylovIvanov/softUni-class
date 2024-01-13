
class List {

    constructor(n) {
        this.result = [];
        this.n = n;
        this.size = 0;
    }



    add(n) {
        this.result.push(n);
        this.sort();
        this.size = this.result.length;
    }

    remove(n) {
        if (n < 0 || n >= this.result.length) {
            throw new Error('invalid index');
        }
        this.result.splice(n, 1);
        return this.size = this.result.length;
    }

    get(n) {
        if (n < 0 || n >= this.result.length) {
            throw new Error('invalid index');
        }
        this.sort();
        return this.result[n];
    }

    sort() {
        this.result.sort((a, b) => a - b);
    }


}





let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));




/**
 * · add(element) - adds a new element to the collection

· remove(index) - removes the element at position index

· get(index) - returns the value of the element at position index

· size - number of elements stored in the collection
*/