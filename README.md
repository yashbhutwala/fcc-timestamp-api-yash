# FreeCodeCamp API Projects: Timestamp Micro-service

This is a micro-service created as part of [FCC's Back End Development Certification](https://www.freecodecamp.com/challenges/timestamp-microservice) that allows get calls to convert Unix time-stamps or natural dates to one or the other.

## User stories:

1.  I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2.  If it does, it returns both the Unix timestamp and the natural language form of that date.
3.  If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:

<https://guarded-meadow-67841.herokuapp.com/December%2015,%202015>

<https://guarded-meadow-67841.herokuapp.com/1450137600>

## Example output:

```json
{ "unix": 1450137600, "natural": "December 15, 2015" }
```
