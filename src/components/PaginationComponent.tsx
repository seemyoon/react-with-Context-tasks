import React, {FC} from 'react';
import {IPaginationModel} from "../models/IPaginationModel";
import {useSearchParams} from "react-router-dom";

interface IProps {
    next: IPaginationModel | null,
    prev: IPaginationModel | null,
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {
    const [query, setQuery] = useSearchParams({page: "1"})
    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case "previous":
                setQuery({...prev});
                break;
            case "next":
                setQuery({...next});
                break
        }
    }
    return (
        <div>
            <button disabled={!prev} onClick={() => {
                changePage("previous")
            }}>previous
            </button>
            <button disabled={!next} onClick={() => {
                changePage("next")
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;