import {useState} from "react";
import {
  Button,
} from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Example(props) {
  const [date, setDate] = useState();
  const MIN_DATE = new Date()  
  MIN_DATE.setDate(MIN_DATE.getDate() + 1);

  const setupForm = (formData) => {
    date.endDate.setHours(0)
    date.endDate.setMinutes(0)
    date.endDate.setSeconds(0)
    props.setDate(date)
  }

  return (
    <>
      <form onSubmit={setupForm} className='justify-center p-4'>
        <Datepicker
          inputClassName="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-1.5 border-blue-gray-200 focus:border-gray-900"
          asSingle={true}          
          useRange={false}                    
          required={true}
          minDate={MIN_DATE}
          value={date}          
          placeholder={'Trip Commencement Date'}
          onChange={newValue => setDate(newValue)} />
      
        <div className='text-center p-4 mt-2'>      
          <Button type="submit">
            Initialize
          </Button>
        </div>
      </form>
    </>
  );
}