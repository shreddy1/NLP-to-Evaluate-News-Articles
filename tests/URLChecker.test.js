import { checkForURL } from "../src/client/js/URLChecker";
import { describe, expect } from "@jest/globals";

describe('URL Validation', () => {
    test('Return true on valid url', () => {
        expect(checkForURL('https://www.youtube.com/')).toBe(true);
    });

    test('Return false on invalid url', () => {
        expect(checkForURL('no')).toBe(false);
    });
});