export interface Product{
    name: string;
    definitionUrl: string;
}
export interface FieldConfig {
        caption: string, 
        type: string,
        mandatory: boolean,
        defaultValue: string,
        validationMessage: string,
}