// Exercise 1: API Response Validation

let responses = [200, 201, 404, 500, 404, 200, 503];

// 1. Check if ALL responses are successful (200–299)
const allSuccessful = responses.every(code => code >= 200 && code <= 299);
console.log("All responses successful:", allSuccessful);

// 2. Find the FIRST non-success code
const firstNonSuccess = responses.find(code => code < 200 || code > 299);
console.log("First non-success code:", firstNonSuccess);

// 3. Return all unique error codes
const errorCodes = responses.filter(code => code < 200 || code > 299);
const uniqueErrors = [...new Set(errorCodes)];
console.log("Unique error codes:", uniqueErrors);