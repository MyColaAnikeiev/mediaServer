import { GeneralFilterI } from "src/app/shared/interfaces/ServerServiceGeneralFilterInterfaces";
import { GeneralDataI } from "src/app/shared/interfaces/ServiceDataInterfaces";

export interface HomeContentI{
    page: number;
    filter: GeneralFilterI,
    responce: GeneralDataI
}