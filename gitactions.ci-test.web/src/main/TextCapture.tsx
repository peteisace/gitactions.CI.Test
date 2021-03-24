import * as React from 'react';
import Message from '../api/Message';

export default class TextCapture extends React.Component<TextCaptureProps, TextCaptureState> {
    
    state: Readonly<TextCaptureState> = {
        message: ""
    };
    render() {
        return (
            <div className="textcapture">
                <input className="textcapture__input" type="text" value={this.state.message} onChange={(el) => this.setState( { message: el.currentTarget.value })} />
                <button className="textcapture__action" value="Add" onClick={ (e) => this.onHandleClick(e)}>Add</button>
            </div>
        )
    }

    onHandleClick(el: React.MouseEvent<HTMLElement>) {
        const m: Message = new Message(this.state.message, new Date());
        this.props.onMessageAdded(m);
        this.setState( { message: ""});
    }
}

export interface TextCaptureProps {
    messages: Message[];
    onMessageAdded(m: Message): void;
}

export interface TextCaptureState {
    message: string;
}