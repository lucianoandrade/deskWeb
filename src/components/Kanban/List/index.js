import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card';
import EmptyCard from '../EmptyCard';

import { Container, IconUserInvalid } from './styles';

export default function List({
  boardType,
  data,
  index: listIndex,
  handleClickServiceOrder,
  activeModalOperators
}) {
  const title = <p>{data.title} <span className="cardsLength">{`(${data.cards.length})`}</span></p>;
  return (
    <Container>
      <div className="list">
        <header>
          <h2>
            {boardType === 'node-board' ? (
              <Link to={`/staff-board/${data.id}`}>
                {title}
              </Link>
            ) : title}
          </h2>
          <span>
            {data.invalid ? <IconUserInvalid/> : ''}
          </span>
        </header>
        <ul className="list">
          <EmptyCard
            key={999}
            listIndex={listIndex}
            index={0}
            hidden={data.cards.length > 0}
            activeModalOperators={activeModalOperators}
          />
          {data.cards ? (
            data.cards.map((card, index) => (
              <Card
                key={card.id}
                listIndex={listIndex}
                index={index}
                card={card}
                handleClickServiceOrder={handleClickServiceOrder}
                activeModalOperators={activeModalOperators}
              />
            ))
          ) : null}
        </ul>
      </div>
    </Container>
  );
}