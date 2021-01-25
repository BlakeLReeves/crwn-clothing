import React, { Component } from 'react';
import './directory.styles.scss';
import { sections } from '../../data/directory.data';

import MenuItem from '../../components/menu-item/menu-item.component';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
