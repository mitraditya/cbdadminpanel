import React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  BooleanInput,
} from "react-admin";

const Referral = (props) => {
  return (
    <Edit title="Edit Referral" {...props}>
      <SimpleForm>
        <BooleanInput source="referralEnabled" />
        <NumberInput source="referralPercent" />
      </SimpleForm>
    </Edit>
  );
};

export default Referral;
