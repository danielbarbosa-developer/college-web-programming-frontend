import { useState } from 'react';
import { Header } from '../../components/header';
import { ActivyTable } from '../../components/activity-table';
import { Summary } from '../../components/summary';
import {NewActivyModal} from '../../components/new-activity-modal';
import {NewCourseUnitModal} from '../../components/new-course-unit-modal';

import {Container} from './styles'

export function Dashboard() {

    const [isNewActivyModalOpen, setIsNewActivyModalOpen] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false)


    function handleOpenActivyModal(){
        setIsNewActivyModalOpen(true);
    }

    function handleCloseActivyModal(){
        setIsNewActivyModalOpen(false);
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true);
    }

    function handleCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false);
    }


    return (
        <>
            <Header
                onOpenNewActivyModal={handleOpenActivyModal}
                onOpenNewCourseUnitModal={handleOpenCourseUnitModal}
            />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>
            <NewActivyModal
                isOpen={isNewActivyModalOpen}
                onRequestClose={handleCloseActivyModal}
            />
            <NewCourseUnitModal
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}
            />
        </>
    )
}