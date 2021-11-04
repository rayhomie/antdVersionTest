import React from 'react'
import { Input, Button } from 'antd'
import Antd3Form from './Antd3Form'
import Antd4Form from './Antd4Form'

export interface HelloProps {
  compiler: string
  framework: string
}

const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!<Input></Input>
    <Button>按钮</Button>
    <Antd3Form />
    <Antd4Form />
  </h1>
)

export default Hello
