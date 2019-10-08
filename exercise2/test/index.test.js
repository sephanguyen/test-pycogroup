import { expect } from 'chai';
import { getBundle } from '../src/index';
describe('Test function getBundle', function() {
  it('Test Bundle Value for Student has age 16 and incom 0', function() {
    const expectedValueBundle = 0;

    const age = 16;
    const labelStudent = 'yes';
    const incom = 0;

    expect(getBundle(age, labelStudent, incom)).to.eql(expectedValueBundle);
  });
  it('Test Bundle Value for not student has age 18 and incom 25000', function() {
    const expectedValueBundle = 2;

    const age = 18;
    const labelStudent = 'no';
    const incom = 25000;

    expect(getBundle(age, labelStudent, incom)).to.eql(expectedValueBundle);
  });

  it('Test Bundle Value for not student has age 18 and incom 2500', function() {
    const expectedValueBundle = 1;

    const age = 18;
    const labelStudent = 'no';
    const incom = 1200;

    expect(getBundle(age, labelStudent, incom)).to.eql(expectedValueBundle);
  });

  it('Test Bundle Value for student has age 18 and incom 2500', function() {
    const expectedValueBundle = 1;

    const age = 18;
    const labelStudent = 'yes';
    const incom = 1200;

    expect(getBundle(age, labelStudent, incom)).to.eql(expectedValueBundle);
  });
  it('Test Bundle Value for student has age 19 and incom 56000', function() {
    const expectedValueBundle = 3;

    const age = 19;
    const labelStudent = 'yes';
    const incom = 56000;

    expect(getBundle(age, labelStudent, incom)).to.eql(expectedValueBundle);
  });

  it('Test Bundle Value for not student has age 19 and incom 56000', function() {
    const expectedValueBundle = 3;

    const age = 19;
    const labelStudent = 'no';
    const incom = 56000;

    expect(getBundle(age, labelStudent, incom)).to.eql(expectedValueBundle);
  });
});
