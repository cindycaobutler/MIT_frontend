import * as React from 'react';

import './landing.css';
import PageFrameGeneric from '../../common/page-frames/generic';

class Landing extends React.Component {
  public render() {
    return (
      <PageFrameGeneric title="Mentor In Tech">
        <div className="container">
          Welcome!
        </div>
      </PageFrameGeneric>
    );
  }
}

export default Landing;
