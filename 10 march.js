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

// Exercise 2 : Additional code: Response times sorting
let responseTimes = [320, 85, 1200, 450, 99];
// Fix: sort() without comparator sorts as strings, not numbers
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted[0]);

// Exercise 3 New code: Array and object copying
let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log("Original output:", suite1[0].status); // "fail" - shallow copy issue

// Fixed version: Deep copy using map and spread
let suite1Fixed = [{ name: "login", status: "pass" }];
let suite2Fixed = suite1Fixed.map(obj => ({ ...obj }));
suite2Fixed[0].status = "fail";
console.log("Fixed output:", suite1Fixed[0].status); // "pass"