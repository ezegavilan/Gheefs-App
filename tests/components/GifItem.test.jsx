import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Tests on <GifItem />', () => {
    const title = 'Título';
    const url = 'https://url.example.com/image.png';

    test('Should match with snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url }/>);

        expect(container).toMatchSnapshot();
    });

    test('Should show image with url and ALT specified', () => {
        render(<GifItem title={ title } url={ url }/>);

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Should show title on component', () => {
        render(<GifItem title={ title } url={ url }/>);

        expect(screen.getByText(title)).toBeTruthy();
    });
})
