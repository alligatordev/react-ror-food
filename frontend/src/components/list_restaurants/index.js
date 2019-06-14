import React, { Component } from 'react'
import { FaStart } from 'react-icons/fa'
import { Box, Column, Icon } from 'rbx';
import Restaurant from './restaurant.js';

class ListRestaurants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [
                {
                    'name': 'example 1',
                    'delivery_tax': '5',
                    'review': '4.9',
                    'image_url': 'https://liberal.com.br/wp-content/uploads/2018/05/FOTO-GERAL-kyoto-rodizio-tradicional-2.jpg'
                },
                {
                    'name': 'example 1',
                    'delivery_tax': '5',
                    'review': '4.9',
                    'image_url': 'https://liberal.com.br/wp-content/uploads/2018/05/FOTO-GERAL-kyoto-rodizio-tradicional-2.jpg'
                },
                {
                    'name': 'example 1',
                    'delivery_tax': '5',
                    'review': '4.9',
                    'image_url': 'https://liberal.com.br/wp-content/uploads/2018/05/FOTO-GERAL-kyoto-rodizio-tradicional-2.jpg'
                }
            ]
        }
    }
    render() {
        return (
            <div className="restaurants-list">
                <h2 className="title is-size-4">Restaurants</h2>

                <Column.Group multiline gapSize={2}>
                    {this.state.restaurants.map(restaurant => {
                        return <Restaurant {...restaurant} />
                    }) }
                </Column.Group>
            </div>
        )
    }
}

export default ListRestaurants;