import { useEffect, useReducer, useRef } from "react";

const FeedbackForm = () => {
    const name = useRef(null);
    const date = useRef(null);
    const feedback_title = useRef(null);
    const message = useRef(null);
    const category1 = useRef(null);
    const category2 = useRef(null);
    const male = useRef(null);
    const female = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(date.current.value);
        console.log(feedback_title.current.value);
        console.log(message.current.value);
        if(category1.current.checked)
        console.log("category1");
        if(category2.current.checked)
        console.log("category2");
        if(male.current.checked)
        console.log("male");
        if(female.current.checked)
        console.log("female");
    };

    return (
        <>
            <h4 className="text-center mt-5">Feedback Form</h4>
            <form className="m-5">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" ref={name} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" ref={date} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Feedback title</label>
                    <input type="text" className="form-control" ref={feedback_title} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Message Box</label>
                    <div class="form-floating">
                        <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style ={{height: "100px"}}
                            ref ={message}
                        ></textarea>
                        <label for="floatingTextarea2">Message</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            ref={category1}
                        />
                        <label
                            className="form-check-label"
                            for="flexCheckDefault"
                        >
                            Category1
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            ref={category2}
                        />
                        <label
                            className="form-check-label"
                            for="flexCheckChecked"
                        >
                            Category2
                        </label>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Gender</label>

                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            ref={male}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            ref={female}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
            ;
        </>
    );
};

export default FeedbackForm;
