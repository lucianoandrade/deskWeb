import React from 'react';
import { Input, Form, SearchIcon } from './styles';

function SearchBar({ confirm }) {
  const [text, setText] = React.useState('');
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        setText('');
        confirm(text);
      }}
    >
      <SearchIcon onClick={confirm} />
      <Input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={'Buscar OS'}
      />
    </Form>
  );
}

export default SearchBar;
