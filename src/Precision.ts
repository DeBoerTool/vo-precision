import IPrecision from './IPrecision'

export default class Precision implements IPrecision 
{
  private _value: number
  
  constructor (value: number) 
  {
    if (!Number.isInteger(value)) {
      throw new TypeError('Precision value must be an integer.')
    }

    this._value = value
  }

  value (): number 
  {
    return this._value
  }
}
