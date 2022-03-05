import React, {  useContext, useEffect } from 'react'
import axios from 'axios'
import { AppContext } from '../App';
import { useParams } from 'react-router';
    


const EditExercises = (props) => {
    const { state, setState } = useContext(AppContext);

    const { id } = useParams()

    useEffect(() => {
        //console.log(id);
        //fetch data of a specific user                //CHANGE HERE...
        axios.get('https://my-new-exercise-tracker.herokuapp.com/exercises/'+id)
            
            .then(res => {
                console.log(res.data);
                setState({
                    ...state,
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    users: [res.data.username]
                });
            })
            .catch(err => console.log(err));
       
        
     // eslint-disable-next-line    
    }, []);
         

    const onChangeUsername = (e) => {
        setState({
            ...state, username: e.target.value
        });
    };

    const onChangeDescription = (e) => {
        setState({
            ...state, description: e.target.value
        })
    };
    
    const onChangeDuration = (e) => {
        setState({
            ...state, duration: e.target.value
        })
    };
   

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const exercise = {
            username: state.username,
            description: state.description,
            duration: state.duration
        };

        axios.post('https://my-new-exercise-tracker.herokuapp.com//exercises/update/'+id, exercise)

            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        
        console.log(exercise);
        window.location = '/';
    };

 

    return (
        <div>
            <h3>Edit Exercise Log</h3>
                
            <form onSubmit={handleSubmit}>

                {/* {Username} */}

                <div className='form-group'>
                    <label>Username: </label>

                    <select required className='form-control'
                        onChange={onChangeUsername}>
                            
                        {
                            state.users.map( user => (
                                <option
                                    key={user} value={user}>
                                    {user}
                                </option>))
                        }
                        
                    </select>
                </div>

                {/* {Description} */}

                <div className='form-group'>
                    <label>Description: </label>
                    <input type='text'
                        required
                        className='form-control'
                        value={state.description}
                        onChange={onChangeDescription} />
                       
                </div>

                {/* {Duration} */}

                <div className='form-group'>
                    <label>Duration (in min): </label>
                    <input type='text'
                        className='form-control'
                        value={state.duration}
                        onChange={onChangeDuration} />
                        
                </div>

                {/* {Submit} */}
                    
                <div className='form-group'>
                    <input type='submit' value='Edit Exercise Log' className='btn btn-primary' />
              
                </div>


            </form>

        </div>
    );
};

export default EditExercises;