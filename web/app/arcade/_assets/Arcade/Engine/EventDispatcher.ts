import EventInterface from "../Event/EventInterface";

type Listener = (event: EventInterface) => void;

class EventDispatcher {
    private listeners: { [eventName: string]: Listener[] } = {};

    public addListener(eventName: string, listener: Listener) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(listener);
    }

    public dispatch(event: EventInterface) {
        const eventName = event.constructor.name;

        if (!this.listeners[eventName]) return;
        this.listeners[eventName].forEach((listener) => listener(event));
    }
}

export default EventDispatcher;
