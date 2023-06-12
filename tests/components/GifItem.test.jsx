import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'

describe('Pruebas en <GifItem />', () => {
  const title = 'Goku'
  const url = 'https://dragonball.com/goku.jpg'
  
  test('Should match with the snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url }/> )
    expect(container).toMatchSnapshot()
  })
  
  test('should show the correct image url and alt', () => {
    render( <GifItem title={ title } url={ url }/> )
    const { src, alt } = screen.getByRole('img')

    expect( src ).toBe( url )
    expect( alt ).toBe( title )
  })

  test('should show the title in <p>', () => {
    render( <GifItem title={ title } url={ url }/> )
    expect( screen.getByText( title )).toBeTruthy()
  })
})