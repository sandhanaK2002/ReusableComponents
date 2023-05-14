import Table from "./Table"

export const SortedTable=(props)=>{
    const {config} = props

    const updatedConfig = config.map((column)=>{
            if(!column.sortValue){
                return column ;
            }
            return {
                ...column,
                header:()=> <th>{column.label} IS Sortable</th>
                
            };
        });
    

    return <Table {...props} config = {updatedConfig} />
}