import React, { useEffect } from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
} from "react-admin";

const StoreEarningList = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="name" label="Name" />
        
        <TextField source="sales" />
        <TextField source="commission" />
      </Datagrid>
    </List>
  );
};

export default StoreEarningList;
