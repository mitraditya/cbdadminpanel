import React, { Fragment, useEffect, useState } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  AutocompleteInput,
  ImageField,
  ImageInput,
  AutocompleteArrayInput,
} from "react-admin";

const choices = [
  { id: "Cashback", name: "Cashback" },
  { id: "Reward", name: "Reward" },
];

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

const StoreEdit = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("USe Effect ran");
    const load = async () => {
      const categories = await getCategories();
      setCategories(categories);
      setLoaded(true);
    };
    load();
  }, []);
  return (
    <Fragment>
      {loaded && (
        <Edit title="Edit Store" {...props}>
          <SimpleForm>
            <NumberInput disabled source="id" />
            <TextInput source="name" />
            <TextInput multiline source="homepage" />
            <TextInput multiline source="affiliate_link" />
            <TextInput source="network_id.name" label="Network Id" />
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
            <NumberInput source="visits" />
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
            <TextInput source="slug" />
            <TextInput source="status" />
            <TextInput source="color1" />
            <TextInput source="color2" />
            <AutocompleteArrayInput
              source="categories" 
              choices={categories}
              optionText="name"
              optionValue="id"
            />
          </SimpleForm>
        </Edit>
      )}
    </Fragment>
  );
};

export default StoreEdit;
