/* eslint-disable */
import chai from 'chai';

chai.should();
const fail = () => { throw new Error('fail'); };

describe('Closure and Scope', () => {

    it('sample1', () => {
        function createFunction() {
            let arr = [];

            for (var i = 0; i < 5; i++) {
                arr[i] = function () {
                    return i;
                };
            }

            return arr;
        }

        fail();
    });

    it('sample2', () => {
        function counter() {
            let n = 0;
            return {
                increase() {
                    ++n;
                },
                reset() {
                    n = 0;
                },
                get() {
                    return n;
                },
            };
        }

        let cnt1 = counter();
        let cnt2 = counter();

        cnt1.increase();

        fail();
        // cnt1.get().should.be.equal('what');
        // cnt2.get().should.be.equal('what');
    });
});
