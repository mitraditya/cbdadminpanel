import React from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin";

const ClicksHistoryEdit = (props) => {
  return (
    <Edit title="Edit a Click" {...props}>
        <SimpleForm>
            <TextInput source='store' />
            <TextInput source='user' />
            <BooleanInput source='store.cashback_enabled' label='Cashback Enabled' />
            <TextInput source='network' />
        </SimpleForm>
    </Edit>);
};

export default ClicksHistoryEdit;
