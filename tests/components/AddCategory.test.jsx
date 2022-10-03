import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Tests on <AddCategory />', () => {

    test('Should change value on text box', () => {
        render(<AddCategory onNewCategory={ () => {
        } }/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Prueba' } });

        expect(input.value).toBe('Prueba');
    });

    test('Should call onNewCategory when input has a value', () => {
        const inputValue = 'Test';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('Should not call onNewCategory when input is empty', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});