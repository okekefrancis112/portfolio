import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const MyTextOne = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: var(--fancy-color);
`;

const MyAccent = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: var(--fancy-color);
`;

export const MyTextTwo = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--secondary-text-color);
  line-height: 28px;
  max-width: 500px;
  margin-top: 1rem;
`;

const MyHeading = styled.h1`
  font-size: 62px;
  font-weight: 700;
  margin: 0;
  margin-left: -0.155rem;
  line-height: 1.2;
  color: var(--primary-text-color);
`;

const MyHeadingTwo = styled.h3`
  font-size: 62px;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  color: #7389a1;
  animation: twitch 2.5s ease-in-out alternate forwards;
  @keyframes twitch {
    0%,
    100% {
      color: #7389a1;
    }
    25% {
      color: var(--primary-text-color);
    }
    50% {
      color: #7389a1;
    }
    75% {
      color: var(--primary-text-color);
    }
  }
`;

const Introduction = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      id="intro"
      width={!matches ? 0.8 : 0.95}
      sx={{ margin: "5rem auto", marginBottom: "0" }}
    >
      <Grid
        direction="column"
        pt={3}
        container
        item
        xs={12}
        // sx={{ border: "1px  solid white" }}
      >
        <MyTextOne>Hi, my name is</MyTextOne>
        <MyHeading style={matches ? { fontSize: "32px" } : null}>
          Okeke Chukwudalu Francis
        </MyHeading>
        <MyHeadingTwo style={matches ? { fontSize: "32px" } : null}>
          I am a code blooded developer.
        </MyHeadingTwo>
        <MyTextTwo>
          I am a <MyAccent>talented backend developer </MyAccent>adept at contributing to
          highly collaborative work environment,finding solutions and determining customer satisfaction.
          Designed and developed wen applications across multiple APIs,
          <MyAccent> third-party integrations and databases.</MyAccent>
        </MyTextTwo>
      </Grid>
    </Box>
  );
};

export default Introduction;
