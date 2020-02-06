var index = require("../index.js")

describe("A-Test-Lesson", ()=>{
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
})
