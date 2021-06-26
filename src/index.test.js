const {isEqual} = require('./index')

describe('isEqual',function (){
  it('同一个变量',function () {
    const obj = {}

    expect(isEqual(obj,obj)).toBe(true)
  })

  it('type不同', function () {
    expect(isEqual({},1)).toBe(false)
  });


  it('基本类型',function (){
    expect(isEqual(1,1)).toBe(true)
    expect(isEqual(1,2)).toBe(false)

    expect(isEqual(NaN,NaN)).toBe(true)
    expect(isEqual(-0,0)).toBe(false)
    expect(isEqual(Infinity,Infinity)).toBe(true)
    expect(isEqual(Number.MIN_VALUE,Number.MIN_VALUE)).toBe(true)
    expect(isEqual(Number.MAX_VALUE,Number.MAX_VALUE)).toBe(true)



    expect(isEqual('a','a')).toBe(true)
    expect(isEqual('a','b')).toBe(false)

    expect(isEqual(true,true)).toBe(true)
    expect(isEqual(true,false)).toBe(false)

    expect(isEqual(undefined,undefined)).toBe(true)
    expect(isEqual(undefined,'')).toBe(false)

    expect(isEqual(null,null)).toBe(true)
    expect(isEqual(null,'')).toBe(false)

    expect(isEqual(Symbol(1),Symbol(1))).toBe(false)//??
  })


  describe('引用类型',function (){
    it('数组', function () {
      expect(isEqual(['a'], ['a'])).toBe(true)

      expect(isEqual([['a']], [['a']])).toBe(true)

      expect(isEqual(['a'], ['b'])).toBe(false)

      expect(isEqual(['a'], ['a', 'b'])).toBe(false)
    });


    it('object', function () {
      expect(isEqual({a:1}, {a:1})).toBe(true)

      expect(isEqual({a:{b:1}}, {a:{b:1}})).toBe(true)

      expect(isEqual({a:1}, {a:2})).toBe(false)

      expect(isEqual({a:1}, {a:1,b:1})).toBe(false)

      expect(isEqual({a:{b:1}}, {a:{b:2}})).toBe(false)

      expect(isEqual(new Date('2021/1/1'), new Date('2021/1/1'))).toBe(true)
      expect(isEqual(new Date('2021/1/1'), new Date('2021/1/2'))).toBe(false)

    });

    // TODO
    xit('搞不定了', function () {
      expect(isEqual(Promise.resolve(1), Promise.resolve(1))).toBe(true)
      expect(isEqual(Promise.resolve(1), Promise.resolve(2))).toBe(false)
    });


  })
})
