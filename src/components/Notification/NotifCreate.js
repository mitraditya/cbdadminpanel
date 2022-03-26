import React, { useState, useEffect } from "react";
import { Create, SimpleForm, TextInput, AutocompleteInput } from "react-admin";
import { getStores } from "../../api/store";

const NotifCreate = (props) => {
  const [stores, setStores] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const stores = await getStores();
      setStores(stores);
      setLoaded(true);
    }
    getData();
  }, []);
  return (
    <>
      {loaded && (
        <Create title="Create a Notfication" {...props}>
          <SimpleForm>
            <TextInput source="title" />
            <TextInput source="desc" />
            <TextInput source="link" />
            <AutocompleteInput
              source="store"
              choices={stores}
              optionText="name"
              optionValue="id"
            />
          </SimpleForm>
        </Create>
      )}
    </>
  );
};

export default NotifCreate;
