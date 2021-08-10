interface Address {
    street1?: string;
    street2?: string;
    zipCode?: string;
    city: string;
    countryCode?: string;
}
export interface Customer {
    name: string;
    orgNumber?: string;
    type: 0 | 1;
    billingAddress: Address;
    deliveryAddress?: Address;
    emailAddress?: string;
    phoneNumber?: string;
    vat?: string;
    includeVatNumberOnInvoice?: boolean;
    autogiroPayerNumber?: string;
    inactive?: boolean;
    showCurrencyCode?: boolean;
    language?: "SV" | "EN";
    template?: 0 | 1;
    referencePersonsList?: [];
    glnNumber?: string;
}
export interface Article {
    unitId?: number | null;
    text: string;
    unitPrice: number;
    vat: 0 | 6 | 12 | 25;
    euVatProductType?: 0 | 1 | 2 | 24 | 27 | 28;
    inactive?: boolean;
}
interface InvoiceRow {
    id?: number;
    articleId?: number;
    quantity: number;
    description?: number | null;
    overriddenDescription?: string | null;
    unit: {
        name: string;
        id?: number;
    };
    unitPrice?: number | null;
    overriddenUnitPrice?: number | null;
    orderIndex?: number;
    rot?: boolean;
    rut?: boolean;
    vat?: number;
    overriddenVat?: number | null;
    euVatProductType?: 0 | 1 | 2 | 24 | 27 | 28;
    periodisation?: boolean;
    periodisationStartYear?: number | null;
    periodisationStartMonth?: number | null;
    periodisationEndYear?: number | null;
    periodisationEndMonth?: number | null;
    dimensions?: string[];
}
export interface Invoice {
    ownerId?: number | null;
    customerId: number;
    customerReference?: {
        referenceId?: number;
        referenceName?: string;
    };
    contactPerson?: string | null;
    notes?: string | null;
    dimensions?: string[];
    deliveryDate: string;
    postingDate: string;
    dueDate: string;
    showReferencePersonInAddress?: boolean;
    showShippingAddress?: boolean;
    showCurrencyCode?: boolean;
    language: "SV" | "EN";
    currency: string;
    creditedInvoiceId?: number | null;
    reminderCost?: number | null;
    reminderNotes?: string | null;
    paymentOptionId?: number | null;
    rows: InvoiceRow[];
    externalInvoiceReferences?: {
        systemName: string;
        externalId: string;
    }[];
    template?: 0 | 1;
}
export interface PutInvoice extends Invoice {
    useStrictValidation?: boolean;
}
export interface GetInvoice extends Required<Invoice> {
    rows: Required<InvoiceRow>[];
    id: number;
    status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 100;
    serialNumber: number;
    ocr: number;
    vatNumber: string | null;
    roundValue: boolean;
    credit: boolean;
    payments: {
        amount: number;
        bookedAmount: number;
        date: string;
    }[];
    paymentTerms: number;
    lastUpdated: string;
    warnings: {
        message: string | null;
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | -1;
        level: 0 | 1 | 2 | 3 | 4;
        category: 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1;
    }[];
    paymentReminderTemplate: string | null;
    reminderDueDate: string | null;
    ownerName: string | null;
    canSendLastVersionToPagero: boolean;
    hasNoInvalidEuVatProductTypes: boolean;
    isEUCustomer: boolean;
    invoicePaymentBgNumber: string | null;
    invoicePaymentMethod: 0 | 1 | 2;
    paymentState: 1 | 2 | 3 | 4 | 5;
    attachments: {
        fileName: string | null;
        contentType: string | null;
        data: string | null;
        id: string;
    }[];
    customerName: string | null;
    customerOrgNo: string | null;
    totalAmount: number;
    totalTax: number;
    fromRecurring: boolean;
    recurringId: number | null;
    paymentDate: string | null;
    project: string | null;
    costCenter: string | null;
    leftToPay: number | null;
    creditStatus: 0 | 1 | 2;
    reminderInvoicesCount: number | null;
    rot: boolean | null;
    rut: boolean | null;
    houseWorkApplicationIsFiled: boolean;
    fromQuotation: boolean;
    recurringFrequency: 0 | 1 | 2 | 3;
    recurringSendType: 0 | 1;
    totalAmountSummary: {
        type: string | null;
        value: number;
    }[];
}
export {};
