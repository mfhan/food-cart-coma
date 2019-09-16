import React from 'react';
import SingleVendor from './SingleVendor';

const VendorList = (props) => {
  return (
    <>
      { props.vendors.map((vendor) => {
        return (
          <SingleVendor
            key={vendor.id}
            vendor={vendor}
            showUpdateForm={props.showUpdateForm}
            handleDelete={props.handleDelete}
          />
        )
      }) }
    </>
  )
};

export default VendorList;
