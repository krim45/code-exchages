import React, { useState } from 'react';
import { ITableColumn, TableItem, ITableProps } from 'utils/type';

const TableHead: React.FC<ITableProps> = ({ theadList, dataList, setDataState }) => {
  const [columnList, setColumnList] = useState<ITableColumn[]>(theadList);

  const handleSortDataList = (property: string, isSort: boolean) => {
    const sortedDataList = [...dataList].sort((a: TableItem, b: TableItem) => {
      const valueA = a[property];
      const valueB = b[property];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return isSort ? valueA - valueB : valueB - valueA;
      }
      if (valueA > valueB) {
        return isSort ? -1 : 1;
      }
      if (valueA < valueB) {
        return isSort ? 1 : -1;
      }
      return 0;
    });
    setDataState(sortedDataList);
  };

  const handleColumnList = (property: string) => {
    const newColumnList = [...columnList].map((column) => ({
      ...column,
      isSort: column.property === property ? !column.isSort : false,
    }));
    setColumnList(newColumnList);
  };

  return (
    <thead>
      <tr>
        {columnList.map(({ label, property, sortable, isSort }) => (
          <th
            key={`${label}${property}`}
            onClick={() => {
              if (sortable) {
                handleColumnList(property);
                handleSortDataList(property, isSort);
              }
            }}
          >
            {label}
            {sortable ? isSort ? <span>&#9650;</span> : <span>&#9660;</span> : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
