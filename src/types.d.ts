type Order = 'asc' | 'desc' | undefined;

interface TableField {
    id: number;
    label: string;
    value: string;

}

interface Tag {
    id: string
    count: number
    name: string
}

interface ApiData {
    items : ApiTag[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
    total: number;
}

interface ApiTag {
    has_synonyms: boolean
    is_moderator_only: boolean
    is_required: boolean
    count: number
    name: string
}


  

