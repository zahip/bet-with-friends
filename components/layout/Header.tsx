import React, { useState } from 'react';
import CustomButton from '../shared/CustomButton';
import Modal from './Modal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex items-center h-24">
      <div className="ml-10">Logo</div>
      <ul className="flex gap-3 items-center ml-auto mr-10">
        <li>
          <CustomButton handleClick={() => setShowModal(true)}>
            Log in
          </CustomButton>
        </li>
        <li>
          <CustomButton handleClick={() => setShowModal(true)}>
            Sign up
          </CustomButton>
        </li>
      </ul>
      {showModal && <Modal handleClose={() => setShowModal(false)} />}
    </header>
  );
};

export default Header;
