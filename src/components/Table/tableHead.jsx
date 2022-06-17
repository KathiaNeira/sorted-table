import React, { useState } from 'react'
import { IconArrow } from '@components'
import { TableHeader, ItemHeader, ArrowWrapper } from './styled'

export const TableHead = ({
  columns,
  handleOrder
}) => {
  const [order, setOrder] = useState('asc')  
  const [selected, setSelected] = useState(null)

  const handleClick = (id, index) => {
    setOrder(order === 'asc' ? 'desc' : 'asc')
    setSelected(index)
    handleOrder(id, order)
  }

  return (
    <TableHeader numberRows={columns.length}>
      {columns.map((element, index) => 
        <ItemHeader key={element.id}>
          {element.label}
          {element.order && 
            <ArrowWrapper >
              <IconArrow
                onClick={() => handleClick(element.id, index)} selected={selected === index && 'selected'}
              />
            </ArrowWrapper>
          }
        </ItemHeader>
      )}
    </TableHeader>
  )  
}