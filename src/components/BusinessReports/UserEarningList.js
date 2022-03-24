import React, { useEffect } from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

const UserEarningList = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="email" label="User" />
        <TextField source="earning" />
        <DateField source="user_registered" />
      </Datagrid>
    </List>
  );
};

export default UserEarningList;
