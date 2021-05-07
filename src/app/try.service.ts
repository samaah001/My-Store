import { Injectable } from '@angular/core';

@Injectable()
export class TryService {
  calcTempAvg = function () {
     const temp2=[3, 9, -8, 6, 8];
    const temp1=[12, 6, 4];
   //temp2=[3, 9, -8, 6, 8];
    const temps = temp1.concat(temp2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = temps[i];
    if (curTemp < min) min = temps[i];
  }
  console.log(max, min);
  const AverageTemp = max - min;
  return AverageTemp;
};

  constructor() { }
}