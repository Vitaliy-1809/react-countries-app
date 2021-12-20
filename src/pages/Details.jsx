import React from 'react';

const Details = ({ match }) => {
  return (
    <div>
      Details {match.params.name}
    </div>
  );
}

export default Details;
