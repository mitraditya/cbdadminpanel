import { Box, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { List, Datagrid, TextField, NumberField, DateField, EditButton, DeleteButton, TopToolbar, Button, CreateButton, ExportButton } from "react-admin";

const MockTransactionsList = (props) => {

  const MockTxnActions = ({ basePath, data, resource }) => {
    const [modalOpen, setmodalOpen] = useState(false)
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      borderRadius: 10,
      boxShadow: 24,
      p: 4,
    };

    const fileUpload = React.useRef(null)

    const handlFileUpload = async (event) => {
      const files = event.target.files
      const formData = new FormData();
      const { token } = JSON.parse(localStorage.getItem("auth"));
      formData.append('csv', files[0]);
      console.log(formData);
      await fetch(`${process.env.REACT_APP_BACKEND}/txn/mockUpload/`, {
        headers: {
          'Authorization': token,
        },
        method: "POST",
        body: formData,
      })
    }

    const handleLibUploadOpen = () => {
      fileUpload.current.click()
    }
    
    const handleMockMigrateTxns = () => {
      const { token } = JSON.parse(localStorage.getItem("auth"));
      fetch(`${process.env.REACT_APP_BACKEND}/txn/mockmigratetxns/`, {
        headers: {
          'Authorization': token,
        },
        method: "POST",
      })
    }

    return (
      <>
        <Modal open={modalOpen}
          onClose={() => { setmodalOpen(!modalOpen) }}
          aria-labelledby="modal-csv-upload"
          aria-describedby="modal-modal-csv-upload">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2" style={{ textAlign: 'center' }}>
              Upload csv file
            </Typography>
            <hr />
            <br />
            <div style={{alignItems: 'center', alignContent: 'center'}}>
              <Typography id="modal-body" variant={'subtitle1'} component="h6" style={{ textAlign: 'center' }}>
                {'Dates are to be entered in dd-mm-yyyy format.\n'}
              </Typography>
              <Typography id="modal-body" variant={'subtitle1'} component="h6" style={{ textAlign: 'center' }}>
                {'Please make sure your CSV file format field column same as database fields. Please download the template below:'}
              </Typography>
              <Button
                style={{ width: '100%', marginTop: '20px', color: '#FFFFFF',backgroundColor: '#3F51B5' }}
                size="large"
                label='Click to upload .csv'
                onClick={() => { handleLibUploadOpen() }}>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  multiple={false}
                  accept="text/csv"
                  ref={fileUpload}
                  onChange={handlFileUpload} />
              </Button>
            </div>
          </Box>
        </Modal>
        <TopToolbar>
          <CreateButton />
          <ExportButton />
          <Button color='primary' onClick={() => setmodalOpen(!modalOpen)} label={'Upload'} />
          <Button color='primary' onClick={() => handleMockMigrateTxns()} label={'MockTransfer Update'} />
        </TopToolbar>
      </>
    )
  }

  return <List actions={<MockTxnActions />} {...props}>
    <Datagrid rowClick="edit">
      <NumberField source='id' />
      <TextField source='network_id.name' label='Network' />
      <DateField source='sale_date' />
      <NumberField source='sale_amount' />
      <NumberField source='base_commission' />
      <TextField source='status' />
      <NumberField source='aff_sub1' />
      <DateField source='updated_at' />
      <EditButton basePath='mock' />
      <DeleteButton basePath='mock' />
    </Datagrid>
  </List>;
};

export default MockTransactionsList;
