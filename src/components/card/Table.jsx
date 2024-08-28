import { ColumnDef, flexRender, getCoreRowModel, useReactTable,SortingFn,
  SortingState } from "@tanstack/react-table";
import styled from "@emotion/styled";
import { Fragment, useReducer } from "react";

const sortStatusFn = (rowA, rowB, _columnId) => {
  const statusA = rowA.original.status
  const statusB = rowB.original.status
  const statusOrder = ['single', 'complicated', 'relationship']
  return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB)
}

const Table = ({useMinHeight = true, data, columns, noDataMessage}) => {

  const rerender = useReducer(() => ({}), {})[1]

  


  const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() })

  const { getHeaderGroups, getRowModel } = table;

  const isNoData = getRowModel().rows.length === 0;
  
  console.log("useMinHeight :: ", useMinHeight)

  return (
      <TableContainer>
       {getHeaderGroups().map((headerGroup) => (
        <TableHeader className="row">
          {headerGroup.headers.map((header) =>
            header.isPlaceholder ? null : (
              <TableCell key={header.id} width={header.column.getSize()}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableCell>
            ),
          )}
        </TableHeader>
      ))}
      <TableBody useMinHeight={useMinHeight}>
        {isNoData ? (
          <NoDataComponent useMinHeight={useMinHeight}>{noDataMessage}</NoDataComponent>
        ) : (
          getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <TableRow className="row">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} width={cell.column.getSize()}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            </Fragment>
          ))
        )}
      </TableBody>
      </TableContainer>
    )
}

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .row {
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }
`;

const TableCell = styled.div`
  width: ${({ width }) => width}px;
  padding: 16px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  align-items: center;
  word-break: break-all;
`;

const TableRow = styled.div`
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const TableSubRow = styled.div`
  width: 100%;
  padding: 24px;
`;

const TableHeader = styled.div`
  font-weight: 500;
`;

const TableBody = styled.div`
  max-height: ${({ useMinHeight }) => {
    return (useMinHeight ? '200px;' : 'auto;')}
  }
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const NoDataComponent = styled.div`
  width: 100%;
  height: ${({ useMinHeight }) => (useMinHeight ? '200px;' : 'auto;')}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Table