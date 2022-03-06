import styled from "styled-components"
import { css } from '@styled-system/css'
import {
    variant,
    MaxWidthProps,
    typography,
    color,
    space,
    TypographyProps,
    SpaceProps, AlignSelfProps,
  } from 'styled-system'

export const Text = styled('p')<TextProps>(
    css({
        fontFamily: 'Roboto',
        fontWeight: "regular",
        fontSize: ['18px'],
        lineHeight: ['24px'],
        margin: 0,
    }) as any,
    typography
)

export type TextProps = TypographyProps