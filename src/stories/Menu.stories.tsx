/// <reference path='../../modules.d.ts' />
import React from 'react';

import { storiesOf } from '@storybook/react';

import MenuItem from '../components/MenuItem';
import Menu from '../components/Menu';
import SocialMedia from '../components/SocialMedia';

import { LogoGithub } from '../utils/icons';

const menuStories = storiesOf('Menu', module);

menuStories
  .add('Menu Item', () => <MenuItem name="Menu 1" />)
  .add('Menu', () => <Menu />)
  .add('Social Media Icon', () => (
    <SocialMedia path={LogoGithub} desc="Github Logo" />
  ));