import React from 'react'
import { Table, TableHead } from '@components'
import db from './config/data.json'
import { Wrapper } from './styled'

export const App = () => {
  return (
    <Wrapper>
      <Table>
        <TableHead
          columns={db.columns}
          numberRows={3}
        />
        <Table.Body>
          {db.data.map((element, index) =>
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