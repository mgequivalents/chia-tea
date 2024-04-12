import escapeRegExp from "../lib/escapeRegExp.js";

describe('escapeRegExp', () => {
    test('should escape RegExp', () => {
        expect(escapeRegExp('/some text/')).toEqual('\\/some text\\/');
    });
});