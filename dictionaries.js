function Dictionary(){
    this.datastore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}

function showAll() {
    console.log(this.datastore);
    for (let key of Object.keys(this.datastore).sort()) {
        console.log(key + "-->" + this.datastore[key]);
    }
}

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.showAll();