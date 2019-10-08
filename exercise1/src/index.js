function rotate2dKtime(grid, kRotation) {
  if (
    !Array.isArray(grid) ||
    grid.length <= 0 ||
    !grid.every(row => Array.isArray(row))
  ) {
    throw new Error('Grid invalid');
  }
  if (kRotation > 4) {
    kRotation = kRotation % 4;
  }
  if (kRotation == 4) {
    return grid;
  }
  for (let i = 0; i < kRotation; i++) {
    grid = rotate2d90degree(grid);
  }
  return grid;
}

function rotate2d90degree(grid) {
  const n = grid.length;
  const newGrid = JSON.parse(JSON.stringify(grid));

  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let temp = newGrid[i][j];
      newGrid[i][j] = newGrid[n - 1 - j][i];
      newGrid[n - 1 - j][i] = newGrid[n - 1 - i][n - 1 - j];
      newGrid[n - 1 - i][n - 1 - j] = newGrid[j][n - 1 - i];
      newGrid[j][n - 1 - i] = temp;
    }
  }
  return newGrid;
}
export { rotate2dKtime };
