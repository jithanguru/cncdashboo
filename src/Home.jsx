import React, { useState } from "react";
import "./Home.css"
import { cncData,machineLive } from "./MachineData";



export default function Home() {
  const [selectedMachine, setSelectedMachine] = useState(cncData[0]);

   const [selectedMachineLive, setSelectedMachineLive] = useState(machineLive[0]);

   
  return (
    <div className="container">
      {/* Dashboard */}
      <div className="dashboard">
        <h2 className="dashboard-label">Dashboard</h2>
        <div className="dashboard-table">
        
          <div >
               <p><strong>Machine:</strong> <span>{selectedMachine.name}</span></p>
               <p><strong>Status:</strong><span> {selectedMachine.status}</span></p>
               <p><strong>Temperature:</strong> <span>{selectedMachine.temperature}</span></p>
           </div>
           <div >
                <p><strong>Load:</strong> <span>{selectedMachine.load}</span></p>
                <p><strong>Start time:</strong><span> {selectedMachine.startTime}</span></p>
                <p><strong>End time :</strong><span> {selectedMachine.endTime}</span></p>
           </div>
         </div>




      </div>

      {/* CNC Machine Roadmap */}
      <div className="cnc-container">
        {cncData.map((machine) => (
          <button
            key={machine.id}
            onClick={() => setSelectedMachine(machine)}
            className="machine-button"
          >
            {machine.name}
          </button>
        ))}
      </div>

      {/*cnc machine live updates */}

          <div className="live-updates-container">
             <strong >live updates </strong>
           

            <div>
             
            </div>

          </div>



    </div>
  );
}
