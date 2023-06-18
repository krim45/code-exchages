import { IExchange, ITableField } from 'utils/type';
import TableHead from 'components/table/TableHead';
import TableBodyRow from 'components/table/TableBodyRow';

interface ITableProps {
  theadList: any[];
  dataList: any[];
  setDataList: (dataList: any[]) => void;
  onClickRow?: (value: any) => void;
}

const Table: React.FC<ITableProps> = ({ theadList, dataList, setDataList, onClickRow }) => {
  return (
    <div className='table-wrapper'>
      <table id='exchange-table'>
        <TableHead theadList={theadList} dataList={dataList} setDataList={setDataList} />

        <tbody>
          {dataList.map((data) => {
            // const { trust_score_rank, id, name, image, trust_score, trade_volume_24h_btc: volume } = data;
            return (
              <TableBodyRow theadList={theadList} rowItem={data} onClickRow={onClickRow} key={data.id}>
                {/* <th>{trust_score_rank}</th>
                <th>
                  <div className='flex'>
                    <span>
                      <img src={image} alt={id} />
                    </span>
                    <span>{name}</span>
                  </div>
                </th>
                <th>
                  <meter min='0' max='10' value={trust_score} />
                  <span>{trust_score}</span>
                </th>
                <th>{volume.toFixed(2)}</th> */}
              </TableBodyRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
