class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.count = 0;
    }

    _hash(key) {
        let hashCode = 0;
        const prime = 31;
        for (let i = 0; i < key.length; i++) {
        hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    _resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.count = 0;

        for (const bucket of oldBuckets) {
        for (const [key, value] of bucket) {
            this.set(key, value);
        }
        }
    }

    set(key, value) {
        if (this.count / this.capacity >= this.loadFactor) {
        this._resize();
        }

        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket[i][1] = value; // Update existing
            return;
        }
        }

        bucket.push([key, value]);
        this.count++;
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        for (const [k, v] of bucket) {
        if (k === key) return v;
        }
        return null;
    }

    has(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        return bucket.some(([k]) => k === key);
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            this.count--;
            return true;
        }
        }
        return false;
    }

    length() {
        return this.count;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.count = 0;
    }

    keys() {
        const keysArray = [];
        for (const bucket of this.buckets) {
        for (const [key] of bucket) {
            keysArray.push(key);
        }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (const bucket of this.buckets) {
        for (const [, value] of bucket) {
            valuesArray.push(value);
        }
        }
        return valuesArray;
    }

    entries() {
        const entriesArray = [];
        for (const bucket of this.buckets) {
        for (const pair of bucket) {
            entriesArray.push([...pair]);
        }
        }
        return entriesArray;
    }
}

class HashSet {
    constructor(loadFactor = 0.75) {
        this.map = new HashMap(loadFactor);
    }

    add(key) {
        this.map.set(key, true); // Store dummy value
    }

    has(key) {
        return this.map.has(key);
    }

    remove(key) {
        return this.map.remove(key);
    }

    size() {
        return this.map.length();
    }

    clear() {
        this.map.clear();
    }

    keys() {
        return this.map.keys();
    }
}

export { HashSet };
export default HashMap;
