import React from "react";
import { Edit, SimpleForm, NumberInput, BooleanInput } from "react-admin";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

const ReferralEdit = (props) => {
  return (
    <Card>
      <Title title="My Page" />
      <CardContent>
        <Edit title="Edit Referral" {...props}>
          <SimpleForm>
            <BooleanInput source="referralEnabled" />
            <NumberInput source="referralPercent" />
          </SimpleForm>
        </Edit>
      </CardContent>
    </Card>
  );
};

export default ReferralEdit;
