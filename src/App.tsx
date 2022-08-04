import React from 'react';
import './App.css';



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


function App() {
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
  return (
    <div className="App">
      {vehicles.map((el: Vehicles)=> {
        return <div>
          <p>
          {el.type}
          </p>
          <p>
          {el.model.seats || el.model.wheelDrive} --
          {el.model.doors || el.model.ecoClass}
          </p>
        </div>
      })
    }
    </div>
  );
}

export default App;
