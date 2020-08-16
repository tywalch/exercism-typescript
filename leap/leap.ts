function dividesEvenly(dividend: number, divisor: number): boolean {
    return dividend % divisor === 0;
}

// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400

function isLeapYear(year: number): boolean {
    // return dividesEvenly(year, 100) 
    //     ? dividesEvenly(year, 400)
    //     : dividesEvenly(year, 4);
    return dividesEvenly(year, 4) && (!dividesEvenly(year, 100) || dividesEvenly(year, 400));
}

export default isLeapYear