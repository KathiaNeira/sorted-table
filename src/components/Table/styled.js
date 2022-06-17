import styled from 'styled-components'

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numberRows}, 1fr);
  text-align: center;
  background: #224a66;
  padding: 12px;
  `

export const ItemHeader = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: 700;
`

export const Table = styled.div`
  background: #FFF;
`

export const ArrowWrapper = styled.div `
  margin-left: 10px;
`

const TableBody = styled.div`
  text-align: center;
  background: #FFF;
  border: 1px solid #D8D8D8;
  border-top: none;
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numberRows}, 1fr);
  padding: 12px;
  border-top: 1px solid #D8D8D8;
  :nth-child(odd) {
    background-color: #f6f6fb;
  }
`

const Item = styled.div`
  word-break: break-word;
`

Table.Body = TableBody
Table.Row = TableRow
Table.Item = Item