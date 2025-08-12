//https://pokeapi.co/api/v2/
//sprites used for going particular somewhere

// function myData() {
//     let pImage = document.getElementById('poke').value; // user input
//     console.log(pImage);

//     fetch(`https://pokeapi.co/api/v2/pokemon/${pImage.toLowerCase()}`)
//         .then(Response => {
//             if (!Response.ok) {
//                 alert(`Pokemon not found: ${pImage}`);
//                 throw new Error(`Pokemon not found: ${pImage}`);
//             }
//             return Response.json(); 
//         })
//         .then(abc => {
//             console.log(abc.sprites.front_default);
//             let photo = document.getElementById('p');
//             photo.src = abc.sprites.front_default;
//             photo.style.display = 'block';
//            // pImage.textContent=""
//         })
//         .catch(error => console.log(error));
// }

async function myData() {
    let pImage = document.getElementById('poke').value.trim().toLowerCase(); // user input
    console.log(pImage);

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pImage}`);

        if (!response.ok) {
            alert(`Pokemon not found: ${pImage}`);
            throw new Error(`Pokemon not found: ${pImage}`);
        }

        const data = await response.json();

        console.log(data.sprites.front_default);
        let photo = document.getElementById('p');
        photo.src = data.sprites.front_default;
        photo.style.display = 'block';

    } catch (error) {
        console.error("Error is: " + error.message);
    }
    finally{
        document.getElementById('poke').value=""
    }
}

