function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}

function put(data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
}

function simpleHash(data) {
    let total = 0;
    for( let i = 0; i< data.length; i++){
        total += data.charCodeAt(i);
    }
    console.log("Hashing" + data + ":" + total );
    return total % this.table.length;
}

function betterHash(data) {
    const H = 41;
    var total = 0;
    for (let i = 0; i < data.length; ++i) {
        total += (H*total) + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0){
        total += this.table.length - 1;
    }
    return parseInt(total);
}

function showDistro() {
    for(let i = 0; i< this.table.length; ++i){
        if(this.table[i] != undefined){
            console.log(i + ":" + this.table[i]);
        }
    }
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();