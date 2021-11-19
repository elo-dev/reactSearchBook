import React from 'react'
import { Button, Col, Row } from 'antd'
import { Book } from '../Book/Book'
import { Loader } from '../../assets/loader/Loader'

export const Books = ({ books, countBooks, filtredBooks, loading, loadMore }) => {
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
                    <Col flex={3}>
                      <Book key={index} id={id} volumeInfo={volumeInfo} />
                    </Col>
                    ))
                  : books.map(({ id, volumeInfo }, index) => (
                    <Col flex={3}>
                      <Book key={index} id={id} volumeInfo={volumeInfo} />
                    </Col>
                    ))}
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
