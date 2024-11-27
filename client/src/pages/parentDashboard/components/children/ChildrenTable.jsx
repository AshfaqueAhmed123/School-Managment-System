import React from 'react'

const ChildrenTable = () => {
  return (
    <div>
      <h1 className='text-3xl mb-5 text-white capitalize'>you children admitted in college</h1>
      <table className='w-full bg-[#2E2E48] text-white p-8'>
          <thead>
            <br />
            <tr>
              <th>SNO</th>
              <th>Name</th>
              <th>Class</th>
              <th>performace</th>
            </tr>
          </thead>
          <br />
          <br />
          <tbody>
            <tr>
              <th>1</th>
              <th>Ashfaque</th>
              <th>matric [x]</th>
              <th>Good</th>
            </tr>
            <br />
            <tr>
              <th>1</th>
              <th>Ashfaque</th>
              <th>matric [x]</th>
              <th>Good</th>
            </tr>
            <br />
            <tr>
              <th>1</th>
              <th>Ashfaque</th>
              <th>matric [x]</th>
              <th>Good</th>
            </tr>
          </tbody>
          <br />
          <br />
      </table>
    </div>
  )
}

export default ChildrenTable