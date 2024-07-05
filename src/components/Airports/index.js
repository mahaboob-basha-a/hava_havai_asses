import React, { Component } from 'react'
import {Cell, Column, Row, TableView, TableBody, TableHeader,Button,ActionButton,Heading,DialogTrigger,Dialog,Content,ButtonGroup,Form} from '@adobe/react-spectrum'
import Edit from '@spectrum-icons/workflow/Edit'
import Delete from '@spectrum-icons/workflow/Delete'
import { FaArrowDownLong } from "react-icons/fa6";
import {v4 as uuidv4} from 'uuid'
import './index.css'

let airportData = [
    {
        id:uuidv4(),
        airport:'Indra Gandhi International Airport',
        country:'India',
        code:'DEL',
        terminals:3
    },
    {
        id:uuidv4(),
        airport:'Dubai International Airport',
        country:'UAE',
        code:'DXB',
        terminals:5
    },
    {
        id:uuidv4(),
        airport:'Heathrow Airport',
        country:'England',
        code:'LHR',
        terminals:6
    },
    {
        id:uuidv4(),
        airport:'Istanbul Airport',
        country:'Turkey',
        code:'IST',
        terminals:3
    },
    {
        id:uuidv4(),
        airport:'Rajiv Gandhi International Airport',
        country:'Texas',
        code:'DFW',
        terminals:14
    },
]
class Airports extends Component {
  state = {airportItems:airportData,itemData:{airport:'',country:'',code:'',terminals:''},isEdit:false}
  onInputChanging = (e)=>{
    this.setState(prev=> ({itemData:{...prev.itemData,[e.target.name]:e.target.value}}))
  }
  onEditChanging = (e)=>{
    this.setState(prev=> ({itemData:{...prev.itemData,[e.target.name]:e.target.value}}))
  }

  onAddClick = (evnt)=>{
    const {airport,country,code,terminals} = this.state.itemData
    const newItemdata = {
      id:uuidv4(),
      airport,country,code,terminals
    }
    if (airport !== '' && country !== '' && code !== '' && terminals !== ''){
      this.setState(prev=>({airportItems:[...prev.airportItems,newItemdata],itemData:{airport:'',country:'',code:'',terminals:''}}))
      evnt()
    }
  }

  onUpadate = (id,evnt)=>{
    const {airportItems,itemData} = this.state
    const {airport,country,code,terminals} = itemData
    if (airport !== '' && country !== '' && code !== '' && terminals !== ''){
      const edited = airportItems.map(item=>{
        if (item.id === id){
          return {id,airport,country,code,terminals}
        }else{
          return item
        }
      })
      this.setState({airportItems:edited,itemData:{airport:'',country:'',code:'',terminals:''}},evnt())
    }
  }

  onDeleteClick = (id)=>{
    const {airportItems} = this.state
    const deletedItems = airportItems.filter(item=>{
      return item.id !== id
    })
    this.setState({airportItems:deletedItems})
  }
  render() {
    const {airportItems,itemData} = this.state
    const {airport,country,code,terminals} = itemData
    return (
      
      <div className='airports-page'>
        <div className='airports-page-topbar'>
        <Heading level={4}>Airports</Heading>
        <DialogTrigger>
          {/* eslint-disable-next-line */}
          <Button staticColor="black" style={'fill'} variant="primary">+ Add new</Button>
        {(close) => (
          <Dialog>
            <Heading>Add New</Heading>
            <Content>
            <Form maxWidth="size-3600">
              <label htmlFor='airport'>Airport</label><br/>
              <input required type='text' name='airport' onChange={this.onInputChanging} value={airport} />
              <label htmlFor='country'>Country</label><br/>
              <input required type='text' name='country' onChange={this.onInputChanging} value={country} />
              <label htmlFor='code'>Code</label><br/>
              <input required type='text' name='code' onChange={this.onInputChanging} value={code} />
              <label  htmlFor='terminals'>Terminals</label><br/>
              <input required type='text' name='terminals' onChange={this.onInputChanging} value={terminals} />
            </Form>
            </Content>
            <ButtonGroup>
              <Button variant="secondary" onPress={close}>Cancel</Button>
              <Button variant="accent" onPress={()=> this.onAddClick(close)} autoFocus>Add</Button>
            </ButtonGroup>
          </Dialog>
        )}
    </DialogTrigger>
        </div>
        <div className='table-container'>
        <TableView
        width="1050px"
  aria-label="Example table with static contents"
  selectionMode="multiple"
>
  <TableHeader>
    <Column key='airport' align='start' width={700}>All Airports <FaArrowDownLong /></Column>
    <Column key='country' align='end' width={110}>Country</Column>
    <Column key='code' align='end' width={100}>Code</Column>
    <Column key='terminals' align="end" width={100}>Terminals</Column>
  </TableHeader>
  <TableBody items={airportItems}>
    {(item)=> (
      <Row href='/airport-details' key={item.id}>
        {(columnKey)=>{
            return <Cell>{item[columnKey]}</Cell>
        }}
      </Row>
    )}
  </TableBody>
</TableView>
<ul className='table-ul'>
  {airportItems.map(item=>{
    const {id} = item
    return <li key={id}>
            <DialogTrigger>
            <ActionButton staticColor="black" isQuiet>
              <Edit />
            </ActionButton>
        {(close) => (
          <Dialog>
            <Heading>Edit Now</Heading>
            <Content>
            <Form maxWidth="size-3600">
              <label htmlFor='airport'>Airport</label><br/>
              <input required type='text' name='airport' onChange={this.onEditChanging} value={airport} />
              <label htmlFor='country'>Country</label><br/>
              <input required type='text' name='country' onChange={this.onEditChanging} value={country} />
              <label htmlFor='code'>Code</label><br/>
              <input required type='text' name='code' onChange={this.onEditChanging} value={code} />
              <label  htmlFor='terminals'>Terminals</label><br/>
              <input required type='text' name='terminals' onChange={this.onEditChanging} value={terminals} />
            </Form>
            </Content>
            <ButtonGroup>
              <Button variant="secondary" onPress={close}>Cancel</Button>
              <Button variant="accent" onPress={()=> this.onUpadate(id,close)}>Edit</Button>
            </ButtonGroup>
          </Dialog>
        )}
    </DialogTrigger>
                <ActionButton onPress={()=> this.onDeleteClick(id)} staticColor="black" isQuiet>
              <Delete />
            </ActionButton>
          </li>
  })}
</ul>
</div>
      </div>
    )
  }
}
export default Airports