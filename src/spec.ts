import * as mocha from 'mocha';
import { assert } from 'chai';

import { generate2016Rate, generate2015Rate } from './index';

describe('2015 tax calculator', () => {
    it('should return 580.32 for 2500 gallons', () => {
        const rate = generate2015Rate(2500);
        assert.strictEqual(rate, 580.32);
    });
    it('should return 4804.29 for 15129.66 gallons', () => {
        const rate = generate2015Rate(15129.66);
        assert.strictEqual(rate, 4804.29);
    });
    it('should return 6190.73 for 17652.36 gallons', () => {
        const rate = generate2015Rate(17652.36);
        assert.strictEqual(rate, 6190.73);
    });
});


describe('2016 tax calculator', () => {
    it('should return 388.47 for 2500 gallons', () => {
        const rate = generate2016Rate(2500);
        assert.strictEqual(rate, 388.47);
    });
    it('should return 1038.75 for 5013.23 gallons', () => {
        const rate = generate2016Rate(5013.23);
        assert.strictEqual(rate, 1036.75);
    });
    it('should return 7830.26 for 17652.36 gallons', () => {
        const rate = generate2016Rate(17652.36);
        assert.strictEqual(rate, 7830.26);
    });
    it('should return 15171.9 for 25913.18 gallons', () => {
        const rate = generate2016Rate(25913.18);
        assert.strictEqual(rate, 15171.9);
    });
});