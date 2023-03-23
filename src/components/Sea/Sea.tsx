import React from 'react';
import sea from '../../images/sea.jpg'

export const Sea: React.FC = () => {
  return  (
    <div id="Sea" className="sea">
        <img
          src={sea}
          alt="Sea"
          className="sea__img"
        />

        <div className="sea__content">
          <h2 className="sea__content__title title--2">
            Above <br/> the sea
          </h2>

          <p className="sea__content__quote">
            " Eros reque munere ul quo, commodo ullamcorper ad eam. His aeterno scriptorem ei, sea ut epiuri tincidunt. "
          </p>

          <p className="sea__content__desc sea__content__desc--1">
            Cu eum causae bonorum. Te pri omatus probatus, an postea nemore iuvaret sea. Mea te rebum virtute, ullum facillisi comprehensam nec eu. At facer latine nec, te nonumy disputationi reprehendunt usu, ut nam unum integre qualisque. Nulla possit mandamus ne vix.
          </p>

          <p className="sea__content__desc sea__content__desc--2">
            Mea ea simul quaeque vocibus. Est ut verear voluptetum, vis at illud discere. Volumus rationibus cu sea, et summo ocurreret per, sit no audire scribentur. Vim et brute moderatius comprehensam. Argumentum disputando ea mel, sed clita congue an, equidem maluisset dispuntando ei ius. Vei ne enim duis. Nec ignota instructior te. Ipsum tacimates adversarium ut his. Fastidi adipisei ei cum, eum tollit percipit ne. Diam tantas te nec.
          </p>

          <a href="#sea" className="sea__btn btn">
            Read more
          </a>
        </div>
      </div>
  )
}
