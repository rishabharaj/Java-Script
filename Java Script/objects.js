 const product = {
            name: 'socks',
            price: 1090
        };
        console.log(product);
        console.log(product.name);
        console.log(product.price);

        product.name = 'new socks';
        console.log(product.name);

        product.newProperty = true;
        console.log(product.newProperty);

        delete product.newProperty;
        console.log(product.newProperty);

        console.log(product['name']); //bracket notation

        const product2 = {
            name: 'shirt',
            'delivery-time':'1 day',
            rating: {
                stars: 4.5,
                count: 100
            },
        fun: function() {
            console.log('This is a method inside an object');
        }
        };
        console.log(product2['delivery-time']); //bracket notation for property with hyphen
        console.log(product2.rating.stars); // accessing nested object
        product2.fun(); // calling the method

        console.log(typeof console); // object
        console.log(typeof console.log); // function
        console.log(typeof Math.random); // function
        // console & math & JSON objects are built-in objects

        JSON.stringify (product); // converts object to JSON string
        console.log(JSON.stringify(product2)); 
        console.log(typeof JSON.stringify(product2)); // string
        console.log(JSON.parse('{"name":"socks","price":1090}')); // converts JSON string to object
        const jsonString = JSON.stringify(product2);
        console.log(JSON.parse(jsonString)); // converts JSON string to object
        // Auto-boxing
        console.log('hello'.length); //string length
        console.log('hello'.toUpperCase()); // string method
        console.log('hello'.toLowerCase()); // string method
        console.log('hello'.charAt(0)); // string method
        console.log((123.456).toFixed(2)); // number method
        console.log(true.toString()); // boolean method
        console.log(3.0.toString()); // number method


        //copy by reference
        const obj1 = {message: 'good job'}; //store only referece not actual object
        const obj2 = obj1; // obj2 references the same object as obj1
        obj1.message = 'well done'; // modify the object via obj1
        console.log(obj2.message); // 'well done' - change is reflected in obj2

        // we cant compare objects directly
        const obj3 = {message: 'hello'};
        const obj4 = {message: 'hello'};
        console.log(obj3 === obj4); // false - different references
        const obj5 = obj3;
        console.log(obj3 === obj5); // true - same reference

        //descructuring
        const obj6 = {
            msg: 'hi',
            price: 99
        };
        // const message = obj6.message; // traditional way
        // console.log(msg); // 'hi'
        const {msg, price} = obj6; // extract message property
        console.log(msg); // 'hi'
        console.log(price); // 99
    </script>
    <script>
       // old codes
    //    console.log(true && false); // false
    //     const results = true ? 'truthy' : 'falsy';
    //     console.log(results); // 'truthy'

    //     // short-circuit evaluation
    //     const user = null;
    //     const displayName = user && user.name;
    //     console.log(displayName); // null

    //     false && console.log('This will not be logged');
    //     const msg = 5 && 'Hello';
    //     console.log(msg); // 'Hello'

    //     const currency1 = 'EUR' || 'USD';
    //     console.log(currency1); // 'EUR'
    //     const currency2 = undefined || 'USD';
    //     console.log(currency2); // 'USD'
