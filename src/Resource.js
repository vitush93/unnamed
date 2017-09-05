import React from 'react';
import {Icon, Item, Label, Table} from "semantic-ui-react";
import './Resource.css';

const Resource = ({title, icon, extra, tags}) => {
    return (
        <Table.Row className="resource">
            <Table.Cell verticalAlign="middle">
                <Item.Group>
                    <Item className="resource">
                        <Item.Content>
                            <Item.Header as="a">
                                <Icon name={icon} />&nbsp;
                                {title}
                            </Item.Header>
                            <div className="resource-tags">
                                {tags.map(tag => {
                                    return <Label key={tag.id} as="a" size="small">
                                        {tag.name}
                                        <Label.Detail>{tag.count}</Label.Detail>
                                    </Label>
                                })}
                                <Label as="a" size="small">.. 3 more</Label>
                            </div>
                            <div className="meta" dangerouslySetInnerHTML={{ __html: extra }} />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Table.Cell>
        </Table.Row>
    );
};

export default Resource;