```javascript
const myQuery = { "$expr": { "$gt": [ {"$toDouble": "$field"}, 10] } };
const result = await collection.find(myQuery).toArray();
```