import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import StoreList from './components/Store/StoreList';
import StoreCreate from './components/Store/StoreCreate'
import StoreEdit from './components/Store/StoreEdit'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="stores" list={StoreList} create={StoreCreate} edit={StoreEdit}/>
    </Admin>
  );
}

export default App;
