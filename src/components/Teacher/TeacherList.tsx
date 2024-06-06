"use client";

import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { useGetTeachersQuery } from '@/redux/api/teacherApi';

interface TeacherListProps {
  onUpdate: (teacher: ITeacher) => void;
  onDelete: (teacherId: string) => void;
}

const TeacherList = ({ onUpdate, onDelete }: TeacherListProps) => {
  const { data, isLoading, isSuccess, isError, error } = useGetTeachersQuery({});
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  useEffect(() => {
    if (isSuccess) {
      setTeachers(data?.data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data?.data, error, isError, isSuccess]);

  const columns: ColumnsType<ITeacher> = [
    {
      title: 'Título',
      dataIndex: 'title',
    },
    {
      title: 'Nome',
      dataIndex: 'firstname',
    },
    {
      title: 'Sobrenome',
      dataIndex: 'surname',
    },
    {
      title: 'Número de Telefone',
      dataIndex: 'teacher_number',
    },
    {
      title: 'RG',
      dataIndex: 'nationalId',
    },
    {
      title: 'Salário',
      dataIndex: "salary",
      render: (salary: string | number) => <span>{salary === null ? 'N/A' : salary}</span>,
    },
    {
      title: 'Data de Nascimento',
      dataIndex: 'dob',
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button type="primary" data-cy="update_teacher_modal_button" onClick={() => onUpdate(record)}>Atualizar</Button>
          <Button type="default"data-cy="delete_teacher_modal_button" danger onClick={() => onDelete(String(record._id))}>Apagar</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} pagination={false} loading={isLoading} className='shadow-sm' dataSource={teachers} scroll={{ x: 600 }} bordered />
    </>
  );
};

export default TeacherList;
