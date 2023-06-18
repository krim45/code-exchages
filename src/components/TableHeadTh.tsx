import { useState } from 'react';
import { IExchange } from 'utils/type';

interface ITheadThProps {
  name: string;
  property: keyof IExchange;
  exchangeList: IExchange[];
  setExchangeList: (exchangeList: IExchange[]) => void;
}

const TheadTh: React.FC<ITheadThProps> = ({ name, property, exchangeList, setExchangeList }) => {
  const [isSort, setIsSort] = useState<boolean>(false);

  const handleSortExchangeList = () => {
    const sortedExchangeList = [...exchangeList].sort((a: IExchange, b: IExchange) => {
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

    setExchangeList(sortedExchangeList);
    setIsSort(!isSort);
  };

  return (
    <th key={property} onClick={() => handleSortExchangeList()}>
      {name}
      {isSort ? <span>&#9650;</span> : <span>&#9660;</span>}
    </th>
  );
};

export default TheadTh;
