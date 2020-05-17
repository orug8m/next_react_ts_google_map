import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Badge = (props: Props): JSX.Element => {
  const type = typeof props.children;
  if (!props.children || type !== "string") {
    return <></>;
  }
  let digit = props.children.toString().length;
  if (digit > 4) digit = 4; // 5桁以上の対応はpending
  return (
    <BadgeIcon className={`numberCircle${digit}`}>
      <span className={`numberCircle${digit}`}>{props.children}</span>
    </BadgeIcon>
  );
};

export default Badge;

const BadgeIcon = styled.span`
  display: inline-block;
  line-height: 0px;
  background-color: ${(props) => props.theme.colors.secondary.light};
  border-radius: 50%;
  min-height: 36px;
  min-width: 36px;

  &.numberCircle1 {
    font-size: 18px;
  }
  &.numberCircle2 {
    font-size: 14px;
  }
  &.numberCircle3 {
    font-size: 12px;
  }
  &.numberCircle4 {
    font-size: 10px;
  }

  span {
    font-weight: 700;
    display: inline-block;
    padding-top: 50%;
    padding-bottom: 50%;
    color: ${(props) => props.theme.colors.secondary.contrastText};

    &.numberCircle1 {
      margin: 0 12px;
    }
    &.numberCircle2 {
      margin: 0 9.5px;
    }
    &.numberCircle3 {
      margin: 0 7.25px;
    }
    &.numberCircle4 {
      margin: 0 6px;
    }
  }
`;
