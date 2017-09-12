import React from 'react';
import {Icon, Label} from "semantic-ui-react";

const MatchedTags = ({tags}) => {

    return (
        <div id="matched-channels">
            <span>matched tags:</span>

            {tags.map(t => {
                return <Label key={t.id} size="small" color="blue">
                    {t.name}
                    <Icon name="close"/>
                </Label>;
            })}

        </div>
    );
};

export default MatchedTags;