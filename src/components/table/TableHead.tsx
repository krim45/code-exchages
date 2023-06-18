import React from 'react';
import TableHeadTh from 'components/table/TableHeadTh';
import { IExchange, ITableField } from 'utils/type';

interface ITableHead {
  theadList: ITableField[];
  dataList: IExchange[];
  setDataList: (dataList: IExchange[]) => void;
}

const TableHead: React.FC<ITableHead> = ({ theadList, dataList, setDataList }) => {
  return (
    <thead>
      <tr>
        {theadList.map((field) => {
          const { property } = field;
          return <TableHeadTh key={property} field={field} dataList={dataList} setDataList={setDataList} />;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
