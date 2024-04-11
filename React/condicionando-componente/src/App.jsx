import { useState } from 'react';
import { UserCard } from './components/UserCard';


function App() {
  

  return (
    <div>
      <UserCard name="Julio" email="teste@gmail.com" status="Active" />
      <UserCard name="Julio2" email="teste@gmail.com" status="" />
    </div>
  );
}

export default App
