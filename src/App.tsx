import './App.sass';
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './modules/signin/pages/Login';
import AuthenticationProvider from './modules/signin/state/AuthenticationProvider';
import PrivateRoute from './modules/signin/components/PrivateRoute';
import ProtectedRoute from './modules/signin/components/ProtectedRoute';
import { Map } from './modules/map/pages/Map';
import { PropertiesPage } from './modules/registrations/pages/productions/Properties';
import { FieldsPage } from './modules/registrations/pages/productions/Fields';
import { StoragePage } from './modules/registrations/pages/productions/Storage';
import { EmployeesPage } from './modules/registrations/pages/labor/Employees';
import { TeamsPage } from './modules/registrations/pages/labor/Teams';
import { CropsPage } from './modules/registrations/pages/agriculture/Crops';
import { ActivityClassificationsPage } from './modules/registrations/pages/agriculture/ActivityClassifications';
import { ActivitiesPage } from './modules/registrations/pages/agriculture/Activities';
import { MachineClassificationsPage } from './modules/registrations/pages/equipments/MachineCassifications';
import { MachinesPage } from './modules/registrations/pages/equipments/Machines';
import { SprayNozzlesPage } from './modules/registrations/pages/equipments/SprayNozzles';
import { ProductsPage } from './modules/registrations/pages/agriculturalProducts/Products';
import { ProductClassificationsPage } from './modules/registrations/pages/agriculturalProducts/ProductClassification';
import { PersistentLayout } from './modules/persistentLayout/PersistentLayout';
import { AgronomicPlanPage } from './modules/planning/pages/AgronomicPlan';
import { HarvestPage } from './modules/planning/pages/Harvest';

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path='auth' element={<ProtectedRoute />}>
            <Route path='signin' element={<Login />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='map' element={<Map />}></Route>
          </Route>
          <Route path='/' element={<PersistentLayout />}>
            <Route path='registrations'>
              <Route path='production' element={<PropertiesPage />}>
                <Route path='properties' element={<PropertiesPage />}></Route>
                <Route path='fields' element={<FieldsPage />}></Route>
                <Route path='storage' element={<StoragePage />}></Route>
              </Route>
              <Route path='labor' element={<EmployeesPage />}>
                <Route path='employees' element={<EmployeesPage />}></Route>
                <Route path='teams' element={<TeamsPage />}></Route>
              </Route>
              <Route path='agriculture' element={<CropsPage />}>
                <Route path='crops' element={<CropsPage />}></Route>
                <Route
                  path='activity-classifications'
                  element={<ActivityClassificationsPage />}
                ></Route>
                <Route path='activities' element={<ActivitiesPage />}></Route>
              </Route>
              <Route path='equipment' element={<MachineClassificationsPage />}>
                <Route
                  path='machine-classifications'
                  element={<MachineClassificationsPage />}
                ></Route>
                <Route path='machines' element={<MachinesPage />}></Route>
                <Route
                  path='spray-nozzles '
                  element={<SprayNozzlesPage />}
                ></Route>
              </Route>
              <Route path='products' element={<ProductClassificationsPage />}>
                <Route
                  path='product-classifications'
                  element={<ProductClassificationsPage />}
                ></Route>
                <Route path='products' element={<ProductsPage />}></Route>
              </Route>
            </Route>
            <Route path='planning'>
              <Route path='harvest' element={<HarvestPage />}></Route>
              <Route
                path='agronomic-plan'
                element={<AgronomicPlanPage />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
