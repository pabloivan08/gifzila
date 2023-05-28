import { render } from '@testing-library/react'
import { GifItem } from '../../src/components'

describe('Pruebas en <GifItem />', () => {
  const title = 'Goku'
  const url = 'https://dragonball.com/goku.jpg'
  
  test('Should match with the snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url }/> )
    expect{ container }.toMatchSnapshot()
  })
})