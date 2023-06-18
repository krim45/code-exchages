import { useEffect, useState } from 'react';
import { fetchExchangeListAndSave } from 'hooks/useExchangeListApi';
import { useRecoilState } from 'recoil';
import { exchangeListState } from 'recoil/atoms';
import { exchangeFieldList } from 'utils/config';
import { IExchange } from 'utils/type';

import Modal from 'components/Modal';
import Table from 'components/table/Table';
import ShowMoreBtn from 'components/ShowMoreBtn';

const ExchangeTable = () => {
  const [exchangeList, setExchangeList] = useRecoilState<IExchange[]>(exchangeListState);
  const [focusedExchange, setFocusedExchange] = useState<IExchange>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetchExchangeListAndSave(setExchangeList);
  }, []);

  const handleExchangeClick = (exchange: IExchange) => {
    setFocusedExchange(exchange);
    handleOpenCloseModal();
  };

  const handleOpenCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <Table
        theadList={exchangeFieldList}
        dataList={exchangeList}
        setDataList={setExchangeList}
        onClickRow={handleExchangeClick}
      />
      <ShowMoreBtn fetchHooks={(page: number) => fetchExchangeListAndSave(setExchangeList, page)} />
      <Modal exchange={focusedExchange} isOpen={isOpenModal} onClose={handleOpenCloseModal} />
    </>
  );
};

export default ExchangeTable;
