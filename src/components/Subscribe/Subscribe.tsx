import React from 'react';

export const Subscribe: React.FC = () => {
  return  (
    <div id="Help" className="subscribe">
      <h4 className="subscribe__title description">
        Subscribe to our news letter
      </h4>

      <form
        id="form"
        className="subscribe__form"
        action="#"
        method="GET"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="subscribe__form__input description"
          required
        />

        <button
          id="btn"
          className="subscribe__btn"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
