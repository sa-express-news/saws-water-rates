import * as mocha from 'mocha';
import { assert } from 'chai';

import { generate2016Rate, generate2015Rate } from './index';

describe('2015 tax calculator', () => {
    it('should return 13.3 for 2500 gallons', () => {
        const rate = generate2015Rate(2500);
        assert.strictEqual(rate, 13.3);
    });
    it('should return 55.54 for 15129.66 gallons', () => {
        const rate = generate2015Rate(15129.66);
        assert.strictEqual(rate, 55.54);
    });
    it('should return 69.4 for 17652.36 gallons', () => {
        const rate = generate2015Rate(17652.36);
        assert.strictEqual(rate, 69.4);
    });
});


describe('2016 tax calculator', () => {
    it('should return 14.50 for 2500 gallons', () => {
        const rate = generate2016Rate(2500);
        assert.strictEqual(rate, 14.5);
    });
    it('should return 20.98 for 5013.23 gallons', () => {
        const rate = generate2016Rate(5013.23);
        assert.strictEqual(rate, 20.98);
    });
    it('should return 88.92 for 17652.36 gallons', () => {
        const rate = generate2016Rate(17652.36);
        assert.strictEqual(rate, 88.92);
    });
    it('should return 162.33 for 25913.18 gallons', () => {
        const rate = generate2016Rate(25913.18);
        assert.strictEqual(rate, 162.33);
    });
});