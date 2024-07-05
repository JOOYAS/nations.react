import { useState } from "react";
import { useEffect } from "react";
import Cards4Country from "./cards"

function MainContent() {
    const [countries ,setCountries] = useState([]);

    useEffect(() => {
        //taking data from api=>json=>data
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then(data => { 
            console.log("got contries data",data);

            //storing elements that are only needed and sorting according to name
            const countriesData = data.map((country) =>({
                    name: country.name.common,
                    flag: country.flags.png
            })).sort((a,b) => a.name.localeCompare(b.name));//sorting happens here
            
            //storing countriesData in countries using usesatate
            setCountries(countriesData);console.log(countries);
        })
        
        .catch(error => console.error(error));
    },[])
    
    return(
        <>
            <main className="bg-blue-950 w-full py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-6 sm:px-12 lg:px-40" id="countries">
                    {
                        countries.map((country) => <Cards4Country name={country.name} flag={country.flag} />)
                    }
                </div>
            </main>
        </>
    )
}

export default MainContent