const enhancer = require('./enhancer.js');
// test away!
describe('enchanter', () => {
  describe('repair durability', () => {
    // arrange
    it('should repair to 100', ()=> {

      const expected = 100;
      const item = {
        name: 'Widows Wail',
        durability: 0,
        enchantment: 1
      };
  
      // act
      const actual = enhancer.repair(item);

      // assert
      expect(actual.durability).toBe(expected)

    });
  });

  describe('enchaning success', () => {
    it('increase enchantment by 1', () => {

      const expected = 1;
      const item = {
        name: 'Ice',
        durability: 50,
        enchantment: 0
      };
  
      // act
      const actual = enhancer.succeed(item);

      // assert
      expect(actual.enchantment).toBe(expected)
    })
  })
});