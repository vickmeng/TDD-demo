/**
 * 重构 保持绿色，如果红了，就是改代码改出bug了
 * 实现功能
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

    it('引用类型', function () {
      /**
       * TODO
       * 太复杂了，先做最小实现
        */

    });

  })

})
