import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";


function TestMenu() {


    const products = [
        { id: '0', name: 'Burger large', price: 30, count: 0, isInCart: false, category: '1' },
        { id: '1', name: 'Burger medium', price: 25, count: 0, isInCart: false, category: '1' },
        { id: '2', name: 'Burger small', price: 15, count: 0, isInCart: false, category: '1' },
        { id: '3', name: 'Cola large', price: 35, count: 0, isInCart: false, category: '2' },
        { id: '4', name: 'Cola medium', price: 25, count: 0, isInCart: false, category: '2' },
        { id: '5', name: 'Cola small', price: 10, count: 0, isInCart: false, category: '2' },
        { id: '6', name: 'Fries large', price: 40, count: 0, isInCart: false, category: '3' },
        { id: '7', name: 'Fries medium', price: 35, count: 0, isInCart: false, category: '3' },
        { id: '8', name: 'Fries small', price: 15, count: 0, isInCart: false, category: '3' },
        { id: '9', name: 'Burger2 large', price: 30, count: 0, isInCart: false, category: '1' },
        { id: '18', name: 'Fries2 small', price: 15, count: 0, isInCart: false, category: '3' },
        { id: '19', name: 'Burger3 large', price: 30, count: 0, isInCart: false, category: '1' },
        { id: '20', name: 'Burger3 medium', price: 25, count: 0, isInCart: false, category: '1' },
        { id: '21', name: 'Burger3 small', price: 15, count: 0, isInCart: false, category: '1' },
        { id: '22', name: 'Cola3 large', price: 35, count: 0, isInCart: false, category: '2' },
        { id: '23', name: 'Cola3 medium', price: 25, count: 0, isInCart: false, category: '2' },
        { id: '24', name: 'Cola3 small', price: 10, count: 0, isInCart: false, category: '2' },
        { id: '25', name: 'Fries3 large', price: 40, count: 0, isInCart: false, category: '3' },
        { id: '26', name: 'Fries3 medium', price: 35, count: 0, isInCart: false, category: '3' },
        { id: '27', name: 'Fries3 small', price: 15, count: 0, isInCart: false, category: '3' },
        { id: '10', name: 'Burger2 medium', price: 25, count: 0, isInCart: false, category: '1' },
        { id: '11', name: 'Burger2 small', price: 15, count: 0, isInCart: false, category: '1' },
        { id: '12', name: 'Cola2 large', price: 35, count: 0, isInCart: false, category: '2' },
        { id: '13', name: 'Cola2 medium', price: 25, count: 0, isInCart: false, category: '2' },
        { id: '14', name: 'Cola2 small', price: 10, count: 0, isInCart: false, category: '2' },
        { id: '15', name: 'Fries2 large', price: 40, count: 0, isInCart: false, category: '3' },
        { id: '16', name: 'Fries2 medium', price: 35, count: 0, isInCart: false, category: '3' },
    ]

    const categories = [
        { id: 0, name: "All" },
        { id: 1, name: "Burger" },
        { id: 3, name: "Fries" },
        { id: 2, name: "Cola" },
    ];


    // ------------ Paginationa --------------------






    const itemsPerPage = 7;

    let currentPage = 1;
    let tempResultItems = [];
    let startIndexInPage = 0;
    let currentIndex = 0;
    let currentCategory = 0;

    const [resultItems, setResultItems] = useState([...products]);
    const [pageItems, setPageItems] = useState(resultItems.slice(startIndexInPage, startIndexInPage + itemsPerPage));
    const [pagesIndecies, setPageIndecies] = useState(products.map((p) => +p.id + 1));
    const [sortState, setSortState] = useState(true);

    function updateIndecies() {
        let numOfPages = 0;

        if (tempResultItems.length > 0) {
            numOfPages = Math.ceil(tempResultItems.length / itemsPerPage);

        }
        else {

            numOfPages = Math.ceil(resultItems.length / itemsPerPage);


        }

        //clone
        let newIndecies = [];
        // update page indecies
        for (let i = 1; i <= numOfPages; i++) {
            newIndecies.push(i);
        }
        //set state
        setPageIndecies(newIndecies);

    }


    function paginate(index) {

        // determine num of pages
        // detemine items per page

        startIndexInPage = (index - 1) * itemsPerPage;
        updateIndecies();
        currentPage = index;
        if (tempResultItems.length > 0) {
            setResultItems(tempResultItems);
            setPageItems(tempResultItems.slice(startIndexInPage, startIndexInPage + itemsPerPage))// result items not saved yet
        }
        else {
            setPageItems(resultItems.slice(startIndexInPage, startIndexInPage + itemsPerPage))// result items not saved yet
        }


    }


    // --------- Filter -------------------------------
    function updateFilterItems(cat) {

        //filter
        //update result items
        //paginate
        if (cat.id === 0) {
            tempResultItems = [...products];
        }
        else {
            tempResultItems = [...(products.filter((p) => {
                return (p.category == cat.id);
            }
            ))];
        }
        // currentCategory = cat;
        paginate(1);
    }

    // ------------------- Search ----------------------
    function updateSearchItems(query) {

        // search
        //update reasult items
        //paginate
        console.log(query);
        if (query == "") {
            tempResultItems = [...products]
        }
        else {

            tempResultItems = [...(products.filter((p) => {
                return p.name.includes(query) || p.name.startsWith(query);
            }
            ))];
        }
        paginate(1);
    }

    // ------------------- Sort --------------------
    function updateSortItems(state) {

        // sort
        // update result items
        //paginate
        setSortState(!sortState);
        let resArray = [];
        if(state){
            resArray = sortByNameASC(pageItems);

        }
        else{

            resArray = sortByNameDSC(pageItems);
        }

        setPageItems(resArray);

    }

    function sortByNameASC(toSortArray) {

        let arr = [];
        toSortArray.forEach(p => {
            arr.push(p.name);
        });

        arr.sort();
        let sortedResult = arr.map((name) => {
           return toSortArray.find((p) => {
                return p.name == name;
            })
        })

     
       
       return sortedResult;
    }

    function sortByNameDSC(toReverseArray) {

        let arr = [];
        toReverseArray.forEach(p => {
            arr.push(p.name);
        });

        arr.sort();
        arr.reverse();
        let sortedResult = arr.map((name) => {
           return toReverseArray.find((p) => {
                return p.name == name;
            })
        })
       return sortedResult;
    }




    return (

        <div className="d-flex  mt-5 me-3 ms-3">

            <div className="col-3">
                <ul className="list-group">

                    {categories.map((cat) => (
                        <li
                            key={cat.id}
                            className='list-group-item list-group-item-action'
                            style={{ cursor: 'pointer' }}
                            onClick={() => { updateFilterItems(cat) }}
                        >
                            {cat.name}
                        </li>
                    ))}

                </ul>
            </div>
            <div className="vr me-3 ms-3"></div>
            <div className="col-8">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search product by name" id="searchView" />
                    <button className="btn btn-outline-secondary" type="button"
                        onClick={(() => { updateSearchItems(document.getElementById('searchView').value) })}>Search</button>
                </div>
                <table className="table table-hover ">
                    <thead>
                        <tr>

                            <th scope="col" onClick={() => {updateSortItems(sortState) }}>Name</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageItems.map((p) => (
                            <tr key={p.id}>
                                <td>
                                    {p.name}
                                </td>
                                <td>
                                    {p.price}
                                </td>
                                <td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {pagesIndecies.length !== 1 && (
                    <nav aria-label="...">
                        <ul className="pagination pagination-sm">
                            {pagesIndecies.map((pageIndex) => (
                                <li
                                    key={pageIndex}
                                    style={{ cursor: "pointer" }}
                                    className={
                                        pageIndex === currentPage ? "page-item active" : "page-item"
                                    }
                                    aria-current="page"
                                    onClick={() => paginate(pageIndex)}
                                >
                                    <span className="page-link">{pageIndex}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

            </div>
        </div>
    );
}

export default TestMenu;