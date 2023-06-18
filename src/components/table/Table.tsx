import { ITableProps } from 'utils/type';
import TableHead from 'components/table/TableHead';
import TableRow from 'components/table/TableRow';

const Table: React.FC<ITableProps> = ({ theadList, dataList, setDataState, onClickRow }) => {
  return (
    <div className='table-wrapper'>
      <table id='exchange-table'>
        <TableHead theadList={theadList} dataList={dataList} setDataState={setDataState} />

        <tbody>
          {dataList.map((data) => (
            <TableRow theadList={theadList} rowItem={data} onClickRow={onClickRow} key={data.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
