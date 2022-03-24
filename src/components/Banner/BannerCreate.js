import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  AutocompleteInput,
} from "react-admin";
import { getStores } from "../../api/store";

const BannerCreate = (props) => {
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
        <Create title="Create a Banner" {...props}>
          <SimpleForm>
            <TextInput source="link" />
            <ImageInput source="image" accept="image/*">
              <ImageField source="image" title="Image" />
            </ImageInput>
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

export default BannerCreate;
