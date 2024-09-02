import * as React from "react";

import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
  Button,
} from "@fluentui/react-components";
import { useRouter } from "next/router";


const columns = [
  { columnKey: "id", label: "id" },
  { columnKey: "name", label: "name" },
  { columnKey: "email", label: "email" },
  { columnKey: "role", label: "role" },
  { columnKey: "action", label: "action" },

];

 const  CustomTable= ({allUser, setAllUser}) => {
    const router = useRouter();
    React.useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('dummyToken'));
        if(!token){
          router.push('/login');
        }
      },[])

     const handleDelete= (id) =>{
       setAllUser(allUser.filter(item => item.id !== id))
     }
  return (
    <Table className="ml-5" arial-label="Default table" style={{ minWidth: "510px" }}>
        <div> 
            <h1 className='text-4xl text-center mt-5 '>All USers</h1>
        </div>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell className="font-bold text-xl" key={column.columnKey}>
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {allUser?.slice(0,4).map((user) => (
          <TableRow key={user.id}>
            <TableCell>
                {user.id}
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {user.firstName}
              </TableCellLayout>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                {user.role}
            </TableCell>
            <TableCell>
                <Button>Edit</Button>
                <Button onClick={()=>handleDelete(user.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Button>Next</Button>
      <Button >Prev</Button>
    </Table>
  );
};

export default CustomTable;