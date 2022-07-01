//================================< LIBRARIES >================================
import React, { useState } from 'react'

//================================< SERVICES >================================
import { addItem } from '../../services';

//================================< TYPES >================================
import Data from './type';

//================================< COMPONENTS >================================
import { ModalWindow }from '../Modal';

import { Card } from '../Card';

  
  export const CardProduct: React.FC<Data> = ({ cost, title, img }) => {
    const [ toggle, setToggle ] = useState<boolean>(false);
    
    const toggleFlag = (bool: boolean) => {
      setToggle(bool)
    }

    return (
      <div>
          <Card
            func={addItem}
            text={'add to the basket'}
            data={{cost, title, img }}
          />
          <button onClick={() => toggleFlag(true)}>get info about this card</button>
          {
            toggle ? <ModalWindow img={img} title={title} cost={cost} toggle={toggleFlag}/> : null
          }
      </div>
    )
  }