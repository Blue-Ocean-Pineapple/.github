import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MultiSelect } from "react-multi-select-component";
import {
  Button
} from '@chakra-ui/react';

export default function AssignStaffForm ({ ticket, staffOrder }) {
  const [selected, setSelected] = useState([]);
  const [isSubmit, setSubmit] = useState(false)

  useEffect(() => { }, [isSubmit])

  const handleSubmit = () => {
    let values = [{staffId: selected[0].value}, {_id: ticket._id}];

    console.log('VALUES', values)
    axios.put('/staff/assignStaff', values)
      .then((response) => {
        console.log('response data:', response);
      })
      .catch((err) => {
        console.log('submit err:', err);
      })
    setSubmit(!isSubmit);
  }

    return (
      <div>
        <MultiSelect
          options={staffOrder}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    )
}