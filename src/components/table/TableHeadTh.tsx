import { useState } from 'react';
import { IExchange, ITableField } from 'utils/type';

interface ITheadThProps {
  field: ITableField;
  dataList: IExchange[];
  setDataList: (dataList: IExchange[]) => void;
}

const TheadTh: React.FC<ITheadThProps> = ({ field, dataList, setDataList }) => {
  const { label, property, sort } = field;
  const [isSort, setIsSort] = useState<boolean>(false);

  const handleSortExchangeList = () => {
    const sortedExchangeList = [...dataList].sort((a: IExchange, b: IExchange) => {
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

    setDataList(sortedExchangeList);
    setIsSort(!isSort);
  };

  return (
    <th key={property} onClick={() => handleSortExchangeList()}>
      {label}
      {sort ? isSort ? <span>&#9650;</span> : <span>&#9660;</span> : null}
    </th>
  );
};

export default TheadTh;
