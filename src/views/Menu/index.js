import React from 'react';

import banner from '../../assets/images/food.jpg';
import blurbs from './blurbs.json';
import { Blurb, Hero, Icon, Menu } from '../../ui';
import * as Layout from '../../layout';

const icon = <Icon name="brightness_1" color="black"/>;

const menu = (
  <Menu.Main>
    <Menu.Procedure
      title="Choose your base">
      <Menu.Option
        title="Bap Bowl">
        <Menu.Item
          description="Yellow Rice"
          icon={icon}
          ingredients={["Basmati", "Cumin", "Tumeric"]}>
        </Menu.Item>
        <Menu.Item
          description="White Rice"
          icon={icon}
          ingredients={["Short Grain", "Sesame"]}>
        </Menu.Item>
      </Menu.Option>
      <Menu.Option
        title="Bap 'Less'">
        <Menu.Item
          description="Iceberg Lettuce"
          icon={icon}
          ingredients="Shredded">
        </Menu.Item>
        <Menu.Item
          description="Gyro"
          icon={icon}
          ingredients="Toasted Pita">
        </Menu.Item>
      </Menu.Option>
    </Menu.Procedure>
    <Menu.Procedure
      title="Choose your daily special">
      <Menu.Option
        title="NYC Style">
        <Menu.Item
          description="Original Chicken"
          icon={icon}
          ingredients={["Cumin", "Coriander"]}
          price={6.99}>
        </Menu.Item>
        <Menu.Item
          description="Original Lamb"
          icon={icon}
          ingredients={["Cumin", "Coriander"]}
          price={6.99}>
        </Menu.Item>
        <Menu.Item
          description="Combo Platter"
          icon={icon}
          ingredients={["Chicken", "Lamb"]} price={7.99}>
        </Menu.Item>
      </Menu.Option>
      <Menu.Option
        title="Korean Style">
        <Menu.Item
          description="Korean BBQ Chicken"
          icon={icon}
          ingredients={["Soy", "Ginger", "Garlic"]}
          price={7.49}>
        </Menu.Item>
        <Menu.Item
          description="Spicy Korean Chicken"
          icon={icon}
          ingredients={["Korean Pepper Paste", "Soy"]}
          price={7.49}>
        </Menu.Item>
      </Menu.Option>
    </Menu.Procedure>
    <Menu.Procedure
      title="Choose your sauce(s)">
      <Menu.Item
        icon={icon}
        description="White">
      </Menu.Item>
      <Menu.Item
        icon={icon}
        description="Green">
      </Menu.Item>
      <Menu.Item
        icon={icon}
        description="Hot">
      </Menu.Item>
      <Menu.Item
        icon={icon}
        description="BBQ">
      </Menu.Item>
    </Menu.Procedure>
  </Menu.Main>
);

const MenuPage = () => {
  return (
    <div>
      <Hero imgSrc={banner}/>
      <Layout.Grid>
        <Layout.Row>
          <Layout.Column
            breakpoints={{
              xs: 12,
              md: 6
            }}>
            { menu }
          </Layout.Column>
          <Layout.Column
            breakpoints={{
              xs: 12,
              md: 6
            }}>
            {blurbs.map( blurb => 
              <Layout.Row key={blurb.title}>
                <Layout.Column
                  breakpoints={{
                    xs: 12
                  }}>
                  <Blurb.Blurb {...blurb} />
                </Layout.Column>
              </Layout.Row> )}
          </Layout.Column>
        </Layout.Row>
      </Layout.Grid>
    </div>
  );
};

export default MenuPage;
