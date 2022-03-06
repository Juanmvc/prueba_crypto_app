import styled from '@emotion/styled'
import {
  variant,
  MaxWidthProps,
  typography,
  color,
  space,
  TypographyProps,
  SpaceProps, AlignSelfProps,
} from 'styled-system'
import css from '@styled-system/css'

export interface POptions {
  /**
   * @default false
   */
  truncate?: boolean
  inline?: boolean
  weight?: string
  color? : string
  small?: boolean
  danger?: boolean
  success?: boolean
  disabled?: boolean
};

export const Text = styled.p<PProps>(
  css({
    fontFamily: 'Roboto',
    fontWeight: "regular",
    fontSize: ['18px'],
    lineHeight: ['24px'],
    margin: 0,
    color: "#000000"
  }) as any,
  variant({
    prop: 'danger',
    variants: {
      true: {
        color: '#A60067',
      },
    },
  }),
  variant({
    prop: 'success',
    variants: {
      true: {
        color: '#00C49A',
      },
    },
  }),
  variant({
    prop: 'disabled',
    variants: {
      true: {
        color: '#82838B',
      },
    },
  }),
  typography,
  color,
  space,
)

export type PProps = POptions & MaxWidthProps & TypographyProps & SpaceProps & AlignSelfProps
