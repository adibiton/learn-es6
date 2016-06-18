'use strict';
const chai = require('chai');
const expect = require('chai').expect;
const foo = require('../src/parameters');

describe('ES6 features', ()=>{
    describe('default parameters', ()=>{
        it('should run with the specificed input', (done)=>{
            expect(foo(3)).to.eq(3);
            done();
        })
    })
})