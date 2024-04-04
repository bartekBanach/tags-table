import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTags } from "./api";


export const useTags = (page=1, pageSize=10, sort='name', order='asc') => {
    return useQuery({
        queryKey: ['tags', { page, pageSize, sort, order} ],
        queryFn: () => getTags(page, pageSize, sort, order),
        placeholderData: keepPreviousData,
        refetchOnMount: false, 
        refetchOnWindowFocus: false, 
        refetchInterval: false, 
    }) 
}