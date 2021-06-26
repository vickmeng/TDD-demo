/**
 * 绿
 */
const {isEqual} = require('./isEqual')


describe('isEqual',function (){
  it('同一个变量比较', function () {
    const v = {};
    expect(isEqual(v,v)).toBe(true)
  });

  describe('不同变量比较',function (){
    it('不同type相比较', function () {
      expect(isEqual(1,'1')).toBe(false)
    });


    it('基本类型', function () {
      expect(isEqual(1,1)).toBe(true)
      expect(isEqual(1,2)).toBe(false)

      expect(isEqual('a','a')).toBe(true)
      expect(isEqual('a','b')).toBe(false)

      expect(isEqual(true,true)).toBe(true)
      expect(isEqual(true,false)).toBe(false)

      expect(isEqual(undefined,undefined)).toBe(true)
      expect(isEqual(undefined,'')).toBe(false)

      expect(isEqual(null,null)).toBe(true)
      expect(isEqual(null,'')).toBe(false)

      expect(isEqual(Symbol(1),Symbol(1))).toBe(false)

    });

    describe('引用类型', function () {
      it('array', function () {
        expect(isEqual(['a'], ['a'])).toBe(true)
        // 多微数组
        expect(isEqual([['a']], [['a']])).toBe(true)

        expect(isEqual(['a'], ['b'])).toBe(false)
        // 超集
        expect(isEqual(['a'], ['a', 'b'])).toBe(false)
      });

      it('object', function () {
        expect(isEqual({a:1}, {a:1})).toBe(true)

        expect(isEqual({a:{b:1}}, {a:{b:1}})).toBe(true)

        expect(isEqual({a:1}, {a:2})).toBe(false)

        expect(isEqual({a:1}, {a:1,b:1})).toBe(false)

        expect(isEqual({a:{b:1}}, {a:{b:2}})).toBe(false)
      });
    });

  })

})
