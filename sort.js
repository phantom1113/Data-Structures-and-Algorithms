function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubleSort = bubleSort;
    this.selectionSort = selectionSort;
    for( let i = 0; i < numElements; ++i){
        this.dataStore[i] = i;
    }
}

function setData(){
    for( let i = 0; i < this.numElements; ++i){
        this.dataStore[i] = Math.floor(Math.random()*(this.numElements+1));
    }
}

function clear() {
    for(let i = 0; i < this.dataStore.length; ++i){
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    let count =  0;
    let retstr = "";
    for ( let i = 0; i < this.dataStore.length; ++i){
        retstr += this.dataStore[i] + " ";
        count++;
        if(count%10== 0){
            retstr +="\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//Buble sort complexity O(n^2)
function bubleSort() {
    let temp;
    for( let outer = numElements; outer >=2; --outer){
        for(let inner = 0; inner <= outer - 1; ++inner ){
            if(this.dataStore[inner]> this.dataStore[inner+1]){
                swap(this.dataStore,inner, inner+1)
            }
        }
    }
}

//Selection sort  complexity O(n^2)
function selectionSort(){
    let min;
    for (let outer = 0; outer <= this.dataStore.length - 2; ++outer){
        min = outer;
        for( let inner = outer + 1; inner < this.dataStore.length; ++inner){
            if(this.dataStore[min] > this.dataStore[inner]){
                min = inner;
            }
            swap(this.dataStore, outer, min);  
        }
    }
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
myNums.selectionSort();
console.log(myNums.toString());