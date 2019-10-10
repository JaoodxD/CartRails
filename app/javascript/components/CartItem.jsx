import React, { Component } from 'react';
class CartItem extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <span>{this.props.good.goodName}&nbsp;</span>
                <span>${this.props.good.cost}</span>
                <span>&times;{this.props.good.amount}</span>
                <span>:${this.props.good.cost * this.props.good.amount}</span>
                <input type="button" onClick={() => {
                    let good = { ...this.props.good };
                    good.amount++;
                    this.props.onUpdate(good);
                }} value="+">
                </input>
                <input type="button" onClick={() => {
                    let good = { ...this.props.good };
                    good.amount--;
                    this.props.onUpdate(good);
                }} value="-">
                </input>
                <input type="button" onClick={() => this.props.onDelete(this.props.good.id)} value="Удалить"></input>

            </React.Fragment>
        );
    }
}

export default CartItem;