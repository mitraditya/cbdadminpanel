import React, { Fragment, useEffect, useState } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  AutocompleteInput,
  DateInput,
  AutocompleteArrayInput,
} from "react-admin";

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

const getNetworks = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/networks/`, {
      headers: {
        Authorization: token,
      },
    });
    const networks = await res.json();
    console.log(networks);
    return networks;
  } catch (err) {
    console.log(err);
  }
};

const getCategories = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND}/coupon/couponcategory`,
      {
        headers: { Authorization: token },
      }
    );
    const categories = await res.json();
    console.log(categories);
    return categories;
  } catch (err) {
    console.log(err);
  }
};

const CouponCategoryEdit = (props) => {
  const [networks, setNetworks] = useState([]);
  const [stores, setStores] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("USe Effect ran");
    const load = async () => {
      const networks = await getNetworks();
      setNetworks(networks);
      const stores = await getStores();
      setStores(stores);
      const categories = await getCategories();
      setCategories(categories);
      setLoaded(true);
    };
    load();
  }, []);
  return (
    <Fragment>
      {loaded && (
        <Edit title="Edit a Coupon" {...props}>
          <SimpleForm>
            <TextInput source="discount" />
            <TextInput source="coupon_code" />
            <TextInput source="link" />
            <BooleanInput source="is_affiliate_link" />
            <DateInput source="expiry_date" />
            <AutocompleteInput
              source="store_id"
              choices={stores}
              optionText="name"
              optionValue="id"
            />
            <AutocompleteInput
              source="network_id"
              choices={networks}
              optionText="name"
              optionValue="id"
            />
            <AutocompleteArrayInput
              source="categories"
              choices={categories}
              optionText="h1"
              optionValue="id"
            />
            <BooleanInput source="featured" />
            <TextInput source="network_coupon_id" label="Network Coupon Id" />
            <NumberInput source="clicks" />
          </SimpleForm>
        </Edit>
      )}
    </Fragment>
  );
};

export default CouponCategoryEdit;
