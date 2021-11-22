import React from 'react'
import { Select } from 'antd'

interface SortBooksProps {
  sortedBooks: (value: string) => void
}

export const SortBooks: React.FC<SortBooksProps> = ({ sortedBooks }) => {
  const { Option } = Select
  
  return (
    <>
      <Select defaultValue="relevance" style={{ width: 200 }} onChange={sortedBooks}>
        <Option value="relevance">По релевантности</Option>
        <Option value="newest">По новизне</Option>
      </Select>
    </>
  )
}
