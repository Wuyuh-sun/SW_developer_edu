import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { dbService } from "../firebase.conf";

const Home = ({onLogout}) => {
    const [carList, setCarList] = useState([]);
    const [name, setName] = useState("GRANDEUR");
    const [company, setCompany] = useState("HYUNDAI");
    const [year, setYear] = useState(2022);
    const [price, setPrice] = useState(0);
    function loadCarList() {
        dbService.collection('car').onSnapshot((snapshot)=>{
            let newCarList = snapshot.docs.map((doc)=>{
                return {id: doc.id, ... doc.data()}
            });
            setCarList(newCarList);
        });
    }
    useEffect(()=>{
        loadCarList();
    }, [] );
    return (<>
        <h3>Home</h3>
        <button onClick={e=>{
            e.preventDefault();
            // firebase에서 먼저 로그아웃
            onLogout();
        }}>Log out</button>
        <hr />
        <table className="table table-striped">
            <thead>
            <tr>
                <th>차종</th>
                <th>제조사</th>
                <th>연식</th>
                <th>가격</th>
                <th>추가</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input id="name" type="text" value={name} onChange={e=>{setName(e.currentTarget.value)}}/></td>
                <td><input id="company" type="text" value={company} onChange={e=>{setCompany(e.currentTarget.value)}}/></td>
                <td><input id="year" type="text" value={year} onChange={e=>{setYear(e.currentTarget.value)}}/></td>
                <td><input id="price" type="text" value={price} onChange={e=>{setPrice(e.currentTarget.value)}}/></td>
                <td><input onClick={e=>{
                    //console.log(name, company, year, price);
                    // firestore에 바로 데이터 추가.
                    const newCar = {name, company, year, price};
                    dbService.collection('car').add(newCar);
                }} id="addBtn" type="button" value="추가"/></td>
            </tr>
            </tbody>
        </table>
        <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>순서</th>
                    <th>차종</th>
                    <th>제조사</th>
                    <th>연식</th>
                    <th>가격</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {carList.map((car)=>(<tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.name}</td>
                    <td>{car.company}</td>
                    <td>{car.year}</td>
                    <td>{car.price}</td>
                    <td><button>삭제</button></td>
                </tr>))}
                
            </tbody>
        </table>
    </>)
}

export default Home;