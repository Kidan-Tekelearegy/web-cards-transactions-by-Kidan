import { ChangeEvent, useContext } from "react";
import { WebCardContext } from "../../context/context";

const Filter = () => {

    const { updateAmountFilter } = useContext(WebCardContext)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`input changed`)
        updateAmountFilter(parseInt(e.target.value)); 
        e.preventDefault();
    }

    return (
        <>
            <div className="filter">
                <h2>Amount Filter</h2>
                <input className="amount" placeholder="Amount" onChange={handleChange} />
            </div>
        </>
    );
}

export default Filter;