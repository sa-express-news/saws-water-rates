import { SingleRateData, DoubleRateData, rates2015, rates2016 } from './data';

const FIXED_FEE_2015 = 7.57;
const FIXED_FEE_2016 = 10.72;
const FIXED_FEE_2018 = 12.77;

export const generate2015Rate = (gallonsUsed: number): number => {
    return generateTwoRateYearRate(gallonsUsed, FIXED_FEE_2015, rates2015);
}

export const generate2016Rate = (gallonsUsed: number): number => {
    return generateSingleRateYearRate(gallonsUsed, FIXED_FEE_2016, rates2016);
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

        if (gallonsUsed > low && gallonsUsed > high) {
            const monthlyAverageUsage = (high - low) / 12;
            totalTaxBill += ((monthlyAverageUsage * datum.lowRate * 7) + (monthlyAverageUsage * datum.highRate * 5));
            console.log(`In block ${index + 1}, adding ${((monthlyAverageUsage * datum.lowRate * 7) + (monthlyAverageUsage * datum.highRate * 5))} to the total.`);
        } else if (gallonsUsed > low && gallonsUsed <= high) {
            const monthlyAverageUsage = (gallonsUsed - low) / 12;
            totalTaxBill += ((monthlyAverageUsage * datum.lowRate * 7) + (monthlyAverageUsage * datum.highRate * 5));
            console.log(`In block ${index + 1}, adding ${((monthlyAverageUsage * datum.lowRate * 7) + (monthlyAverageUsage * datum.highRate * 5))} to the total.`);
        }
    });

    totalTaxBill += fixedFee;

    return +totalTaxBill.toFixed(2);
}