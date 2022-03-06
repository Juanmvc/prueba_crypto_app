import React, { HTMLAttributes } from "react";
import styled from '@emotion/styled'
import { css } from '@styled-system/css'

export interface ButtonOptions {
    children?: React.ReactNode
    onClick: any;
}

type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonOptions;

const CustomButton = styled('button')<ButtonProps>(
    () => css({
    backgroundColor: '#000259',
    fontFamily: 'Open Sans, sans serif',
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#fff',
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#1ea7fd',
      }
    }) as any,
)

export const ButtonSolid: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
}) => {
    return (
        <CustomButton
            onClick={onClick}
            className={className}
        >
            {children}
        </CustomButton>
    )
}