import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";

const PostbackLogEdit = (props) => {
  return (
    <Edit title="Edit Postback Log" {...props}>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <TextInput source="network_campaign_id" label="Network Campaign Id"/>
        <TextInput source="transaction_id" label="Transaction Id"/>
        <TextInput source="commission_id" label="Commission Id"/>
        <TextInput source="order_id" label="Order Id"/>
        <NumberInput source="sale_amount" />
        <NumberInput source="base_commission" />
        <TextInput source="currency" />
        <TextInput source="status" />
        <NumberInput source="aff_sub1" />
        <TextInput source="aff_sub2" />
        <TextInput source="aff_sub3" />
        <TextInput source="aff_sub4" />
        <TextInput source="aff_sub5" />
        <TextInput source="sale_id" label="Sale Id"/>
        <TextInput source="exception" />
      </SimpleForm>
    </Edit>
  );
};

export default PostbackLogEdit;
