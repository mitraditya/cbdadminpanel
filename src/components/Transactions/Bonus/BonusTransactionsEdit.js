import React, { Fragment, useEffect, useState } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  AutocompleteInput,
} from "react-admin";
import getAllUsers from "../../../api/user";

const BonusTransactionsEdit = (props) => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const users = await getAllUsers();
      setUsers(users);
      setLoaded(true);
    }
    getData();
  }, []);

  return (
    <Fragment>
      {loaded && (
        <Edit title="Edit a Bonus Transaction" {...props}>
          <SimpleForm>
            <AutocompleteInput
              source="users"
              choices={users}
              optionText="email"
              optionValue="id"
            />
            <TextInput source="bonus_code" label="Bonus Type" />
            <NumberInput source="amount" />
            <DateInput source="awarded_on" />
            <DateInput source="expires_on" />
            <TextInput source="status" />
          </SimpleForm>
        </Edit>
      )}
    </Fragment>
  );
};

export default BonusTransactionsEdit;
