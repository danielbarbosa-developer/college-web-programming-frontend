import Modal from 'react-modal';
import {Container, Error} from './style';
import {FiX} from 'react-icons/fi';
import {useForm} from 'react-hook-form';

interface NewActivityModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivityModalData{
    courseUnit: string;
    activity: string;
    date: Date;
}

export function NewActivityModal({isOpen, onRequestClose}: NewActivityModalProps){

    const {register, handleSubmit, formState: {errors}} = useForm<NewActivityModalData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return(
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-close"
        >
            <Container>
                <h1>Create New Activity</h1>
                <button type="button" onClick={onRequestClose} className="react-modal-close">
                    <FiX size={20 }></FiX>
                </button>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Curricular Unit" { ... register("courseUnit", {required:true})}/>
                    {errors.courseUnit && <Error>Filling in the field is mandatory</ Error>}
                    <input type="text" placeholder="Activity" { ... register("activity", {required:true})}/>
                    {errors.activity && <Error>Filling in the field is mandatory</ Error>}
                    <input type="date" placeholder="Activity Date" { ... register("date", {required:true})}/>
                    {errors.date && <Error>Filling in the field is mandatory</ Error>}
                    <button type="submit">
                        Create
                    </button>
                </form>
            </Container>
        </Modal>
    )
}