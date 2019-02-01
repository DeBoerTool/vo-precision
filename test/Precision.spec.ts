import Precision from '../'
import { expect } from 'chai'

const value = 1
const vo = new Precision(value)

describe('Measurement', () => {
  it('returns the value', () => expect(vo.value()).to.equal(value))
  
  it('throws on non-integers', () => {
    try {
      new Precision(1.1)
    } catch (e) {
      expect(e).to.be.instanceOf(TypeError)
    }
  })
})