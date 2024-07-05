import React, { Component } from 'react'
import './index.css'
import { TiUpload } from "react-icons/ti";
import Delete from '@spectrum-icons/workflow/Delete'
import { TextArea,Switch,ComboBox,Heading,Breadcrumbs,Item,TabList,Tabs,TabPanels,Button,DialogTrigger,AlertDialog,FileTrigger,ActionButton,Divider,TextField} from '@adobe/react-spectrum'

export default class Airportdetails extends Component {
  render() {
    return (
      <div className='airport-details-page'>
        <Breadcrumbs>
        <Item href="/">Airports</Item>
        <Item href="/airport-details">Indira Gandhi International Airport</Item>
      </Breadcrumbs>
        <Heading level={2}>India Gandhi International Airport</Heading>
        <Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="Terminals">Terminals</Item>
    <Item key="Transport">Transport</Item>
    <Item key="Contact">Contact details</Item>
  </TabList>
  <TabPanels>
    <Item key="Terminals">
      <div className='cards-container'>
      <div className='terminal-card'>
        <img width='100px' src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1720141162/havahavaiterminalpic.jpg' alt='terminal pic' />
        <div className='card-right'>
          <div className='card-inside-top'>
            <Heading level={5}>Terminal 1</Heading>
            <Heading level={3}>...</Heading>
            </div>
          <p>Optional metadat for this assessment</p>
        </div>
      </div>
      <div className='terminal-card'>
        <img width='100px' src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1720141162/havahavaiterminalpic.jpg' alt='terminal pic' />
        <div className='card-right'>
          <div className='card-inside-top'>
            <Heading level={5}>Terminal 2</Heading>
            <Heading level={3}>...</Heading>
            </div>
          <p>Optional metadat for this assessment</p>
        </div>
      </div>
      <DialogTrigger>
  <Button>+ Add Terminal</Button>
  <AlertDialog
    variant="confirmation"
    title="Terminal title"
    primaryActionLabel="Continue"
    cancelLabel="Cancel"
    autoFocusButton="primary">
    Desctripton
    <br />
    <br />
    <FileTrigger acceptedFileTypes={['image/png']}>
  <Button variant="primary"><TiUpload /> upload image</Button>
</FileTrigger>
  </AlertDialog>
</DialogTrigger>
      </div>
      <Heading>Services</Heading>
      <div className='service-list'>
      <Heading level={5}>Lost & found</Heading>
      <ActionButton staticColor="black" isQuiet>
              <Delete />
            </ActionButton>
      </div>
      <Divider size="S" />
      <div className='service-input-container'>
        <div className='input-fields-container'>
        <TextField label="Service Name" defaultValue='Lost & found' width="size-2300"/>
        <ComboBox label="Category" defaultInputValue="Option 1">
          <Item key="opt1">Option 1</Item>
          <Item key="opt2">Option 2</Item>
          <Item key="opt3">Option 3</Item>
        </ComboBox>
        <ComboBox label="Sub Category" defaultInputValue="Option 1">
          <Item key="opt1">Option 1</Item>
          <Item key="opt2">Option 2</Item>
          <Item key="opt3">Option 3</Item>
        </ComboBox>
        <FileTrigger acceptedFileTypes={['image/png']}>
        <Button variant="primary"><TiUpload /> upload image</Button>
        </FileTrigger>
        <Switch aria-label="Low power mode">Show Image</Switch>
        <TextArea label="Description" width='1000' defaultValue='Type here' />
        </div>
        <Button 
              variant="primary"
              staticColor="black"
              style="fill">Save</Button>
      </div>
      <div className='service-list'>
      <Heading level={5}>Lounge</Heading>
      <ActionButton staticColor="black" isQuiet>
              <Delete />
            </ActionButton>
      </div>
     
      <Divider size="S" />
      <br />
      <div className='service-list'>
      <Heading level={5}>Money Exchange</Heading>
      <ActionButton staticColor="black" isQuiet>
              <Delete />
            </ActionButton>
      </div> 
      <Divider size="S" />
    </Item>
    <Item key="Transport">
      Empty
    </Item>
    <Item key="Contact">
      Empty
    </Item>
  </TabPanels>
</Tabs>
      </div>
    )
  }
}
