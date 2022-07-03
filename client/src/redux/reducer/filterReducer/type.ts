interface Item {
    id: number;
    title: string;
    cost: number;
    img: string;
};

interface Data {
    data: Item[];
    toggle: boolean;
};

export default Data;