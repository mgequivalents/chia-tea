import camelCase from '../lib/camelCase';

describe('camelCase', () => {
    test('should return the correct text in camel case', () => {
        expect(camelCase('some text')).toEqual('someText');
    });
});