import React, { useContext } from 'react';
import Transcation from './Transcation';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transcations } = useContext(GlobalContext);

  return (
    <div className='tran-list'>
      <h3>History</h3>
      <ul className='list'>
        {transcations.map((transcation) => (
          <Transcation key={transcation.id} transcation={transcation} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
