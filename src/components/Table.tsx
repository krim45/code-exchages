import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { exchangeListState } from 'recoil/atoms';
import { fetchExchangeListAndSave } from 'hooks/useExchangeListApi';
import { IExchange } from 'utils/type';

import TableHead from 'components/TableHead';
import TableBodyRow from 'components/TableBodyRow';
import Modal from 'components/Modal';

const Table = () => {
  const [exchangeList, setExchangeList] = useRecoilState<IExchange[]>(exchangeListState);
  const [focusExchange, setFocusExchange] = useState<IExchange>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetchExchangeListAndSave(setExchangeList);
  }, []);

  const handleExchangeClick = (exchange: IExchange) => {
    setFocusExchange(exchange);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <div className='table-wrapper'>
        <table id='exchange-table'>
          <TableHead exchangeList={exchangeList} setExchangeList={setExchangeList} />

          <tbody>
            {exchangeList.map((exchange) => (
              <TableBodyRow exchange={exchange} onClickRow={handleExchangeClick} key={exchange.id} />
            ))}
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
      <Modal exchange={focusExchange} isOpen={isOpenModal} onClose={handleCloseModal} />
    </>
  );
};

export default Table;
