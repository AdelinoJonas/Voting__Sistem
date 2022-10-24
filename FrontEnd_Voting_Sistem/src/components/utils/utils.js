import { format, parseISO } from "date-fns";

export function formatDate(date){
    const generateDate = new Date(parseISO(date));
    return format(generateDate, 'dd/MM/yyyy');
}