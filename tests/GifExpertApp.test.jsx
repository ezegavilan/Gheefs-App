import { fireEvent, getAllByRole, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests on <GifExpertApp />', () => {
    test('Should be one h1 element on page', () => {
        render(<GifExpertApp/>);
        expect(screen.getAllByRole('heading', { level: 1 }).length).toBe(1);
    });

    test('Should get category title when category added', () => {
        const category = 'NewCategory';

        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(screen.getByText(category)).toBeTruthy();
    });
})