import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from "react-admin";

const CashbackRatesList = (props) => {
  console.log(props);
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="title" />
        <NumberField source="commission" />
        <TextField source="store.name" label="Store" />
        <EditButton basePath="cashbackRates" />
        <DeleteButton basePath="cashbackRates" />
      </Datagrid>
    </List>
  );
};

export default CashbackRatesList;
