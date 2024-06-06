import { useDeleteTeacherMutation } from '@/redux/api/teacherApi';
import { FilledButton } from '@/shared/UIs/CustomButtons';
import { Modal, message } from 'antd';
import React, { useEffect } from 'react';

interface IModalProps {
  isModalOpen: boolean;
  setOpenModal: (isOpen: boolean) => void;
  teacherId: string;
  onDelete: (teacherId: string) => void;
}

const DeleteTeacherModal = ({ isModalOpen, setOpenModal, teacherId, onDelete }: IModalProps) => {
  const [deleteTeacher, { isLoading, isSuccess, isError, error }] = useDeleteTeacherMutation();

  const onDeleteTeacher = async () => {
    await deleteTeacher(teacherId);
    onDelete(teacherId);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success('Professor deletado com sucesso!');
      setOpenModal(false);
    }
    if (isError) {
      const errorMesg = error as any;
      message.error(errorMesg?.message);
    }
  }, [isSuccess, isError, error, setOpenModal]);

  return (
    <Modal
      title="Apagar Professor"
      open={isModalOpen}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
      cancelButtonProps={{
        style: { display: "none" }
      }}
      okButtonProps={{
        style: { display: "none" }
      }}
    >
      <p>Tem certeza que quer apagar esse Professor?</p>
      {
        isLoading ? <p className='text-center mt-3 font-bold'>Deletando...</p> : (
          <div className="flex justify-end gap-2 mt-[1rem]">
            <FilledButton dataCy='cancel_delete_button' name='Cancelar' className="bg-gray-500 text-[white]" onClick={() => setOpenModal(false)} />
            <FilledButton dataCy='delete_teacher_button' name='Deletar Professor' className="bg-red-500 text-[white]" onClick={onDeleteTeacher} />
          </div>
        )
      }
    </Modal>
  );
};

export default DeleteTeacherModal;
