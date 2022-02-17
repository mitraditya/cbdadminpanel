import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import StoreList from './components/Store/StoreList';
import StoreCreate from './components/Store/StoreCreate'
import StoreEdit from './components/Store/StoreEdit'
import NetworkList from './components/Network/NetworkList';
import NetworkCreate from './components/Network/NetworkCreate'
import NetworkEdit from './components/Network/NetworkEdit'
import Dashboard from './components/Dashboard';
import authProvider from './components/Auth/authProvider';
import LoginPage from './components/Auth/LoginPage';

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
      <Resource name="networks" list={NetworkList} create={NetworkCreate} edit={NetworkEdit}/>
    </Admin>
  );
}

export default App;
