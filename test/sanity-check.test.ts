/// <reference path='../app/scripts/definitions/references.d.ts' />

'use strict';

describe('Sanity Check', function () {
    beforeEach(module('portfolio.services'));

    it('Does a quick sanity check to make sure the unit testing framework has been configured properly', inject(function (version) {
        expect(version).toBe('0.1');
    }));
});