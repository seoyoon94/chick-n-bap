import React from 'react';

import banner from '../../assets/images/social.jpg';
import * as Layout from '../../layout';
import { Hero } from '../../ui';

const Social = () => {
  return (
    <div>
      <Hero
        imgSrc={banner}/>
      <Layout.Grid>
        <Layout.Row>
          <Layout.Column
            breakpoints={{
              xs: 12
            }}>
          </Layout.Column>
        </Layout.Row>
      </Layout.Grid>
    </div>
  );
};

export default Social;
