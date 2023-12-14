export const sumLineItems = (lineItems:LineItems[] | undefined):number => {
    if (!lineItems) return 0;
    return lineItems.reduce((prev,cur)=> prev + cur.amount , 0)
}

export const centsToDollars = (cents:number):string =>{
    const dollar = cents/100;
    const addDecimels = twoDecimels(dollar);
    return addThousandSeparator(addDecimels);
}

export const twoDecimels = (myNum:number):string => {
    return myNum.toFixed(2);
}

export const addThousandSeparator = (myNum:string):string =>{
    return myNum.replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

export const sumInvoices = (invoices:Invoice[] | undefined):number =>{
    if(!invoices) return 0;
    return invoices.reduce((prev,cur)=>{
        const invoiceSum = sumLineItems(cur.lineItems);

        return prev + invoiceSum;
    },0)
}