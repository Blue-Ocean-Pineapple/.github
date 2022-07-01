import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MultiSelect } from "react-multi-select-component";
import {
  Button
} from '@chakra-ui/react';

export default function AssignStudentForm ({ ticket, studentOrder, isChange, setChange }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => { }, [isChange])


  const handleSubmit = () => {
    let list = [];
    selected.map((person) => {
      list.push(person.value)
    })
    let items = {studentId: list};
    let values = [items, {_id: ticket._id}];

    axios.put('/staff/assignStaff', values)
      .then((response) => {
        console.log('response data:', response);
      })
      .catch((err) => {
        console.log('submit err:', err);
      })
      setChange(!isChange);
    }

    return (
      <div>
        <MultiSelect
          options={studentOrder}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    )
}
