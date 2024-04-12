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
      <th className='border border-black'><InputBar id='2' /></th>
      <th className='border border-black'><InputBar id='3' /></th>
      <th className='border border-black'><InputBar id ='4' /></th>
      <th className='border border-black'><InputBar id ='5' /></th>
      <th className='border border-black'><InputBar id='6' /></th>
      </tr>
   
      <tr className='border border-black'>
        <th className='border border-black'>MONDAY</th>
        <td className='border border-black'><Input_Subjects id='1' /></td>
        <td className='border border-black'><Input_Subjects id='2' /></td>
        <td className='border border-black'><Input_Subjects id='3' /></td>
        <td className='border border-black'><Input_Subjects id='4' /></td>
        <td className='border border-black'><Input_Subjects id='5' /></td>
        <td className='border border-black'><Input_Subjects id='6' /></td>
      </tr>

      <tr className='border border-black'>
        <th className='border border-black'>TUESDAY</th>
        <td className='border border-black'><Input_Subjects id='7' /></td>
        <td className='border border-black'><Input_Subjects id='8' /></td>
        <td className='border border-black'><Input_Subjects id='9' /></td> 
        <td className='border border-black'><Input_Subjects id='10' /></td>
        <td className='border border-black'><Input_Subjects id='11' /></td>
        <td className='border border-black'><Input_Subjects id='12' /></td>
      </tr>

      <tr className='border border-black'>
        <th className='border border-black'>WEDNESDAY</th>
        <td className='border border-black'><Input_Subjects id='13' /></td>
        <td className='border border-black'><Input_Subjects id='14' /></td>
        <td className='border border-black'><Input_Subjects id='15' /></td>
        <td className='border border-black'><Input_Subjects id='16' /></td>
        <td className='border border-black'><Input_Subjects id='17' /></td>
        <td className='border border-black'><Input_Subjects id='18' /></td>
      </tr>

      <tr className='border border-black'>
        <th>THURSDAY</th>
        <td className='border border-black'><Input_Subjects id='19' /></td>
        <td className='border border-black'><Input_Subjects id='20' /></td>
        <td className='border border-black'><Input_Subjects id='21' /></td>
        <td className='border border-black'><Input_Subjects id='22' /></td>
        <td className='border border-black'><Input_Subjects id='23' /></td>
        <td className='border border-black'><Input_Subjects id='24' /></td>
      </tr>

      <tr className='border border-black'>
        <th className='border border-black'>FRIDAY</th>
        <td className='border border-black'><Input_Subjects id='25' /></td>
        <td className='border border-black'><Input_Subjects id='26' /></td>
        <td className='border border-black'><Input_Subjects id='27' /></td>
        <td className='border border-black'><Input_Subjects id='28' /></td>
        <td className='border border-black'><Input_Subjects id='29' /></td>
        <td className='border border-black'><Input_Subjects id='30' /></td>
      </tr>
      </table>
    </div>
  )
}


export default Card