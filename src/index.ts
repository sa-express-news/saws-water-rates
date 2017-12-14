import { SingleRateData, DoubleRateData, rates2015, rates2016, rates2018 } from './data';
import rateValues from './calculation-rates';

const FIXED_FEE_2015 = 7.57;
const FIXED_FEE_2016 = 10.72;
const FIXED_FEE_2018 = 12.77;

export const generate2015Rate = (gallonsUsed: number): number => {
    return generateTwoRateYearRate(gallonsUsed, FIXED_FEE_2015, rates2015);
}

export const generate2016Rate = (gallonsUsed: number): number => {
    return generateSingleRateYearRate(gallonsUsed, FIXED_FEE_2016, rates2016);
}

export const generate2018Rate = (gallonsUsed: number): number => {
    return generateSingleRateYearRate(gallonsUsed, FIXED_FEE_2018, rates2018);
}

const generateSingleRateYearRate = (gallonsUsed: number, fixedFee: number, rateData: SingleRateData[]): number => {
    let totalTaxBill = 0;

    rateData.forEach((datum, index) => {
        const low = index === 0 ? 0 : rateData[index - 1].max;
        const high = datum.max;

        if (gallonsUsed > low && gallonsUsed > high) {
            totalTaxBill += (high - low) * datum.rate;
        } else if (gallonsUsed > low && gallonsUsed <= high) {
            totalTaxBill += (gallonsUsed - low) * datum.rate;
        }
    });

    totalTaxBill += fixedFee;

    return +totalTaxBill.toFixed(2);
}

const generateTwoRateYearRate = (gallonsUsed: number, fixedFee: number, rateData: DoubleRateData[]): number => {
    let totalTaxBill = 0;

    rateData.forEach((datum, index) => {
        const low = index === 0 ? 0 : rateData[index - 1].max;
        const high = datum.max;

        let monthlyAverageUsage = 0;
        if (gallonsUsed > low && gallonsUsed > high) {
            monthlyAverageUsage = (high - low) / 12;
        } else if (gallonsUsed > low && gallonsUsed <= high) {
            monthlyAverageUsage = (gallonsUsed - low) / 12;
        }
        totalTaxBill += ((monthlyAverageUsage * datum.lowRate * 7) + (monthlyAverageUsage * datum.highRate * 5));
    });

    totalTaxBill += fixedFee;

    return +totalTaxBill.toFixed(2);
}

const calculatePercentChange = (firstValue: number, secondValue: number): number => {
    return ((secondValue - firstValue) / firstValue) * 100;
}


console.log('Gallons | 2015 | 2016 | 2018 | 15-16 % ch | 16-18 % ch');

rateValues.forEach((value) => {
    const rate2015 = generate2015Rate(value);
    const rate2016 = generate2016Rate(value);
    const rate2018 = generate2018Rate(value);
    const percentChange15To16 = calculatePercentChange(rate2015, rate2016).toFixed(2);
    const percentChange16To18 = calculatePercentChange(rate2016, rate2018).toFixed(2);
    console.log(`${value} | ${rate2015} | ${rate2016} | ${rate2018} | ${percentChange15To16} | ${percentChange16To18}`);
});

