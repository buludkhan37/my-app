import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' },
    ];

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };
    const handleIncrement = (id) => {
        const newValue = counters.map((item) => {
            return {
                ...item,
                value: item.id === id ? item.value + 1 : item.value,
            };
        });
        setCounters(newValue);
    };
    const handleDecrement = (id) => {
        const newValue = counters.map((item) => {
            return {
                ...item,
                value: item.id === id ? item.value - 1 : item.value,
            };
        });
        setCounters(newValue);
    };
    const handleUpdate = () => {
        const updatedState = [
            { id: 0, value: 1, name: 'Ненужная вещь' },
            { id: 1, value: 2, name: 'Ложка' },
            { id: 2, value: 3, name: 'Вилка' },
            { id: 3, value: 4, name: 'Тарелка' },
            { id: 4, value: 0, name: 'Набор минималиста' },
        ];
        setCounters(updatedState);
    }
    return (
        <>
            {counters.map(count => (
                <Counter key={count.id} onDecrement={handleDecrement} onIncrement={handleIncrement} onDelete={handleDelete} {...count} />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Обновить состояние</button>
        </>
    );
}
export default CountersList;