import { useEffect, useState } from 'react';
import { fetchExchangeListAndSave } from 'hooks/useExchangeListApi';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { exchangeListState } from 'recoil/atoms';
import { exchangeTableColumnList } from 'utils/tableColumnList';
import { IExchange, TableItem, TableRowList } from 'utils/type';

import Modal from 'components/Modal';
import Table from 'components/table/Table';
import ShowMoreBtn from 'components/ShowMoreBtn';

const ExchangeTable = () => {
  const [exchangeList, setExchangeList] = useRecoilState<IExchange[]>(exchangeListState);
  const [focusedExchange, setFocusedExchange] = useState<IExchange>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  useEffect(() => {
    fetchExchangeListAndSave({ setExchangeList, setHasNextPage });
  }, []);

  const handleExchangeClick = (exchange: IExchange) => {
    setFocusedExchange(exchange);
    handleOpenCloseModal();
  };

  const handleOpenCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const fetchMore = (page: number) => fetchExchangeListAndSave({ setExchangeList, page, setHasNextPage });

  return (
    <>
      <Table
        theadList={exchangeTableColumnList}
        dataList={exchangeList}
        setDataState={setExchangeList as SetterOrUpdater<TableRowList>}
        onClickRow={handleExchangeClick as (value: TableItem) => void}
      />
      {hasNextPage && <ShowMoreBtn fetchMore={fetchMore} />}
      <Modal item={focusedExchange} isOpen={isOpenModal} onClose={handleOpenCloseModal} />
    </>
  );
};

export default ExchangeTable;
