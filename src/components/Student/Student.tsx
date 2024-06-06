"use client"
import React, { useState } from 'react'
import AddStudentModal from './AddStudentModal';
import { FilledButton } from '@/shared/UIs/CustomButtons';
import StudentList from './StudentList';

const Student = () => {
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const toggleCreateModal = () => {
        setShowCreateModal((prev) => !prev);
    };
    return (
        <>
            {showCreateModal && (
                <AddStudentModal
                    isModalOpen={showCreateModal}
                    setOpenModal={setShowCreateModal}
                />
            )}
            <div className="flex flex-col gap-2">
                <div className="flex justify-end">
                    <FilledButton dataCy='add_student_button' name="Adicionar Estudante" onClick={toggleCreateModal} className='bg-blue-500 text-[white] ' />
                </div>
                <StudentList />
            </div>
        </>
    )
}

export default Student