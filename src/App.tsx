import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { PriceList } from "./components/PriceList";
import { PerksList } from "./components/PerksList";

import priceData from "./data/price-data.json";
import perksData from "./data/perks-data.json";
import { PickupSlider } from "./components/PickupSlider";

export default function App() {
  return (
    <React.Fragment>
      <Header title={"Shift"} />
      <Container maxWidth="sm">
        <Box my={4} mt={4}>
          <Form />
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box my={4}>
          <PerksList data={perksData} />
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box my={4}>
          <PickupSlider />
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box m={4}>
          <PriceList data={priceData} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
