import React, { useEffect } from 'react';
import './App.css';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

interface Vehicles {
  id: number,
  createdAt: string
  type: "car" | "truck",
  model: Car | Truck
}


interface Car {
  seats: number,
  doors: number
}

interface Truck {
  wheelDrive: string,
  ecoClass: string
}


const App:  React.FC = () =>  {
  const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

  const vehicles: Vehicles[] = [
    {
    "id": 1,
    "type": "car",
    "createdAt": "2022-01-01 00:00:00",
    "model": {
    "seats": 2,
    "doors": 3,
    },
    },
    {
    "id": 2,
    "type": "truck",
    "createdAt": "2021-01-01 00:00:00",
    "model": {
    "wheelDrive": "8x8",
    "ecoClass": "3",
    },
    },
    {
      "id": 3,
      "type": "truck",
      "createdAt": "2021-01-01 00:00:00",
      "model": {
      "wheelDrive": "8x8",
      "ecoClass": "3",
      },
      },
      {
        "id": 4,
        "type": "truck",
        "createdAt": "2021-01-01 00:00:00",
        "model": {
        "wheelDrive": "8x8",
        "ecoClass": "3",
        },
        },
    ];

    const {users, error, loading} = useTypedSelector(state => state.user)

    console.log(users)

    if (loading) {
      return <h1>Идет загрузка...</h1>
  }
  if (error) {
      return <h1>{error}</h1>
  }
    
  return (
    <>
      {vehicles.map((el)=> {
        return <div key={el.id}>
          <p>
          {el.type}
          </p>
          {/* <p>
          {el.model.seats || el.model.wheelDrive} --
          {el.model.doors || el.model.ecoClass}
          </p> */}
        </div>
      })
    }
    {
      users && users.map((user) => {
        return (
          <div key={user.id}>{user.name}</div>

        )
      })
    }
    </>
  );
}

export default App;
