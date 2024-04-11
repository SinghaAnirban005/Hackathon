import React from 'react'
import InputBar from './InputBar'
import Input_Subjects from './Input_Subjects'


function Card() {
  return(
    
    <div className='flex justify-center'>
<table className='border border-black'>
      <tr className='border border-black'>
        <th className='border border-black'>Days</th>
      <th className='border border-black' ><InputBar id='1' /></th>
      <th className='border border-black'><InputBar id= '2' /></th>
      <th className='border border-black'><InputBar id='3' /></th>
      <th className='border border-black'><InputBar id = '4' /></th>
      <th className='border border-black'><InputBar id = '5' /></th>
      <th className='border border-black'><InputBar id='6' /></th>
      </tr>
   
      <tr className='border border-black'>
        <th className='border border-black'>MONDAY</th>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
      </tr>

      <tr className='border border-black'>
        <th className='border border-black'>TUESDAY</th>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td> 
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
      </tr>

      <tr className='border border-black'>
        <th className='border border-black'>WEDNESDAY</th>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
      </tr>

      <tr className='border border-black'>
        <th>THURSDAY</th>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
      </tr>

      <tr className='border border-black'>
        <th className='border border-black'>FRIDAY</th>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
        <td className='border border-black'><Input_Subjects /></td>
      </tr>
      </table>
    </div>
  )
}


export default Card