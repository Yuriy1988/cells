import { Cell, Row, Grid } from './types';

const getRandomCell = (): Cell => Math.random() > 0.5 ? 1 : 0;

const fulfillRow = (cellsPerRow: number): Row => Array(cellsPerRow)
  .fill(0)
  .map(getRandomCell);

export const getNeighbours = (
  grid: Grid,
  cellIndex: number,
  rowIndex: number
): Array<Cell> => {
  const leftCell = grid[rowIndex]?.[cellIndex - 1] ?? 0;
  const leftTopCell = grid[rowIndex + 1]?.[cellIndex - 1] ?? 0;
  const topCell = grid[rowIndex + 1]?.[cellIndex] ?? 0;
  const topRightCell = grid[rowIndex + 1]?.[cellIndex + 1] ?? 0;
  const rightCell = grid[rowIndex]?.[cellIndex + 1] ?? 0;
  const bottomRightCell = grid[rowIndex - 1]?.[cellIndex + 1] ?? 0;
  const bottomCell = grid[rowIndex - 1]?.[cellIndex] ?? 0;
  const bottomLeftCell = grid[rowIndex - 1]?.[cellIndex - 1] ?? 0;

  return [leftCell, leftTopCell, topCell, topRightCell, rightCell, bottomRightCell, bottomCell, bottomLeftCell];
}

export const getLiveNeighboursAmount = (neighbours: Array<Cell>): number => neighbours.filter(Boolean).length;

export const createGrid = (size: number): Grid => {
  return Array(size)
    .fill(0)
    .map(() => fulfillRow(size))
};

export const updateCell = (
  grid: Grid,
  cellIndex: number,
  rowIndex: number,
  isAlive: boolean,
) => {
  const neighbours = getNeighbours(grid, cellIndex, rowIndex);
  const liveNeighboursAmount = getLiveNeighboursAmount(neighbours);

  const isUnderPopulation = isAlive && liveNeighboursAmount < 2;
  const isOvercrowding = isAlive && liveNeighboursAmount > 3;

  const shouldDie = isUnderPopulation || isOvercrowding;
  const isReproduction = !isAlive && liveNeighboursAmount === 3;
  const shouldStayAlive = isAlive && (liveNeighboursAmount === 2 || liveNeighboursAmount === 3);

  if (shouldDie) {
    return 0;
  } else if (isReproduction || shouldStayAlive) {
    return 1;
  } else {
    return isAlive ? 1 : 0;
  }
};

export const getTest = () => 1;
