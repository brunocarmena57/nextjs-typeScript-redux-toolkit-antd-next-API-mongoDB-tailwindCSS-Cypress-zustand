'use client'

import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useGetStudentsQuery } from '@/redux/api/studentApi';
import { useStudentStore } from '@/store/useStudentStore';

// Define the Student type if not defined elsewhere
interface Student {
  id: string;
  firstname: string;
  surname: string;
  student_number: string;
  nationalId: string;
  dob: string;
}

const StudentList: React.FC = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetStudentsQuery({});
  const { students, setStudents, counter, resetCounter } = useStudentStore();

  useEffect(() => {
    if (isSuccess && data?.data) {
      setStudents(data.data);
    }
    if (isError) {
      console.error(error);
    }
  }, [data, error, isError, isSuccess, setStudents]);

  const columns: ColumnsType<Student> = [
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
      dataIndex: 'student_number',
    },
    {
      title: 'RG',
      dataIndex: 'nationalId',
    },
    {
      title: 'Data de Nascimento',
      dataIndex: 'dob',
    },
  ];

  return (
    <>
      <div style={{ marginBottom: '16px' }}>
        <span style={{ marginLeft: '16px' }}>Quantidade de Estudantes: {counter}</span>
      </div>
      <Table
        columns={columns}
        pagination={false}
        loading={isLoading}
        className="shadow-sm"
        dataSource={students}
        scroll={{ x: 600 }}
        bordered
      />
    </>
  );
};

export default StudentList;
