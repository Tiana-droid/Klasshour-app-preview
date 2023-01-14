import React from "react";
import styled from "styled-components";
import avatar from "../../Assets/icons/avatar.svg";
import { BreakPoints } from "../../utils/breakpoints";

type AvatarProT = {
  size?: string;
};

const Container = styled.div<AvatarProT>`
  border-radius: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(prop) => (prop.size ? prop.size : "2rem")};
  height: ${(prop) => (prop.size ? prop.size : "2rem")};
  margin-right: 0.4rem;
  cursor: pointer;

  @media (${BreakPoints.xs}) {
    width: ${(prop) => (prop.size ? prop.size : "2rem")};
    height: ${(prop) => (prop.size ? prop.size : "2rem")};
  }

  @media (${BreakPoints.large}) {
    width: ${(prop) => (prop.size ? prop.size : "2.4rem")};
    height: ${(prop) => (prop.size ? prop.size : "2.4rem")};
  }
`;
export default function Avatar({ photo, size }: any) {
  return (
    <Container size={size}>
      <img
        src={photo ? photo : avatar}
        style={{ width: "46px", height: "46px", objectFit: "cover",borderRadius:"50%" }}
        alt=""
      />
    </Container>
  );
}
