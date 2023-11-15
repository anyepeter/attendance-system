/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DayUpdateFormInputValues = {
    date?: string;
};
export declare type DayUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DayUpdateFormOverridesProps = {
    DayUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DayUpdateFormProps = React.PropsWithChildren<{
    overrides?: DayUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    day?: any;
    onSubmit?: (fields: DayUpdateFormInputValues) => DayUpdateFormInputValues;
    onSuccess?: (fields: DayUpdateFormInputValues) => void;
    onError?: (fields: DayUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DayUpdateFormInputValues) => DayUpdateFormInputValues;
    onValidate?: DayUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DayUpdateForm(props: DayUpdateFormProps): React.ReactElement;
