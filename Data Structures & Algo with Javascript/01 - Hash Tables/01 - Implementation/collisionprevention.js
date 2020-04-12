class HashTable{
    constructor(size) {
        this.data = new Array(size);
    }
// "_" defines that it's private function (property of the class)
    _hash(key){
        let hash = 0;
        for (let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(value1,value2){
        let address = this._hash(value1);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([value1,value2]);
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket){
            for (let i=0;i<currentBucket.length;i++)
            {
                if(currentBucket[i][0] === key)
                {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    } // O(1) MOST OF THE TIME/ WORST CASE SCENARIO O(N)

    keys() {
        if (!this.data.length) {
            return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }
}

let myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('strawberries', 20000);
myHashTable.set('lemons', 30000);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());