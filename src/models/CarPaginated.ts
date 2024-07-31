import {ICarWithAuth} from "./ICarWithAuth";
import {IPaginationModel} from "./IPaginationModel";

export interface ICarPaginatedModel {
    total_items: number,
    total_pages: number,
    prev: IPaginationModel | null,
    next:  IPaginationModel | null,
    items: ICarWithAuth[]
}