import React from 'react'
import { TableHeader, ItemHeader } from './styled'

export const TableHead = ({
  columns,
  numberRows
}) => {
  return (
    <TableHeader numberRows={numberRows}>
      {columns.map(element => 
        <ItemHeader key={element.id}>
          {element.label}
        </ItemHeader>
      )}
    </TableHeader>
  )  
}