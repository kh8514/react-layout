import Body from "components/card/Body"
import Card from "components/card/Card"
import Table from "components/card/Table"
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

const data = [
    {
      id: uuidv4(),
      name: 'dh',
      age: 23,
      phone: '010-1234-1234',
      email: 'dhkang@naver.com',
      addr: 'seoul, korea',
    },
    {
      id: uuidv4(),
      name: 'mike',
      age: 23,
      phone: '010-1234-1234',
      email: 'mike@naver.com',
      addr: 'seoul, korea',
    },
    {
        id: uuidv4(),
        name: 'dh',
        age: 23,
        phone: '010-1234-1234',
        email: 'dhkang@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'mike',
        age: 23,
        phone: '010-1234-1234',
        email: 'mike@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'dh',
        age: 23,
        phone: '010-1234-1234',
        email: 'dhkang@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'mike',
        age: 23,
        phone: '010-1234-1234',
        email: 'mike@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'dh',
        age: 23,
        phone: '010-1234-1234',
        email: 'dhkang@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'mike',
        age: 23,
        phone: '010-1234-1234',
        email: 'mike@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'dh',
        age: 23,
        phone: '010-1234-1234',
        email: 'dhkang@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'mike',
        age: 23,
        phone: '010-1234-1234',
        email: 'mike@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'dh',
        age: 23,
        phone: '010-1234-1234',
        email: 'dhkang@naver.com',
        addr: 'seoul, korea',
      },
      {
        id: uuidv4(),
        name: 'mike',
        age: 23,
        phone: '010-1234-1234',
        email: 'mike@naver.com',
        addr: 'seoul, korea',
      },
  ];



const DashboardWrapper = () => {

    const column = useMemo(() => [
        { id: 'row', header: 'No', accessorFn: (row)=> { 
            console.log("accessorFn  ::",row)
            return row?.index ? row.index+1 : 1 
        }},
        { id: 'id', header: '아이디', accessorFn: (row) => row.id },
        { id: 'name', header: '이름', accessorFn: (row) => row.name },
        { id: 'age', header: '나이', accessorFn: (row) => row.age },
        { id: 'phone', header: '전화번호', accessorFn: (row) => row.phone },
        { id: 'email', header: '이메일', accessorFn: (row) => row.email },
        {
          id: 'addr',
          header: '주소',
          accessorFn: (row) => row.addr,
        },
      ],[]);

    console.log("column", column)
    return (
        <Body>
            <h5 class="card-header">Table Basic</h5>
            <Card header={"header title 1 "}>
                <Table data={data} columns={column}/>
            </Card>
            <Card header={"header title 2"}/>
            <Card header={"header title 3 "}/>
        </Body>
    )
}

export default DashboardWrapper