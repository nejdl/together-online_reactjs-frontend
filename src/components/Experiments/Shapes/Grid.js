import { useState, useEffect } from 'react';
import '../../../styles/Experiments/Shapes/Grid/Grid.css';

import Row from './Row/Row';

const Grid = () => {
  const [rows, setRows] = useState([0, 1, 2, 3, 4]);
  const [columns, setColumns] = useState([0, 1, 2, 3, 4]);
  const [numberOfDifferentShapes, setNumberOfDifferentShapes] = useState(7);

  return (
    <div className='Grid'>
      {rows.length > 0 &&
        columns.length > 0 &&
        numberOfDifferentShapes > 0 &&
        rows.map((row) => {
          return (
            <Row
              key={row}
              rowNumber={row}
              columns={columns}
              numberOfDifferentShapes={numberOfDifferentShapes}
            />
          );
        })}
    </div>
  );
};

export default Grid;
