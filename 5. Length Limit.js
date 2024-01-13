class Stringer {

    constructor(n, l) {
        this.innerString = n;
        this.innerLength = l;
    }

    increase(n) {
        this.innerLength += n;
    }

    decrease(n) {
        this.innerLength -= n;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return `...`;
        } else if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else {
            let result = this.innerString.slice(0, this.innerLength);
            return `${result}...`;
        }
    }

}


let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(4);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test