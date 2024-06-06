import React, { useState } from 'react';
import { FilledButton } from '@/shared/UIs/CustomButtons';
import AddTeacherModal from './AddTeacherModal';
import UpdateTeacherModal from './UpdateTeacherModal';
import DeleteTeacherModal from './DeleteTeacherModal';
import TeacherList from './TeacherList';

const Teacher = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>("");

  const toggleCreateModal = () => {
    setShowCreateModal((prev) => !prev);
  };

  const toggleUpdateModal = (teacher?: any) => {
    setSelectedTeacher(teacher);
    setShowUpdateModal((prev) => !prev);
  };

  const toggleDeleteModal = (teacherId?: string) => {
    if (teacherId) setSelectedTeacherId(teacherId);
    setShowDeleteModal((prev) => !prev);
  };

  const handleUpdate = (updatedTeacher?: any) => {
    console.log("Updated teacher:", updatedTeacher);
  };

  const handleDelete = (teacherId?: string) => {
    console.log("Deleted teacher ID:", teacherId);
  };

  return (
    <>
      {showCreateModal && (
        <AddTeacherModal
          isModalOpen={showCreateModal}
          setOpenModal={setShowCreateModal}
        />
      )}
      {showUpdateModal && selectedTeacher && (
        <UpdateTeacherModal
          isModalOpen={showUpdateModal}
          setOpenModal={setShowUpdateModal}
          teacher={selectedTeacher}
          onUpdate={handleUpdate}
        />
      )}
      {showDeleteModal && selectedTeacherId && (
        <DeleteTeacherModal
          isModalOpen={showDeleteModal}
          setOpenModal={setShowDeleteModal}
          teacherId={selectedTeacherId}
          onDelete={handleDelete}
        />
      )}
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <FilledButton name="Adicionar Professor" dataCy='add_teacher_modal_button' onClick={toggleCreateModal} className="bg-blue-500 text-[white]" />
        </div>
        <TeacherList onUpdate={toggleUpdateModal} onDelete={toggleDeleteModal} />
      </div>
    </>
  );
};

export default Teacher;
