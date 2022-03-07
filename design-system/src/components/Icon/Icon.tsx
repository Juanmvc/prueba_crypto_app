import * as React from 'react'
import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  color,
  ColorStyleProps,
  flexbox,
} from 'styled-system'
import css from '@styled-system/css'

interface IconOptions {
  /*
   * You can find the name in https://d1azc1qln24ryf.cloudfront.net/174874/FrontendChallenge/style-cf.css?fhefj0
   */
  name: string
}

const IconContainer = styled.i(
  css({
    display: 'block',
    fontSize: "21px",
  }) as any,
  typography,
  color,
  space,
  flexbox,
)

export type IconProps = HTMLAttributes<HTMLDivElement> &
  IconOptions &
  SpaceProps &
  TypographyProps &
  ColorStyleProps

export const Icon: FC<IconProps> = ({ name }) => {
  return ( <>
        <link
            rel="stylesheet"
            href="https://d1azc1qln24ryf.cloudfront.net/174874/FrontendChallenge/style-cf.css?fhefj0"
        />
        <IconContainer
            role="Icon"
            className={`${name}`}
        />
    </>
  )
}