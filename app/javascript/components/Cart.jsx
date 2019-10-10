import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form>
                <span>Общая сумма покупки: ${this.props.totalCost}</span>
                {this.props.cart&&<ul>
                    {this.props.cart.map(good =>
                        <li key={good.id}>
                            <CartItem
                                
                                good={good}
                                onDelete={this.props.onDelete}
                                onUpdate={this.props.onUpdate}
                            />
                        </li>)
                    }
                </ul>}
            </form>
        );
    }
}

export default Cart;