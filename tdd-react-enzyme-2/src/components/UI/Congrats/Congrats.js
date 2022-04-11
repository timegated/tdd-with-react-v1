import React from 'react';

/**
 * Conditionally renders a congratulations message for the player based on a success prop (boolean).
 * @param {*} props
 * @param {object} props.success - boolean object property designating success or failure to guess the word 
 * @returns {React.Component}
 */
const Congrats = ({ success }) => {
  return (success ? (
    <section data-test="congrats">
      <span data-test="congrats-message">
        Congrats! You're the winner!
      </span>
    </section>
  ) : (
    <section data-test="congrats">
    <span data-test="congrats-message">
    {''}
    </span>
  </section>
  ));
};

export default Congrats;