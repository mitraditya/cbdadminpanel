import React, { Fragment } from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, BulkDeleteButton, Button } from "react-admin";

const PayoutBulkActionsButton = (props) => {
  const updatePayouts = async () => {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    const bulktransfer = await fetch(`${process.env.REACT_APP_BACKEND}/payoutrequests/bulktransfer/`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      "method": "POST",
      body: JSON.stringify({ids: props.selectedIds})
    })

    const bulktransferData = await bulktransfer.json();
    console.log(bulktransferData);
  }
  return (
    <Fragment>
      <Button color='primary' label={'Process/Update Payout'} {...props} onClick={() => updatePayouts()} />
      <BulkDeleteButton {...props} />
    </Fragment>
  )
}

const PayoutRequestsList = (props) => {
  return <List bulkActionButtons={<PayoutBulkActionsButton />} {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='user_id.email' label='User'/>
        <TextField source='payment_mode.method_code' label='Method' />
        <NumberField source='cashback_amount' />
        <TextField source='status' />
        <TextField source='payment_ref_num' />
        <TextField source='paid_at' />
        <TextField source='updated_at' />
        <EditButton basePath='payoutrequests' />
        <DeleteButton basePath='payoutrequests' />
    </Datagrid>
  </List>;
};

export default PayoutRequestsList;
