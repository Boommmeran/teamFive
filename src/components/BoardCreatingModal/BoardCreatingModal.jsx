import { Icon } from 'components/Icon';
import * as Yup from 'yup';
import {
  FormWrap,
  Input,
  Text,
  AddBtn,
  IconWrap,
  ModalWrap,
  CloseBtn,
  ModalTitle,
  IconsListWrap,
  InvisibleInput,
  BackgroundsPallet,
  Label,
  LabelPic,
  Div,
} from './BoardCreatingModal.styled';
import { Formik } from 'formik';
import { addBoard, editBoard } from '../../redux/boards/boardsOperations';
import { useDispatch } from 'react-redux';

const iconsArr = [
  'four-circles',
  'star',
  'loading',
  'puzzle',
  'container',
  'lightning',
  'colors',
  'hexagon',
];

const backgroundsArr = [
  'noBack',
  'miklos',
  'eberhard',
  'diego',
  'vino',
  'vickholius',
  'romello',
  'kace',
  'milad',
  'gaetan',
  'florian',
  'tony',
  'nicolas',
  'gabriella',
  'igor',
  'zhou',
];

const schema = Yup.object({
  title: Yup.string().required(),
  icon: Yup.string().oneOf(iconsArr).required(),
  background: Yup.string().oneOf(backgroundsArr).required(),
});

export const BoardCreatingModal = ({ onClose, title, btnText, board }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title: board ? board.title : '',
    icon: board ? board.icon : 'four-circles',
    background: board ? board.background : 'noBack',
  };

  const handleSubmit = (boardId, boardData) => {
    if (!boardId) {
      dispatch(addBoard(boardData));
    } else {
      dispatch(editBoard(boardId, boardData));
    }
  };

  const onSubmit = values => {
    handleSubmit(board ? board._id : null, values);
    onClose();
  };
  
  return (
    <ModalWrap>
      <ModalTitle>{title}</ModalTitle>
      <CloseBtn type="button" onClick={onClose}>
        <Icon name="close" />
      </CloseBtn>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <FormWrap>
          <Input type="text" placeholder="Title" name="title" />
          <Text>Icons</Text>

          <IconsListWrap>
            {iconsArr.map(el => (
              <li key={el}>
                <Label>
                  <Icon name={el} />
                  <InvisibleInput type="radio" name="icon" value={el} />
                </Label>
              </li>
            ))}
          </IconsListWrap>

          <Text>Backgrounds</Text>
          <BackgroundsPallet>
            {backgroundsArr.map(el => {
              const srcSetPath = ` https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${el}_28x28.webp 1x,
              https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${el}_56x56.webp 2x`;
              const srcDefault = `https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${el}_28x28.webp`;
              return (
                <li key={el}>
                  <LabelPic>
                    <Div>
                      <picture>
                        <source srcSet={srcSetPath} />
                        <img src={srcDefault} alt="background example" />
                      </picture>
                    </Div>
                    <InvisibleInput type="radio" name="background" value={el} />
                  </LabelPic>
                </li>
              );
            })}
          </BackgroundsPallet>

          <AddBtn type="submit">
            <IconWrap>
              <Icon name="plus" />
            </IconWrap>{' '}
            {btnText}
          </AddBtn>
        </FormWrap>
      </Formik>
    </ModalWrap>
  );
};
