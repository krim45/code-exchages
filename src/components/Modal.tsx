import { fetchTickerListAndSave } from 'hooks/useTickerListApi';
import { useEffect, useState } from 'react';
import { IExchange, ITicker } from 'types/type';

interface IModalProps {
  exchange?: IExchange;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ exchange, isOpen, onClose }: IModalProps) => {
  const [tickerList, setTickerList] = useState<ITicker[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetchTickerListAndSave(exchange!.id, setTickerList);
    }
  }, [isOpen, exchange]);

  return !isOpen ? null : (
    <div className='modal-wrapper' onClick={onClose}>
      <div className='modal-body' onClick={(e) => e.stopPropagation()}>
        <ul>
          {tickerList.map(({ base, target }, idx) => (
            <li key={idx}>{`${base}/${target}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
