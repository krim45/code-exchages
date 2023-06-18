import { RecoilRoot } from 'recoil';
import 'App.css';
import ExchangeTable from 'pages/ExchangeTable';

function App() {
  return (
    <div className='App'>
      <ExchangeTable />
    </div>
  );
}

const Root = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

export default Root;
