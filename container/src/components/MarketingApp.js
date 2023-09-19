import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    }, ref);
    return (
        <div ref={ref}>
        </div>
    );
}