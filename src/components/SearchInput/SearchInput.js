import {Form, Input, Submit} from './styledComponents'
import { useRef, useState } from 'react'

import {Link} from 'react-router-dom'
import Search from '../../images/search.svg'

const forbiddenKeys = ['<','>','\\','/','{','}',']','[',';']

function SearchInput() {
  const [value, setValue] = useState('');
  const link = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    if(e.target[0].value.length > 2) {
      link.current.click()
    }else{
      alert('The word should have at least 3 letters!')
    }
  }
  const keyDown = (e) => {
    if(forbiddenKeys.includes(e.key)){
      e.preventDefault()
      return false
    }
  }
  return (
    <Form onSubmit={submit}>
      <Input onKeyDown={keyDown} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Search Anything" />
      <Submit type='submit'><img src={Search} alt="" /></Submit>
      <Link to={'search/'+value+'/1'} ref={link} ></Link>
    </Form>
  )
}

export default SearchInput