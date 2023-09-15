import GenericPage from '@/components/GenericPage';
import ToggleTasks from '@/components/ToggleTasks';

const Home = () => {
  return (
    <GenericPage pageTitle={'Spiral down your daily hassel here'}>
      <ToggleTasks />
    </GenericPage>
  )
}

export default Home;
