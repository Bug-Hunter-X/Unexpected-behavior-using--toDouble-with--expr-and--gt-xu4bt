```javascript
const myQuery = { $expr: { $gt: [{ $toDouble: "$field" }, 10] } };
//This is wrong, the solution is below

//Correct solution
const myQuery = { $expr: { $gt: [ { $convert: { input: "$field", to: "double" } }, 10 ] } };
const result = await collection.find(myQuery).toArray();
```