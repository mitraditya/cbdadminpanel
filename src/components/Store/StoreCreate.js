import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const StoreCreate = (props) => {
  return (
    <Create title='Create a Store' {...props}>
      <SimpleForm>
        <TextInput source='store' />
        <TextInput multiline source='homepage' />
        <TextInput multiline source='affiliateLink' />
        <TextInput multiline source='network' />
      </SimpleForm>
    </Create>
  )
}

export default StoreCreate