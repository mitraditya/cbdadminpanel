import React from 'react';
import { Edit, SimpleForm, TextInput } from "react-admin";

const NotifEdit = (props) => {
  return (
    <Edit title="Edit a Notfication" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="desc" />
        </SimpleForm>
    </Edit>
  );
};

export default NotifEdit;
