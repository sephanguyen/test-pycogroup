import { expect } from 'chai';
import { rotate2dKtime } from '../src/index';
describe('Rotate12dDegreesKTime', function() {
  const grid2D = [[0, 16, 255], [8, 128, 32], [0, 0, 0]];
  it('Rotate 1 time', function() {
    const expectedGrid2D = [[0, 8, 0], [0, 128, 16], [0, 32, 255]];
    const time = 1;
    expect(rotate2dKtime(grid2D, time)).to.eql(expectedGrid2D);
  });

  it('Rotate 2 time', function() {
    const expectedGrid2D = [[0, 0, 0], [32, 128, 8], [255, 16, 0]];
    const time = 2;
    expect(rotate2dKtime(grid2D, time)).to.eql(expectedGrid2D);
  });

  it('Rotate 3 time', function() {
    const expectedGrid2D = [[255, 32, 0], [16, 128, 0], [0, 8, 0]];
    const time = 3;
    expect(rotate2dKtime(grid2D, time)).to.eql(expectedGrid2D);
  });
  it('Rotate 4 time', function() {
    const expectedGrid2D = [[0, 16, 255], [8, 128, 32], [0, 0, 0]];
    const time = 4;
    expect(rotate2dKtime(grid2D, time)).to.eql(expectedGrid2D);
  });
  it('Rotate 5 time equals Rotate 1 time', function() {
    const time = 5;
    expect(rotate2dKtime(grid2D, time)).to.eql(rotate2dKtime(grid2D, 1));
  });
  it('Rotate array 4 x 4 1 time', function() {
    const grid2D4x4 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expectedGrid2D = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ];
    const time = 1;
    expect(rotate2dKtime(grid2D4x4, time)).to.eql(expectedGrid2D);
  });
  it('Throw Exception when grid is string', function() {
    const gridInvalid = '';
    const time = 1;
    expect(() => rotate2dKtime(gridInvalid, time)).to.throws(
      Error,
      'Grid invalid'
    );
  });
  it('Throw Exception when grid is number', function() {
    const gridInvalid = 1;
    const time = 1;
    expect(() => rotate2dKtime(gridInvalid, time)).to.throws(
      Error,
      'Grid invalid'
    );
  });
  it('Throw Exception when grid is empty', function() {
    const gridInvalid = [];
    const time = 1;
    expect(() => rotate2dKtime(gridInvalid, time)).to.throws(
      Error,
      'Grid invalid'
    );
  });
  it('Throw Exception when grid is array', function() {
    const gridInvalid = [1, 2];
    const time = 1;
    expect(() => rotate2dKtime(gridInvalid, time)).to.throws(
      Error,
      'Grid invalid'
    );
  });
});
