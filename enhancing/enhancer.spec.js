const enchanter = require('./enhancer.js');
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
      const actual = enchanter.repair(item);

      // assert
      expect(actual.durability).toBe(expected)

    });
  });

  describe('enchanting success', () => {
    it('increase enchantment by 1', () => {

      const expected = 1;
      const item = {
        name: 'Ice',
        durability: 50,
        enchantment: 0
      };
  
      // act
      const actual = enchanter.succeed(item);

      // assert
      expect(actual.enchantment).toBe(expected)
    })
  })

  describe('enchanting failure', () => {
    it('less than 15 enchantment loses 5 durability', () => {

      const expected = 70;
      const item = {
        name: 'HeartsBane',
        durability: 75,
        enchantment: 1
      };

      const actual = enchanter.fail(item)

      expect(actual.durability).toBe(expected)
    })
    it('15 enchantment loses 10 durability', () => {

      const expected = 65;
      const item = {
        name: 'HeartsBane',
        durability: 75,
        enchantment: 15
      };

      const actual = enchanter.fail(item)

      expect(actual.durability).toBe(expected)
    })
    it('16 enchantment loses 10 durability and lose an enchanting level', () => {

      const expectedDur = 65;
      const expectedEnchant = 19;
      const item = {
        name: 'HeartsBane',
        durability: 75,
        enchantment: 20
      };

      const actual = enchanter.fail(item)

      expect(actual.durability).toBe(expectedDur)
      expect(actual.enchantment).toBe(expectedEnchant)
    })
  })

  describe('item renamed with enchant level', () => {
    it('return with zero level enchant', () => {
      const expected = 'LongClaw';
      const item = {
        name: 'LongClaw',
        durability: 75,
        enchantment: 0
      };

      const actual = enchanter.get(item)

      expect(actual.name).toBe(expected)
    })

    it('return with level enchant in name', () => {
      const expected = '[+6] LongClaw';
      const item = {
        name: 'LongClaw',
        durability: 75,
        enchantment: 6
      };

      const actual = enchanter.get(item)

      expect(actual.name).toBe(expected)
    })
  })
});