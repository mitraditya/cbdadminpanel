import React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  BooleanField,
  List,
  BooleanInput,
  Create,
} from "react-admin";




const ReferralList = (props) => {
  return (
    <view title="Referral" {...props}>
      <SimpleForm>
        <BooleanInput source="referralEnabled" label="Referral Enabled?" />
        <NumberInput source="referralPercent" />
      </SimpleForm>
    </view>
  );
};

const ReferralEdit = (props) => {
  return (
    <Edit title="Referral" {...props}>
      <SimpleForm>
        <BooleanInput source="referralEnabled" label="Referral Enabled?" />
        <NumberInput source="referralPercent" />
      </SimpleForm>
    </Edit>
  );
};

const ReferralCreate = (props) => {
  return (
    <Create title="Referral" {...props}>
      <SimpleForm>
        <BooleanInput source="referralEnabled" label="Referral Enabled?" />
        <NumberInput source="referralPercent" />
      </SimpleForm>
    </Create>
  );
};

export { ReferralList, ReferralEdit, ReferralCreate };
