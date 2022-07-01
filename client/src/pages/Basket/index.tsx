//================================< LIBRARIES >================================
import React from 'react';

//================================< SERVICES >================================
import { deleteItem } from '../../services';

//================================< TYPES >================================
import BasketType from './type';

import { Card } from '../../components';

export const Basket: React.FC<BasketType> = ({ data }) => {
    return (
    <>
      {
        data.length > 0 ? 
        <>
        {
          data.map(({ id, img, title, cost }) => {
            return (
              <Card key={id} data={{ id, img, title, cost }} func={deleteItem} text={'delete'}/>
            )
          })
        }
        </> : null    
      }
    </>
    )
  }