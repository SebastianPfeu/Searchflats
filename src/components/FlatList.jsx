import React from 'react';
import Flat from './Flat';

const FlatList = (props) => {
  const { flats, selectedFlat, selectFlat } = props;
  const renderList = flats.map((flat, index) => {
    return (
      <Flat
        flat={flat}
        key={flat.lat}
        selected={flat.name === selectedFlat.name}
        index={index}
        selectFlat={selectFlat}
      />
    );
  });

  return (
    <div className="flat-list">
      { renderList }
    </div>
  );
};

export default FlatList;
