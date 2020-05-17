import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Badge = (props: Props): JSX.Element => {
  const type = typeof props.children
  if (!props.children || type !== 'string') {
    return <></>
  }
  return (
    <BadgeIcon>
      <span>{props.children}</span>
    </BadgeIcon>
  )
}

export default Badge

const BadgeIcon = styled.span`
  display: inline-block;
  line-height: 0px;
  background-color: ${(props) => props.theme.colors.secondary.light};
  border-radius: 50%;
  min-height: 34px;
  min-width: 34px;
  text-align: center;
  font-size: 14px;

  span {
    font-weight: 700;
    display: inline-block;
    padding-top: 50%;
    padding-bottom: 50%;
    color: ${(props) => props.theme.colors.secondary.contrastText};
  }
`
