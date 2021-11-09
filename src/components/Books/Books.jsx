import React from 'react'
import { Button } from 'antd'
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
              <div className="all__books">
                {filtredBooks.length
                  ? filtredBooks.map(({ id, volumeInfo }, index) => (
                      <Book key={index} id={id} volumeInfo={volumeInfo} />
                    ))
                  : books.map(({ id, volumeInfo }, index) => (
                      <Book key={index} id={id} volumeInfo={volumeInfo} />
                    ))}
              </div>
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
