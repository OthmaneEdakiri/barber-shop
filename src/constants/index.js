import { redo, sam, service1_haircut, service2_washing, service3_shaves, service4_kids } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "home",
    },
    {
        id: "about",
        title: "our story",
    },
    {
        id: "services",
        title: "services",
    },
    {
        id: "pricing",
        title: "price list",
    },
    {
        id: "contact",
        title: "contact",
    },
];

export const barbers = [
    {
        id:1,
        name:'Redo',
        facebook:'',
        instagram:'',
        image:redo,
    },
    {
        id:2,
        name:'Sam',
        facebook:'',
        instagram:'',
        image:sam,
    },
];

export const services = [
    {
        id:1,
        title:'Hair cut',
        image:service1_haircut,
        price:36,
    },
    {
        id:2,
        title:'Washing',
        image:service2_washing,
        price:25,
    },
    {
        id:3,
        title:'Shaves',
        image:service3_shaves,
        price:30,
    },
    {
        id:4,
        title:'Kids',
        image:service4_kids,
        price:25,
    },
];

export const prices = [
    {
        id:1,
        title:'Haircut',
        price: 32,
    },
    {
        id:2,
        title:'Beard Trim',
        price: 26,
    },
    {
        id:3,
        title:'Razor Cut',
        price: 36,
    },
    {
        id:4,
        title:'Shaves',
        price: 30,
    },
    {
        id:5,
        title:'Styling / Color',
        price: 25,
    },
];

export const branches = [
    {
        id:1,
        title:'Grünberger',
        adresse:'Grünberger Str. 31, 10245 Berlin, Germany'
    },
    {
        id:2,
        title:'Behrenstraße',
        adresse:'Behrenstraße 27, 10117 Berlin, Germany'
    },
    {
        id:3,
        title:'Weinbergsweg',
        adresse:'Weinbergsweg 23, 10119 Berlin, Germany'
    },
]