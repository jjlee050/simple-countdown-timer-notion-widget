import {
  Button,
  Typography
} from "@material-tailwind/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import InitializeClockForm from './components/InitializeClockForm'

function App() {
  const [date, setDate] = useLocalStorage('date', undefined)

  return (
    <>
      {
        date && (
          <>
            <Typography variant="h2" className='text-center'> 
              Countdown to start of trip: 
            </Typography>
            <FlipClockCountdown className='justify-center mt-4'
              to={date.startDate}
              showSeparators={false}
              hideOnComplete={false}
              labelStyle={{ color: 'black' }}
              digitBlockStyle={{
                color: 'white',
              }}
              style={{'--fcc-separator-color': 'black' /* color of colon */}}/>
            <div className='text-center p-4 mt-2'>      
              <Button onClick={() => {
                window.localStorage.clear();
                window.location.reload();
              }}>
                Reset
              </Button>
            </div>
          </>
        )
      }
      {
        !date && (
          <InitializeClockForm 
            date={date}
            setDate={setDate}
          />
        )
      }
      
    </>
  )
}

export default App
