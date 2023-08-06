import {Button, Form} from "react-bootstrap";
import React, {ChangeEvent, FormEvent, useState} from "react";
import SearchInput from "./SearchInput";

export default function SearchForm() {
  const [searched, setSearched] = useState(false);
  const [values, setValues] = useState({
    weight: 0,
    armor: 0,
    bleed: 0,
    burn: 0,
    overload: 0,
    corrode: 0,
    blight: 0
  })

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setSearched(false);
  }

  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearched(true);
    //TODO: actually search
  }

  return (
    <Form onSubmit={search}>
      <SearchInput label="Max Weight:" name="weight" value={values.weight} onChange={onChange}/>
      <h3>Search Weights</h3>
      <SearchInput label="Armor:" name="armor" value={values.armor} onChange={onChange}/>
      <SearchInput label="Bleed:" name="bleed" value={values.bleed} onChange={onChange}/>
      <SearchInput label="Burn:" name="burn" value={values.burn} onChange={onChange}/>
      <SearchInput label="Overload:" name="overload" value={values.overload} onChange={onChange}/>
      <SearchInput label="Corrode:" name="corrode" value={values.corrode} onChange={onChange}/>
      <SearchInput label="Blight:" name="blight" value={values.blight} onChange={onChange}/>
      <Button type="submit" disabled={searched}>Search</Button>
    </Form>
  )
}
