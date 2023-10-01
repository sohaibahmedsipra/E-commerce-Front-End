const products = [
    {
        id: 1,
        name: "Tommy Hilfiger T-shirt",
        price:{
            S: 100,
            M: 200,
            L: 300,
            XL: 400,
        },
        description: "This is a T-shirt",
        image: {
            front: "./numero1.jpeg",
            back: "./numero1-Back.jpeg",
        },
        size:{
            S: true,
            M: true,
            L: true,
            XL: true,
        }
    },
    {
        id : 2,
        name: "Nike Round Neck Shirt",
        price:{
            S: 100,
            M: 200,
            L: 300,
            XL: 400,
        },
        description: "This is a Shirt",
        image: {
            front: "./numero2.jpeg",
            back: "./numero2-Back.jpeg",
        },
        size:{
            S: true,
            M: true,
            L: false,
            XL: true,
        }
    },
    {
        id : 3,
        name: "Tommy Hilfiger White Tee",
        price:{
            S: 200,
            M: 400,
            L: 600,
            XL: 800,
        },
        description: "This is a Shirt",
        image: {
            front: "./numero3.jpeg",
            back: "./numero3-Back.jpeg",
        },
        size:{
            S: true,
            M: true,
            L: true,
            XL: false,
        }
    },
    {
        id : 4,
        name: "Tommy Hilfiger Shorts",
        price:{
            S: 100,
            M: 200,
            L: 300,
            XL: 400,
        },
        description: "This is a Shirt",
        image: {
            front: "./numero4.jpeg",
            back: "./numero4-Back.jpeg",
        },
        size:{
            S: true,
            M: true,
            L: true,
            XL: true,
        }
    }


];

export default products;