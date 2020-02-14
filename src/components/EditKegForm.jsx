import React from 'react';

function EditKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='ABV'/>
        <input
          type='text'
          id='pintRemaining'
          placeholder='Pints Remaining'/>
        <button type='submit'>Save!</button>
      </form>
    </div>
  );
}

export default EditKegForm;
