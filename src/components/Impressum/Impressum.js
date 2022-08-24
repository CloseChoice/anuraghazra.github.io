import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';

import { ImpressumWrapper, ImpressumInfo } from './Impressum.style';

const Impressum = () => {
  return (
    <ImpressumWrapper id="about">
      <PageHeader>Impressum</PageHeader>
      <SkewBg />
      <ImpressumInfo>
        <p>
          Tobias Pitters<br />
          Friedenstraße 12<br />
          70190 Stuttgart<br />
          +49 1729518758<br />
          tobias.pitters@gmx.de
        </p>
      </ImpressumInfo>
    </ImpressumWrapper>
  );
};

export default Impressum;
