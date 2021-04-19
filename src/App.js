import { Controller, useForm } from 'react-hook-form';
import './App.css';
import InputField from './components/InputField';
import { Button, Input, Checkbox, FormControlLabel, Select, MenuItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab'




export default function App() {
  var { control, handleSubmit } = useForm();



  function onSubmit(data){
    console.log(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
        control={control}
        name="name"
        defaultValue=""
        rules={{ required: true, pattern: /peter/i }}
        render={({field, fieldState: { invalid, error }}) => (
          <>
            <Input {...field} placeholder="Peter" error={error ? true : false} />
            { invalid && <Alert severity="error" >øhh</Alert> }
          </>
          )} 
          />

          <Controller 
            control={control}
            name="peter"
            defaultValue={true}
            rules={{ required: true}}
            render={({field, fieldState: { invalid, error }}) => (
              <>
              <FormControlLabel control={<Checkbox { ...field } />} label="Peter?" />
                { invalid && <Alert severity="error">Du Skal</Alert>}
              </>
            )}
          />
          <Controller 
            control={control}
            name="choose"
            render={({field, fieldState: { invalid, error }}) => (
              <>
              <FormControlLabel control={<Select {...field}>
                <MenuItem>peter</MenuItem>
                <MenuItem>peter</MenuItem>
                <MenuItem>peter</MenuItem>
                <MenuItem>peter</MenuItem>
              </Select> } label="Peter?" />
                
              </>
            )}
          />
          
        <Button color="primary" type="submit">Hi</Button>
        
      </form>
    </div>
  )
}

