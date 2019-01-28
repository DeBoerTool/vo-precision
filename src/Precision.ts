import PrecisionInterface from './Interfaces/Precision'

export default class Precision implements PrecisionInterface {
  private _value
  
  constructor (value: number) {
    if (!Number.isInteger(value)) {
      throw new TypeError('Precision value must be an integer.')
    }

    this._value = value
  }

  value (): number {
    return this._value
  }
}
