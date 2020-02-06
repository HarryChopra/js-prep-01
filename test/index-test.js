var index = require("../index.js")



describe('Height', ()=>{
  it('is less than 200', ()=>{
    expect(index.height).toBeLessThan(200)
  })
})

describe('Name', ()=>{
  it('returns Harry', ()=>{
    expect(index.name).toEqual("Harry")
  })
})

describe('Message',()=>{
  it('gives the name and height', ()=>{
    expect(index.message)
    .toInclude(index.name, index.height)
  })
})



/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
})
*/

