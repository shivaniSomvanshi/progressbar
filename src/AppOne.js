import React, {useState} from 'react';
import './AppOne.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function AppOne(props) {
    const tabs =[
        {tabColor: '#75cfb8', toolContent:'Enabled', toolCount: '1'},
        {tabColor: '#ffc75f', toolContent:'Disabled', toolCount: '6'},
        {tabColor: '#1f6f8b', toolContent:'Draft', toolCount: '12'},
    ]
    const[toolContent, setToolContent]=useState(null);
    const[dotcolor, setDotColor]=useState(null);
    const[toolcount, setToolCount]=useState(null);
    const[shifting, setShifting]= useState(null);
    let widthsize= 0;
    let tabsLength= tabs.length;
    tabs.map((tab)=>{
        widthsize = widthsize + +tab.toolCount;
    })

    const mouseEnterHandler=(e, i)=>{
        if(widthsize){
        setToolCount(`${tabs[i].toolCount}`);
        setToolContent(`${tabs[i].toolContent}`);
        setDotColor(`${e.target.className}`);
     }
        if(i!==0){
            let j, test=0;
            for(j=0; j<=i-1; j++){
               test=test+parseInt(tabs[j].toolCount);
            }
            setShifting((300*(tabs[i].toolCount)/(2*widthsize) + 300*(test)/(widthsize)));
            console.log(shifting);
        }
        if(i==0){
            setShifting(300*(tabs[i].toolCount)/(2*widthsize));
        }
    }
    const displayTab=()=>{
        return tabs.map((tab, index)=>{
            let styling= null;
            if(index==0){
                styling='250px 0 0 250px';
            }
            else if(index==tabsLength-1){
                styling='0 250px 250px 0'
            }
            else{
                styling='0px'
            }
            return (
                    <div className='bar'>
                    <div className={tab.tabColor} onMouseEnter={(event)=>mouseEnterHandler(event, index)} onMouseLeave={()=>setToolContent(null)} style= {{backgroundColor: widthsize==0?'#c7cfb7': `${tab.tabColor}`, height: '8px', borderRadius: `${styling}`, color: 'transparent', width: widthsize==0?'100px': `${300*(tab.toolCount)/widthsize}`+ 'px'}}></div>
                    </div>)})}
    return (
    <div>
            <div className='tagPart' style={{display: `${toolContent?'block': 'none'}`, transform: `translate(${shifting}px, 0px)` }}>
                    <div className='tool'><span><FiberManualRecordIcon style={{color:`${dotcolor}`, height: '15px', width: '15px', paddingTop: '5px'}}/></span>{' '+ `${toolcount}`+ ' ' + `${toolContent}`}</div>
                    <div className='tip'></div>
            </div>        
            <div className='progressBar'>
                {displayTab()}
            </div>
    </div>
    );}

export default AppOne;