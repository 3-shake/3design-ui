import React from 'react'
import { TableCellProps as ReactTableCellProps } from 'react-table'
import tw, { TwStyle } from 'twin.macro'

export interface TableCellProps extends ReactTableCellProps {
  children: React.ReactNode

  component?: 'th' | 'td'

  twin?: TwStyle | TwStyle[]
}

export const TableCell: React.VFC<TableCellProps> = ({
  component = 'td',
  key,
  twin,
  children,
  ...rest
}) => {
  return (
    <>
      {component === 'td' ? (
        <td
          key={key}
          css={[tw`px-6 py-4 font-medium text-left`, twin]}
          {...rest}
        >
          {children}
        </td>
      ) : (
        <th
          key={key}
          css={[tw`px-6 py-4  font-medium text-left`, twin]}
          {...rest}
        >
          {children}
        </th>
      )}
    </>
  )
}
