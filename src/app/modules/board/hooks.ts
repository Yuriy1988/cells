import { useState, useEffect } from 'react';
import { INTERVAL } from './constants';
import { updateCell} from 'app/modules/board/utils';
import { Grid, Row, Cell } from 'app/modules/board/types';

export const useLiveCellsGrid = (initialGrid: Grid) => {
  const [grid, setGrid] = useState<Array<Array<0 | 1>>>(initialGrid);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextGridState = grid.map((row: Row, rowIndex: number) => {
        return row.map((cell: Cell, cellIndex: number) => updateCell(grid, cellIndex, rowIndex, Boolean(cell)))
      })

      setGrid(nextGridState);
    }, INTERVAL);

    return () => clearInterval(intervalId);
  }, [grid]);

  return grid;
}
