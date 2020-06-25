import { handleSubmit } from "../src/client/js/formHandler";
import { describe, expect } from "@jest/globals";


describe('Testing handleSubmit function', () => {
    test('Return true if the function is defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    test('Return true if handleSubmit is a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });
});