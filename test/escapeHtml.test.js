import escapeHtml from "../lib/escapeHtml.js";

describe('escapeHtml', () => {
    test('should escape html tags', () => {
        expect(escapeHtml('some text<bg />')).toEqual('some text&lt;bg /&gt;');
    });
});