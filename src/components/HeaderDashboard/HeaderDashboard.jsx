import { useParams } from 'react-router-dom';
import { FilterBtn, BoardName, Wrap } from './HeaderDashboard.styled';
import { Icon } from 'components/Icon';
import { useState } from 'react';
import Modal from 'react-modal';
import { FilterModal } from 'components/FilterModal/FilterModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
    padding: 0,
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

export const HeaderDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { boardName } = useParams();
  return (
    <Wrap>
      <BoardName>{boardName}</BoardName>
      <FilterBtn type="button" onClick={openModal}>
        <Icon name="filter" />
        Filters{' '}
      </FilterBtn>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Filters Modal"
      >
        <FilterModal closeModal={closeModal} />
      </Modal>
    </Wrap>
  );
};
