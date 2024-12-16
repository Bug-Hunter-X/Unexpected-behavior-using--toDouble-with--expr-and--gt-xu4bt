# Unexpected behavior using $toDouble with $expr and $gt in MongoDB aggregation.
This repository demonstrates an unexpected behavior encountered when using the `$toDouble` operator within an `$expr` for comparison using `$gt` in MongoDB aggregations.

## Issue Description
The comparison using `$gt` after converting a field to double using `$toDouble` doesn't seem to work as expected, leading to incorrect results.

## Steps to Reproduce
1.  Ensure a MongoDB collection exists with a field containing string representations of numbers.
2.  Use the provided JavaScript code to execute the MongoDB query.
3.  Observe the unexpected results where the comparison does not function correctly.

## Solution
The issue is resolved by using a different approach to compare values after conversion to numbers. The solution involves using the `$convert` operator instead of `$toDouble` in combination with the `$expr` operator.

## Additional notes
This demonstrates a subtle, potentially confusing behavior in MongoDB aggregation framework.  Understanding the specific nuances of `$expr` operator and type handling is crucial for avoiding such issues.