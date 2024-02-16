"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, ArcadeStore } from "./store";

type Props = {
    children?: React.ReactNode;
};

const StoreProvider = (props: Props) => {
    const { children } = props;

    const storeRef = useRef<ArcadeStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
