import React from 'react';
import { Create, SimpleForm, TextInput } from "react-admin";

const NotifCreate = (props) => {
  return (
    <Create title="Create a Notfication" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="desc" />
        </SimpleForm>
    </Create>
  );
};

export default NotifCreate;
