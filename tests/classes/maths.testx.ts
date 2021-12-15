import { expect } from 'chai';
import '../../src/config/init-module-alias';
import { Maths } from '../../src/classes';

describe('Classes', () => {
	describe('Maths', () => {
		it('exists', () => {
			expect(typeof Maths).to.equal('function');
		});

		describe('when calling with a number', () => {
			it('should add 2 to that number', () => {
				const maths = new Maths();

				expect(maths.addTwo(2)).to.equal(4);
			});
		});
	});
});
