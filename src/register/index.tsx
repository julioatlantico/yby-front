import { Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styled as styledComponents } from "styled-components";
import ClientForm from "./client-form";
import CooperativeForm from "./cooperative-form";

const StyledContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
    width: 100%;
`;

const StyledCenterContainer = styledComponents.div`
    padding: 40px 40px 0;
`;

export default function Register({ type }: { type: string }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (type === "cliente") {
      setValue(0);
    }
    if (type === "cooperativa") {
      setValue(1);
    }
  }, [type]);

  return (
    <StyledContainer>
      <StyledCenterContainer>
        <Typography variant="h4" component="h1">
          Cadastro
        </Typography>

        <Tabs value={value} onChange={handleChange}>
          <Tab label="Cliente" />
          <Tab label="Cooperativa" />
        </Tabs>

        {value === 0 && <ClientForm />}
        {value === 1 && <CooperativeForm />}
      </StyledCenterContainer>
    </StyledContainer>
  );
}
