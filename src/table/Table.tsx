import React, { PropsWithChildren, useState } from 'react'
import {
  useTable,
  usePagination,
  TableOptions,
  Row,
  makeRenderer,
} from 'react-table'
import 'twin.macro'

import { TablePagination } from './TablePagination'

const hooks = [usePagination]

export function Table<T extends object>(
  props: PropsWithChildren<TableOptions<T>>
) {
  const { columns, data } = props
  const [initialState, _] = useState({ pageIndex: 0 })
  const instance = useTable<T>(
    {
      ...props,
      columns,
      data,
      initialState: initialState,
    },
    ...hooks
  )

  const {
    headerGroups,
    page,
    getTableProps,
    getTableBodyProps,
    prepareRow,
  } = instance

  const rowGenerate = (row: Row<T>) => {
    prepareRow(row)
    return (
      <tr
        {...row.getRowProps()}
        tw="border-b border-bg
        transform transition duration-300 ease-in-out
        hover:shadow-hover"
      >
        {row.cells.map((cell) => (
          <>{cell.render('Cell')}</>
        ))}
      </tr>
    )
  }

  return (
    <div tw="mx-auto">
      <table {...getTableProps()} tw="w-full">
        <thead tw="table-header-group">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              tw="table-row align-middle"
            >
              {headerGroup.headers.map((column) => (
                <th
                  tw="py-4 px-6 font-bold text-base text-left text-gray-low table-cell whitespace-nowrap"
                  scope="col"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} tw="bg-white table-row-group">
          {page.map((row: Row<T>) => rowGenerate(row))}
        </tbody>
      </table>

      <TablePagination instance={instance} />
    </div>
  )
}
