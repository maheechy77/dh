interface Invoice{
    invoiceStatus:InvoiceStatus
    issueDate:string
    invoiceNumber:string
    id:string
    client:Client
    dueDate:string
    subject?:string
    lineItems?:LineItems[]
    notes?:string
    terms?:string
    createdAt:string
}

interface Client {
    clientStatus:ClientStatus
    id:string
    name:string
    email:string
    street:string
    city:string
    state:string
    zip:string
}

interface LineItems{
    id:string
    description:string
    quantity:number
    amount:number
}