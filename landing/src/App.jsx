import { createContext, useContext, useState } from 'react';
import InvestorBlock from './components/InvestorBlock';
import StatusSwiper from './components/StatusSwiper';
import ProjectsBlock from './components/ProjectsBlock';
import FormModal from './components/FormModal';

export const FormModalContext = createContext(null);

export const useFormModal = () => useContext(FormModalContext);

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <FormModalContext.Provider value={{ openForm }}>
      <InvestorBlock />
      <StatusSwiper />
      <ProjectsBlock />
      <FormModal isOpen={formOpen} onClose={closeForm} />
    </FormModalContext.Provider>
  );
}

export default App;
