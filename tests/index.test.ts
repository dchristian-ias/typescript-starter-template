import { expect } from 'chai';
import '../src/config/init-module-alias';
import moduleInterface from '../src/index';

describe('Module Interface', () => {
	it('exists', () => {
		expect(typeof moduleInterface).to.equal('object');
	});

	describe('exposes class Maths', () => {
		it('exists', () => {
			expect(typeof moduleInterface.Maths).to.equal('function');
		});
	});
});
