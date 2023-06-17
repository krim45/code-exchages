import { RecoilRoot } from 'recoil';
import Table from 'components/Table';
import 'App.css';

function App() {
  return (
    <div className='App'>
      <Table />
    </div>
  );
}

const Root = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

export default Root;
