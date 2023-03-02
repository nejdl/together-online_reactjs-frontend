import { useEffect, useState } from 'react';
import { updateDoc } from 'firebase/firestore';

const Column = ({
  columnNumber,
  rowNumber,
  rowData,
  rowReference,
  numberOfDifferentShapes,
}) => {
  const [columnValue, setColumnValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // set column value from row data
  useEffect(() => {
    if (rowData) {
      if (rowData[columnNumber]) {
        setColumnValue(rowData[columnNumber]);
        setIsLoading(false);
      }
    }
  });

  const postColumnValueToDB = (newColumnValue) => {
    updateDoc(rowReference, {
      [columnNumber]: newColumnValue,
    });
  };

  const increaseColumnValue = () => {
    let newColumnValue;
    if (columnValue < numberOfDifferentShapes) {
      newColumnValue = columnValue + 1;
      postColumnValueToDB(newColumnValue);
    } else {
      newColumnValue = 1;
      postColumnValueToDB(newColumnValue);
    }
  };

  return (
    <div className='Columm noselect' onClick={increaseColumnValue}>
      {!isLoading && (
        <div className='ColumnCell border'>
          <div className={`ColumnCell_div shape${columnValue}`}></div>
        </div>
      )}
    </div>
  );
};

export default Column;
