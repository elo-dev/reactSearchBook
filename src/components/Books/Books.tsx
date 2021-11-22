import React from 'react'
import { Button, Col, Row } from 'antd'
import Book from '../Book/Book'
import { Loader } from '../../assets/loader/Loader'
import { withError } from '../../hoc-helper/withError'
import { IBook } from '../../types/books'

interface BooksProps {
  books: IBook[]
  countBooks: number
  filtredBooks: IBook[]
  loading: boolean
  loadMore: () => void
}

const Books: React.FC<BooksProps> = ({ books, countBooks, filtredBooks, loading, loadMore }) => {
  return (
    <>
      {!loading ? (
        <>
          {books.length !== 0 && (
            <main>
              {countBooks ? <h2>Найдено {countBooks} книг</h2> : null}
                <Row gutter={16}>
                {filtredBooks.length
                  ? filtredBooks.map(({ id, volumeInfo }, index) => (
                    <Col key={index} flex={3}>
                      <Book id={id} volumeInfo={volumeInfo} />
                    </Col>
                    ))
                  : books.map(({ id, volumeInfo }, index) => (
                    <Col key={index} flex={3}>
                      <Book id={id} volumeInfo={volumeInfo} />
                    </Col>
                    ))
                }
                </Row>
              <div className="loadMoreBtns">
                {books.length % 30 === 0 ? (
                  <Button
                    style={{ marginBottom: 20, width: 300 }}
                    disabled={false}
                    onClick={loadMore}
                  >
                    Load more ...
                  </Button>
                ) : (
                  <Button
                    style={{ marginBottom: 20, width: 300 }}
                    disabled={true}
                    onClick={loadMore}
                  >
                    Страниц нет
                  </Button>
                )}
              </div>
            </main>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default withError(Books)