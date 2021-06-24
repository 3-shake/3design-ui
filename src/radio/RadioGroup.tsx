import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup'
import tw, { css, TwStyle } from 'twin.macro'

export interface RadioGroupProps extends MuiRadioGroupProps {
  children: React.ReactNode
  required?: boolean
  label?: string
  error?: string
  twin?: TwStyle | TwStyle[]
}

export const RadioGroup: React.VFC<RadioGroupProps> = ({
  twin,
  name,
  label,
  defaultValue,
  row = true,
  error,
  children,
  onChange,
  required = false,
}) => {
  return (
    <FormControl
      component="fieldset"
      error={!!error}
      css={[
        css`
          > .Mui-error {
            ${tw`text-error!`}
          }
        `,
      ]}
    >
      {label && (
        <label css={[tw`mb-2 text-middle`]}>
          {label}
          {required && <span tw="text-error">*</span>}
        </label>
      )}
      <MuiRadioGroup
        row={row}
        name={name}
        defaultValue={defaultValue}
        css={[twin]}
        onChange={onChange}
      >
        {children}
      </MuiRadioGroup>
      {error && <FormHelperText tw="text-error!">{error}</FormHelperText>}
    </FormControl>
  )
}
