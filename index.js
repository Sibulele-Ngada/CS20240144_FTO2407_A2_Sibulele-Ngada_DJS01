/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => {
  console.warn(
    `Velocity is in km/h but acceleration is in m/s2. Conversion needed`
  ); // Conversion issue warning. Error throw not used as no interruption occurs at runtime
  const convertedAcc = acc * 12960;
  console.warn(`Velocity is in km/h but time is in seconds. Conversion needed`); // Conversion issue warning. Error throw not used as no interruption occurs at runtime
  const hours = time / 60 / 60;
  return vel + convertedAcc * hours;
};

const newDistance = d + vel * (time / 60 / 60); //calcultes new distance
const remainingFuel = fuel - fbr * time; //calculates remaining fuel
const newVel = calcNewVel(vel, acc, time); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVel} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
