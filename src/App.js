import Heading from './modules/common/components/Heading';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (<>
    <Heading />
    <Outlet/>
  </>
  )
}
