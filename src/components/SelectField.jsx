import React, {useState} from 'react'; 
import ChildModal from './ChildModal.jsx';

function SelectField ({options}) { 
    
    const [childModalActive, setChildModalActive] = useState(true);
    let selectedValue;

    const getIDOpt = (opt) => {
        setChildModalActive(true);
        selectedValue = opt;
        return 
    }
    
    return (
        <div className="select-field">
            <select className='inp-date'>
                {
                    options.map(opt => <option onClick={() => getIDOpt(opt)} key={options.indexOf(opt)}>{opt}</option>)
                }
            </select>     
            
            <ChildModal active={childModalActive} setActive={setChildModalActive} count={selectedValue}/>
        </div>
    );

} export default SelectField; 