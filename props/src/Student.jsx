import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="card">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Is Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};


Student.defaultProps = {
    name: "Sandy",
    age: 40,
    isStudent: true,
};

export default Student;
