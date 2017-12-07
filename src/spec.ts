import * as mocha from 'mocha';
import { assert } from 'chai';

import { generate2016Rate } from './index';

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