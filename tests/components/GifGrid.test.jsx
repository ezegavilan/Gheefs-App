import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";

jest.mock('../../src/hooks/useFetchGifs.js');

describe('Tests on <GifGrid />', () => {
    const category = 'Test';

    test('Should get isLoading true on init', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Should show items when images are loaded with useFetchGifs hook', () => {

        const gifsMock = [
            {
                id: 'ABC',
                title: 'Test1',
                url: 'https://localhost/test1'
            },
            {
                id: 'DEF',
                title: 'Test2',
                url: 'https://localhost/test2'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifsMock,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});