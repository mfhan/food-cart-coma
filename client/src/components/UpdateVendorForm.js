import React from 'react';
import { Redirect } from 'react-router-dom';

//props.form.name
//props.composer.name
const UpdateVendorForm = (props) => {
  if (!props.form.id) {
    return <Redirect to="/" />
  }
  return (
    <>
      <h2>Update Your Data</h2>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          name="username"
          value={props.form.username}
          onChange={props.handleChange}
        />
        <label htmlFor="lat">Latitude:</label>
        <input
          type="number"
          name="lat"
          value={props.form.lat}
          onChange={props.handleChange}
        />
        <label htmlFor="long">Longitude:</label>
        <input
          type="number"
          name="long"
          value={props.form.long}
          onChange={props.handleChange}
        />
        <label htmlFor="website">website:</label>
        <input
          type="text"
          name="website"
          value={props.form.website}
          onChange={props.handleChange}
        />
        <button type="submit">Submit!</button>
      </form>
    </>
  )
}

export default UpdateVendorForm;
