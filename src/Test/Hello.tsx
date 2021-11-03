import React from 'react'
import { Input, Button } from 'antd'
import Antd4Fom from './Antd4Fom'

import FormTest from './FormTest'

export interface HelloProps {
  compiler: string
  framework: string
}

const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!<Input></Input>
    <Button>按钮</Button>
    <FormTest />
    <Antd4Fom />
  </h1>
)

export default Hello
