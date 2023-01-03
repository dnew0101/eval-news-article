import { isValidUrl } from "../src/client/js/isValidUrl";

test('properly validates url', () => {
    expect(isValidUrl('https://expressjs.com/')).toBe(true);
});

test('properly validates url', () => {
    expect(isValidUrl('blah-blah-lalala-quack')).toBe(false);
});