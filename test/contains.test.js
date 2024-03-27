import contains from "../lib/contains.js";

describe('contains', () => {
    test('should contains text', () => {
        expect(contains('some text', 'text', 0)).toBeTruthy();
    });
});
// toMatch(/someText/)