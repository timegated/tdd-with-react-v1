import React from 'react';

/**
 * Conditionally renders a congratulations message for the player based on a success prop (boolean).
 * @param {*} props
 * @param {object} props.success - boolean object property designating success or failure to guess the word 
 * @returns {React.Component}
 */
const Congrats = ({ success }) => {
  return (
    <section data-test="congrats">
      <span data-test="congrats-message">
        {success ? 'Congrats!' : ''}
      </span>
    </section>
  );
};

export default Congrats;