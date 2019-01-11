import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './Reducers'; 

export interface ChatProps {
    sample?: boolean;
}
  
const store = createStore(todos);

export class Debug extends React.Component<ChatProps, {}> { 
    public render() { 
        console.log(this.props);
        return <div>We have successfully rendered our fake component!</div>
    }
}

export class Chat extends React.Component<ChatProps, {}> {

    public render() {
        return (
            <Provider store={store}>
                <Debug {...this.props} />
            </Provider>
        );
    }
}
