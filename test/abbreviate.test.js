import abbreviate from '../lib/abbreviate';

describe('abbreviate', () => {
    test('should return abbreviate', () => {
        expect(abbreviate('Some Text')).toEqual('ST');
    });
    test('should return empty string', () => {
        expect(abbreviate('some text')).toEqual('');
    });
});
