import { ConnectedRouter } from "connected-react-router";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import history from "../app/history";
import Home from "../views/home";
import Assessment from "../views/ assessment";
import AssessmentStart from "../views/assessmentStart";
import AssessmentProcess from "../views/assessmentProcess";
import AssessmentResume from "../views/assessmentResume";
import Evolution from "../views/evolution";
import NotFound from "../views/NotFound";

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/evolucao"} component={Evolution} />
        <Route path={"/avaliacao/inicio"} component={AssessmentStart} />
        <Route path={"/avaliacao/processo"} component={AssessmentProcess} />
        <Route path={"/avaliacao/resumo"} component={AssessmentResume} />
        <Route path={"/avaliacao"} component={Assessment} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
