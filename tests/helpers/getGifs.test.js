import { getGifs } from "../../src/helpers/getGifs"

describe('Testing getGifs.js', () => {
  test('should return a gifs array', async() => {
    const gifs = await getGifs('one punch')

    expect( gifs.length ).toBeGreaterThan( 0 )
    expect( gifs[0] ).toEqual({
      title: expect.any( String ),
      id: expect.any( String ),
      url: expect.any( String)
    })
  })
})