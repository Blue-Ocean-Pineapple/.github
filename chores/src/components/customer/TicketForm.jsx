import React from "react";
import axios from "axios";
import Geocode from "react-geocode";
import {
  FormControl,
  Text,
  Center,
  FormLabel,
  Input,
  Container,
  Box,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export default class TickerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      wage: "",
      description: "",
      address: "",
      coordinates: {}
    };
  }

  handleNewPost(nameArg, wageArg, descriptionArg, locationArg) {
    this.setState({
      name: nameArg,
      wage: wageArg,
      description: descriptionArg,
      address: locationArg,
    }, this.getGeoCode);
  }

  getGeoCode = () => {
    Geocode.setApiKey(process.env.REACT_APP_MAP_API);
    Geocode.setLocationType("ROOFTOP");
    Geocode.fromAddress(this.state.address)
    .then((data) => {
      console.log('geoCord data:',data.results[0].geometry.location);
      this.setState({
        coordinates: data.results[0].geometry.location
      }, this.handleAddPost)
    })
    .catch((err) => {console.log(err);})
  };

  handleAddPost() {
    axios.post('http://localhost:3001/api/clients/create', {
      taskName: this.state.name,
      wage: this.state.wage,
      description: this.state.description,
      address: this.state.address,
      coordinates: this.state.coordinates,
      creatorId: 'tester',
      clientName: 'tester',
    });
  }

  render() {
    return (
      <Container>
      <header>
      <Center bg='none' h='50px'>
      <Text fontWeight='medium' fontSize='30px'>Ticket Form</Text>
      </Center>
      </header> <br></br>
        <Box boxShadow='dark-lg' p='6' rounded='md' bg='none'>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.handleNewPost(event.target.name.value, event.target.wage.value, event.target.description.value, event.target.location.value)
          ;
          alert("Form submitted")
        }}>
          <FormLabel>
            Task Name:
            <Input
              type="text"
              name="name"
              placeholder="Watering plants"
              required
              autocomplete="off"
            />
          </FormLabel> <br></br>

          <FormLabel>
            Wage:
            <Input
              type="text"
              name="wage"
              placeholder="$$$"
              required
              autocomplete="off"
            />
          </FormLabel> <br></br>

          <FormLabel>
            Description:
            <Input
              type="text"
              name="description"
              placeholder="Enter additional information here"
              required
              autocomplete="off"
            />
          </FormLabel> <br></br>

          <FormLabel>
            Address:
            <Input
              type="text"
              name="location"
              placeholder="### Sesame Street, City, State #####"
              required
              autocomplete="off"
            />
          </FormLabel> <br></br>


          <Input type="submit" value="Submit Ticket" />

          <hr />
        </form>
        </Box>
      </Container>
    );
  }
}
