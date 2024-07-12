# Implicit Type Conversion
### statically typed vs dynamically typed
- compile time 
- runtime
### strongly typed vs weakly typed
- restrict implicit type conversion
- open to implicit type conversion


### Javascript example
[reference](https://github.com/noob9527/notes-programming/blob/e7ca3f99fad8abdea57f792bcde74a2a8d99aef5/javascript/ecmascript5/Syntax.js#L23-L52)
```javascript
describe('加法运算符',function () {
    it('+运算符先将所有操作数转换为原始值，转换结束后如果有一个操作数为字符串' +
        '则进行字符串连接，否则进行数字加法操作',function () {
        (1+'1').should.equal('11');
        (true+1).should.equal(2);
        (null+1).should.equal(1);
        (null+'1').should.equal('null1');
        (undefined+1).should.NaN();
    });
});

describe('比较运算符',function () {
    it('=运算符先将所有操作数转换为原始值，布尔值转换为数字，转换结束后如果一个操作数为数字' +
        '另一个操作数为字符串，则将字符串转为数字进行比较',function () {
        //==运算符更倾向于将操作数转换为数字
        (!!'0').should.true();
        ('0'==false).should.true();
        ('0x11'==17).should.true();
    });
});
```

### MySQL example
```sql
select '0a' = 0;    -- true
select 'a' = 0;     -- true
select '0a' = 'a';  -- false

select '1a' + '2b'; -- 3

select 'false' = 0; -- true
select 'true' = 0;  -- true
select '1ab' = 1;   -- true
```
