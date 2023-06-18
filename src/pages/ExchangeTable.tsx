import { useEffect, useState } from 'react';
import { fetchExchangeListAndSave } from 'hooks/useExchangeListApi';
import { useRecoilState } from 'recoil';
import { exchangeListState } from 'recoil/atoms';
import { IExchange } from 'utils/type';
import Modal from 'components/Modal';

const ExchangeTable = () => {
  const [exchangeList, setExchangeList] = useRecoilState<IExchange[]>(exchangeListState);

  useEffect(() => {
    fetchExchangeListAndSave(setExchangeList);
  }, []);

  const [exchange, setExchange] = useState<IExchange>();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Modal exchange={exchange} isOpen={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default ExchangeTable;
