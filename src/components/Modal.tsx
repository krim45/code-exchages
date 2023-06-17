import { fetchTickerListAndSave } from 'hooks/useTickerListApi';
import { useEffect, useState } from 'react';
import { Exchange, Ticker } from 'types/type';

interface ModalProps {
  exchange?: Exchange;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ exchange, isOpen, onClose }: ModalProps) => {
  const [tickerList, setTickerList] = useState<Ticker[]>([]);

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
