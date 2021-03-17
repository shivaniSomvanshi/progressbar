import { useState } from 'react';
import './App.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function App() {
  const [green, setGreen]= useState('5');
  const [yellow, setYellow]= useState('2');
  const [blue, setBlue]= useState('3');
  const [width, setWidth]= useState('10');
  const [target, setTarget]= useState(null);

  let tagsChange= {
    value:null,
    status:null,
    position: 0
  }
  let tipChange={
    position: 0
  }

  let dotcolor= null;
  if(target=='green'){
    tagsChange.value=green;
    tagsChange.status='enabled';
    tagsChange.position='0px';
    tipChange.position='-100px';
    dotcolor= '#75cfb8';
  }else if(target=='yellow'){
    tagsChange.value=yellow;
    tagsChange.status='disabled';
    tagsChange.position='100px';
    dotcolor='#ffc75f';
  }else{
    tagsChange.value=blue;
    tagsChange.status='draft';
    tagsChange.position='170px';
    dotcolor='#1f6f8b';
  }
  return (
    <div className="app">
      <div className='tagPart'>
        <div  style={{position:'relative', left: `${tagsChange.position}`}} className='tag'><span><FiberManualRecordIcon style={{color:`${dotcolor}`, height: '15px', width: '15px', paddingTop: '5px'}}/></span>{`${tagsChange.value} ${tagsChange.status}`}</div>
        {/* <div  style={{position:'relative', left: `${tagsChange.position}`}} className='tag'>{`${tagsChange.value} ${tagsChange.status}`}</div> */}
         <div style={{position:'relative', left: `${tipChange.position}`, top:'25px'}} className='tip'></div>
      </div>
      <div className='bar'>
          <div className='green' onMouseEnter={(e)=>{setTarget(e.target.className)}} style={{width: `${250*green/width}`+ 'px'}}>GREEN</div>
          <div className='yellow' onMouseEnter={(e)=>{setTarget(e.target.className)}} style={{width: `${250*yellow/width}`+ 'px'}}>YELLOW</div>
          <div className='blue' onMouseEnter={(e)=>{setTarget(e.target.className)}}style={{width: `${250*blue/width}`+ 'px'}}>BLUE</div>
      </div>
    </div>
  );
}

export default App;
