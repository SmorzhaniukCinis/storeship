export type settlement = {
    Area: string
    AreaDescription: string
    AreaDescriptionRu: string
    CityID: string
    Delivery1: string
    Delivery2: string
    Delivery3: string
    Delivery4: string
    Delivery5: string
    Delivery6: string
    Delivery7: string
    Description: string
    DescriptionRu: string
    IsBranch: string
    PreventEntryNewStreetsUser: string
    Ref: string
    SettlementType: string
    SettlementTypeDescription: string
    SettlementTypeDescriptionRu: string
    SpecialCashCheck: number
}

export type settlementsRes = {
    success: boolean
    data: settlement[]
    errors: []
    info: { totalCount: number }
    warnings: []
    messageCodes: []
    errorCodes: []
    warningCodes: []
    infoCodes: []
}