class Hex {

    constructor(number) {
        this.value = Number(number);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${(this.value.toString(16)).toUpperCase()}`;
    }
    plus(number) {
        let result = (this.value + Number(number.valueOf()));
        return new Hex(result);
    }
    minus(number) {
        let result = (this.value - Number(number.valueOf()));
        return new Hex(result);
    }
    parse(text) {
        return parseInt(text, 16);
    }
}




// let FF = new Hex(255);
// assert.instanceOf(FF, Hex);
// assert.equal(FF.valueOf(), 255);
// let act = FF.toString();
// let exp = "0xFF";
// assert.equal(act, exp);

// assert.isTrue(FF.valueOf() - 1 == 254);
// let a = new Hex(10);
// let b = new Hex(5);
// let c = new Hex(155);
// let act2 = a.plus(c).toString();
// let exp2 = "0xA5";
// assert.equal(act2, exp2);
// let act3 = a.minus(b).toString();
// let exp3 = "0x5";
// assert.equal(act3, exp3);

let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));