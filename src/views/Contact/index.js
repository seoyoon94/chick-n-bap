import React from 'react';
import banner from '../../assets/images/contact.jpg';

import { Blurb, Form, Hero } from '../../ui';
import * as Layout from '../../layout';

const Contact = () => {
  return (
    <div>
      <Hero imgSrc={banner} />
      <Layout.Grid>
        <Layout.Row>
          <Layout.Column
            breakpoints={{
              xs: 12,
              md: 6
            }}>
            <Blurb.Blurb
              title="Contact Us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet convallis dolor. Ut tincidunt est id leo dictum egestas. Curabitur consectetur sed sem id ullamcorper. Donec faucibus eros sed ipsum viverra finibus. Integer ligula ligula, consequat vel convallis id, ornare vitae leo. Nullam finibus feugiat ipsum non iaculis. Nulla imperdiet elit vitae dui pulvinar accumsan. Nam ullamcorper sodales augue, eu blandit lorem."> 
            </Blurb.Blurb>
          </Layout.Column>
          <Layout.Column
            breakpoints={{
              xs: 12,
              md: 6
            }}>
            <Layout.Row>
              <Layout.Column
                breakpoints={{
                  xs: 12
                }} >
                <Blurb.Blurb
                  title="Send us an email"
                  description="Lorem ipsum" />
              </Layout.Column>
            </Layout.Row>
            <Form.Main>
              <Layout.Row>
                <Layout.Column
                  breakpoints={{
                    xs: 12,
                    sm: 6
                  }}>
                  <Form.Input
                    id="email"
                    label="Email"
                    type="email" />
                </Layout.Column>
                <Layout.Column
                  breakpoints={{
                    xs: 12,
                    sm: 6
                  }}>
                  <Form.Input
                    id="subject"
                    label="Subject"
                    type="text" />
                </Layout.Column>
              </Layout.Row>
              <Form.Input 
                id="comments"
                label="Comments"
                type="textarea"/>
              <Form.Submit />
            </Form.Main>
          </Layout.Column>
        </Layout.Row>
      </Layout.Grid>
    </div>
  );
};

export default Contact;
