import React, { Fragment, useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  AutocompleteInput,
  BooleanInput,
} from "react-admin";

const choices = [
  { id: "fixed", name: "FIXED" },
  { id: "percent", name: "PERCENT" },
];
const getStores = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/stores/`, {
      headers: {
        Authorization: token,
      },
    });
    const stores = await res.json();
    console.log(stores);
    return stores;
  } catch (err) {
    console.log(err);
  }
};

const CashbackRatesCreate = (props) => {
  const [stores, setStores] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("USe Effect ran");
    const load = async () => {
      const stores = await getStores();
      setStores(stores);
      setLoaded(true);
    };
    load();
  }, []);
  return (
    <Fragment>
      {loaded && (
        <Create title="Create a Cashback Rate" {...props}>
          <SimpleForm>
            <TextInput source="title" />
            <AutocompleteInput
              source="amount_type"
              choices={choices}
              optionText="name"
              optionValue="id"
            />
            <NumberInput source="commission" />
            <BooleanInput source="manual" />
            <BooleanInput source="enabled" />
            <AutocompleteInput
              source="store_id"
              choices={stores}
              optionText="name"
              optionValue="id"
            />
          </SimpleForm>
        </Create>
      )}
    </Fragment>
  );
};

export default CashbackRatesCreate;
