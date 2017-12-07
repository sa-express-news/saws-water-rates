export interface SingleRateData {
    max: number;
    rate: number;
}

interface VaryingRateData {
    threshold: number;
    lowRate: number;
    highRate: number;
}


export const rates2016: SingleRateData[] = [
    {
        max: 2992,
        rate: .1511
    },
    {
        max: 4489,
        rate: .2644
    },
    {
        max: 5985,
        rate: .3398
    },
    {
        max: 7481,
        rate: .4155
    },
    {
        max: 10473,
        rate: .491
    },
    {
        max: 14962,
        rate: .5666
    },
    {
        max: 20199,
        rate: .6799
    },
    {
        max: Infinity,
        rate: .9818
    }
];