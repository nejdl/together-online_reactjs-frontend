import { useEffect, useState } from 'react';
import { db } from '../../../../api/api';
import { onSnapshot, doc } from 'firebase/firestore';
import Column from './Column/Column';

const Row = ({ rowNumber, columns, numberOfDifferentShapes }) => {
  const [rowData, setRowData] = useState([]);
  const rowReference = doc(db, 'shapes', 'row' + rowNumber);

  // get initial row data
  // & subscribe to changes
  useEffect(() => {
    const unsubscribeShapesCollection = onSnapshot(
      rowReference,
      (rowDocument) => {
        // set row data as state
        setRowData(rowDocument.data());
      }
    );

    // cleanup subscription
    return () => {
      unsubscribeShapesCollection();
    };
  }, []);

  return (
    <div className='Row'>
      {columns.map((column) => {
        return (
          <Column
            key={column}
            columnNumber={column}
            rowNumber={rowNumber}
            rowData={rowData}
            rowReference={rowReference}
            numberOfDifferentShapes={numberOfDifferentShapes}
          />
        );
      })}
    </div>
  );
};

export default Row;
