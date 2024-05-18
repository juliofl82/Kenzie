import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TechList from '../TechList/TechList.jsx';
import TechCard from '../TechCard/TechCard.jsx';
import CreateTechModal from '../CreateTechModal/CreateTechModal.jsx';
import useStore from '../../store/TechStore';

const ProfilePage = () => {
  const { user, techs, removeTech, fetchUserProfile, logout, isModalOpen, openModal, closeModal } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    } else {
      navigate('/login');
    }
  }, [fetchUserProfile, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Olá, {user.name}</h1>
      <p>Módulo atual cadastrado para o usuário: {user.course_module}</p>
      <button onClick={handleLogout}>Sair</button>
      <button onClick={openModal}>Adicionar Tecnologia</button>
      <TechList techs={techs} />
      {techs.map(tech => (
        <TechCard key={tech.id} tech={tech} onRemove={removeTech} />
      ))}
      {isModalOpen && <CreateTechModal closeModal={closeModal} />}
    </div>
  );
};

export default ProfilePage;
















