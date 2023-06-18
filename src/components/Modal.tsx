import { fetchTickerListAndSave } from 'hooks/useTickerListApi';
import { useEffect, useState } from 'react';
import { IExchange, ITicker } from 'utils/type';
import ShowMoreBtn from './ShowMoreBtn';
import Table from './table/Table';
import { tickerFieldList } from 'utils/config';

interface IModalProps {
  exchange?: IExchange;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ exchange, isOpen, onClose }) => {
  const [tickerList, setTickerList] = useState<ITicker[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetchTickerListAndSave(exchange!.id, setTickerList);
    }
  }, [isOpen, exchange]);

  const fetchTickerListAndSaveWithPage = (page?: number) => {
    fetchTickerListAndSave(exchange!.id, setTickerList, page);
  };

  return !isOpen ? null : (
    <div className='modal-wrapper' onClick={onClose}>
      <div className='modal-body' onClick={(e) => e.stopPropagation()}>
        <Table theadList={tickerFieldList} dataList={tickerList} setDataList={setTickerList} />
        {/* <ul>
          {tickerList.map(({ base, target }) => (
            <li key={base}>{`${base}/${target}`}</li>
          ))}
        </ul> */}
        <ShowMoreBtn fetchHooks={fetchTickerListAndSaveWithPage} />
      </div>
    </div>
  );
};

export default Modal;
