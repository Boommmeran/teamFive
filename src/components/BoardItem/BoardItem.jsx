import { useState } from 'react';
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import { BoardItemContainer, ControlIconsContainer } from './BoardItem.styled';
import { BoardEditModal } from 'components/BoardEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard } from '../../redux/boards/boardsOperations';
import { selectCurrentBoard } from '../../redux/boards/boardsSelectors';
import { useNavigate } from 'react-router-dom';

export const BoardItem = ({ board }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectBoard = (event, boardId) => {
    if (event.target.tagName !== 'BUTTON') {
      localStorage.setItem('lastBoard', boardId);
      navigate(`/${boardId}`)
    }
  };

  const handleDelete = (boardId) => {
    dispatch(deleteBoard(boardId));
  }

  return (
    <BoardItemContainer
      onClick={event => handleSelectBoard(event, board._id)}
      selected={currentBoard && currentBoard._id === board._id}
    >
      <Icon name={board.icon} width="18" height="18" style={{ opacity: 0.5 }} />
      <p>{board.title}</p>
      <ControlIconsContainer>
        <button type="button" style={{ cursor: 'pointer' }} onClick={openModal}>
          <Icon name="pencil" width="16" height="16" />
        </button>
        <button
          type="button"
          style={{ cursor: 'pointer' }}
          onClick={() => handleDelete(board._id)}
        >
          <Icon name="trash" width="16" height="16" />
        </button>
      </ControlIconsContainer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Edition board modal"
      >
        <BoardEditModal onClose={closeModal} board={board} />
      </Modal>
    </BoardItemContainer>
  );
};
