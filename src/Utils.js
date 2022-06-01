// Добавление в конец списка
export const addValueInArray = (arr, value) => { 
    let copy = arr; 
    copy.push(value);
    return copy;
};


// Удаление последнего значения в списке
export const subValueInArray = (arr) => {
    let copy = arr;
    copy.pop(); 
    return copy;
}

// Изменение значения по индексу
export const changeValueInArray = (arr, index, value) => {
    let copy = arr; 
    copy[index] = value; 
    return copy;
}

// Разница между датами в днях
export const subDateDay = (date_1, date_2) => { 
    return Math.ceil((date_1 - date_2) / (3600 * 24 * 1000)) 
}


// Форматирование даты в строку
export const formatDate = (date) => {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    var yy = date.getFullYear();
    return dd + '.' + mm + '.' + yy;
}

export async function sendRequestForSearchHotel (inSelectedDate, outSelectedDate, selectHuman, value, setValue) {
    let age_man = 36;
    let dateIn = formatDate(inSelectedDate)
    let p  = '';
    for (let i = 0; i !== selectHuman; i++) {
        p += '0' + dateIn.split('.')[0] + dateIn.split('.')[1] + (dateIn.split('.')[2] - age_man) + '0';
        if (i !== selectHuman - 1) {
            p += '.';
        }
    } 
    

    const val = (value) => { return {"rooms": value} };

    for (let i = 0; i !== value.length; i++) {
        p += '.0' + dateIn.split('.')[0] + dateIn.split('.')[1] + (dateIn.split('.')[2] - value[i]) + '0'
    }
    let f7 = subDateDay(outSelectedDate, inSelectedDate);

    var request = `http://localhost:9000/hotel24?xml=31&action=price&tid=211&flt=100410000050&flt2=100510000863&id_price=-1&p=${p}&data=${dateIn}&d2=1&f7=${f7}&F4=199010179715&F4=199010240061&F4=199010219291&F4=199010240062&promocode=&mode=ROOMS`;

    getRequestVarieble(request).then(
        data => {
            return data;
        }).then (r => {
            setValue(r["rooms"]);
        }
    );
}

async function getRequestVarieble (request) {
    let responce = await fetch(request); 
    let data = await responce.json();
    return data;
}