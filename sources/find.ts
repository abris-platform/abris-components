type  TOperation = "EQ" | "NEQ" | "G" | "L" | "GEQ" | "LEQ" | "ISN" | "ISNN" | "C";
export interface IFindOperation {
    op: string;
    text: string;
    func?: string;
}

export interface IFindCompare {
    field: string;
    op: TOperation;
    value: string;
}

export interface IFindOperand {
    levelup: boolean;
    operand: {
        field: string,
        op: TOperation,
        value: string | Number,
        path?: string[],
        search_in_key?: boolean,
        m_order?: boolean,
        func?: string,
    },
}

export interface IAggregate {
    func: string,
    field: string,
}
  
export interface IFindLogic {
    strict: boolean;
    operands: IFindOperand[];
    aggregate?: IAggregate[];
}

export interface IFindProperty {
    operation: KnockoutObservable<string>;
    val1: KnockoutObservable<any>;
    val2: KnockoutObservable<any>;
}

export class Localization {
    static englishStrings = {
        filtercontains: "Contains",
        filterequal: "Equal",
        filterisnull: "Empty",
        filterisnotnull: "Not empty",
        filtergreater: "Greater",
        filterless: "Less",
        filtergreaterequal: "Greater or equal",
        filterlessequal: "Less or equal",
        filterdatenotequal: "Not equal",
        filterdateequal: "Equal",
        filterdategreater: "From",
        filterdateless: "To",
    };
    static getString = (stringId: string) => {
        return this.englishStrings[stringId];
    } 
}


export var operationsMap: { [index: string]: IFindOperation[] } = {};
export function operationsMapReload () {
    var defaultOperationsMap = {
    string: [
        {op: "C", text: Localization.getString("filtercontains")},
        {op: "EQ", text: Localization.getString("filterequal")},
        {op: "ISN", text: Localization.getString("filterisnull")},
        {op: "ISNN", text: Localization.getString("filterisnotnull")},
    ],
    date: [
        {op: "EQ", text: Localization.getString("filterdateequal")},
        {op: "G", text: Localization.getString("filterdategreater")},
        {op: "L", text: Localization.getString("filterdateless")},
        {op: "ISN", text: Localization.getString("filterisnull")},
        {op: "ISNN", text: Localization.getString("filterisnotnull")},
    ],
    datetime: [
        {op: "G", text: Localization.getString("filterdategreater")},
        {op: "L", text: Localization.getString("filterdateless")},
        {op: "ISN", text: Localization.getString("filterisnull")},
        {op: "ISNN", text: Localization.getString("filterisnotnull")},
    ],
    integer: [
        {op: "EQ", text: Localization.getString("filterequal")},
        {op: "NEQ", text: Localization.getString("filternotequal")},
        {op: "G", text: Localization.getString("filtergreater")},
        {op: "L", text: Localization.getString("filterless")},
        {op: "GEQ", text: Localization.getString("filtergreaterequal")},
        {op: "LEQ", text: Localization.getString("filterlessequal")},
        {op: "ISN", text: Localization.getString("filterisnull")},
        {op: "ISNN", text: Localization.getString("filterisnotnull")},
    ],
    numeric: [
        {op: "EQ", text: Localization.getString("filterequal")},
        {op: "NEQ", text: Localization.getString("filternotequal")},
        {op: "G", text: Localization.getString("filtergreater")},
        {op: "L", text: Localization.getString("filterless")},
        {op: "GEQ", text: Localization.getString("filtergreaterequal")},
        {op: "LEQ", text: Localization.getString("filterlessequal")},
        {op: "ISN", text: Localization.getString("filterisnull")},
        {op: "ISNN", text: Localization.getString("filterisnotnull")},
    ],
    bool: [
        {op: "EQ", text: Localization.getString("filterequal")},
    ],
    money: [
        {op: "EQ", text: Localization.getString("filterequal")},
        {op: "NEQ", text: Localization.getString("filternotequal")},
        {op: "G", text: Localization.getString("filtergreater")},
        {op: "L", text: Localization.getString("filterless")},
        {op: "GEQ", text: Localization.getString("filtergreaterequal")},
        {op: "LEQ", text: Localization.getString("filterlessequal")},
        {op: "ISN", text: Localization.getString("filterisnull")},
        {op: "ISNN", text: Localization.getString("filterisnotnull")},
    ],
    radiobutton: [
        {op: "EQ", text: Localization.getString("filterequal")},
        {op: "ISN", text: Localization.getString("filterisnull")},
        {op: "ISNN", text: Localization.getString("filterisnotnull")},
    ],
}
    $.each(defaultOperationsMap, (k, v) => {operationsMap[k] = v});
};
operationsMapReload ();