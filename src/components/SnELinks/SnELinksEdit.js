import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const SnELinksEdit = (props) => {
  return (
    <Edit title="Edit a SnE Link" {...props}>
        <SimpleForm>
            <TextInput source='user.email' label='User'/>
            <TextInput source='store.name' />
            <TextInput source='mainlink' label='Offer Link' />
            <TextInput source='shortlink' label='Link Code' />
            <NumberInput source='clicks' />
            <NumberInput source='earning' />
        </SimpleForm>
    </Edit>);
};

export default SnELinksEdit;
