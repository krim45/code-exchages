import React, { ReactNode } from 'react';
import { IExchange } from 'utils/type';

interface ITableBodyRow {
  rowItem: IExchange;
  theadList?: any[];
  onClickRow?: (rowItem: IExchange) => void;
  children?: ReactNode;
}

const TableBodyRow: React.FC<ITableBodyRow> = ({ rowItem, theadList, onClickRow = () => {}, children }) => {
  return (
    <tr className='row' onClick={() => onClickRow(rowItem)}>
      {theadList
        ? theadList?.map((field, idx) => {
            return <th key={idx}>{rowItem[field.property]}</th>;
          })
        : children}
    </tr>
  );
};

export default TableBodyRow;
