import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext} from '../App'
    

const CreateExercises = (props) => {

    const { state, setState } = useContext(AppContext);

    useEffect(() => {
          
        axios.get('https://my-new-exercise-tracker.herokuapp.com/users')
            
            .then(res => {
                setState(
                    {
                        ...state, users: res.data.map(user => user.username),
                        username: res.data[0].username
                
                    });
            })
             
            .catch(err => console.log(err))
      // eslint-disable-next-line
    }, []);
    

    //State Change events / alters state values
    const onChangeUsername = (e) => {

        setState(
            { ...state, username: e.target.value }
        )
    };

    const onChangeDescription = (e) => {
        setState(
            { ...state, description: e.target.value }
        )
       
    };

    const onChangeDuration = (e) => {
        setState(
            { ...state, duration: e.target.value }
        )
    };
   

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const exercise = {
            username: state.username,
            description: state.description,
            duration: state.duration
        };

        axios.post('https://my-new-exercise-tracker.herokuapp.com/exercises/add', exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        
        console.log(exercise);
        window.location = '/'
        
    };
    
    return (
        <div>
              
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>

                {/* {Username} */}

                <div className='form-group'>
                    <label>Username: </label>

                    <select
                        required
                        className='form-control'
                        value={state.username}
                        onChange={onChangeUsername}>

                        {state.users.map( user =>
                                
                        (<option key={user} style={{color: 'red'}}
                            value={user}>
                            {user}
                        </option>)
                                
                        )};
                        
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
                    <input type='submit' value='Create Exercise Log' className='btn btn-primary' />
              
                </div>

            </form>

                
        </div>
    );

 
};

export default CreateExercises;
