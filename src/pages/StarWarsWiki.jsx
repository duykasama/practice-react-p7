import { useEffect, useState } from "react";

function StarWarWiki() {
    const [data, setData] = useState();
    // const fetchData = () => {
    //     fetch('https://swapi.dev/api/people/1')
    //     .then(res => res.json())
    //     .then(data => {setData(data)})
    // }

    
    useEffect(() =>  {
        fetch('https://swapi.dev/api/people/1')
            .then(res => res.json())
            .then(data => {setData(data)})
    }, []);

    console.log(data);

    return ( 
        <main>
            {data && <div>{JSON.stringify(data, null, 2)}</div>}
        </main>
     );
}

export default StarWarWiki;