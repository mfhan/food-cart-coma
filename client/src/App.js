//import React, { useState } from 'react';
import React, {Component} from 'react';
import {
  Route, Switch
} from 'react-router-dom';
import ReactMapGl from 'react-map-gl';
import VendorList from './components/VendorList'
import NewVendorForm from './components/NewVendorForm'
import UpdateVendorForm from './components/UpdateVendorForm'
import Map from './components/Map'

import { showVendors, createVendor,  updateVendor, destroyVendor } from './services/api-helper';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      form: {
        username: '',
        lat: '',
        long: '',
        website: ''
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      }
    }));
  }

  showUpdateForm = (id) => {
    const vendor = this.state.vendors.find((comp) => comp.id === id);
    const { username, website, lat, long } = vendor;
    this.setState({
      form: {
        id,
        username,
        lat,
        long,
        website
      }
    });

  }

  getVendors = async () => {
    const vendors = await showVendors()
    this.setState({ vendors })
  }

  postVendor = async (e) => {
    e.preventDefault();
    const data = this.state.form;
    const newVendor = await createVendor()
    this.setState((prevState) => ({
      vendors: [...prevState.vendors, newVendor]
    }));
  }

  updateVendor = async (e) => {
    e.preventDefault();
    const { id, ...data } = this.state.form;
    const vendor = await updateVendor(data, id)
    // call the updateComposer fn()
    // and pass it the necessary data
    this.setState((prevState) => ({
      vendors: [...prevState.vendors.filter((comp) => comp.id !== id), vendor],
      form: {
        username: '',
        lat: '',
        long:'',
        website:''
      }
    }));
  }

  destroyVendor = async (id) => {
    // call the destroyComposer fn()
    // and pass it the necessary data
    this.setState((prevState) => ({
      vendors: [...prevState.vendors.filter((vendor) => vendor.id !== id)]
    }));
  }

  componentDidMount() {
    console.log('Hey guys, componentDidMount!')
    this.getVendors()

  }

  render() {
    return (
      <div className="App">

        <h1>Add your Favorite Street Cart</h1>
        <Switch>
          <Route exact path='/' render={(props) => (
            <>
            
              <NewVendorForm
                 form={this.state.form}
                 handleChange={this.handleChange}
                 handleSubmit={this.postVendor}
               />
               <VendorList
                 {...props}
                 vendors={this.state.vendors}
                 handleDelete={this.destroyVendor}
                 showUpdateForm={this.showUpdateForm}
               />
           </>
         )} />
           <Route path='/edit/:id' render={(props) => {
             return (
               <UpdateVendorForm
                 {...props}
                 form={this.state.form}
                 handleChange={this.handleChange}
                 handleSubmit={this.updateVendor}
               />
             )
           }} />
        </Switch>
      </div>
    );
  }
}

export default App;


// MAP should be inserted right above <NewVendorForm
//
//   <Map />
//   <NewVendorForm
//      form={this.state.form}
//      handleChange={this.handleChange}
//      handleSubmit={this.postVendor}
//    />
