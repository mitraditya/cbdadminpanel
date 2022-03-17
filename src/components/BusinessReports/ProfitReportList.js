import React, { useEffect } from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
} from "react-admin";

const ProfitReportList = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="header"/>
        <TextField source="pending"/>
        <TextField source="confirmed" />
        <TextField source="delayed" />
        <TextField source="declined" />
        <TextField source="total" />
      </Datagrid>
    </List>
  );
};

export default ProfitReportList;
