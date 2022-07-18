export default function dateArrToLocalDateTime(dateArr: string[]){
    const intDateArr = dateArr.map(elem => parseInt(elem));
    const year = intDateArr[0];
    const month = intDateArr[1];
    const day = intDateArr[2];
    const hour = intDateArr[3];
    const minute = intDateArr[4];

    const date = new Date(year,month,day,hour,minute);

    return date.toISOString();
//    return `${dateArr[0]}-${dateArr[1]}-${dateArr[2]}T${dateArr[3]}:${dateArr[4]}`
}