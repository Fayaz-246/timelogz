# Timelogz

## About

A simple but useful tool for better console.log;

## Installation

```css
npm i timelogz
```

## Current Commands

`timelog() | logMemoryUsage()`

## Command Examples

### timelog()

#### Code

```javascript
const { timelog } = require("timelogz");
timelog({
  text: `Heya!`,
  color: "red",
});
```

#### Output

<a href="https://imgbb.com/"><img src="https://i.ibb.co/xLkqyFN/image.png" alt="image" border="0"></a>

### logMemoryUsage()

#### Code

```javascript
const { logMemoryUsage } = require("timelogz");
logMemoryUsage(true);
```

#### Output

If it is set to true

<a href="https://imgbb.com/"><img src="https://i.ibb.co/FJsCGWt/image.png" alt="image" border="0"></a>

else if its set to false or not specified

<a href="https://imgbb.com/"><img src="https://i.ibb.co/xLsK9Wn/image.png" alt="image" border="0"></a>

-- Last Updated -> 12/8/2023
