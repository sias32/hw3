import React, { Fragment } from "react";

function Listing({ items }) {

    return (
        <Fragment>
            {items.map((item) => (
                item.state === "active" &&
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt="картинка" />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            {
                                (item.title.length > 50 &&
                                    Array(50).fill().map((value, index) => (
                                        item.title[index]
                                    )).concat(["..."])
                                )
                                ||
                                item.title
                            }
                        </p>
                        <p className="item-price">
                            {
                                (item.currency_code === "USD" && "$" + item.price)
                                ||
                                (item.currency_code === "EUR" && "€" + item.price)
                                ||
                                (item.price + " " + item.currency_code)
                            }
                        </p>
                        {
                            (item.quantity > 20 && <p className="item-quantity level-high">{item.quantity} left</p>)
                            ||
                            (item.quantity > 10 && <p className="item-quantity level-medium">{item.quantity} left</p>)
                            ||
                            (item.quantity <= 10 && <p className="item-quantity level-low">{item.quantity} left</p>)
                        }
                    </div>
                </div>
            ))}
        </Fragment>
    );
}


export default Listing;