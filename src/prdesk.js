import React from 'react'
import prdesk2 from './Images/prdesk2.png';
import prpoints from './Images/prpoints.png';

export default function Prdesk() {
  return (
    <div className="prdesk">
      <div>
        <h1 className="prheading">PR DESK </h1>
        <p className="prname1">MOKSHIT DOSHI</p>
        <p className="prnamecn1">9324147596</p>
        <p className="prname2">HIRAL JADEJA</p>
        <p className="prnamecn2">8104097198</p>
        <p className="prname3">KHUSHI JAIN</p>
        <p className="prnamecn3">9892717210</p>
        <p className="prname4">JAIMIN UPADHYAY</p>
        <p className="prnamecn4">9082272503</p>
        <p className="prname5">DAKSH THAKER</p>
        <p className="prnamecn5">9004286466</p>
        <p className="prname6">PARTH PAWAR</p>
        <p className="prnamecn6">9004316687</p>
        <img src={prdesk2} alt="prdesk" className="prdesk2" ></img>
      </div>
      <div>
        <h1 className="prpoints">PR POINTS</h1>
        <table className='table'>
          <div className='tl'></div>
          <tr>
            <th className='ts'></th>
            <th className='ts'>1ST</th>
            <th className='ts'>2ND</th>
            <th className='ts'>3RD</th>
          </tr>
          <tr>
            <th className='ts'>ULTRAMATRIX (LEVEL 1)</th>
            <td className='ts'>3000</td >
            <td className='ts'>1500</td>
            <td className='ts'>750</td>
          </tr>
          <tr>
            <th className='ts'>OMNIMATRIX (LEVEL 2)</th>
            <td className='ts'>2000</td>
            <td className='ts'>1000</td>
            <td className='ts'>500</td>
          </tr>
          <tr>
            <th className='ts'>UNITRIX (LEVEL 3)</th>
            <td className='ts'>1000</td>
            <td className='ts'>500</td>
            <td className='ts'>250</td>
          </tr>
        </table>
      </div>
      <div>
      <img src={prpoints} alt="prpoint" className="prpoint2" ></img>
      </div>



    </div>

  )
}

