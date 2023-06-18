import { fetchMoreTickerList, fetchTickerListAndSave } from 'hooks/useTickerListApi';
import { useEffect, useState } from 'react';
import { ITicker, TableItem, TableRowList } from 'utils/type';
import ShowMoreBtn from './ShowMoreBtn';
import Table from './table/Table';
import { tickerTableColumnList } from 'utils/tableColumnList';
import { SetterOrUpdater } from 'recoil';

interface IProps {
  item?: TableItem;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ item, isOpen, onClose }) => {
  const [tickerList, setTickerList] = useState<ITicker[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen && item?.id) {
      fetchTickerListAndSave({ id: item.id, setTickerList, setHasNextPage });
    }
  }, [isOpen, item]);

  const fetchMore = (page?: number) => {
    if (item?.id) {
      fetchMoreTickerList({ id: item.id, page, setTickerList, setHasNextPage });
    }
  };

  return !isOpen ? null : (
    <div className='modal-wrapper' onClick={onClose}>
      <div className='modal-body' onClick={(e) => e.stopPropagation()}>
        <Table
          theadList={tickerTableColumnList}
          dataList={tickerList}
          setDataState={setTickerList as SetterOrUpdater<TableRowList>}
        />
        {hasNextPage && <ShowMoreBtn fetchMore={fetchMore} />}
      </div>
    </div>
  );
};

export default Modal;
