import React from 'react';

const SingleVendor = (props) => {
  return (
    <div className="single-vendor">
      <h3>{props.vendor.username}</h3>
      <p>{props.vendor.snapshot}</p>
      <p>Donate to their website: {props.vendor.website}.</p>
      <button onClick={() => props.showUpdateForm(props.vendor.id)}>EDIT</button>
      <button onClick={() => props.handleDelete(props.vendor.id)}>DELETE</button>
    </div>
  )
};

export default SingleVendor;
