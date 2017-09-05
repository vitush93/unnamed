import React from 'react';
import {Table} from "semantic-ui-react";
import Resource from "./Resource";

const SearchResults = ({resources}) => {
    return (
        <Table basic="very" size="small">
            <Table.Body>

                {resources.map(r => {
                    return <Resource key={r.id} title={r.title} icon={r.icon}
                                     extra={r.extra} tags={r.tags}/>
                })}

            </Table.Body>
        </Table>
    );
};

export default SearchResults;