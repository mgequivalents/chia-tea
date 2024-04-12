import crop from "../lib/crop.js";

describe('crop', () => {
    test('should crop long text', () => {
        expect(crop('some long text', 8, false)).toEqual('some...');
    });
    test('should crop long text with append', () => {
        expect(crop('some long text', 8, '...')).toEqual('some...');
    });
});