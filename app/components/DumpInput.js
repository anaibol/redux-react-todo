import React, {Component} from 'react'

const DumpInput = ({onAddTodo}) => <input onKeyDown={onAddTodo} />

export default DumpInput