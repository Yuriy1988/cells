import * as React from 'react';
import { Row } from './components/row-component';
import { useLiveCellsGrid } from 'app/modules/board/hooks';
import { createGrid } from 'app/modules/board/utils';
import { GRID_SIZE } from 'app/modules/board/constants';

export const Board = () => {
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





