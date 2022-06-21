
import React from 'react'; 
import {useState} from 'react'; 

function FilterBlock ({setActive, active, filter, setFilterSetting}) { 

    const [minValue, setMinValue] = useState(0); 
    const [maxValue, setMaxValue] = useState(150000); 
    const [maxBed, setMaxBed] = useState(10);
    
    const saveFilterSetting = (mV, m1, m2) => { 
        setFilterSetting({"ot": minValue, "do": maxValue, "maxBed": maxBed});
        console.log(filter);
    }

    return ( 
        <div className={active ? " " : "non-visible"}> 
            <div className="p-a filter-block">
            <h2>Фильтр</h2>
            <div className="setting-block">
                <h3 onClick={() => console.log(minValue)} className="name-setting-block">Цена</h3>
                    <div className="input-cust">
                        <p>От</p>
                        <input className="custom-input" type="text" value={minValue} onChange={(event) => setMinValue(event.target.value)}/>
                    </div>  

                    <div className="input-cust">
                        <p>До</p>
                        <input className="custom-input" type="text" value={maxValue} onChange={(event) => setMaxValue(event.target.value)}/>
                    </div>
            </div>
            
            <div className="setting-block">
            <h3 onClick={() => console.log(minValue)} className="name-setting-block">Количество мест</h3>
            <div className="input-cust">
                        <p>Кол-во мест</p>
                        <input className="custom-input" type="text" value={maxBed} onChange={(event) => setMaxBed(event.target.value)}/>
                    </div>
            </div>

            <div className="setting-block">
                <div className="input-cust">
                <button onClick={() => saveFilterSetting(minValue, maxValue, maxBed)} className='select-hotel'>Применить</button>
                <button onClick={() => setActive(false)} className='select-hotel'>Закрыть</button>
                </div>

            </div>
        </div>
            
        </div>
    )

} export default FilterBlock;