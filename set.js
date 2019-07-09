function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) 
    {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contains(data) 
{
    if (this.dataStore.indexOf(data) > -1) 
    {
        return true;   
    }else {
        return false;   
    }
}

function union(set) {
    let temSet = new Set();
    for (let i = 0; i < this.dataStore.length; ++i){
        temSet.add(this.dataStore[i]);
    }
    for (let i = 0; i< set.dataStore.length; ++i){
        if(!temSet.contains(set.dataStore[i])){
            temSet.dataStore.push(set.dataStore[i]);
        }
    }
    return temSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) 
    {
        return false;   
    }else 
    {
        for (member of this.dataStore)
        {
            if (!set.contains(member)) {
                return false;
            }
        }   
    }
    return true;
}

function size() {
    return this.dataStore.length;
}

function difference(set) {
    let tempSet = new Set();
    for( let i = 0; i < this.dataStore.length; ++i){
        if(!set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

const cis = new Set();
const it = new Set();
let sum = new Set();
let diff = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
diff = cis.difference(it);
sum = cis.union(it);
console.log(sum.show());
console.log("[" + cis.show() + "] difference [" + it.show()+ "] -> [" + diff.show() + "]");