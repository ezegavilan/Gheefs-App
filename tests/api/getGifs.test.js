import { getGifs } from "../../src/api/getGifs.js";

describe('Tests on getGifs', () => {
    test('Should return a gifs array', async () => {
        const gifs = await getGifs('Samsung');

        expect(gifs.length).toBeGreaterThan( 0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
})