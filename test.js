import HashMap from './hashmap.js'; // Adjust path if needed

const test = new HashMap();

// Initial population
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Before adding 'moon' — should be full
console.log('Length before adding moon:', test.length());
console.log('Capacity before adding moon:', test.capacity);

// Overwriting existing keys
test.set('apple', 'dark red');
test.set('banana', 'ripe yellow');
test.set('dog', 'dark brown');

// Confirm overwrites
console.log('Get apple:', test.get('apple')); // dark red
console.log('Get banana:', test.get('banana')); // ripe yellow
console.log('Get dog:', test.get('dog')); // dark brown

console.log('Length before adding moon (should be 12):', test.length());

// Add new key to exceed load factor and trigger resize
test.set('moon', 'silver');

console.log('Added moon, check capacity after resizing...');
console.log('Length after resize:', test.length());
console.log('Capacity after resize:', test.capacity);

// Check post-resize correctness
console.log('Get moon:', test.get('moon')); // silver
console.log('Get lion:', test.get('lion')); // golden

// Check has() and remove()
console.log('Has frog?', test.has('frog')); // true
console.log('Remove frog:', test.remove('frog')); // true
console.log('Has frog now?', test.has('frog')); // false

// Check keys(), values(), entries()
console.log('All keys:', test.keys());
console.log('All values:', test.values());
console.log('All entries:', test.entries());

// Clear the map
test.clear();
console.log('Cleared map:');
console.log('Length after clear:', test.length());
console.log('All keys:', test.keys());
