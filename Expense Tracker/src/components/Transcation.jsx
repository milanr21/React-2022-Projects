import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transcation = ({ transcation }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transcation.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={transcation.amount < 0 ? 'minus' : 'plus'}>
        {transcation.text}{' '}
        <span>
          {sign}${Math.abs(transcation.amount)}
        </span>{' '}
        <button
          onClick={() => deleteTransaction(transcation.id)}
          className='delete-btn'
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transcation;
