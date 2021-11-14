import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import {Container, Error} from './styles';
import {FiX} from 'react-icons/fi';

interface NewCourseUnitModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewCourseUnitModalData{
    name: string;
    description: string;
}

export function NewCourseUnitModal({isOpen, onRequestClose}: NewCourseUnitModalProps){

    const {register, handleSubmit, formState: {errors}} = useForm<NewCourseUnitModalData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return(
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
          <Container>
              <h1>Create Course Unit</h1>
              <button type="button" onClick={onRequestClose} className="react-modal-close">
                  <FiX size={20}>

                  </FiX>
              </button>
              <form onSubmit={onSubmit}>
                  <input type="text" placeholder="Curricular Unit Name" { ... register("name", {required:true})}/>
                  {errors.name && <Error>Filling in the field is mandatory</ Error>}
                  <input type="text" placeholder="description" { ... register("description", {required:true})}/>
                  {errors.description && <Error>Filling in the field is mandatory</ Error>}
                  <button type="submit">
                      Create
                  </button>
              </form>
          </Container>
      </Modal>
    )
}