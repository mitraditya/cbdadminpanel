import React, { useEffect, useState } from "react";
import { Edit, SimpleForm, TextInput, AutocompleteInput } from "react-admin";
import { getStores } from "../../api/store";

const NotifEdit = (props) => {
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
        <Edit title="Edit a Notfication" {...props}>
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
        </Edit>
      )}
    </>
  );
};

export default NotifEdit;
