import React from 'react';
import TableHeadTh from 'components/TableHeadTh';
import { theadFieldList } from 'utils/config';
import { IExchange } from 'utils/type';

interface ITableHead {
  exchangeList: IExchange[];
  setExchangeList: (exchangeList: IExchange[]) => void;
}

const TableHead: React.FC<ITableHead> = ({ exchangeList, setExchangeList }) => {
  return (
    <thead>
      <tr>
        {theadFieldList.map(({ name, property }) => (
          <TableHeadTh
            name={name}
            key={property}
            property={property}
            exchangeList={exchangeList}
            setExchangeList={setExchangeList}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
