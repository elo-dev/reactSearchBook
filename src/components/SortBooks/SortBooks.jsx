import React from 'react'
import { Select } from 'antd'

export const SortBooks = ({ sortedBooks }) => {
  const { Option } = Select
  
  return (
    <>
      <Select defaultValue="relevance" style={{ width: 200 }} onChange={e => sortedBooks(e)}>
        <Option value="relevance">По релевантности</Option>
        <Option value="newest">По новизне</Option>
      </Select>
    </>
  )
}
