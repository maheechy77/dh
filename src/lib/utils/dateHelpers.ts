import {isBefore} from ("date-fns")

// Do yyyy-mm-dd to mm-dd-yyyy

export const convertDate = (myDate:string):string =>{
   const [year, month , date] = spliteDate(myDate);
   return `${parseInt(month)} / ${parseInt(date)} / ${year}`;
}


export const isLate = (myDate:string):boolean => {
    const [year, month , date] = spliteDate(myDate);
    const dueDate = new Date(parseInt(year), parseInt(month),parseInt(date));
    const today = new Date();
    return isBefore(dueDate,today);
}

export const spliteDate = (myDate:string):string[] => {
    return myDate.split("-");
}