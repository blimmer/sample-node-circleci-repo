const { add } = require('./add')

describe('add', () => {
  it('adds', () => {
    expect(add(2,2)).toEqual(4)
  })
})
