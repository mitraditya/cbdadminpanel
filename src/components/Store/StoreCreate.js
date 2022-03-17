import React, { Fragment, useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  AutocompleteInput,
  ImageField,
  ImageInput,
  required,
  AutocompleteArrayInput,
} from "react-admin";

const choices = [
  { id: "Cashback", name: "Cashback" },
  { id: "Reward", name: "Reward" },
];

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
      `${process.env.REACT_APP_BACKEND}/stores/category`,
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

const StoreCreate = (props) => {
  const [networks, setNetworks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("USe Effect ran");
    const load = async () => {
      const networks = await getNetworks();
      setNetworks(networks);
      const categories = await getCategories();
      setCategories(categories);
      setLoaded(true);
    };
    load();
  }, []);
  return (
    <Fragment>
      {loaded && (
        <Create title="Create a Store" {...props}>
          <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput multiline source="homepage" validate={required()} />
            <TextInput
              multiline
              source="affiliate_link"
              validate={required()}
            />
            <AutocompleteInput
              source="network_id"
              choices={networks}
              optionText="name"
              optionValue="id"
            />
            <BooleanInput label="Featured" source="featured" />
            <BooleanInput label="Cashback Enabled" source="cashback_enabled" />
            <NumberInput source="cashback_percent" />
            <NumberInput source="cashback" />
            <AutocompleteInput
              source="cashback_type"
              choices={choices}
              optionText="name"
              optionValue="id"
            />
            <TextInput source="amount_type" />
            <TextInput source="rate_type" />
            <TextInput source="cashback_was" />
            <TextInput source="tracking_speed" />
            <NumberInput source="visits" validate={required()} />
            <TextInput source="terms" />
            <TextInput source="tips" />
            <TextInput source="h1" />
            <TextInput source="h2" />
            <TextInput source="description" />
            <ImageInput source="image" accept="image/*">
              <ImageField source="image" title="Image" />
            </ImageInput>
            <TextInput
              source="network_campaign_id"
              label="Network Campaign Id"
            />
            <NumberInput source="coupon_count" />
            <NumberInput source="clicks" />
            <NumberInput source="payout_days" />
            <BooleanInput source="is_claimable" />
            <TextInput source="domain_name" />
            <TextInput source="apply_coupon" />
            <TextInput source="checkout_url" />
            <TextInput source="slug" validate={required()} />
            <TextInput source="status" validate={required()} />
            <TextInput source="color1" />
            <TextInput source="color2" />
            <AutocompleteArrayInput
              source="categories"
              choices={categories}
              optionText="name"
              optionValue="id"
            />
          </SimpleForm>
        </Create>
      )}
    </Fragment>
  );
};

export default StoreCreate;
