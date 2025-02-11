// import { useSelector } from "react-redux"
// import { useParams } from "react-router-dom"

// export const Detailshop = () => {
//     const idshop = useParams()
//     const listshop = useSelector(x => x.datashopreducer.listshop)
//     const obj = listshop.find(x => x._id == idshop._id)

//     return <>
//         <h1>פרטי קנייה</h1>
//         <p>קוד  הקניה הוא: {idshop._id}</p>
//         <p>קוד לקוח{ obj.codeCustomer}</p>
//         <p>תאריך קניה{obj.date}</p>
//         {obj.gameArr.map((x, i) => (
//             <div key={i}>
//                 <p>קוד שמחק{x.codeGame}</p>
//                 <p> שם משחק{x.nameGame}</p>
//                 <p>מחיר{x.price}</p>
//                 <p>כמות{x.amount}</p>
//                 <p>מחיר סופי{x.totalprice}</p>
//                 {/* <p>{x._id}</p> */}
//             </div>
//         ))
//         }
//         <p>סכום לתשלום{obj.sum}</p>


     



//     </>
// }


import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Detailshop = () => {
    const idshop = useParams();
    const listshop = useSelector(x => x.datashopreducer.listshop);
    const obj = listshop.find(x => x._id == idshop._id);

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center py-3">
                            <h2 className="mb-0">פרטי קנייה</h2>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <h5 className="text-secondary fw-bold">מידע כללי</h5>
                                <p><strong>קוד הקנייה:</strong> {idshop._id}</p>
                                <p><strong>קוד לקוח:</strong> {obj.codeCustomer}</p>
                                <p><strong>תאריך הקנייה:</strong> {obj.date}</p>
                            </div>

                            <h5 className="text-secondary fw-bold border-bottom pb-2">פרטי המשחקים</h5>
                            {obj.gameArr.map((x, i) => (
                                <div className="border rounded p-3 mb-3" key={i}>
                                    <p><strong>קוד משחק:</strong> {x.codeGame}</p>
                                    <p><strong>שם משחק:</strong> {x.nameGame}</p>
                                    <p><strong>מחיר:</strong> {x.price} ₪</p>
                                    <p><strong>כמות:</strong> {x.amount}</p>
                                    <p><strong>מחיר סופי:</strong> {x.totalprice} ₪</p>
                                </div>
                            ))}

                            <div className="text-end mt-4">
                                <h4>
                                    <span className="text-secondary">סכום לתשלום:</span>{" "}
                                    <span className="text-success fw-bold">{obj.sum} ₪</span>
                                </h4>
                            </div>
                        </div>
                        {/* <div className="card-footer bg-light text-center">
                            <small className="text-muted">© {new Date().getFullYear()} כל הזכויות שמורות</small>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
