import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import Card from 'components/Card/Card';
import 'react-perfect-scrollbar/dist/css/styles.css';

import {
  AddBtn,
  CardList,
  HeadWrap,
  IconWrap,
  IconedBtn,
  Title,
  Wrap,
  Container,
} from './Column.styled';
import { EditColumnModal } from 'components/EditColumnModal/EditColumnModal';
import AddCardModal from 'components/AddCardModal/AddCardModal';

export const Column = ({ columnId }) => {
  const [modalColumnIsOpen, setmodalColumnIsOpen] = useState(false);
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);
  const cards = [
    {
      _id: '65c8c3c181c2d3854aa44bce',
      title: 'Design and Prototyping SoYummy',
      text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: 'low',
      deadline: 'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
    },
    {
      _id: '65c8c3c181c2d3854aa44bce',
      title: 'Design and Prototyping SoYummy',
      text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: 'high',
      deadline: 'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
    },
    {
      _id: '65c8c3c181c2d3854aa44bce',
      title: 'Design and Prototyping SoYummy',
      text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: 'medium',
      deadline: 'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
    },
    {
      _id: '65c8c3c181c2d3854aa44bce',
      title: 'Design and Prototyping SoYummy',
      text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: 'without',
      deadline: 'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
    },
  ];
  const filtredCards = cards;

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

  const openColumnModal = () => {
    setmodalColumnIsOpen(true);
  };

  const closeColumnModal = () => {
    setmodalColumnIsOpen(false);
  };

  const openCardModal = () => {
    setmodalCardIsOpen(true);
  };

  const closeCardModal = () => {
    setmodalCardIsOpen(false);
  };

  return (
    <>
      <HeadWrap>
        <Title>Column title</Title>
        <Wrap>
          <IconedBtn type="button" onClick={openColumnModal}>
            <Icon name="pencil" />
          </IconedBtn>
          <IconedBtn type="button">
            <Icon name="trash" />
          </IconedBtn>
        </Wrap>
      </HeadWrap>
      <Container>
        <CardList>
          {filtredCards.map(card => (
            <Card card={card} />
          ))}
        </CardList>
      </Container>

      <AddBtn type="button" onClick={openCardModal}>
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another card
      </AddBtn>
      <Modal
        isOpen={modalCardIsOpen}
        onRequestClose={closeCardModal}
        style={customStyles}
        contentLabel="Card Add Modal"
        ariaHideApp={false}
      >
        <AddCardModal
          columnId={columnId}
          title={'Add card'}
          btnText={'Add'}
          onClose={closeCardModal}
        />
      </Modal>
      <Modal
        isOpen={modalColumnIsOpen}
        onRequestClose={closeColumnModal}
        style={customStyles}
        contentLabel="Column Edit Modal"
        ariaHideApp={false}
      >
        <EditColumnModal
          title={'Edit column'}
          onClose={closeColumnModal}
          reqFunc={value => console.log(value)}
        />
      </Modal>
    </>
  );
};
