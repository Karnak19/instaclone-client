import React, { useState } from 'react';
import { Button } from 'reactstrap';
import RegisterModal from './RegisterModal';

function Register() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      Pas de compte ?
      <Button color="link" onClick={toggle}>
        Inscrivez-vous
      </Button>
      <RegisterModal isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default Register;
