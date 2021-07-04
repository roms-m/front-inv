import React from 'react';
import "./widgetLg.css";

function WidgetLg(){
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }
    return(
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transations</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Custumer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk" className="widgetLgImg" alt="profilePic" />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk" className="widgetLgImg" alt="profilePic" />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk" className="widgetLgImg" alt="profilePic" />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk" className="widgetLgImg" alt="profilePic" />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLg;