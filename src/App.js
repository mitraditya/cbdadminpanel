import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import Dashboard from './components/Dashboard';
import authProvider from './components/Auth/authProvider';
import LoginPage from './components/Auth/LoginPage';
import StoreList from './components/Store/StoreList';
import StoreCreate from './components/Store/StoreCreate'
import StoreEdit from './components/Store/StoreEdit'
import NetworkList from './components/Network/NetworkList';
import NetworkCreate from './components/Network/NetworkCreate'
import NetworkEdit from './components/Network/NetworkEdit'
import PostbackLogList from './components/PostbackLog/PostbackLogList';
import PostbackLogEdit from './components/PostbackLog/PostbackLogEdit'
import MockTransactionsList from './components/Transactions/Mock/MockTransactionsList';
import MockTransactionsCreate from './components/Transactions/Mock/MockTransactionsCreate';
import MockTransactionsEdit from './components/Transactions/Mock/MockTransactionsEdit';
import SalesTransactionsList from './components/Transactions/Sales/SalesTransactionsList';
import SalesTransactionsCreate from './components/Transactions/Sales/SalesTransactionsCreate';
import SalesTransactionsEdit from './components/Transactions/Sales/SalesTransactionsEdit';
import CashbackTransactionsList from './components/Transactions/Cashback/CashbackTransactionsList';
import CashbackTransactionsCreate from './components/Transactions/Cashback/CashbackTransactionsCreate';
import CashbackTransactionsEdit from './components/Transactions/Cashback/CashbackTransactionsEdit';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = restProvider(process.env.REACT_APP_BACKEND, httpClient);

function App() {
  return (
    <Admin loginPage={LoginPage} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="stores" list={StoreList} create={StoreCreate} edit={StoreEdit}/>
      <Resource name="networks" options={{ label: 'Affiliate Networks' }} list={NetworkList} create={NetworkCreate} edit={NetworkEdit}/>
      <Resource name="logs" options={{ label: 'Postback Logs' }} list={PostbackLogList} edit={PostbackLogEdit}/>
      <Resource name="txn/mock" options={{ label: 'Mock Transactions' }} list={MockTransactionsList} create={MockTransactionsCreate} edit={MockTransactionsEdit} />
      <Resource name="txn/sales" options={{ label: 'Sales Transactions' }} list={SalesTransactionsList} create={SalesTransactionsCreate} edit={SalesTransactionsEdit} />
      <Resource name="txn/cashback" options={{ label: 'Cashback Transactions' }} list={CashbackTransactionsList} create={CashbackTransactionsCreate} edit={CashbackTransactionsEdit} />
      {/* <Resource name="txn/bonus" options={{ label: 'Bonus Transactions' }} list={BonusTransactionsList} />
      <Resource name="txn/referrer" options={{ label: 'Referrer Transactions' }} list={ReferrerTransactionsList} /> */}
    </Admin>
  );
}

export default App;
