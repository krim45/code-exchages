import React from 'react';
import { ITableColumn, TableItem } from 'utils/type';

interface IProps {
  rowItem: TableItem;
  theadList: ITableColumn[];
  onClickRow?: (item: TableItem) => void;
}

const TableRow: React.FC<IProps> = ({ rowItem, theadList, onClickRow }) => {
  return (
    <tr className='row' onClick={() => onClickRow?.(rowItem)}>
      {theadList.map((field) => (
        <th key={`${field.label}${field.property}`}>{rowItem[field.property]}</th>
      ))}
    </tr>
  );
};

export default TableRow;
