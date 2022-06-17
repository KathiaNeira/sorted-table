import React, { useState } from 'react'
import { Table, TableHead } from '@components'
import db from './config/data.json'
import { Wrapper } from './styled'

export const App = () => {
  const [tableData, setTableData] = useState(db.data)
  const handleOrder = (id, order) => {
    const sorted = [...tableData].sort((a, b) => a[id].toString().localeCompare(b[id].toString(), 'en', {
      numeric: true,
    }) * (order === 'asc' ? 1 : -1))
    setTableData(sorted)
  }

  return (
    <Wrapper>
      <Table>
        <TableHead
          columns={db.columns}
          handleOrder={handleOrder}
        />
        <Table.Body>
          {tableData.map((element, index) =>
            <Table.Row key={index} numberRows={3} >
              <Table.Item>{element.name}</Table.Item>
              <Table.Item>{element.lastname}</Table.Item>
              <Table.Item>{element.email}</Table.Item>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </Wrapper>
  )
}