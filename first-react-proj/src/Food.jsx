function Food(){
    const food1 = "Chicken";
    const food2 = "Orange";
    return(
        <>
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
            <button onclick={alert("HEllo World")}>Hello World Btn</button>  
        </>
    );
}

export default Food;