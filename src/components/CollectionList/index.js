import React from 'react';
import { Col, Row } from 'reactstrap';
import CardVertical from '../shared/CardVertical';
import './assets/styles.scss';

const list = [
  {
    id: 1,
    // author: 'Andrius',
    title: 'TITLE1',
    // price: 1000
  },
  {
    id: 2,
    // author: 'Andrius',
    title: 'TITLE2',
    // price: 1000
  },
  {
    id: 3,
    title: 'TITLE3',
    // price: 1000
  },
  {
    id: 4,
    // author: 'Andrius',
    title: 'TITLE4',
    // sold: true,
    // price: 1000
  },
  {
    id: 1,
    // author: 'Andrius',
    title: 'TITLE1',
    // price: 1000
  },
  {
    id: 2,
    // author: 'Andrius',
    title: 'TITLE2',
    // price: 1000
  },
  {
    id: 3,
    title: 'TITLE3',
    // price: 1000
  },
  {
    id: 4,
    // author: 'Andrius',
    title: 'TITLE4',
    // sold: true,
    // price: 1000
  },
  {
    id: 1,
    // author: 'Andrius',
    title: 'TITLE1',
    // price: 1000
  },
  {
    id: 2,
    // author: 'Andrius',
    title: 'TITLE2',
    // price: 1000
  },
  {
    id: 3,
    title: 'TITLE3',
    // price: 1000
  },
  {
    id: 4,
    // author: 'Andrius',
    title: 'TITLE4',
    // sold: true,
    // price: 1000
  },
  {
    id: 1,
    // author: 'Andrius',
    title: 'TITLE1',
    // price: 1000
  },
  {
    id: 2,
    // author: 'Andrius',
    title: 'TITLE2',
    // price: 1000
  },
  {
    id: 3,
    title: 'TITLE3',
    // price: 1000
  },
  {
    id: 4,
    // author: 'Andrius',
    title: 'TITLE4',
    // sold: true,
    // price: 1000
  },
  {
    id: 1,
    // author: 'Andrius',
    title: 'TITLE1',
    // price: 1000
  },
  {
    id: 2,
    // author: 'Andrius',
    title: 'TITLE2',
    // price: 1000
  },
  {
    id: 3,
    title: 'TITLE3',
    // price: 1000
  },
  {
    id: 4,
    // author: 'Andrius',
    title: 'TITLE4',
    // sold: true,
    // price: 1000
  }
]

function CollectionList() {
  return (
    <div className="list">
      {
          list.map((item, idx) => {
            return (
              <div className='list-item-wrapper'>
                <CardVertical data={item} key={idx} narrowBottom={true} />
              </div>
            )
          })
        }
    </div>
  )
}

export default CollectionList;
