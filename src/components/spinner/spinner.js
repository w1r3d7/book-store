import React from "react";
import {GiSpinningBlades} from 'react-icons/gi';

import './spinner.css';

const Spinner = () => (
  <div className="spinner">
    <GiSpinningBlades size={60} />
  </div>
);

export default Spinner;
