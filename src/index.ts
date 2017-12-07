import { rates2016, SingleRateData } from './data';

const FIXED_FEE_2015 = 7.57;
const FIXED_FEE_2016 = 10.72;
const FIXED_FEE_2018 = 12.77;

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