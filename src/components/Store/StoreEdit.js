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
  required,
  AutocompleteArrayInput,
  FunctionField,
} from "react-admin";

import { ColorInput } from "react-admin-color-input";
import RichTextInput from "ra-input-rich-text";

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
    return categories;
  } catch (err) {
    console.log(err);
  }
};

const StoreEdit = (props) => {
  const [networks, setNetworks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  console.log(props);

  useEffect(() => {
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
        <Edit title="Edit a Store" {...props}>
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
            {/* <NumberInput source="visits" validate={required()} /> */}
            <RichTextInput source="terms" />
            <RichTextInput source="tips" />
            <TextInput source="h1" />
            <TextInput source="h2" />
            <TextInput source="description" />
            <FunctionField
              source="image"
              render={(record) => (
                <img
                  src={`${process.env.REACT_APP_BACKEND}/${record.image}`}
                  title="image"
                  alt=""
                  style={{ height: "300px" }}
                />
              )}
            />
            <ImageInput source="image" accept="image/*" validate={required()}>
              <ImageField source="image" title="Image" />
            </ImageInput>
            <TextInput
              source="network_campaign_id"
              label="Network Campaign Id"
            />
            <NumberInput source="coupon_count" />
            {/* <NumberInput source="clicks" /> */}
            <NumberInput source="payout_days" />
            <BooleanInput source="is_claimable" />
            <TextInput source="domain_name" />
            <TextInput source="apply_coupon" />
            <TextInput source="checkout_url" />
            <TextInput source="slug" validate={required()} />
            <TextInput source="status" validate={required()} />
            <ColorInput source="color1" validate={required()} />
            <ColorInput source="color2" validate={required()} />
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
