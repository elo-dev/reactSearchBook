import React from 'react'
import { Select } from 'antd'

export const CategoryBook = ({ setCategory }) => {
  const { Option } = Select

  return (
    <>
      <Select defaultValue="Все" onChange={e => setCategory(e)} style={{ width: 200 }}>
        <Option value="Все">Все</Option>
        <Option value="Art">Арт</Option>
        <Option value="Biography">Биография</Option>
        <Option value="Computers">Компьютеры</Option>
        <Option value="History">История</Option>
        <Option value="Medical">Медицина</Option>
        <Option value="Poetry">Поэзия</Option>
        <Option value="Fiction">Вымысел</Option>
      </Select>
    </>
  )
}
