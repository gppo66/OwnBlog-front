import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'reactstrap';
import { SEARCH_REQUEST } from '../../redux/types';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [form, setValues] = useState({ searchBy: '' });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const onSubmit = async (e) => {
    await e.preventDefault();
    const { searchBy } = form;

    dispatch({
      type: SEARCH_REQUEST,
      payload: searchBy,
    });

    console.log(searchBy, 'Submit Body');
    resetValue.current.value = '';
  };
  const resetValue = useRef(null);

  return (
    <Fragment>
      <Form onSubmit={onSubmit} className="col mt-2">
        <Input
          name="searchBy"
          onChange={onChange}
          innerRef={resetValue}
          placeholder="검색"
        />
      </Form>
    </Fragment>
  );
};

export default SearchInput;
