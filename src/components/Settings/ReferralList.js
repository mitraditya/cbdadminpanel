import React from "react";
import {
  List,
  Datagrid,
  NumberField,
  EditButton,
  BooleanField,
} from "react-admin";

const ReferralList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <BooleanField source="referralEnabled" />
        <NumberField source="referralPercent" />
        <EditButton basePath="referral" />
      </Datagrid>
    </List>
  );
};

export default ReferralList;
