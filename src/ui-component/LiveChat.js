import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function LiveChat() {
    const tawkMessengerRef = useRef();

    function handleMinimize () {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            <TawkMessengerReact
                propertyId="63dcb7514742512879113eb1"
                widgetId="1gob2o770"
                ref={tawkMessengerRef}/>
        </div>
    );
}