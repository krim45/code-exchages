import React, { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { exchangeListState } from 'recoil/atoms';

import { fetchExchangeListAndSave } from 'hooks/useExchangeListApi';
import { IExchange, ITheadField } from 'types/type';

import Modal from 'components/Modal';

// ! 따로 관리?
const theadFieldList: ITheadField[] = [
  {
    name: '신뢰도 순위',
    property: 'trust_score_rank',
    sort: false,
  },
  {
    name: '거래소',
    property: 'name',
    sort: false,
  },
  {
    name: '신뢰도',
    property: 'trust_score',
    sort: false,
  },
  {
    name: '24시간 BTC 거래량',
    property: 'trade_volume_24h_btc',
    sort: true,
  },
];

const Table = () => {
  const [exchangeList, setExchangeList] = useRecoilState<IExchange[]>(exchangeListState);
  const [sortFlag, setSortFlag] = useState<boolean>(true);

  const [openModal, setOpenModal] = useState<boolean>(false);
  // row 클릭할 때 전달? recoil로 관리?
  const [exchange, setExchange] = useState<IExchange>();

  useEffect(() => {
    fetchExchangeListAndSave(setExchangeList);
  }, []);

  const handleTradeVolumeSort = (property: string) => {
    const list = [...exchangeList].sort((a, b) => (!sortFlag ? a[property] - b[property] : b[property] - a[property]));
    setExchangeList(list);
    setSortFlag(!sortFlag);
  };

  const handleExchangeClick = (exchange: IExchange) => {
    setExchange(exchange);
    setOpenModal(true);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className='table-wrapper'>
        <table id='exchange-table'>
          <thead>
            <tr>
              {theadFieldList.map(({ name, sort, property }, idx) =>
                sort ? (
                  <th className='sort-field' key={idx} onClick={() => handleTradeVolumeSort(property)}>
                    {name}
                    {sortFlag ? <span>&#9660;</span> : <span>&#9650;</span>}
                  </th>
                ) : (
                  <th key={idx}>{name}</th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {exchangeList.map((exchange) => {
              const { trust_score_rank, id, name, image, trust_score, trade_volume_24h_btc: volume } = exchange;

              return (
                <tr className='row' onClick={() => handleExchangeClick(exchange)} key={id}>
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
            })}
          </tbody>

          <tfoot>
            <tr>
              <td>
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <Modal exchange={exchange} isOpen={openModal} onClose={handleModal} />
    </>
  );
};

export default Table;
