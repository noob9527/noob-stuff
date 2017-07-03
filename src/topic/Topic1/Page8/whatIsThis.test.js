/* eslint-disable no-unused-expressions, no-unused-vars, prefer-const, object-shorthand, prefer-template, max-len */
import chai from 'chai';
import * as counterMixin from './counterMixin';

chai.should();
const fail = () => { throw new Error('fail'); };

describe('whatIsThis', () => {

    it('whatIsThis test', () => {
        function whatIsThis() {
            return this;
        }
        fail();
    });

    it('mixin test', () => {
        function Person() {
            this.name = 'foo';
            this.getName = function () {
                return this.name;
            };
        }

        let person = new Person();
        person.getName().should.equal('foo');
        fail();
    });
});
