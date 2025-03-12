import React,{useState} from 'react';
import UserCard from '../components/userCard';
            function Dashboard() {
                const [users, setUsers] = useState([
                  { name: 'John', email: 'john555@.com', age: 25 },
                  { name: 'Jane', email: 'jane123@.com', age: 30 },
                  { name: 'Alice', email: 'alice342@.com', age: 28 },
                    { name: 'Bob', email: 'bob678@.com', age: 35 },
                    { name: 'Eve', email: 'eve999@.com', age: 32 },
                ]);
              
                return (
                  <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {users.map((user, index) => (
                        <UserCard key={index} name={user.name} email={user.email} age={user.age} />
                      ))}
                    </div>
                  </div>
                );
              }
              export default Dashboard;
              