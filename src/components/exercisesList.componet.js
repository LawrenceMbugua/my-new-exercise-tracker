import React, {  useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { AppContext} from '../App'

//Exercise Component
function Exercise(props) {
    const id = props.exercise._id
    
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>
                <Link to={'/edit/'+props.exercise._id}>edit</Link>
                |
                <button onClick={() => { props.deleteExercise(id) }}>
                    delete
                </button>
            </td>
        </tr>
    );
    
};








//ExerciseList Component
const ExercisesList = (props) => {

    const { state, setState } = useContext(AppContext);

    useEffect(() => {
        
        axios.get('http://localhost:5000/exercises')
            
            .then(res => {
                
                setState({
                    ...state, exercises: res.data
                })
            })

            .catch(err => console.log(err))
    }, []);

    //Delete an exercise mtd
    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            
            .then(res => console.log('Deleted!'))
        
        setState({
            ...state,
            exercises: state.exercises.filter(el => el._id !== id)
        })
    };

    //Exercise list mtd
    const exerciseList = () => {

        return state.exercises.map(currentexercise => {

            return <Exercise exercise={currentexercise}
                deleteExercise={deleteExercise}
                key={currentexercise._id} />
        });
        
    };

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className='table'>
                <thead  >
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {exerciseList()}
                    
                </tbody>
                
            </table>
                
        </div>
    );
};

export default ExercisesList