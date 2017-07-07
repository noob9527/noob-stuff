/* eslint-disable no-unused-expressions, no-unused-vars, prefer-const, no-proto */
import chai from 'chai';

chai.should();
const fail = () => { throw new Error('fail'); };

describe('JS Inheritance', () => {

    Parent.staticProps = 'bar';

    function Parent(name) {
        this.name = name;
        this.sayHello = function () {
            return 'hello';
        };
    }

    let Child;

    it('es5 inheritance', () => {

    });

    it('es6 inheritance', () => {

    });

    afterEach(() => {
        let childInstance = new Child('foo');

        fail();

        // 子类对象应该继承父类对象属性
        // childInstance.sayHello().should.equal('hello');

        // // 子类构造函数应该调用父类构造函数
        // childInstance.name.should.equal('foo');

        // // 子类对象应该是父类对象的实例
        // (childInstance instanceof Parent).should.true;

        // // 子类应该继承父类的静态属性
        // Child.staticProps.should.equal('bar');

        // // 子类的prototype.constructor引用不应该被重置
        // Child.prototype.constructor.should.equal(Child);

        // reset
        Child = function () {};
    });

});
