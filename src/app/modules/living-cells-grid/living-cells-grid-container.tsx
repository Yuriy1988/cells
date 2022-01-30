import * as React from 'react';
import { Row } from './components/row-component';
import { useLiveCellsGrid } from 'app/modules/living-cells-grid/hooks';
import { createGrid } from 'app/modules/living-cells-grid/utils';
import { GRID_SIZE } from 'app/modules/living-cells-grid/constants';

export const LivingCellsGrid = () => {
  const initialGrid = React.useMemo(() => createGrid(GRID_SIZE), []);
  const grid = useLiveCellsGrid(initialGrid);

  return (
    <React.Fragment>
      {
        grid.map((row, index) => <Row key={index} row={row} />)
      }
    </React.Fragment>
  );
}





