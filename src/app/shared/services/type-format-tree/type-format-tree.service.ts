import { TypeFormatTreeI } from "../../interfaces/TypeFormatTreeI";
import { formatTypeTree } from "./type-format-tree-data";

export class TypeFormatTreeService{

    formatTypeTree: TypeFormatTreeI = formatTypeTree;

    getTypes(): string[]{
        return Object.keys(this.formatTypeTree);
    }

    getFormats(type: string): string[]{

        if(this.formatTypeTree.hasOwnProperty(type)){
            return this.formatTypeTree[type];
        }

        return [];
    }
}