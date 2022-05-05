import React from 'react';

function ChildAge ({n, selectedIndex, v, setValue}) {
    const addValueInMassive = (value) => {
        let copy = v; 
        copy[selectedIndex] = value;
        setValue(copy);
    }
    return (
        <div className="set-child-age">
            <p>{n + " ребенок"}</p>
            <select onChange={event => addValueInMassive(event.target.value)}>
                <option disabled>Укажите возраст ребенка</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>16</option>
                <option>17</option>
            </select>
        </div>

    );

} export default ChildAge;