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

export type postCommonRes<T> = {
    success: boolean
    data: T[]
    errors: []
    info: { totalCount: number }
    warnings: []
    messageCodes: []
    errorCodes: []
    warningCodes: []
    infoCodes: []
}

export type postDepartment = {
    "SiteKey": string
    "Description": string
    "DescriptionRu": string
    "ShortAddress": string
    "ShortAddressRu": string
    "Phone": string
    "TypeOfWarehouse": string
    "Ref": string
    "Number": string
    "CityRef": string
    "CityDescription": string
    "CityDescriptionRu": string
    "SettlementRef": string
    "SettlementDescription": string
    "SettlementAreaDescription": string
    "SettlementRegionsDescription": string
    "SettlementTypeDescription": string
    "SettlementTypeDescriptionRu": string
    "Longitude": string
    "Latitude": string
    "PostFinance": string
    "BicycleParking": string
    "PaymentAccess": string
    "POSTerminal": string
    "InternationalShipping": string
    "SelfServiceWorkplacesCount": string
    "TotalMaxWeightAllowed": string
    "PlaceMaxWeightAllowed": string
    "SendingLimitationsOnDimensions": {
        "Width": number
        "Height": number
        "Length": number
    },
    "ReceivingLimitationsOnDimensions": {
        "Width": number
        "Height": number
        "Length": number
    },
    "Reception": {
        "Monday": string
        "Tuesday": string
        "Wednesday": string
        "Thursday": string
        "Friday": string
        "Saturday": string
        "Sunday": string
    },
    "Delivery": {
        "Monday": string
        "Tuesday": string
        "Wednesday": string
        "Thursday": string
        "Friday": string
        "Saturday": string
        "Sunday": string
    },
    "Schedule": {
        "Monday": string
        "Tuesday": string
        "Wednesday": string
        "Thursday": string
        "Friday": string
        "Saturday": string
        "Sunday": string
    },
    "DistrictCode": string
    "WarehouseStatus": string
    "WarehouseStatusDate": string
    "CategoryOfWarehouse": string
    "Direct": string
    "RegionCity": string
    "WarehouseForAgent": string
    "MaxDeclaredCost": string
    "WorkInMobileAwis": string
    "DenyToSelect": string
    "CanGetMoneyTransfer": string
    "OnlyReceivingParcel": string
    "PostMachineType": string
    "PostalCodeUA": string
    "WarehouseIndex": string
}