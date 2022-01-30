import { useState, useEffect } from 'react';
import { INTERVAL } from './constants';
import { updateCell} from 'app/modules/living-cells-grid/utils';
import { Grid, Row, Cell } from 'app/modules/living-cells-grid/types';

export const useLiveCellsGrid = (initialGrid: Grid) => {
  const [grid, setGrid] = useState<Grid>(initialGrid);

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
