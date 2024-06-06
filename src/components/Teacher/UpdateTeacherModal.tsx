import { useUpdateTeacherMutation } from '@/redux/api/teacherApi';
import { FilledButton } from '@/shared/UIs/CustomButtons';
import { InputField, SelectField } from '@/shared/UIs/InputField';
import { Modal, message } from 'antd';
import React, { useState, useEffect } from 'react';

const preFix = [
  { value: 'Ajudante', label: 'Ajudante' },
  { value: 'Mestre', label: 'Mestre' },
  { value: 'Doutor', label: 'Doutor' },
  { value: 'Professor', label: 'Professor' }
];

interface IModalProps {
  isModalOpen: boolean;
  setOpenModal: (isOpen: boolean) => void;
  teacher: any;
  onUpdate: (teacher?: any) => void;
}

const UpdateTeacherModal = ({ isModalOpen, setOpenModal, teacher, onUpdate }: IModalProps) => {
  const [nationalId, setNationalId] = useState<string>(teacher.nationalId || '');
  const [title, setTitle] = useState<string>(teacher.title || '');
  const [firstName, setFirstName] = useState<string>(teacher.firstname || '');
  const [surname, setSurname] = useState<string>(teacher.surname || '');
  const [dob, setDob] = useState<string>(teacher.dob || '');
  const [phoneNumber, setPhoneNumber] = useState<number>(teacher.teacher_number || 0);
  const [salary, setSalary] = useState<number>(teacher.salary || 0);

  const [updateTeacher, { isLoading, isSuccess, isError, error }] = useUpdateTeacherMutation();

  const onSelectTitleChange = (value: string) => {
    setTitle(value);
  };

  const onSubmitDetails = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!nationalId || !firstName || !surname || !dob || !phoneNumber || !salary || !title) {
      message.error('Por favor preencha todos os campos');
      return;
    }
    const payload = {
      id: teacher._id,
      firstname: firstName,
      surname: surname,
      nationalId: nationalId,
      dob: dob,
      teacher_number: phoneNumber,
      salary: salary,
      title: title
    };

    if (payload) {
      await updateTeacher(payload);
      onUpdate(payload);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      message.success('Professor atualizado com sucesso!');
      setOpenModal(false);
    }
    if (isError) {
      const errorMesg = error as any;
      message.error(errorMesg?.message);
    }
  }, [isSuccess, isError, error, setOpenModal]);

  return (
    <Modal
      title="Atualizar Professor"
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
      <form className="flex flex-col gap-2 mt-[1rem]" onSubmit={onSubmitDetails}>
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <InputField title='RG' data-cy='nationalId_input' value={nationalId} onChange={(e) => setNationalId(e.target.value)} />
          <SelectField title='Título' data-cy='title_input' options={preFix} value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <InputField title='Nome' data-cy='firstName_input' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <InputField title='Sobrenome' data-cy='surname_input' value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <InputField title='Data de Nascimento' type='date' data-cy='dob_input' value={dob} onChange={(e) => setDob(e.target.value)} />
          <InputField title='Número de Telefone' type='number' data-cy='phone_input' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value as unknown as number)} />
        </div>
        <InputField title='Salário' type='number' data-cy='salary_input' value={salary} onChange={(e) => setSalary(e.target.value as unknown as number)} />
        {
          isLoading ? <p className='text-center mt-3 font-bold'>Atualizando...</p> : <FilledButton dataCy='update_teacher_button' name='Atualizar Professor' className="bg-blue-500 text-[white] mt-[1rem]" />
        }
      </form>
    </Modal>
  );
};

export default UpdateTeacherModal;
