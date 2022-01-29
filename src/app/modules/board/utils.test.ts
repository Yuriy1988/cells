import {getNeighbours, getLiveNeighboursAmount, createGrid, updateCell} from 'app/modules/board/utils';
import { Grid, Cell } from 'app/modules/board/types';

const grid: Grid = [
  [0,0,0,0,0],
  [0,1,1,1,0],
  [0,0,0,0,0],
]

test('returns neighbours', () => {
  const neighbours = getNeighbours(grid, 2, 1);
  const expected: Array<Cell> = [1, 0, 0, 0, 1, 0, 0, 0];

  expect(neighbours).toStrictEqual(expected);
});

test('returns neighbours for corner cell', () => {
  const neighbours = getNeighbours(grid, 0, 0);
  const expected: Array<Cell> = [0, 0, 0, 1, 0, 0, 0, 0];

  expect(neighbours).toStrictEqual(expected);
});

test('calculates alive neighbours', () => {
  const liveNeighboursAmount = getLiveNeighboursAmount([1,0,0,1]);
  const expected = 2;

  expect(liveNeighboursAmount).toStrictEqual(expected);
});

test('creates grid with provided size', () => {
  const expected = 10;
  const grid = createGrid(expected);

  expect(grid.length).toStrictEqual(expected)
  grid.forEach((row) => {
    expect(row.length).toStrictEqual(expected)
  });
});

test('updates cell', () => {
  const expected = 1;
  const rowIndex = 0;
  const cellIndex = 2;
  const isAlive = Boolean(grid[rowIndex][cellIndex]);

  const cell = updateCell(grid, cellIndex, rowIndex, isAlive);

  expect(cell).toStrictEqual(expected)
});

