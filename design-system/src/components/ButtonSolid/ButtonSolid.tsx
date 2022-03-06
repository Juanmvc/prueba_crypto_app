import React, { HTMLAttributes } from "react";
import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { variant } from "styled-system";

export interface ButtonOptions {
    children?: React.ReactNode
    onClick: any;
    variant?: string;
    disabled?: boolean;
}

type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonOptions;

const CustomButton = styled('button')<ButtonProps>(
    () => css({
    backgroundColor: '#000259',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#fff',
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    padding: "5px",
    border: '1px solid #000259',
    '&:hover': {
        cursor: 'pointer',
        opacity: 0.5,
      },
    '&:disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        backgroundColor: "#999ABD",
    },
    }) as any,
    variant({
        prop: 'variant',
        variants: {
          white: {
            color: '#000259',
            backgroundColor: 'white',
            '&:not(:disabled):hover': {
                cursor: 'pointer',
                backgroundColor: '#000259',
              },
              '&:disabled': {
                cursor: 'not-allowed',
                pointerEvents: 'none',
                backgroundColor: "#C4C4C4",
            },
          },
        },
      }),
)

export const ButtonSolid: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
    variant,
    disabled = false,
}) => {
    return (
        <CustomButton
            onClick={onClick}
            className={className}
            variant={variant}
            disabled={disabled}
        >
            {children}
        </CustomButton>
    )
}