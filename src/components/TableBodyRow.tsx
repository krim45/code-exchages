import React from 'react';
import { IExchange } from 'utils/type';

interface ITableRow {
  exchange: IExchange;
  onClickRow: (exchange: IExchange) => void;
}

const TableRow: React.FC<ITableRow> = ({ exchange, onClickRow }) => {
  const { trust_score_rank, id, name, image, trust_score, trade_volume_24h_btc: volume } = exchange;

  return (
    <tr className='row' onClick={() => onClickRow(exchange)}>
      <td>{trust_score_rank}</td>
      <td>
        <div className='flex'>
          <span>
            <img src={image} alt={id} />
          </span>
          <span>{name}</span>
        </div>
      </td>
      <td>
        <meter min='0' max='10' value={trust_score} />
        <span>{trust_score}</span>
      </td>
      <td>{volume}</td>
    </tr>
  );
};

export default TableRow;
