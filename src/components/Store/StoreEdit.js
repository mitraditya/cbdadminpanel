import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const StoreEdit = (props) => {
  return (
    <Edit title='Edit Store' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='store' />
        <TextInput multiline source='homepage' />
        <TextInput multiline source='affiliateLink' />
        <TextInput multiline source='network' />
      </SimpleForm>
    </Edit>
  )
}

export default StoreEdit