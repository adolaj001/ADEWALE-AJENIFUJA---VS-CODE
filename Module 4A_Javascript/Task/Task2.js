/*
JavaScript Fun Facts

1. Born in 10 Days
- Created by Brendan Eich in 1995 in just 10 days.
- Originally named Mocha, then LiveScript, finally JavaScript.
- Java and JavaScript are unrelated.

2. The Most Ubiquitous Programming Language
- Only language that runs natively in all major browsers.
- Used on 98%+ of websites, servers (Node.js), mobile (React Native), desktop (Electron), IoT.

3. It’s Single Threaded… but Not Really
- Single-threaded execution model.
- Event loop enables async tasks without blocking.
- Event loop + callback queue + microtask queue = unique runtime.

4. JavaScript Has Some Wild Quirks
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0
console.log(typeof null); // "object"

5. Prototype-Based, Not Class-Based (Originally)
- Inheritance via prototypes before ES6 classes.
- Classes are syntactic sugar over prototypes.

6. One of the Fastest-Evolving Languages
- ECMAScript updates every year.
- Recent features: async/await, Promises, Map/Set, optional chaining, modules.

7. JSON Was Invented After JavaScript
- JSON formalized by Douglas Crockford in early 2000s.
- Universal data format for APIs, used by many languages.

8. JavaScript Can Run Games and 3D Graphics
- WebGL, Three.js, Babylon.js, WebAssembly enable 3D games and high-performance apps in browser.

9. Once Had No let or const
- Only var before ES6 (2015).
- let and const improved reliability.

10. Non Obvious Insight
- JavaScript’s ecosystem is its biggest strength.
- NPM is the largest package registry.
- Frameworks and community drive innovation.
*/

// Example: Demonstrating some quirks
console.log('[] + [] =', [] + []);
console.log('[] + {} =', [] + {});
console.log('{} + [] =', {} + []);
console.log('typeof null =', typeof null);