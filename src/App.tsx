import React from 'react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { home, statsChart, calendar } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './global.scss';

/* Routes */
import ExerciseDetails from '@views/exercise-details';
import Exercises from '@views/exercises';
import History from '@views/history';
import Plans from '@views/plans';
import Settings from '@views/settings';
import Start from '@views/start';
import Statistics from '@views/statistics';
import CurrentSession from '@views/current-session';
import HistoryDetails from '@views/history-details';
import DayDetails from '@views/day-details';
import Workout from '@views/workout';
import Home from '@views/home';

/* Contexts */
import { WorkoutViewStateProvider } from '@context/WorkoutViewStateContext';
import { WorkoutViewActionProvider } from '@context/WorkoutViewActionContext';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path='/exercises-details'>
            <ExerciseDetails />
          </Route>
          <Route path='/exercises'>
            <Exercises />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/plans'>
            <Plans />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
          <Route path='/start'>
            <Start />
          </Route>
          <Route path='/statistics' component={Statistics} />

          <Route path='/workout/:workoutParam'>
            <WorkoutViewStateProvider>
              <WorkoutViewActionProvider>
                <Workout />
              </WorkoutViewActionProvider>
            </WorkoutViewStateProvider>
          </Route>
          <Route path='/day-details/:dayParam'>
            <WorkoutViewStateProvider>
              <WorkoutViewActionProvider>
                <DayDetails />
              </WorkoutViewActionProvider>
            </WorkoutViewStateProvider>
          </Route>
          <Route path='/history-details'>
            <HistoryDetails />
          </Route>
          <Route path='/current-session'>
            <CurrentSession />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='statistics' href='/statistics'>
            <IonIcon aria-hidden='true' icon={statsChart} />
            <IonLabel>Statistics</IonLabel>
          </IonTabButton>
          <IonTabButton tab='home' href='/home'>
            <IonIcon aria-hidden='true' icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab='history' href='/history'>
            <IonIcon aria-hidden='true' icon={calendar} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
