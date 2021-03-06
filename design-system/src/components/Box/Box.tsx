import styled from '@emotion/styled'
import {
  BorderProps,
  ColorProps,
  ShadowProps,
  SpaceProps,
  WidthProps,
  LayoutProps,
  border,
  color,
  height,
  shadow,
  space,
  width,
  layout,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system'

export type BoxProps = BorderProps &
  ShadowProps &
  SpaceProps &
  WidthProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  Omit<ColorProps, 'color'>

export const Box = styled.div<BoxProps>(
  border,
  space,
  width,
  color,
  shadow,
  height,
  layout,
  flexbox,
  position
)
