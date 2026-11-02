// The back end sends LocalDateTime as [year, month (1-based), day, hour, minute].
// datetime-local inputs only accept "YYYY-MM-DDTHH:mm", so build that string directly
// instead of going through Date, which would shift the month and the time zone.
export default function dateArrToLocalDateTime(dateArr: string[]){
    const [year, month, day, hour = "0", minute = "0"] = dateArr.map(String);
    const pad = (value: string) => value.padStart(2, "0");

    return `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}`;
}
