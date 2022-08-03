import {Form, Input, Submit} from './styledComponents'

import React from 'react'
import Search from '../../images/search.svg'

function SearchInput() {
  const submit = (e) => {
    e.preventDefault();
    if(e.target[0].value.length > 2) {
    window.location.href = window.location.origin + '/search/' + e.target[0].value
    }else{
      alert('The word should have at least 3 letters!')
    }
  }
  const forbiddenKeys = ['<','>','\\','/','{','}',']','[',';']
  const keyDown = (e) => {
    if(forbiddenKeys.includes(e.key)){
      e.preventDefault()
      return false
    }
  }
  return (
    <Form onSubmit={submit}>
      <Input onKeyDown={keyDown} type="search" placeholder="Search Movies Shows Games..." />
      <Submit type='submit'><img src={Search} alt="" /></Submit>
    </Form>
  )
}

export default SearchInput