export interface SingleRateData {
    max: number;
    rate: number;
}

export interface DoubleRateData {
    max: number;
    lowRate: number;
    highRate: number;
}

export const rates2015: DoubleRateData[] = [
    {
        max: 5985,
        lowRate: .002291,
        highRate: .002291
    },
    {
        max: 12717,
        lowRate: .003315,
        highRate: .003442
    },
    {
        max: 17205,
        lowRate: .004675,
        highRate: .004977
    },
    {
        max: Infinity,
        lowRate: .008185,
        highRate: .009469
    }
]


export const rates2016: SingleRateData[] = [
    {
        max: 2992,
        rate: .001511
    },
    {
        max: 4489,
        rate: .002644
    },
    {
        max: 5985,
        rate: .003398
    },
    {
        max: 7481,
        rate: .004155
    },
    {
        max: 10473,
        rate: .00491
    },
    {
        max: 14962,
        rate: .005666
    },
    {
        max: 20199,
        rate: .006799
    },
    {
        max: Infinity,
        rate: .009818
    }
];
export const rates2018: SingleRateData[] = [
    {
        max: 2992,
        rate: .001734
    },
    {
        max: 4489,
        rate: .003034
    },
    {
        max: 5985,
        rate: .0039
    },
    {
        max: 7481,
        rate: .004767
    },
    {
        max: 10473,
        rate: .005635
    },
    {
        max: 14962,
        rate: .006502
    },
    {
        max: 20199,
        rate: .007801
    },
    {
        max: Infinity,
        rate: .011267
    }
];