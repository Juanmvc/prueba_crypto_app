import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { BorderProps, border, WidthProps, space, SpaceProps, layout, LayoutProps, grid, GridProps, ColorProps, color, flex, flexbox, FlexProps, boxShadow, justifyContent, justifyItems, justifySelf, alignItems, alignSelf } from 'styled-system'

export const Grid = styled.div(
  css({
    display: 'grid',
  }),
  grid,
  flex,
  flexbox,
  layout,
  space
)