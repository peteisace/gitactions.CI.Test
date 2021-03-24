import * as React from 'react';
import Message from '../api/Message';

export default class ContentCapture extends React.Component<ContentProps, {}> {
    render() {
        return (
            <div className="contentholder">
                <table className="contentholder__grid" cellPadding="10px" cellSpacing="5px">
                    <thead>
                        <tr className="contentholder__row">
                            <th className="contentholder__gridhead contentholder__gridhead--col1">Time</th>
                            <th className="contentholder__gridhead contentholder__gridhead--col2">Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.messages.map((message, index) => (
                                <tr className="contentholder__row" key={index}>
                                    <td className="contentholder__cell">{message.time.toLocaleTimeString()}</td>
                                    <td className="contentholder__cell">{message.message}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

type ContentProps = {
    messages: Message[]
}